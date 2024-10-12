import { relations } from 'drizzle-orm';
import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
	id: int('id').notNull().primaryKey(),
	email: text('email').notNull().unique(),
	password: text('password').notNull(),
	createdAt: int('created_at', { mode: 'timestamp_ms' }).$default(() => new Date()),
	updatedAt: int('updated_at', { mode: 'timestamp_ms' })
		.$onUpdate(() => new Date())
});

export function generateSessionKey(): string {
  // Generate 32 random bytes (256 bits)
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array).map(byte => byte.toString(16).padStart(2, '0')).join('');
}

export const sessions = sqliteTable('sessions', {
	id: text('id').notNull().primaryKey().$defaultFn(() => generateSessionKey()),
	userId: int('user_id').notNull(),
	expiredAt: int('expired_at', { mode: 'timestamp_ms' })
		.$default(() => new Date())
		.notNull(),
	updatedAt: int('updated_at', { mode: 'timestamp_ms' })
		.$onUpdateFn(() => new Date())
});

export const usersRelations = relations(users, ({ many }) => ({
	sessions: many(sessions)
}));

export const sessionsRelations = relations(sessions, ({ one }) => ({
	user: one(users, { fields: [sessions.userId], references: [users.id] })
}));