// import { sql } from 'drizzle-orm';
import { sqliteTable, int, text } from 'drizzle-orm/sqlite-core';

export const messages = sqliteTable('messages', {
	id: int('id').primaryKey(),
	fullname: text('fullname', { length: 100 }).notNull(),
	content: text('content').notNull(),
	company: text('company', { length: 100 }).notNull(),
	phone: text('phone', { length: 25 }).notNull(),
	email: text('email', { length: 120 }).notNull(),
	createdAt: int('created_at')
		.notNull()
		.$defaultFn(() => Date.now())
});

export type createMessages = typeof messages.$inferInsert;
