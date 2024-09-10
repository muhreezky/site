import { z } from 'zod';
import type { Actions } from './$types';
import { zfd } from 'zod-form-data';
import { fail } from '@sveltejs/kit';
import { db } from '$lib/server/db/drizzle';
import { messages } from '$lib/server/db/models';

const schema = zfd.formData({
	firstname: zfd.text(z.string().min(1, 'You have to fill your first name')),
	lastname: zfd.text(z.string().optional()),
	company: zfd.text(z.string().min(1, 'You have to fill company name')),
	phone: zfd.text(z.string().min(1, 'You have to fill your phone number')),
	email: zfd.text(z.string().min(1, 'You have to fill email').email('Invalid e-mail format')),
	message: zfd.text(z.string().min(1, 'You have to write your message'))
});

export const actions: Actions = {
	async default(event) {
		try {

			const { data, success, error } = schema.safeParse(await event.request.formData());
			if (!success) {
				console.log(error.message);
				return fail(400, {
					errors: error?.flatten()?.fieldErrors,
					message: error.message,
					status: 400
				});
			}
			const { firstname, lastname } = data;
			const fullname = `${firstname.trim()} ${lastname?.trim()}`.trim();
			await db.insert(messages).values({
				fullname, 
				company: data.company,
				email: data.email,
				phone: data.phone,
				text: data.message,
			});
			return {
				errors: [],
				message: 'Success',
				status: 201,
				data,
			};
		} catch (e: unknown) {
			console.log('Error Occured', e);
		}
	}
};
