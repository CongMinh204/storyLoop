import { useState } from "react";
import { ChevronDown, Library } from "lucide-react";
import { C } from "../../lib/colors";
import { STORY_LIBRARY } from "../../data/library";
import type { StoryEntry } from "../../types";
import { useStoryProgress, type StoryProgress } from "../../lib/progress";
import { getStoryScript } from "../../data/stories";

type ProgressMap = Record<string, StoryProgress>;

// Nhớ mục HSK đang mở và thẻ lọc trong phiên làm việc, để vào một truyện rồi bấm "Quay lại" thì Thư viện
// còn nguyên như lúc rời đi (mở lại trang thì quay về mặc định: mọi cấp HSK đều đóng).
const memory: { open: Set<number>; tag: string | null } = { open: new Set(), tag: null };

export function LibStoryTag({ label }: { label: string }) {
  return (
    <span style={{ background: C.primaryBg, border: `0.5px solid ${C.primaryBorder}`, borderRadius: 20, padding: "2px 8px", fontSize: 10, color: C.primaryText, fontWeight: 500, whiteSpace: "nowrap" as const }}>
      {label}
    </span>
  );
}

export function LibStoryCard({ story, prog, onStart }: { story: StoryEntry; prog?: StoryProgress; onStart: () => void }) {
  const pct = prog?.pct ?? 0;
  const ready = !!getStoryScript(story.id);   // đã có kịch bản chơi được
  const corner = (bg: string, fg: string): React.CSSProperties => ({ background: bg, color: fg, padding: "3px 10px", fontSize: 9, fontWeight: 700 });
  return (
    <button
      onClick={story.premium ? undefined : onStart}
      style={{ width: "100%", background: C.surface, border: `0.5px solid ${C.border}`, borderRadius: 14, padding: "12px 13px", cursor: story.premium ? "default" : "pointer", textAlign: "left", fontFamily: "inherit", position: "relative", overflow: "hidden" }}
    >
      <div style={{ position: "absolute", top: 0, right: 0, display: "flex", flexDirection: "row-reverse", borderRadius: "0 14px 0 10px", overflow: "hidden" }}>
        {ready
          ? <span style={corner(C.successBg, C.success)}>SẴN SÀNG</span>
          : <span style={corner(C.bgSunken, C.inkMuted)}>UPCOMING</span>}
        {story.premium && <span style={corner(C.reward, C.ink)}>PREMIUM</span>}
      </div>
      <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
        <div style={{ width: 44, height: 44, borderRadius: 12, background: story.color + "20", border: `1.5px solid ${story.color}40`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 21 }}>
          {story.emoji}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: story.premium ? C.inkMuted : C.ink, marginBottom: 5, lineHeight: 1.35, paddingRight: story.premium ? 128 : 66 }}>
            {story.title}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 4, marginBottom: prog ? 8 : 0 }}>
            {story.tags.map(t => <LibStoryTag key={t} label={t} />)}
          </div>
          {!!prog && (
            <>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                <span style={{ fontSize: 9, color: C.inkMuted }}>{prog.status === "completed" ? "Hoàn thành ✓" : `Đã học ${pct}%`}</span>
                <span style={{ fontSize: 9, color: C.primaryText, fontWeight: 700 }}>{pct}%</span>
              </div>
              <div style={{ height: 4, background: C.border, borderRadius: 2, overflow: "hidden" }}>
                <div style={{ width: `${pct}%`, height: "100%", background: `linear-gradient(90deg,${story.color},${C.primary})`, borderRadius: 2 }} />
              </div>
            </>
          )}
        </div>
      </div>
    </button>
  );
}

export function LibHSKAccordion({ level, stories, progress, onStart }: { level: number; stories: StoryEntry[]; progress: ProgressMap; onStart: (s: StoryEntry) => void }) {
  const [open, setOpen] = useState(() => memory.open.has(level));
  const toggle = () => setOpen(v => { if (v) memory.open.delete(level); else memory.open.add(level); return !v; });
  const ACCENT = [C.primaryText, C.ink, C.ctaText, C.rewardDeep, C.primaryDeep, C.inkMuted][level - 1];
  const LABEL  = ["Beginner","Elementary","Intermediate","Upper-Int.","Advanced","Mastery"][level - 1];
  const done   = stories.filter(s => progress[s.id]?.status === "completed").length;
  return (
    <div style={{ border: `0.5px solid ${C.border}`, borderRadius: 16, overflow: "hidden", marginBottom: 10 }}>
      <button
        onClick={toggle}
        style={{ width: "100%", background: C.surface, border: "none", padding: "13px 15px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", fontFamily: "inherit" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: 10, background: ACCENT + "18", border: `1.5px solid ${ACCENT}44`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: ACCENT, flexShrink: 0 }}>
            H{level}
          </div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.ink, lineHeight: 1.2 }}>HSK {level}</div>
            <div style={{ fontSize: 10, color: C.inkMuted, marginTop: 1 }}>{LABEL} · {stories.length} câu chuyện{done > 0 ? ` · ${done} xong` : ""}</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ color: C.inkMuted, transform: open ? "rotate(180deg)" : "none", transition: "transform .2s", display: "flex" }}>
            <ChevronDown size={16} />
          </div>
        </div>
      </button>
      {open && (
        <div style={{ borderTop: `0.5px solid ${C.border}`, padding: "10px 12px 12px", display: "flex", flexDirection: "column", gap: 9, background: C.bg }}>
          {stories.map(s => <LibStoryCard key={s.title} story={s} prog={progress[s.id]} onStart={() => onStart(s)} />)}
        </div>
      )}
    </div>
  );
}

