import { sql } from "drizzle-orm";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const messages = sqliteTable('messages', {
  id: int('id').primaryKey(),
  fullname: text('fullname').notNull(),
  text: text('message').notNull(),
  company: text('company').notNull(),
  phone: text('phone').notNull(),
  email: text('email').notNull(),
  createdAt: int('created_at').notNull().default(sql`(CAST (unixepoch() as int))`)
});

export type createMessages = typeof messages.$inferInsert;