import { useSyncExternalStore } from "react";
import { api, ApiError, withLock } from "./api";
import { applyReport, mergeProgress, type ProgressDto, type Score } from "../../../server/src/progress/merge";

// Tiến độ học của từng truyện. Khoá = StoryEntry.id.
// - Khách: lưu trong localStorage của trình duyệt như trước.
// - Đã đăng nhập: giao diện đổi ngay từ bản trên máy, còn thay đổi được gửi lên server ở nền qua một hàng
//   đợi (mất mạng thì gửi lại sau), nên người chơi không phải chờ mạng sau mỗi lần chọn.
// Luật gộp tiến độ (pct chỉ tăng, hoàn thành thì giữ, gộp kết thúc, giữ điểm tốt nhất) dùng chung với server.
// Đọc/ghi localStorage đều bọc try/catch: bị chặn hoặc dữ liệu hỏng thì app vẫn chạy, chỉ là không lưu được.
export type StoryProgress = ProgressDto;
// Một lần người chơi chọn đáp án: key phân biệt các bước trong truyện, correct để server cộng XP
export type StepInfo = { key: string; correct: boolean };
type Store = Record<string, StoryProgress>;
export type ProgressStats = { xp: number; streak: number };

const GUEST_KEY = "storyloop.progress.v1";
const userKey = (uid: string) => `storyloop.progress.u.${uid}`;
const OUTBOX_KEY = "storyloop.outbox.v1";
const MAX_OUTBOX = 1000;
const RETRY_MIN = 5_000;
const RETRY_MAX = 120_000;
const STEP_KEY_RE = /^[A-Za-z0-9_.:#-]{1,64}$/; // giống server/src/progress/schemas.ts

function isValid(p: unknown): p is StoryProgress {
  const v = p as StoryProgress;
  return !!v && typeof v === "object" && (v.status === "started" || v.status === "completed")
    && typeof v.pct === "number" && typeof v.lastPlayed === "number";
}

function load(key: string): Store {
  try {
    const raw = localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : {};
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
    return Object.fromEntries(Object.entries(parsed).filter(([, p]) => isValid(p))) as Store;
  } catch {
    return {};
  }
}

function save(key: string, value: Store | null) {
  try {
    if (value) localStorage.setItem(key, JSON.stringify(value));
    else localStorage.removeItem(key);
  } catch { /* không lưu được thì thôi */ }
}

let account: string | null = null;  // id người dùng khi đã đăng nhập, null = khách
const storageKey = () => (account ? userKey(account) : GUEST_KEY);

let store: Store = load(GUEST_KEY);
const listeners = new Set<() => void>();
const notify = () => listeners.forEach(l => l());

function commit(next: Store) {
  store = next;
  save(storageKey(), next);
  notify();
}

function update(id: string, fn: (p: StoryProgress | undefined) => StoryProgress) {
  commit({ ...store, [id]: fn(store[id]) });
}

function mergeIn(server: Store) {
  const next = { ...store };
  for (const [id, p] of Object.entries(server)) if (isValid(p)) next[id] = mergeProgress(next[id], p);
  commit(next);
}

const clampPct = (n: number) => Math.max(0, Math.min(100, Math.round(n)));
const validScore = (s?: Score): s is Score =>
  !!s && Number.isInteger(s.right) && Number.isInteger(s.total) && s.total >= 1 && s.total <= 500 && s.right >= 0 && s.right <= s.total;
const stepPart = (step?: StepInfo) => (step && STEP_KEY_RE.test(step.key) ? { step } : {});

// Gọi mỗi khi người chơi tiến thêm một bước. Lần đầu gọi sẽ đánh dấu truyện là "đang học".
export function reportProgress(id: string, pct: number, step?: StepInfo) {
  update(id, p => applyReport(p, { pct }, Date.now()));
  enqueue(id, { pct: clampPct(pct), ...stepPart(step) });
}

// Gọi khi tới màn kết quả / kết thúc. Đã hoàn thành thì luôn giữ trạng thái hoàn thành.
export function markCompleted(id: string, info: { ending?: string; score?: Score; step?: StepInfo } = {}) {
  update(id, p => applyReport(p, { complete: { ending: info.ending, score: info.score } }, Date.now()));
  enqueue(id, {
    complete: { ...(info.ending ? { ending: info.ending } : {}), ...(validScore(info.score) ? { score: info.score } : {}) },
    ...stepPart(info.step),
  });
}

export function getProgress(id: string): StoryProgress | undefined {
  return store[id];
}

// ─── Hàng đợi gửi lên server (chỉ khi đã đăng nhập) ───
// Lưu trong localStorage để tải lại trang hay mất mạng cũng không mất. Server xử lý trùng an toàn
// (mỗi bước chỉ cộng XP một lần, tiến độ chỉ tăng), nên gửi lại một mục đã gửi rồi cũng không sao.

type ReportBody = { pct?: number; step?: StepInfo; complete?: { ending?: string; score?: Score } };
type Pending = { id: string; uid: string; storyId: string; body: ReportBody };
type PutResult = ProgressStats & { progress: StoryProgress; xpGained: number };

let memOutbox: Pending[] = [];

function readOutbox(): Pending[] {
  try {
    const v = JSON.parse(localStorage.getItem(OUTBOX_KEY) ?? "[]");
    return Array.isArray(v) ? v : [];
  } catch {
    return memOutbox;
  }
}

function writeOutbox(list: Pending[]) {
  memOutbox = list;
  try { localStorage.setItem(OUTBOX_KEY, JSON.stringify(list)); } catch { /* chỉ giữ trong bộ nhớ */ }
}

const newId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);

