import { app } from "./app.js";
import { pool } from "./db.js";
import { env } from "./env.js";
import { migrate } from "./migrate.js";

try {
  await migrate();
} catch (err) {
  const e = err as Error & { code?: string };
  console.error(`Không khởi động được: ${e.message || e.code || e}`);
  console.error("Kiểm tra DATABASE_URL và Postgres đã chạy chưa.");
  process.exit(1);
}

const server = app.listen(env.PORT, () => {
  console.log(`storyLoop server chạy ở cổng ${env.PORT}`);
});

function shutdown() {
  server.close(() => {
    pool.end().finally(() => process.exit(0));
  });
}
process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
