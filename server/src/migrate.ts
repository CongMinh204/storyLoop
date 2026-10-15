import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { pool } from "./db.js";

// src/ và dist/ cùng nằm cạnh migrations/
const DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../migrations");

// Chạy các file *.sql theo thứ tự tên; file nào chạy rồi thì bỏ qua. Mỗi file nằm trong một transaction.
export async function migrate() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS schema_migrations (
      name        text PRIMARY KEY,
      applied_at  timestamptz NOT NULL DEFAULT now()
    )`);

  const done = new Set(
    (await pool.query<{ name: string }>("SELECT name FROM schema_migrations")).rows.map(r => r.name),
  );
  const files = (await readdir(DIR)).filter(f => f.endsWith(".sql")).sort();

  for (const file of files) {
    if (done.has(file)) continue;
    const sql = await readFile(path.join(DIR, file), "utf8");
    const client = await pool.connect();
    try {
      await client.query("BEGIN");
      await client.query(sql);
      await client.query("INSERT INTO schema_migrations (name) VALUES ($1)", [file]);
      await client.query("COMMIT");
      console.log(`Đã chạy migration ${file}`);
    } catch (err) {
      await client.query("ROLLBACK");
      throw new Error(`Migration ${file} lỗi: ${(err as Error).message}`);
    } finally {
      client.release();
    }
  }
}
