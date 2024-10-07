import { afterToday } from '$lib/date';
import { db } from '$lib/server/db/drizzle';
import { sessions } from '$lib/server/db/models';
import { redirect, type Handle } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

export const handle: Handle = async function ({ event, resolve }) {
	event.locals.token = event.cookies.get('sessionToken');
	if (event.locals.token && !event.locals.refreshed) {
		const query = await db.query.sessions.findFirst({
			where: eq(sessions.id, event.locals.token),
			with: { user: true }
		});
		const expired = new Date().getTime() > (query?.expiredAt?.getTime() || 0);
		event.locals.token = !expired && query ? query.id : undefined;
		event.locals.user =
			query && !expired ? { id: query.user.id, email: query.user.email } : undefined;
		await db.update(sessions).set({ expiredAt: afterToday(7) });
		event.locals.refreshed = !!event.locals.token;
	}
	if (!event.locals.user && event.locals.token) {
		event.cookies.delete('sessionToken', { path: '/' });
		await db.delete(sessions).where(eq(sessions.id, event.locals.token));
	}
	if (!event.locals.user && event.url.pathname.startsWith('/dashboard')) {
		return redirect(302, '/login');
	}
	if (event.locals.user && event.url.pathname.startsWith('/login')) {
		return redirect(302, '/dashboard');
	}
	const result = await resolve(event);
	return result;
};
