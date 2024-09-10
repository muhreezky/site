import { db } from "$lib/server/db/drizzle";
import { migrate } from "drizzle-orm/libsql/migrator";

async function main() {
  try {
    await migrate(db, {
      migrationsFolder: './drizzle/migrations'
    });
    console.log('Tables migrated!');
    process.exit(0);
  } catch (error) {
    console.error('Error performing migration: ', error);
    process.exit(1);
  }
}

main();