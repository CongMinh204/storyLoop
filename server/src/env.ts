import { z } from "zod";

const schema = z.object({
  DATABASE_URL: z.string({ required_error: "thiếu biến này" }).min(1, "thiếu biến này"),
  PORT: z.coerce.number().int().positive().default(3000),
  CORS_ORIGIN: z.string().default("http://localhost:5173"),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
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
