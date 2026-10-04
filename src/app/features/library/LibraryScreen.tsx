import { useState } from "react";
import { ChevronDown, Library } from "lucide-react";
import { C } from "../../lib/colors";
import { STORY_LIBRARY } from "../../data/library";
import type { StoryEntry } from "../../types";

export function LibStoryTag({ label }: { label: string }) {
  return (
    <span style={{ background: "#f0f4ff", border: "0.5px solid #dde3f8", borderRadius: 20, padding: "2px 8px", fontSize: 10, color: "#4a5ea8", fontWeight: 500, whiteSpace: "nowrap" as const }}>
      {label}
    </span>
  );
}

export function LibStoryCard({ story, onStart }: { story: StoryEntry; onStart: () => void }) {
  const pct = story.progress ? Math.round((story.progress / story.chapters) * 100) : 0;
  return (
    <button
      onClick={story.premium ? undefined : onStart}
      style={{ width: "100%", background: C.white, border: `0.5px solid ${C.border}`, borderRadius: 14, padding: "12px 13px", cursor: story.premium ? "default" : "pointer", textAlign: "left", fontFamily: "inherit", position: "relative", overflow: "hidden" }}
    >
      {story.premium && (
        <div style={{ position: "absolute", top: 0, right: 0, background: "#f5a623", borderRadius: "0 14px 0 10px", padding: "3px 10px", fontSize: 9, color: "#fff", fontWeight: 700 }}>
          PREMIUM
        </div>
      )}
      <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
        <div style={{ width: 44, height: 44, borderRadius: 12, background: story.color + "20", border: `1.5px solid ${story.color}40`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 21 }}>
          {story.emoji}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: story.premium ? C.muted : C.dark, marginBottom: 5, lineHeight: 1.35, paddingRight: story.premium ? 56 : 0 }}>
            {story.title}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 4, marginBottom: story.progress ? 8 : 0 }}>
            {story.tags.map(t => <LibStoryTag key={t} label={t} />)}
          </div>
          {!!story.progress && (
            <>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                <span style={{ fontSize: 9, color: C.muted }}>Chương {story.progress} / {story.chapters}</span>
                <span style={{ fontSize: 9, color: C.teal, fontWeight: 700 }}>{pct}%</span>
              </div>
              <div style={{ height: 4, background: "#e9ecf2", borderRadius: 2, overflow: "hidden" }}>
                <div style={{ width: `${pct}%`, height: "100%", background: `linear-gradient(90deg,${story.color},${C.teal})`, borderRadius: 2 }} />
              </div>
            </>
          )}
        </div>
      </div>
    </button>
  );
}

export function LibHSKAccordion({ level, stories, onStart }: { level: number; stories: StoryEntry[]; onStart: (s: StoryEntry) => void }) {
  const [open, setOpen] = useState(level === 1);
  const ACCENT = ["#6c3fc5","#1a8fa0","#16a34a","#b45309","#1d4ed8","#0f172a"][level - 1];
  const LABEL  = ["Beginner","Elementary","Intermediate","Upper-Int.","Advanced","Mastery"][level - 1];
  const done   = stories.filter(s => s.progress && s.progress >= s.chapters).length;
  return (
    <div style={{ border: `0.5px solid ${C.border}`, borderRadius: 16, overflow: "hidden", marginBottom: 10 }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{ width: "100%", background: C.white, border: "none", padding: "13px 15px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", fontFamily: "inherit" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: 10, background: ACCENT + "18", border: `1.5px solid ${ACCENT}44`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: ACCENT, flexShrink: 0 }}>
            H{level}
          </div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.dark, lineHeight: 1.2 }}>HSK {level}</div>
            <div style={{ fontSize: 10, color: C.muted, marginTop: 1 }}>{LABEL} · {stories.length} câu chuyện{done > 0 ? ` · ${done} xong` : ""}</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {level > 1 && <div style={{ background: "#f0f4ff", borderRadius: 20, padding: "2px 9px", fontSize: 9, color: "#4a5ea8", fontWeight: 600 }}>🔒 Level {level}</div>}
          <div style={{ color: C.muted, transform: open ? "rotate(180deg)" : "none", transition: "transform .2s", display: "flex" }}>
            <ChevronDown size={16} />
          </div>
        </div>
      </button>
      {open && (
        <div style={{ borderTop: `0.5px solid ${C.border}`, padding: "10px 12px 12px", display: "flex", flexDirection: "column", gap: 9, background: "#f8f9fc" }}>
          {stories.map(s => <LibStoryCard key={s.title} story={s} onStart={() => onStart(s)} />)}
        </div>
      )}
    </div>
  );
}

