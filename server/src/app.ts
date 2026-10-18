import cors from "cors";
import express, { type ErrorRequestHandler } from "express";
import { adminRouter } from "./admin/routes.js";
import { authRouter } from "./auth/routes.js";
import { pool } from "./db.js";
import { env } from "./env.js";
import { HttpError } from "./http.js";
import { meRouter } from "./me/routes.js";
import { progressRouter } from "./progress/routes.js";

export const app = express();

app.disable("x-powered-by");
// Railway đặt server sau một proxy; cần để rate limit thấy IP thật của người dùng
app.set("trust proxy", 1);
app.use(cors({ origin: env.corsOrigins }));
app.use(express.json({ limit: "100kb" }));

// Railway dùng route này làm healthcheck
app.get("/api/health", async (_req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({ ok: true, db: true });
  } catch {
    res.status(503).json({ ok: false, db: false });
  }
});

app.use("/api/auth", authRouter);
app.use("/api/me", meRouter);
app.use("/api/progress", progressRouter);
app.use("/api/admin", adminRouter);

app.use((_req, res) => {
  res.status(404).json({ error: "Không tìm thấy" });
});

const onError: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err instanceof HttpError) {
    res.status(err.status).json({ error: err.message, ...(err.fields ? { fields: err.fields } : {}) });
    return;
  }
  // Lỗi 4xx của Express (vd. body không phải JSON) thì không lộ câu báo lỗi tiếng Anh
  const status = typeof err?.status === "number" && err.status >= 400 && err.status < 500 ? err.status : 500;
  if (status === 500) console.error(err);
  res.status(status).json({ error: status === 500 ? "Lỗi máy chủ" : "Yêu cầu không hợp lệ" });
};
app.use(onError);
