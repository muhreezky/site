import { defineConfig } from 'drizzle-kit';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

export default defineConfig({
  schema: './src/lib/server/db/models/index.ts',
  out: './drizzle/migrations',
  dialect: 'sqlite',
  driver: 'turso',
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  },
});