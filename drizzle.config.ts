import { defineConfig } from 'drizzle-kit';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  schema: './src/lib/server/db/models/index.ts',
  out: './src/drizzle/migrations',
  driver: 'turso',
  dbCredentials: {
    url: process.env.DB_URL!,
    authToken: process.env.DB_TOKEN!,
  },
  dialect: 'sqlite',
});