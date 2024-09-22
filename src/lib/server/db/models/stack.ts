import { sql } from 'drizzle-orm';
import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const stacks = sqliteTable('stacks', {
	id: int('id').notNull().primaryKey(),
	name: text('name').notNull(),
	icon: text('icon').notNull(),
	createdAt: int('created_at', { mode: 'timestamp' }).default(sql`(current_timestamp)`),
	updatedAt: int('updated_at', { mode: 'timestamp' })
		.notNull()
		.$onUpdateFn(() => new Date())
		.default(sql`(current_timestamp)`)
});
export type InsertStack = typeof stacks.$inferInsert;