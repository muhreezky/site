import { PUBLIC_BASE_API } from '$env/static/public';
import type { TPagination } from '@/types/pagination';
import type { PageServerLoadEvent } from './$types';
import type { DataItem } from './types';

export async function load(event: PageServerLoadEvent) {
  const url = new URL('/api/projects', PUBLIC_BASE_API);
  const res = await event.fetch(url);
  const data = await res.json();
  if (!res.ok) {
    return { status: res.status, message: res.statusText };
  }
  return data as TPagination<DataItem>;
}
