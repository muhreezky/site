import { relations, sql } from 'drizzle-orm';
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
	categoryId: int('category_id'),
	createdAt: int('created_at', { mode: 'timestamp' }).default(sql`(current_timestamp)`),
	updatedAt: int('updated_at', { mode: 'timestamp' })
		.$onUpdateFn(() => new Date())
		.default(sql`(current_timestamp)`)
});
export type InsertProject = typeof projects.$inferInsert;
export type Project = typeof projects.$inferSelect;

export const categories = sqliteTable('categories', {
	id: int('id').primaryKey(),
	name: text('name').notNull(),
	createdAt: int('created_at', { mode: 'timestamp' }).default(sql`(current_timestamp)`),
	updatedAt: int('updated_at', { mode: 'timestamp' })
		.$onUpdate(() => new Date())
		.default(sql`(current_timestamp)`)
});
export type InsertCategory = typeof categories.$inferInsert;
export type Category = typeof categories.$inferSelect;

export const projectRelations = relations(projects, ({one}) => ({
	category: one(categories, {
		fields: [projects.categoryId],
		references: [categories.id]
	})
}));
export const categoryRelations = relations(categories, ({ many }) => ({
	projects: many(projects)
}));