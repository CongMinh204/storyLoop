import cors from "cors";
import express, { type ErrorRequestHandler } from "express";
import { pool } from "./db.js";
import { env } from "./env.js";

export const app = express();

app.disable("x-powered-by");
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

app.use((_req, res) => {
  res.status(404).json({ error: "Không tìm thấy" });
});

const onError: ErrorRequestHandler = (err, _req, res, _next) => {
  const status = typeof err?.status === "number" ? err.status : 500;
  if (status >= 500) console.error(err);
  res.status(status).json({ error: status >= 500 ? "Lỗi máy chủ" : err.message });
};
app.use(onError);
