import { sql } from 'drizzle-orm';
import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const projects = sqliteTable('projects', {
	id: int('id').primaryKey(),
	title: text('title').notNull(),
	description: text('description').notNull(),
	status: text('status', { enum: ['WIP', 'Live', 'Discontinued'] })
		.default('Live')
		.notNull(),
	platform: text('platform', { enum: ['Desktop', 'Mobile', 'Website'] })
		.default('Website')
		.notNull(),
	createdAt: int('created_at').default(sql`(CURRENT_TIMESTAMP)`),
	updatedAt: int('updated_at')
		.default(sql`(CURRENT_TIMESTAMP)`)
		.$onUpdateFn(() => Date.now())
});
export type InsertProject = typeof projects.$inferInsert;