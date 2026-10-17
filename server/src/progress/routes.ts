import { Router } from "express";
import { z } from "zod";
import { progressLimiter } from "../auth/limits.js";
import { requireAuth } from "../auth/middleware.js";
import { h, parse } from "../http.js";
import { getStats } from "../stats.js";
import { cleanImported, reportSchema, storyIdSchema } from "./schemas.js";
import { importProgress, listProgress, reportProgress } from "./service.js";

export const progressRouter = Router();
progressRouter.use(requireAuth, progressLimiter);

// Toàn bộ tiến độ, cùng dạng với localStorage ở frontend: { "<storyId>": StoryProgress }
progressRouter.get("/", h(async (req, res) => {
  res.json({ progress: await listProgress(req.auth!.sub) });
}));

// Gộp tiến độ từ localStorage lên tài khoản (gọi một lần sau khi đăng nhập)
progressRouter.post("/import", h(async (req, res) => {
  const { progress } = parse(z.object({ progress: z.unknown() }), req.body);
  const result = await importProgress(req.auth!.sub, cleanImported(progress, Date.now()));
  res.json({ ...result, ...(await getStats(req.auth!.sub)) });
}));

// Báo tiến độ / hoàn thành một truyện, cộng XP
progressRouter.put("/:storyId", h(async (req, res) => {
  const storyId = parse(storyIdSchema, req.params.storyId);
  const body = parse(reportSchema, req.body);
  const result = await reportProgress(req.auth!.sub, storyId, body);
  res.json({ ...result, ...(await getStats(req.auth!.sub)) });
}));
