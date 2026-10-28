import { useMemo, useState, type ReactNode } from "react";
import { ChevronRight, Search, X } from "lucide-react";
import { C } from "../../lib/colors";
import type { Lesson } from "../../types";
import { usePracticeProgress } from "./practiceProgress";
import { CHIP_STYLE, metaLine, summarize } from "./lessonStatus";

// Danh sách chọn bài của Phòng tập: tìm kiếm, lọc nhanh, nhóm theo HSK. Dùng ở cột trái (desktop),
// trang danh sách và bảng "Đổi truyện" (mobile). Chỉ nhận các bài đã có kịch bản (xem data/lessons.ts).
type Filter = "all" | "learning" | "review" | `hsk-${number}`;

const plain = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").toLowerCase();
const VOCAB_GROUP = "Bộ từ vựng";

export function StoryPicker({ lessons, selectedId, onSelect, touch = false, aboveList }: {
  lessons: Lesson[]; selectedId?: string; onSelect: (id: string) => void;
  touch?: boolean;            // true: ô bấm ≥44px (mobile)
  aboveList?: ReactNode;      // vd. thẻ "Đang học dở" ở trang danh sách mobile
}) {
  const progress = usePracticeProgress();
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  const hskLevels = useMemo(() => [...new Set(lessons.filter(l => l.chapters).map(l => l.hsk))].sort((a, b) => a - b), [lessons]);
  const chips: { key: Filter; label: string }[] = [
    { key: "all", label: "Tất cả" }, { key: "learning", label: "Đang học" }, { key: "review", label: "Cần ôn" },
    ...hskLevels.map(n => ({ key: `hsk-${n}` as Filter, label: `HSK ${n}` })),
  ];

  const shown = useMemo(() => {
    const needle = plain(q.trim());
    return lessons.filter(l => {
      if (needle && !plain(`${l.title} ${l.chip}`).includes(needle)) return false;
      if (filter === "all") return true;
      if (filter === "learning" || filter === "review") return summarize(l, progress[l.id]).kind === filter;
      return !!l.chapters && `hsk-${l.hsk}` === filter;
    });
  }, [lessons, q, filter, progress]);

  const groups = useMemo(() => {
    const map = new Map<string, Lesson[]>();
    for (const l of shown) {
      const g = l.chapters ? `HSK ${l.hsk}` : VOCAB_GROUP;
      map.set(g, [...(map.get(g) ?? []), l]);
    }
    return [...map.entries()].sort(([a], [b]) => (a === VOCAB_GROUP ? 1 : b === VOCAB_GROUP ? -1 : a.localeCompare(b)));
  }, [shown]);

  const chipH = touch ? 44 : 32;
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: 0, flex: 1 }}>
      <div style={{ padding: touch ? "0 16px" : "14px 16px 0", flexShrink: 0 }}>
        <div style={{ position: "relative" }}>
          <Search size={16} color={C.inkFaint} aria-hidden style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
          <input type="search" value={q} onChange={e => setQ(e.target.value)} placeholder="Tìm truyện" aria-label="Tìm truyện"
            style={{ boxSizing: "border-box", width: "100%", height: touch ? 44 : 40, borderRadius: 14, border: `1px solid ${C.primaryBorder}`, background: C.primaryBg, padding: "0 14px 0 40px", fontSize: touch ? 15 : 13, color: C.ink, outline: "none", fontFamily: "inherit" }} />
        </div>
        <div role="group" aria-label="Lọc truyện" style={touch ? { display: "flex", gap: 6, overflowX: "auto", scrollbarWidth: "none" as const, margin: "2px -16px 0", padding: "0 16px" } : { display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
          {chips.map(c => {
            const on = filter === c.key;
            return (
              <button key={c.key} type="button" aria-pressed={on} onClick={() => setFilter(c.key)}
                style={{ flexShrink: 0, height: chipH, ...(touch ? { padding: "5px 0", border: 0, background: "none" } : {}), cursor: "pointer", fontFamily: "inherit" }}>
                <span style={{ display: "flex", alignItems: "center", height: touch ? 34 : chipH, padding: "0 13px", borderRadius: 9999, fontSize: touch ? 13 : 12, fontWeight: 600, background: on ? C.primaryDeep : C.bg, color: on ? C.onFill : C.inkMuted, border: `0.5px solid ${on ? C.primaryDeep : C.border}` }}>{c.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "4px 16px 16px" }}>
        {!q && filter === "all" && aboveList}
        {groups.map(([title, items]) => (
          <section key={title} aria-label={title}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, padding: "14px 4px 6px" }}>
              <h2 style={{ margin: 0, fontSize: 12, fontWeight: 800, letterSpacing: ".04em", color: C.ink }}>{title}</h2>
              <span style={{ fontSize: 11, color: C.inkMuted }}>{items.length} {title === VOCAB_GROUP ? "bộ" : "truyện"}</span>
            </div>
            {items.map(l => {
              const s = summarize(l, progress[l.id]);
              const on = l.id === selectedId, st = CHIP_STYLE[s.kind];
              return (
                <button key={l.id} type="button" onClick={() => onSelect(l.id)} aria-current={on ? "true" : undefined}
                  style={{ display: "flex", alignItems: "center", gap: 12, width: "100%", boxSizing: "border-box", minHeight: touch ? 68 : 60, padding: "8px 12px", marginBottom: 6, borderRadius: 16, textAlign: "left", cursor: "pointer", fontFamily: "inherit", color: C.ink, background: on ? C.primaryBg : C.surface, border: on ? `1px solid ${C.primary}` : `0.5px solid ${C.border}` }}>
                  <span aria-hidden style={{ flex: "0 0 44px", height: 44, borderRadius: 14, background: C.bgSunken, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{l.emoji}</span>
                  <span style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 2 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.3 }}>{l.title}</span>
                    <span style={{ fontSize: 12, fontWeight: 400, color: C.inkMuted }}>{metaLine(l)}{!l.bloom ? " · chỉ Flashcard" : ""}</span>
                  </span>
                  {s.chip && <span style={{ flexShrink: 0, fontSize: 11, fontWeight: 700, padding: "3px 9px", borderRadius: 9999, background: st.bg, color: st.fg, border: `1px solid ${st.bd}` }}>{s.chip}</span>}
                  {touch && <ChevronRight size={18} color={C.inkFaint} aria-hidden style={{ flexShrink: 0 }} />}
                </button>
              );
            })}
          </section>
        ))}
        {groups.length === 0 && (
          <div role="status" style={{ textAlign: "center", padding: "40px 12px", color: C.inkMuted, fontSize: 13 }}>
            <p style={{ margin: "0 0 12px" }}>Không có truyện nào khớp.</p>
            <button type="button" onClick={() => { setQ(""); setFilter("all"); }} style={{ display: "inline-flex", alignItems: "center", gap: 6, minHeight: 44, padding: "0 16px", borderRadius: 9999, border: `1px solid ${C.primary}`, background: "transparent", color: C.primaryText, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}><X size={14} /> Xoá bộ lọc</button>
          </div>
        )}
      </div>
    </div>
  );
}
