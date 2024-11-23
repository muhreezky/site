export interface DataItem {
  id: number;
  name: string;
  slug: string;
  thumbnail: string;
  description: string;
  app_url: string | null;
  repo_url: string | null;
  created_at: string;
  updated_at: string;
}