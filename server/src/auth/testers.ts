import { pool } from "../db.js";
import { hashPassword, randomPassword } from "./password.js";

export const MAX_TESTERS = 200;
const TESTER_EMAIL = "^tester(\\d+)@storyloop\\.test$";

// Tạo n tài khoản dùng thử tester01@storyloop.test…, số thứ tự nối tiếp các tester đã có.
// Cả loạt nằm trong một transaction: lỗi giữa chừng thì không tạo tài khoản nào (để không có
// tài khoản mà mật khẩu bị mất). Dùng cho script seed:testers và API admin ở PR 3.
export async function createTesters(n: number) {
  if (!Number.isInteger(n) || n < 1 || n > MAX_TESTERS) {
    throw new Error(`Số tài khoản phải từ 1 đến ${MAX_TESTERS}`);
  }

  // Hash trước, ngoài transaction, vì bcrypt chậm
  const accounts: { password: string; hash: string }[] = [];
  for (let i = 0; i < n; i++) {
    const password = randomPassword();
    accounts.push({ password, hash: await hashPassword(password) });
  }

  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    // Hai lần tạo cùng lúc phải chờ nhau, để không lấy trùng số thứ tự
    await client.query("SELECT pg_advisory_xact_lock(hashtext('storyloop.create-testers'))");
    const { rows } = await client.query<{ max: number | null }>(
      "SELECT max(substring(email from $1)::int) AS max FROM users WHERE email ~ $1",
      [TESTER_EMAIL],
    );
    let num = rows[0].max ?? 0;
    const created: { email: string; password: string }[] = [];
    for (const a of accounts) {
      const label = String(++num).padStart(2, "0");
      const email = `tester${label}@storyloop.test`;
      await client.query(
        "INSERT INTO users (email, full_name, password_hash) VALUES ($1, $2, $3)",
        [email, `Tester ${label}`, a.hash],
      );
      created.push({ email, password: a.password });
    }
    await client.query("COMMIT");
    return created;
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
  }
}
