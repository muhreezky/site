import { afterToday } from '$lib/date';
import { db } from '$lib/server/db/drizzle';
import { sessions } from '$lib/server/db/models';
import { redirect, type Handle } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

export const handle: Handle = async function ({ event, resolve }) {
	const cookie = event.cookies.get('sessionToken');
	console.log(cookie);
	if (cookie) {
		const query = await db.query.sessions.findFirst({
			where: eq(sessions.id, cookie),
			with: { user: true }
		});
    console.log('query',query)
		const expired = new Date().getDate() > (query?.expiredAt?.getDate() || 0);
		event.locals.session =
			!expired && query ? { token: query.id, expiredAt: query.expiredAt } : undefined;
		event.locals.user =
			!expired && query ? { id: query.user.id, email: query.user.email } : undefined;
		await db.update(sessions).set({ expiredAt: afterToday(7) });
	}
	if (!event.locals.user && cookie) {
		event.cookies.delete('sessionToken', { path: '/' });
		await db.delete(sessions).where(eq(sessions.id, cookie));
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
