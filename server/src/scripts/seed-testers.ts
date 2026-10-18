// npm run seed:testers -- 20
// Tạo tài khoản dùng thử và ghi email, mật khẩu ra file CSV trong server/ (không commit file này).
import { writeFile } from "node:fs/promises";
import { createTesters, MAX_TESTERS } from "../auth/testers.js";
import { pool } from "../db.js";
import { migrate } from "../migrate.js";

const n = Number(process.argv[2] ?? 10);
if (!Number.isInteger(n) || n < 1 || n > MAX_TESTERS) {
  console.error(`Cách dùng: npm run seed:testers -- <số tài khoản, 1–${MAX_TESTERS}>`);
  process.exit(1);
}

try {
  await migrate();
  const testers = await createTesters(n);
  const csv = ["email,password", ...testers.map(t => `${t.email},${t.password}`)].join("\n") + "\n";
  const file = `testers-${new Date().toISOString().slice(0, 19).replace(/[T:]/g, "-")}.csv`;
  await writeFile(file, csv);
  console.log(csv);
  console.log(`Đã tạo ${testers.length} tài khoản, lưu ở server/${file}`);
} catch (err) {
  const e = err as Error & { code?: string };
  console.error(`Không tạo được tài khoản: ${e.message || e.code || e}`);
  process.exitCode = 1;
} finally {
  await pool.end();
}