function enqueue(storyId: string, body: ReportBody) {
  if (!account) return;
  writeOutbox([...readOutbox(), { id: newId(), uid: account, storyId, body }].slice(-MAX_OUTBOX));
  void flush();
}

let statsListener: (s: ProgressStats) => void = () => {};
export function onProgressStats(fn: (s: ProgressStats) => void) {
  statsListener = fn;
}

let flushing = false;
let flushAgain = false; // có mục mới trong lúc đang gửi: gửi xong thì chạy thêm một vòng
let retryTimer: ReturnType<typeof setTimeout> | undefined;
let retryDelay = RETRY_MIN;

// Lỗi 4xx (trừ 401/408/429) nghĩa là server từ chối dữ liệu, gửi lại cũng vậy
const isPermanent = (e: unknown) =>
  e instanceof ApiError && e.status >= 400 && e.status < 500 && ![401, 408, 429].includes(e.status);

// Gửi lần lượt từng mục, đúng thứ tự. Khoá theo tên để hai tab không gửi cùng lúc.
async function flush(): Promise<void> {
  if (!account) return;
  if (flushing) { flushAgain = true; return; }
  flushing = true;
  flushAgain = false;
  let failed = false;
  const uid = account;
  try {
    await withLock("storyloop-outbox", async () => {
      for (;;) {
        const item = readOutbox().find(i => i.uid === uid);
        if (!item || account !== uid) return;
        try {
          const res = await api<PutResult>(`/api/progress/${encodeURIComponent(item.storyId)}`, { method: "PUT", body: item.body, auth: true });
          if (account === uid) {
            mergeIn({ [item.storyId]: res.progress });
            statsListener(res);
          }
        } catch (err) {
          if (!isPermanent(err)) throw err;
          console.warn("Bỏ một mục tiến độ bị server từ chối:", item, (err as Error).message);
        }
        writeOutbox(readOutbox().filter(i => i.id !== item.id));
      }
    });
    retryDelay = RETRY_MIN;
  } catch {
    // Mất mạng, server lỗi hoặc phiên hết hạn: để nguyên hàng đợi, thử lại sau
    failed = true;
    clearTimeout(retryTimer);
    retryTimer = setTimeout(() => void flush(), retryDelay);
    retryDelay = Math.min(retryDelay * 2, RETRY_MAX);
  } finally {
    flushing = false;
    if (flushAgain && !failed) void flush();
  }
}

// Gửi ngay những gì còn trong hàng đợi (vd. trước khi đăng xuất)
export function flushProgress() {
  return flush();
}

if (typeof window !== "undefined") window.addEventListener("online", () => void flush());

// ─── Chuyển giữa khách và tài khoản ───

// Gọi khi đăng nhập (id người dùng) hoặc đăng xuất (null).
// Đăng nhập: tiến độ lúc chơi khách hiện ngay trên tài khoản, rồi được đưa lên server (import), tiến độ
// trên server được tải về, và các mục còn trong hàng đợi được gửi nốt.
// Đăng xuất: xoá bản tiến độ của tài khoản trên máy (đã nằm trên server); khách bắt đầu lại từ trống.
export function setProgressAccount(uid: string | null) {
  if (uid === account) return;
  const prev = account;
  account = uid;
  if (uid) {
    store = load(userKey(uid));
    const guest = load(GUEST_KEY);
    for (const [id, p] of Object.entries(guest)) store[id] = mergeProgress(store[id], p);
    save(userKey(uid), store);
  } else {
    if (prev) save(userKey(prev), null);
    store = load(GUEST_KEY);
  }
  notify();
  if (uid) void syncAccount(uid);
}

async function syncAccount(uid: string) {
  try {
    const guest = load(GUEST_KEY);
    let server: Store;
    let stats: ProgressStats | undefined;
    if (Object.keys(guest).length) {
      const res = await api<ProgressStats & { progress: Store }>("/api/progress/import", { method: "POST", body: { progress: guest }, auth: true });
      save(GUEST_KEY, null); // đã nằm trên tài khoản
      server = res.progress;
      stats = res;
    } else {
      server = (await api<{ progress: Store }>("/api/progress", { auth: true })).progress;
    }
    if (account !== uid) return;
    mergeIn(server);
    if (stats) statsListener(stats);
  } catch {
    // Mất mạng: bản trên máy vẫn dùng được; lần mở app sau sẽ thử lại
  }
  void flush();
}

function subscribe(l: () => void) {
  listeners.add(l);
  // Đồng bộ khi một tab khác của cùng trình duyệt ghi tiến độ
  const onStorage = (e: StorageEvent) => {
    if (e.key === storageKey()) { store = load(storageKey()); l(); }
  };
  window.addEventListener("storage", onStorage);
  return () => { listeners.delete(l); window.removeEventListener("storage", onStorage); };
}

// Toàn bộ tiến độ; component tự vẽ lại khi tiến độ thay đổi
export function useStoryProgress(): Store {
  return useSyncExternalStore(subscribe, () => store, () => store);
}
