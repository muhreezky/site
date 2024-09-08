import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { TURSO_AUTH_TOKEN as authToken, TURSO_DATABASE_URL as url } from '$env/static/private';

export const turso = createClient({ url, authToken });

export const db = drizzle(turso);