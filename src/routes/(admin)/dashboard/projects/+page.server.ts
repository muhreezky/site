import { zfd } from 'zod-form-data';
import type { Actions } from './$types';
import { z } from 'zod';
import { fail } from '@sveltejs/kit';
import { db } from '$lib/server/db/drizzle';
import { projects } from '$lib/server/db/models';
import { eq } from 'drizzle-orm';

const schema = zfd.formData({
	id: zfd.text(z.string().transform((n) => Number(n))).optional(),
	title: zfd.text(z.string().min(3).trim()),
	description: zfd.text(z.string().min(40).trim()),
	categoryId: zfd.text(z.string().transform(s => Number(s))).optional(),
	status: zfd.text(z.enum(['WIP', 'Live', 'Discontinued']).default('Discontinued')),
	platform: zfd.text(z.enum(['Desktop', 'Mobile', 'Website']).default('Website')),
	url: zfd.text(z.string().url('This should be a Website URL').optional()),
	thumbnail: zfd.text(z.string().url('This should be a URL to Image')),
});

export async function load() {
	const projects = await db.query.projects.findMany();
	return { projects };
}

export const actions: Actions = {
	async update(event) {
		const { success, data, error } = schema.safeParse(await event.request.formData());
		if (!success) {
			return fail(400, { message: error?.message, errors: error?.flatten()?.fieldErrors });
		}
		if (data.id) {
			const updated = await db.update(projects).set(data).where(eq(projects.id, data.id));
			return updated.rowsAffected
				? { message: 'Category Updated' }
				: fail(400, { message: 'Could not update category' });
		}
		const inserted = await db.insert(projects).values(data).returning();
		if (!inserted.length) {
			return fail(400, { message: 'Could not insert category' });
		}
		return { message: 'Category Inserted' };
	},
  async remove(event) {
    const form = await event.request.formData();
    const id = Number(form.get('id'));
    const deleted = await db.delete(projects).where(eq(projects.id, id));
    if (!deleted.rowsAffected) {
      return fail(400, { message: 'Could not delete category' });
    }
    return { message: 'Category Deleted' };
  }
};
