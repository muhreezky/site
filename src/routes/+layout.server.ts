import type { LayoutServerLoadEvent } from "./$types";

export async function load(event: LayoutServerLoadEvent) {
  return {
    token: event.locals.token
  };
}