import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const stacksTable = sqliteTable('stacks', {
	id: int('id').notNull().primaryKey(),
	name: text('name').notNull(),
	icon: text('icon').notNull(),
	createdAt: int('created_at', { mode: 'timestamp' })
		.notNull().$default(() => new Date()),
	updatedAt: int('updated_at', { mode: 'timestamp' })
		.notNull()
		.$onUpdateFn(() => new Date())
});
export type InsertStack = typeof stacksTable.$inferInsert;