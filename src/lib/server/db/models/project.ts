import { relations } from 'drizzle-orm';
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
	url: text('url'),
	thumbnail: text('thumbnail').notNull(),
	createdAt: int('created_at', { mode: 'timestamp_ms' }).$default(() => new Date()),
	updatedAt: int('updated_at', { mode: 'timestamp_ms' })
		.$onUpdateFn(() => new Date())
});
export type InsertProject = typeof projects.$inferInsert;
export type Project = typeof projects.$inferSelect;

export const categories = sqliteTable('categories', {
	id: int('id').primaryKey(),
	name: text('name').notNull(),
	createdAt: int('created_at', { mode: 'timestamp_ms' }).$default(() => new Date()),
	updatedAt: int('updated_at', { mode: 'timestamp_ms' })
		.$onUpdate(() => new Date())
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