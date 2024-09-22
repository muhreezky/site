import { db } from '$lib/server/db/drizzle';

export async function load() {
	const data = await db.query.projects.findMany();
	return { data, status: 200, message: 'Projects Fetched', success: true };
}