export function LibraryScreen({ onOpenStory }: { onOpenStory: (s: StoryEntry) => void }) {
  const [filterTag, setFilterTag] = useState<string | null>(null);
  const allTags = [...new Set(Object.values(STORY_LIBRARY).flat().flatMap(s => s.tags))];
  const inProgress = Object.values(STORY_LIBRARY).flat().filter(s => s.progress && s.progress > 0 && s.progress < s.chapters);
  const totalStories = Object.values(STORY_LIBRARY).flat().length;
  const totalDone    = Object.values(STORY_LIBRARY).flat().filter(s => s.progress && s.progress >= s.chapters).length;

  const filteredLibrary: Record<number, StoryEntry[]> = filterTag
    ? Object.fromEntries(Object.entries(STORY_LIBRARY).map(([k, arr]) => [k, arr.filter(s => s.tags.includes(filterTag))]))
    : STORY_LIBRARY;

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: "#f5f6fa" }}>
      {/* Header */}
      <div style={{ background: C.white, padding: "14px 16px 12px", borderBottom: `0.5px solid ${C.border}`, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <div style={{ width: 30, height: 30, borderRadius: 9, background: C.purpleBg, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Library size={15} color={C.purple} />
          </div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 800, color: C.dark, letterSpacing: "-.01em" }}>Thư viện</div>
            <div style={{ fontSize: 10, color: C.muted }}>{totalDone}/{totalStories} câu chuyện hoàn thành</div>
          </div>
        </div>
        {/* Tag filter chips */}
        <div style={{ display: "flex", gap: 6, overflowX: "auto", paddingBottom: 2, scrollbarWidth: "none" as const }}>
          <button
            onClick={() => setFilterTag(null)}
            style={{ flexShrink: 0, background: filterTag === null ? C.purple : C.bg, border: `0.5px solid ${filterTag === null ? C.purple : C.border}`, borderRadius: 20, padding: "4px 12px", fontSize: 10, color: filterTag === null ? "#fff" : C.muted, cursor: "pointer", fontFamily: "inherit", fontWeight: 600 }}
          >
            Tất cả
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilterTag(filterTag === tag ? null : tag)}
              style={{ flexShrink: 0, background: filterTag === tag ? C.purple : C.bg, border: `0.5px solid ${filterTag === tag ? C.purple : C.border}`, borderRadius: 20, padding: "4px 12px", fontSize: 10, color: filterTag === tag ? "#fff" : C.muted, cursor: "pointer", fontFamily: "inherit", fontWeight: 500 }}
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
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.teal }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: C.dark }}>Đang học</span>
              <span style={{ background: C.tealBg, border: `0.5px solid #bdeaf0`, borderRadius: 20, padding: "1px 8px", fontSize: 10, color: C.teal, fontWeight: 600 }}>{inProgress.length}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {inProgress.map(s => <LibStoryCard key={s.title} story={s} onStart={() => onOpenStory(s)} />)}
            </div>
            <div style={{ height: 1, background: C.border, margin: "18px 0 0" }} />
          </div>
        )}

        {/* Thư viện theo HSK */}
        <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 12 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: C.dark }}>Theo cấp độ HSK</span>
        </div>
        {([1,2,3,4,5,6] as const).map(lvl => {
          const stories = filteredLibrary[lvl] ?? [];
          if (filterTag && stories.length === 0) return null;
          return <LibHSKAccordion key={lvl} level={lvl} stories={stories} onStart={onOpenStory} />;
        })}
      </div>
    </div>
  );
}
