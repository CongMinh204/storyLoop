import { useSyncExternalStore } from "react";

// Tiến độ Phòng tập của từng bài. Khoá = Lesson.id (= StoryEntry.id, hoặc "hsk1").
// Lưu trong localStorage của trình duyệt (chưa đồng bộ lên server như tiến độ chơi truyện ở lib/progress.ts).
// Đọc/ghi đều bọc try/catch: bị chặn hoặc dữ liệu hỏng thì app vẫn chạy, chỉ là không lưu được.
export type PracticeEntry = {
  bloomStage: number;   // cấp Bloom đang làm dở (0-3); 0 = chưa bắt đầu hoặc vừa làm lại
  bloomDone: boolean;   // đã từng hoàn thành đủ 4 cấp
  known: number[];      // chỉ số các thẻ đã đánh dấu "thuộc" (theo vị trí trong Lesson.cards)
  lastPlayed: number;   // mốc thời gian lần luyện gần nhất (ms)
};
type Store = Record<string, PracticeEntry>;

const KEY = "storyloop.practice.v1";

function isValid(e: unknown): e is PracticeEntry {
  const v = e as PracticeEntry;
  return !!v && typeof v === "object" && Number.isInteger(v.bloomStage) && v.bloomStage >= 0 && v.bloomStage <= 3
    && typeof v.bloomDone === "boolean" && Array.isArray(v.known) && v.known.every(n => Number.isInteger(n) && n >= 0)
    && typeof v.lastPlayed === "number";
}

function load(): Store {
  try {
    const raw = localStorage.getItem(KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
    return Object.fromEntries(Object.entries(parsed).filter(([, e]) => isValid(e))) as Store;
  } catch {
    return {};
  }
}

let store: Store = load();
const listeners = new Set<() => void>();

function patch(id: string, fn: (e: PracticeEntry) => PracticeEntry) {
  const cur = store[id] ?? { bloomStage: 0, bloomDone: false, known: [], lastPlayed: 0 };
  store = { ...store, [id]: { ...fn(cur), lastPlayed: Date.now() } };
  try { localStorage.setItem(KEY, JSON.stringify(store)); } catch { /* không lưu được thì thôi */ }
  listeners.forEach(l => l());
}

// Đang làm dở cấp `stage` (0-3). Về 0 khi bấm "Luyện lại từ đầu"; cờ bloomDone vẫn giữ.
export function setBloomStage(id: string, stage: number) {
  patch(id, e => ({ ...e, bloomStage: Math.max(0, Math.min(3, stage)) }));
}

// Xong đủ 4 cấp: đánh dấu hoàn thành, lần sau vào lại bắt đầu từ cấp 1
export function setBloomDone(id: string) {
  patch(id, e => ({ ...e, bloomDone: true, bloomStage: 0 }));
}

export function setKnownCards(id: string, known: Iterable<number>) {
  patch(id, e => ({ ...e, known: [...known].sort((a, b) => a - b) }));
}

export function getPractice(id: string): PracticeEntry | undefined {
  return store[id];
}

function subscribe(l: () => void) {
  listeners.add(l);
  // Đồng bộ khi một tab khác của cùng trình duyệt ghi tiến độ
  const onStorage = (e: StorageEvent) => { if (e.key === KEY) { store = load(); l(); } };
  window.addEventListener("storage", onStorage);
  return () => { listeners.delete(l); window.removeEventListener("storage", onStorage); };
}

// Toàn bộ tiến độ Phòng tập; component tự vẽ lại khi có thay đổi
export function usePracticeProgress(): Store {
  return useSyncExternalStore(subscribe, () => store, () => store);
}
