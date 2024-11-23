export interface TPagination<T = unknown> {
  data: T[];
  links: Links;
  meta: Meta;
}

interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  links: Link[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

interface Link {
  url: null | string;
  label: string;
  active: boolean;
}

interface Links {
  first: string;
  last: string;
  prev: null;
  next: null;
}

interface Datum {
  id: number;
  name: string;
  slug: string;
  thumbnail: string;
  description: string;
  app_url: string;
  repo_url: string;
  created_at: string;
  updated_at: string;
}