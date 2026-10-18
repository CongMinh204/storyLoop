import type { RequestHandler } from "express";
import { HttpError } from "../http.js";
import { verifyAccess, type AccessPayload } from "./tokens.js";

declare global {
  namespace Express {
    interface Request {
      auth?: AccessPayload; // có sau requireAuth
    }
  }
}

// Cần header Authorization: Bearer <access token>
export const requireAuth: RequestHandler = (req, _res, next) => {
  const m = /^Bearer (.+)$/.exec(req.headers.authorization ?? "");
  const auth = m ? verifyAccess(m[1]) : null;
  if (!auth) return next(new HttpError(401, "Bạn cần đăng nhập"));
  req.auth = auth;
  next();
};

// Dùng sau requireAuth
export const requireAdmin: RequestHandler = (req, _res, next) => {
  if (req.auth?.role !== "admin") return next(new HttpError(403, "Chỉ quản trị viên được dùng chức năng này"));
  next();
};
