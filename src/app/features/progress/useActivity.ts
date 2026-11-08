import { useEffect, useState } from "react";
import { api } from "../../lib/api";

// Hoạt động theo ngày của tài khoản (GET /api/me/activity, cùng dạng getActivity ở server/src/stats.ts).
// day theo giờ Việt Nam; correct = số câu chọn đúng lần đầu; completed = số truyện hoàn thành lần đầu.
export type ActivityDay = { day: string; xp: number; correct: number; completed: number };
export type Activity = { today: string; since: string; days: ActivityDay[] };

// Kết quả gần nhất của từng tài khoản, để mở lại màn Tiến trình là có biểu đồ ngay trong lúc tải bản mới
const cache = new Map<string, Activity>();

// uid = null khi là khách (không tải gì). Tải lại khi XP đổi, tức là sau mỗi lần gửi tiến độ lên server.
export function useActivity(uid: string | null, xp: number) {
  const [data, setData] = useState<Activity | null>(() => (uid ? cache.get(uid) ?? null : null));
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    setData(uid ? cache.get(uid) ?? null : null);
    setError(false);
    if (!uid) return;
    let alive = true;
    api<Activity>("/api/me/activity", { auth: true })
      .then(a => { cache.set(uid, a); if (alive) setData(a); })
      .catch(() => { if (alive) setError(true); });  // giữ bản cũ nếu có
    return () => { alive = false; };
  }, [uid, xp, attempt]);

  return { data, error: error && !data, retry: () => setAttempt(n => n + 1) };
}
