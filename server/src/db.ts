import pg from "pg";
import { env } from "./env.js";

// Railway Postgres (kết nối ngoài) cần SSL; Postgres local trong Docker thì không.
const useSsl = env.NODE_ENV === "production" && !/localhost|127\.0\.0\.1/.test(env.DATABASE_URL);

export const pool = new pg.Pool({
  connectionString: env.DATABASE_URL,
  ssl: useSsl ? { rejectUnauthorized: false } : undefined,
  max: 10,
});

pool.on("error", err => console.error("Lỗi kết nối Postgres:", err));
