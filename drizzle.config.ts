import { defineConfig } from 'drizzle-kit';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  schema: './src/lib/server/db/models/index.ts',
  out: './src/drizzle/migrations',
  dialect: 'mysql',
  dbCredentials: {
    url: process.env.DB_URL!,
  }
});