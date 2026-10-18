import { useState } from "react";
import { BookOpen } from "lucide-react";
import { C } from "../../lib/colors";
import { getStoryScript } from "../../data/stories";
import type { StoryEntry } from "../../types";
import { DesktopTopbar } from "../../layouts/desktop/DesktopChrome";
import { ChatStoryEngine } from "./ChatStoryEngine";
import { BranchingStoryEngine } from "./BranchingStoryEngine";
import { StoryComingSoon } from "./StoryComingSoon";

export function DesktopChatScreen({ story, onHome }: { story: StoryEntry; onHome: () => void }) {
  const [activeVocab, setActiveVocab] = useState<string | null>(null);
  const script = getStoryScript(story.id);
  const vocab = script?.vocab ?? [];
  const active = vocab.find(v => v.word === activeVocab);

  const sidePanel = (
    <div style={{ width: 260, background: C.bg, borderLeft: `0.5px solid ${C.border}`, display: "flex", flexDirection: "column", overflowY: "auto", flexShrink: 0 }}>
      <div style={{ padding: "14px 16px", borderBottom: `0.5px solid ${C.border}` }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: C.ink, marginBottom: 4 }}>{story.title}</div>
        {story.summary && <div style={{ fontSize: 11, color: C.inkMuted, lineHeight: 1.55, marginBottom: 8 }}>{story.summary}</div>}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const }}>
          {[...story.tags.slice(0, 2), `HSK ${story.hsk}`].map(t => (
            <span key={t} style={{ background: C.inkBg, border: `0.5px solid ${C.inkBorder}`, borderRadius: 20, padding: "3px 9px", fontSize: 10, color: C.ink }}>{t}</span>
          ))}
        </div>
      </div>
      <div style={{ padding: "12px 16px" }}>
        <div style={{ fontSize: 10, fontWeight: 600, color: C.inkFaint, letterSpacing: ".06em", textTransform: "uppercase" as const, marginBottom: 10, display: "flex", alignItems: "center", gap: 4 }}><BookOpen size={11} /> Từ vựng HSK{story.hsk}</div>
        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 5, marginBottom: 8 }}>
          {vocab.map(({ word: v }) => (
            <button key={v} onClick={() => setActiveVocab(activeVocab === v ? null : v)}
              style={{ background: activeVocab === v ? C.ink : C.inkBg, borderRadius: 20, padding: "3px 9px", fontSize: 12, color: activeVocab === v ? C.onFill : C.ink, border: `0.5px solid ${C.inkBorder}`, cursor: "pointer", fontFamily: "inherit" }}>
              {v}
            </button>
          ))}
        </div>
        {active && (
          <div style={{ background: C.surface, border: `0.5px solid ${C.inkBorder}`, borderRadius: 10, padding: "10px 12px" }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: C.ink, marginBottom: 3 }}>{active.word}</div>
            {active.py && <div style={{ fontSize: 11, color: C.primaryText, fontStyle: "italic", marginBottom: 3 }}>{active.py}</div>}
            <div style={{ fontSize: 12, color: C.ink }}>{active.vi}</div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <DesktopTopbar title={`Câu chuyện · ${story.title}`} onBack={onHome}
        right={<span style={{ fontSize: 11, background: C.inkBg, padding: "3px 10px", borderRadius: 20, border: `0.5px solid ${C.inkBorder}`, marginLeft: 8, color: C.ink }}>HSK {story.hsk}</span>} />
      {!script
        ? <StoryComingSoon story={story} onHome={onHome} />
        : script.kind === "quiz"
          ? <ChatStoryEngine key={story.id} story={story} turns={script.turns} onHome={onHome} sidePanel={sidePanel} />
          : <BranchingStoryEngine key={story.id} story={story} tree={script.story} onHome={onHome} sidePanel={sidePanel} />}
    </div>
  );
}
