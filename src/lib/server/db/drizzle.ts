import { drizzle } from 'drizzle-orm/tidb-serverless';
import { DATABASE_URL as url } from '$env/static/private';
import { connect } from '@tidbcloud/serverless';

export const client = connect({ url })

export const db = drizzle(client);