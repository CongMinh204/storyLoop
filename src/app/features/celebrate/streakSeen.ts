// Ngày (giờ Việt Nam) gần nhất đã hiện màn tăng chuỗi cho từng tài khoản trên máy này, để màn chỉ hiện ở bài
// hoàn thành đầu tiên trong ngày. localStorage bị chặn thì chỉ nhớ trong phiên.
const KEY = "storyloop.streakShown.v1";
let mem: Record<string, string> = {};

function read(): Record<string, string> {
  try {
    const v = JSON.parse(localStorage.getItem(KEY) ?? "{}");
    return v && typeof v === "object" && !Array.isArray(v) ? { ...v, ...mem } : mem;
  } catch {
    return mem;
  }
}

export function wasShown(uid: string, day: string) {
  return read()[uid] === day;
}

export function markShown(uid: string, day: string) {
  const next = { ...read(), [uid]: day };
  mem = { ...mem, [uid]: day };
  try { localStorage.setItem(KEY, JSON.stringify(next)); } catch { /* chỉ nhớ trong phiên */ }
}
