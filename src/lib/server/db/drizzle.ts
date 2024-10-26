import { drizzle } from 'drizzle-orm/libsql';
import 'dotenv/config';
import { createClient } from '@libsql/client';
import * as schema from './models/index';
import { DB_TOKEN, DB_URL } from '$env/static/private';

export const client = createClient({ url: DB_URL, authToken: DB_TOKEN });
export const db = drizzle(client, { schema });
