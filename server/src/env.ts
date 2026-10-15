import { z } from "zod";

// Chạy local: đọc server/.env nếu có. Trên Railway biến môi trường được đặt sẵn, không có file này.
try { process.loadEnvFile(); } catch { /* không có .env thì thôi */ }

const required = { required_error: "thiếu biến này" };

const schema = z.object({
  DATABASE_URL: z.string(required).min(1, "thiếu biến này"),
  JWT_SECRET: z.string(required).min(32, "cần chuỗi ngẫu nhiên ít nhất 32 ký tự"),
  PORT: z.coerce.number().int().positive().default(3000),
  CORS_ORIGIN: z.string().default("http://localhost:5173"),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  // Chỉ "false" mới tắt đăng ký (cả tạo tài khoản mới qua Google)
  ALLOW_SIGNUP: z.string().optional().transform(v => v !== "false"),
  // Để trống thì tắt đăng nhập Google
  GOOGLE_CLIENT_ID: z.string().optional().transform(v => v || undefined),
});

const parsed = schema.safeParse(process.env);
if (!parsed.success) {
  const issues = parsed.error.issues.map(i => `  - ${i.path.join(".")}: ${i.message}`).join("\n");
  console.error(`Biến môi trường không hợp lệ:\n${issues}\nXem server/.env.example`);
  process.exit(1);
}

export const env = {
  ...parsed.data,
  corsOrigins: parsed.data.CORS_ORIGIN.split(",").map(s => s.trim()).filter(Boolean),
};
