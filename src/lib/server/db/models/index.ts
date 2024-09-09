import { sql } from "drizzle-orm";
import { int, mysqlTable, varchar, text, datetime } from "drizzle-orm/mysql-core";

export const messages = mysqlTable('messages', {
  id: int('id').primaryKey(),
  fullname: varchar('fullname', { length: 100 }).notNull(),
  text: text('message').notNull(),
  company: varchar('company', {length: 100}).notNull(),
  phone: varchar('phone', { length: 25 }).notNull(),
  email: varchar('email', { length: 120 }).notNull(),
  createdAt: datetime('created_at').notNull().default(sql`current_timestamp`)
});

export type createMessages = typeof messages.$inferInsert;