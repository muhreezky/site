import { drizzle } from 'drizzle-orm/libsql';
import {
	DB_URL as url,
	DB_TOKEN,
} from '$env/static/private';
import 'dotenv/config';
import { createClient } from '@libsql/client';
import { dev } from '$app/environment';

export const client = createClient({ url, authToken: dev ? undefined : DB_TOKEN });
export const db = drizzle(client);
