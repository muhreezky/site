import { sql } from 'drizzle-orm';
import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const usersTable = sqliteTable('users', {
	id: int('id').notNull().primaryKey(),
	email: text('email').notNull().unique(),
	password: text('password').notNull(),
	createdAt: int('created_at', { mode: 'timestamp' })
		.default(sql`(current_timestamp)`),
	updatedAt: int('updated_at', { mode: 'timestamp' })
    .default(sql`(current_timestamp)`)
		.$onUpdate(() => new Date())
});
