import { PUBLIC_BASE_API } from '$env/static/public';
import { error } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';

export async function load(event: PageServerLoadEvent) {
  const url = new URL('/api/projects', PUBLIC_BASE_API);
  const res = await event.fetch(url);
  const data = await res.json();
  if (!res.ok) {
    return error(res.status, data);
  }
  return data;
}
