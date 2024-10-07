import { zfd } from 'zod-form-data';
import type { Actions, PageServerLoadEvent } from './$types';
import { z } from 'zod';
import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db/drizzle';
import { sessions, users } from '$lib/server/db/models';
import { eq } from 'drizzle-orm';
import * as bcrypt from 'bcrypt-ts';

const schema = zfd.formData({
	email: zfd.text(z.string().email()),
	password: zfd.text(z.string().min(8, 'The password is too short, minimal 8 characters'))
});

export const actions: Actions = {
	async default(event) {
		const form = await event.request.formData();
		const { data, error, success } = schema.safeParse(form);
		if (!success) {
			return fail(400, {
				data: { errors: error.flatten().fieldErrors },
				status: 400,
				message: error.message
			});
		}
		const wrongResponse = {
			data: null,
			status: 400,
			message: 'Invalid e-mail and password combination'
		};

		const result = await db.query.users.findFirst({
			where: eq(users.email, data.email)
		});
		if (!result?.id) {
			return fail(400, wrongResponse);
		}
		const equals = await bcrypt.compare(data.password, result.password);
		if (!equals) {
			return fail(400, wrongResponse);
		}
		const [session] = await db
			.insert(sessions)
			.values({
				userId: result.id,
				expiredAt: new Date(Date.now() + 7 * 24 * 3600 * 1000)
			})
			.returning();
		event.cookies.set('sessionToken', session.id, {
			path: '/',
			maxAge: 3600 * 24 * 7,
			httpOnly: true,
			secure: import.meta.env.PROD
		});
		event.locals.token = session.id;
		event.locals.user = { id: result.id, email: result.email };
		return redirect(302, '/dashboard');
	}
};

export async function load(event: PageServerLoadEvent) {
	if (event.locals.user || event.locals.token) {
		return redirect(302, '/dashboard');
	}
}
