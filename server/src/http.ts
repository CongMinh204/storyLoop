import type { NextFunction, Request, RequestHandler, Response } from "express";
import type { z } from "zod";

// Lỗi trả thẳng cho client: status, câu báo lỗi và (nếu có) lỗi của từng ô trong form
export class HttpError extends Error {
  constructor(public status: number, message: string, public fields?: Record<string, string>) {
    super(message);
  }
}

// Express 4 không tự bắt lỗi của hàm async
export const h = (fn: (req: Request, res: Response, next: NextFunction) => Promise<unknown>): RequestHandler =>
  (req, res, next) => { fn(req, res, next).catch(next); };

// Kiểm tra body bằng zod; sai thì trả 400 kèm lỗi đầu tiên của từng ô
export function parse<T extends z.ZodTypeAny>(schema: T, data: unknown): z.output<T> {
  const r = schema.safeParse(data ?? {});
  if (r.success) return r.data;
  const fields: Record<string, string> = {};
  for (const issue of r.error.issues) {
    const key = issue.path.join(".") || "_";
    fields[key] ??= issue.message;
  }
  throw new HttpError(400, "Dữ liệu chưa hợp lệ", fields);
}

// Postgres báo trùng giá trị unique (vd. email đã có)
export const isUniqueViolation = (err: unknown) => (err as { code?: string })?.code === "23505";
