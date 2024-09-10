import { drizzle as tidb } from 'drizzle-orm/tidb-serverless';
import { drizzle as mysql } from 'drizzle-orm/mysql2';
import { connect } from '@tidbcloud/serverless';
import {
	DB_URL as url
} from '$env/static/private';
import { createConnection } from 'mysql2';
import 'dotenv/config';

const dev = process.env.NODE_ENV === 'development';
export const client = dev ? createConnection(url) : connect({ url });
const localClient = createConnection(url);
const tidbClient = connect({ url });
export const db = dev ? mysql(localClient) : tidb(tidbClient);
