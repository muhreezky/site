import { drizzle } from 'drizzle-orm/libsql';
import 'dotenv/config';
import { createClient } from '@libsql/client';
import * as schema from './models/index';

export const client = createClient({ url: process.env.DB_URL!, authToken: process.env.DB_TOKEN! });
export const db = drizzle(client, { schema });
