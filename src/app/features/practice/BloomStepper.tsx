import { C } from "../../lib/colors";
import { BLOOM_STAGES, BLOOM_ICONS } from "../../data/bloom";

// Thanh 4 cấp Bloom nằm ngang (Nhớ, Hiểu, Dùng, Viết) phía trên câu hỏi
export function BloomStepper({ stage, complete, compact = false }: { stage: number; complete: boolean; compact?: boolean }) {
  return (
    <ol aria-label="Cấp độ Bloom" style={{ display: "flex", gap: compact ? 6 : 10, margin: 0, padding: 0, listStyle: "none" }}>
      {BLOOM_STAGES.map((bs, i) => {
        const Icon = BLOOM_ICONS[i], isDone = complete || i < stage, isActive = !complete && i === stage;
        const col = isDone ? C.success : isActive ? C.primaryText : C.inkMuted;
        return (
          <li key={i} aria-current={isActive ? "step" : undefined}
            style={{ flex: 1, display: "flex", flexDirection: compact ? "column" : "row", alignItems: "center", justifyContent: compact ? "center" : "flex-start", gap: compact ? 3 : 10, padding: compact ? "8px 4px 7px" : "10px 14px", borderRadius: 12, background: isDone ? C.successBg : isActive ? C.primaryBg : C.bg, border: `${isActive ? 1 : 0.5}px solid ${isDone ? C.successBorder : isActive ? C.primary : C.border}` }}>
            <Icon size={compact ? 14 : 18} color={col} aria-hidden />
            <span style={{ display: "flex", flexDirection: "column", alignItems: compact ? "center" : "flex-start" }}>
              <span style={{ fontSize: compact ? 11 : 12, fontWeight: 700, color: col }}>{bs.label}</span>
              {!compact && <span style={{ fontSize: 10, color: isDone ? C.success : isActive ? C.primaryText : C.inkFaint }}>{isDone ? "Hoàn thành ✓" : isActive ? "Đang làm..." : "Chưa mở"}</span>}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
