import { useSyncExternalStore } from "react";

// Tiến độ học của từng truyện, lưu trong localStorage của trình duyệt (app chưa có backend).
// Khoá = StoryEntry.id. Đọc/ghi đều bọc try/catch: localStorage bị chặn hoặc dữ liệu hỏng
// thì app vẫn chạy, chỉ là không lưu được.
export type StoryProgress = {
  status: "started" | "completed";
  pct: number;                                  // 0–100, phần xa nhất đã đi tới
  lastPlayed: number;                           // Date.now() lần chơi gần nhất
  endings?: string[];                           // truyện rẽ nhánh: id các kết thúc đã mở
  bestScore?: { right: number; total: number }; // điểm tốt nhất khi hoàn thành
};
type Store = Record<string, StoryProgress>;

const KEY = "storyloop.progress.v1";

function isValid(p: unknown): p is StoryProgress {
  const v = p as StoryProgress;
  return !!v && typeof v === "object" && (v.status === "started" || v.status === "completed")
    && typeof v.pct === "number" && typeof v.lastPlayed === "number";
}

function load(): Store {
  try {
    const raw = localStorage.getItem(KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
    return Object.fromEntries(Object.entries(parsed).filter(([, p]) => isValid(p))) as Store;
  } catch {
    return {};
  }
}

let store: Store = load();
const listeners = new Set<() => void>();

function commit(next: Store) {
  store = next;
  try { localStorage.setItem(KEY, JSON.stringify(next)); } catch { /* không lưu được thì thôi */ }
  listeners.forEach(l => l());
}

function update(id: string, fn: (p: StoryProgress | undefined) => StoryProgress) {
  commit({ ...store, [id]: fn(store[id]) });
}

const clampPct = (n: number) => Math.max(0, Math.min(100, Math.round(n)));

// Gọi mỗi khi người chơi tiến thêm một bước. Lần đầu gọi sẽ đánh dấu truyện là "đang học".
export function reportProgress(id: string, pct: number) {
  update(id, p => {
    const now = Date.now();
    if (!p) return { status: "started", pct: clampPct(pct), lastPlayed: now };
    return { ...p, pct: p.status === "completed" ? 100 : Math.max(p.pct, clampPct(pct)), lastPlayed: now };
  });
}

// Gọi khi tới màn kết quả / kết thúc. Đã hoàn thành thì luôn giữ trạng thái hoàn thành.
export function markCompleted(id: string, info: { ending?: string; score?: { right: number; total: number } } = {}) {
  update(id, p => {
    const endings = [...new Set([...(p?.endings ?? []), ...(info.ending ? [info.ending] : [])])];
    const ratio = (s?: { right: number; total: number }) => (s && s.total > 0 ? s.right / s.total : -1);
    const bestScore = ratio(info.score) > ratio(p?.bestScore) ? info.score : p?.bestScore;
    return {
      status: "completed", pct: 100, lastPlayed: Date.now(),
      ...(endings.length ? { endings } : {}),
      ...(bestScore ? { bestScore } : {}),
    };
  });
}

export function getProgress(id: string): StoryProgress | undefined {
  return store[id];
}

function subscribe(l: () => void) {
  listeners.add(l);
  // Đồng bộ khi một tab khác của cùng trình duyệt ghi tiến độ
  const onStorage = (e: StorageEvent) => { if (e.key === KEY) { store = load(); l(); } };
  window.addEventListener("storage", onStorage);
  return () => { listeners.delete(l); window.removeEventListener("storage", onStorage); };
}

// Toàn bộ tiến độ; component tự vẽ lại khi tiến độ thay đổi
export function useStoryProgress(): Store {
  return useSyncExternalStore(subscribe, () => store, () => store);
}
