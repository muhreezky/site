import { db } from "$lib/server/db/drizzle";
import { sessions } from "$lib/server/db/models";
import { eq } from "drizzle-orm";
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