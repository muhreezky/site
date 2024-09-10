import { db } from '$lib/server/db/drizzle';
import 'dotenv/config';
import { migrate as tidbMigrate } from 'drizzle-orm/tidb-serverless/migrator';
import { migrate as mysqlMigrate } from 'drizzle-orm/mysql2/migrator';
import { dev } from '$app/environment';
import type { TiDBServerlessDatabase } from 'drizzle-orm/tidb-serverless';
import type { MySql2Database } from 'drizzle-orm/mysql2';
const config = { migrationsFolder: './src/drizzle/migrations' };
async function main() {
	try {
		await (dev
			? mysqlMigrate(db as MySql2Database<Record<string, never>>, config)
			: tidbMigrate(db as TiDBServerlessDatabase<Record<string, never>>, config));
		console.log('Tables migrated!');
		process.exit(0);
	} catch (error) {
		console.error('Error performing migration: ', error);
		process.exit(1);
	}
}

main();
