import { db } from "$lib/server/db/drizzle";
import { categories, messages, projects, sessions, stacks } from "$lib/server/db/models";
import { count, eq } from "drizzle-orm";
import type { Actions } from "./$types";
import { redirect } from "@sveltejs/kit";

export const actions: Actions = {
  async logout(event) {
    const cookie = event.cookies.get('sessionToken');
    if (!cookie) return redirect(302, '/');
    await db.delete(sessions).where(eq(sessions.id, cookie!));
    event.cookies.delete('sessionToken', { path: '/' });
    return redirect(302, '/');
  }
}

export async function load() {
  const [
    [{ count: projCount }],
    [{ count: msgCount }],
    [{ count: stacksCount }],
    [{ count: categoryCount }],
  ] = await Promise.all([
    db.select({ count: count() }).from(projects),
    db.select({ count: count() }).from(messages),
    db.select({ count: count() }).from(stacks),
    db.select({ count: count() }).from(categories),
  ]);

  return {
    counts: {
      projects: projCount,
      messages: msgCount,
      stacks: stacksCount,
      categories: categoryCount,
    }
  }
}