export function LibraryScreen({ onOpenStory }: { onOpenStory: (s: StoryEntry) => void }) {
  const [filterTag, setFilterTagState] = useState<string | null>(memory.tag);
  const setFilterTag = (tag: string | null) => { memory.tag = tag; setFilterTagState(tag); };
  const allTags = [...new Set(Object.values(STORY_LIBRARY).flat().flatMap(s => s.tags))];
  const progress = useStoryProgress();
  // Đang học = đã bắt đầu nhưng chưa hoàn thành, truyện chơi gần nhất lên đầu
  const inProgress = Object.values(STORY_LIBRARY).flat()
    .filter(s => progress[s.id]?.status === "started")
    .sort((a, b) => progress[b.id].lastPlayed - progress[a.id].lastPlayed);
  const totalStories = Object.values(STORY_LIBRARY).flat().length;
  const totalDone    = Object.values(STORY_LIBRARY).flat().filter(s => progress[s.id]?.status === "completed").length;

  const filteredLibrary: Record<number, StoryEntry[]> = filterTag
    ? Object.fromEntries(Object.entries(STORY_LIBRARY).map(([k, arr]) => [k, arr.filter(s => s.tags.includes(filterTag))]))
    : STORY_LIBRARY;

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: C.bg }}>
      {/* Header */}
      <div style={{ background: C.surface, padding: "14px 16px 12px", borderBottom: `0.5px solid ${C.border}`, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <div style={{ width: 30, height: 30, borderRadius: 9, background: C.inkBg, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Library size={15} color={C.ink} />
          </div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 800, color: C.ink, letterSpacing: "-.01em" }}>Thư viện</div>
            <div style={{ fontSize: 10, color: C.inkMuted }}>{totalDone}/{totalStories} câu chuyện hoàn thành</div>
          </div>
        </div>
        {/* Tag filter chips */}
        <div style={{ display: "flex", gap: 6, overflowX: "auto", paddingBottom: 2, scrollbarWidth: "none" as const }}>
          <button
            onClick={() => setFilterTag(null)}
            style={{ flexShrink: 0, background: filterTag === null ? C.ink : C.bg, border: `0.5px solid ${filterTag === null ? C.ink : C.border}`, borderRadius: 20, padding: "4px 12px", fontSize: 10, color: filterTag === null ? C.onFill : C.inkMuted, cursor: "pointer", fontFamily: "inherit", fontWeight: 600 }}
          >
            Tất cả
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilterTag(filterTag === tag ? null : tag)}
              style={{ flexShrink: 0, background: filterTag === tag ? C.ink : C.bg, border: `0.5px solid ${filterTag === tag ? C.ink : C.border}`, borderRadius: 20, padding: "4px 12px", fontSize: 10, color: filterTag === tag ? C.onFill : C.inkMuted, cursor: "pointer", fontFamily: "inherit", fontWeight: 500 }}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "14px 14px 28px" }}>
        {/* Đang học dở */}
        {inProgress.length > 0 && !filterTag && (
          <div style={{ marginBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 10 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.primary }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: C.ink }}>Đang học</span>
              <span style={{ background: C.primaryBg, border: `0.5px solid ${C.primaryBorder}`, borderRadius: 20, padding: "1px 8px", fontSize: 10, color: C.primaryText, fontWeight: 600 }}>{inProgress.length}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {inProgress.map(s => <LibStoryCard key={s.title} story={s} prog={progress[s.id]} onStart={() => onOpenStory(s)} />)}
            </div>
            <div style={{ height: 1, background: C.border, margin: "18px 0 0" }} />
          </div>
        )}

        {/* Thư viện theo HSK */}
        <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 12 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: C.ink }}>Theo cấp độ HSK</span>
        </div>
        {([1,2,3,4,5,6] as const).map(lvl => {
          const stories = filteredLibrary[lvl] ?? [];
          if (filterTag && stories.length === 0) return null;
          return <LibHSKAccordion key={lvl} level={lvl} stories={stories} progress={progress} onStart={onOpenStory} />;
        })}
      </div>
    </div>
  );
}
