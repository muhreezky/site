import { API_TOKEN } from '$env/static/private';
import { type Handle, type HandleFetch } from '@sveltejs/kit';

export const handleFetch: HandleFetch = async ({ fetch, request, event }) => {
  request.headers.set('Accept', 'application/json');
  request.headers.set('Authorization', `Bearer ${API_TOKEN}`);
  return fetch(request, { credentials: 'include' });
};