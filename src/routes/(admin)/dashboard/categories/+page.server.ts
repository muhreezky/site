import { zfd } from 'zod-form-data';
import type { Actions } from './$types';
import { z } from 'zod';
import { fail } from '@sveltejs/kit';
import { db } from '$lib/server/db/drizzle';
import { categories } from '$lib/server/db/models';
import { eq } from 'drizzle-orm';

const schema = zfd.formData({
	name: zfd.text(z.string().min(3).trim()),
	id: zfd.text(z.string().transform((n) => Number(n))).optional()
});

export async function load() {
	const categories = await db.query.categories.findMany();
	return { categories };
}

export const actions: Actions = {
	async update(event) {
		// const formData = await event.request.formData();
		const { success, data, error } = schema.safeParse(await event.request.formData());
		console.log('Data', data, success, error);
		if (!success) {
			return fail(400, { message: error?.message, errors: error?.flatten()?.fieldErrors });
		}
		if (data.id) {
			const updated = await db.update(categories).set(data).where(eq(categories.id, data.id));
			return updated.rowsAffected
				? { message: 'Category Updated' }
				: fail(409, { message: 'Could not update category' });
		}
		const inserted = await db.insert(categories).values(data).returning();
		if (!inserted.length) {
			return fail(409, { message: 'Could not insert category' });
		}
		return { message: 'Category Inserted' };
	}
};
