// Luật gộp tiến độ, bám theo src/app/lib/progress.ts của frontend. Hàm thuần, không đụng DB.

export type Score = { right: number; total: number };

// Cùng dạng với type StoryProgress ở frontend
export type ProgressDto = {
  status: "started" | "completed";
  pct: number;           // 0–100, phần xa nhất đã đi tới
  lastPlayed: number;    // ms epoch
  endings?: string[];
  bestScore?: Score;
};

export type Report = {
  pct?: number;
  complete?: { ending?: string; score?: Score };
};

const clampPct = (n: number) => Math.max(0, Math.min(100, Math.round(n)));
const ratio = (s?: Score) => (s && s.total > 0 ? s.right / s.total : -1);
const better = (a?: Score, b?: Score) => (ratio(a) > ratio(b) ? a : b);
const union = (a: string[] = [], b: string[] = []) => [...new Set([...a, ...b])];

function build(base: Pick<ProgressDto, "status" | "pct" | "lastPlayed">, endings: string[], bestScore?: Score): ProgressDto {
  return { ...base, ...(endings.length ? { endings } : {}), ...(bestScore ? { bestScore } : {}) };
}

// Báo tiến thêm một bước: pct chỉ tăng, đã hoàn thành thì giữ nguyên trạng thái hoàn thành
function started(prev: ProgressDto | undefined, pct: number, now: number): ProgressDto {
  if (!prev) return { status: "started", pct: clampPct(pct), lastPlayed: now };
  return {
    ...prev,
    pct: prev.status === "completed" ? 100 : Math.max(prev.pct, clampPct(pct)),
    lastPlayed: now,
  };
}

// Tới màn kết quả / kết thúc: gộp kết thúc đã mở, giữ điểm tốt nhất theo tỉ lệ đúng
function completed(prev: ProgressDto | undefined, info: NonNullable<Report["complete"]>, now: number): ProgressDto {
  const endings = union(prev?.endings, info.ending ? [info.ending] : []);
  return build({ status: "completed", pct: 100, lastPlayed: now }, endings, better(info.score, prev?.bestScore));
}

export function applyReport(prev: ProgressDto | undefined, r: Report, now: number): ProgressDto {
  return r.complete ? completed(prev, r.complete, now) : started(prev, r.pct ?? 0, now);
}

// Đưa tiến độ từ localStorage lên: lấy phần tốt nhất của hai bên
export function mergeProgress(a: ProgressDto | undefined, b: ProgressDto): ProgressDto {
  if (!a) return b;
  const done = a.status === "completed" || b.status === "completed";
  return build(
    {
      status: done ? "completed" : "started",
      pct: done ? 100 : Math.max(a.pct, b.pct),
      lastPlayed: Math.max(a.lastPlayed, b.lastPlayed),
    },
    union(a.endings, b.endings),
    better(a.bestScore, b.bestScore),
  );
}
