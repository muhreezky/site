import { drizzle } from 'drizzle-orm/libsql';
// import {
// 	DB_URL as url,
// 	DB_TOKEN as authToken,
// } from '$env/static/private';
import 'dotenv/config';
import { createClient } from '@libsql/client';

export const client = createClient({ url: process.env.DB_URL!, authToken: process.env.DB_TOKEN! });
export const db = drizzle(client);
