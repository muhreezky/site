import { PUBLIC_BASE_API } from "$env/static/public";

export function getFileUrl(file: string | undefined = '') {
  if (!file) return '';
  try {
    const url = new URL(file);
    return url.href;
  } catch(e) {
    return `${PUBLIC_BASE_API}/storage/${file}`;
  }
}