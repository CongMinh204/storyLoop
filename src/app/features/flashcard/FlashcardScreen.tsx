import { useState, useEffect } from "react";
import { ArrowLeft, Eye, EyeOff, CheckCircle2, Circle, ChevronRight } from "lucide-react";
import { C } from "../../lib/colors";
import { HSK1_TOPICS, HSK1_CARDS } from "../../data/flashcards";
import type { HSK1Card } from "../../types";

// Mặc định là bộ HSK1 (chia chủ đề). Bộ thẻ của một truyện: truyền cards + title, không có topics.
export function FlashcardScreen({ compact = false, cards = HSK1_CARDS, topics = HSK1_TOPICS, hsk = 1, title = "" }: { compact?: boolean; cards?: HSK1Card[]; topics?: string[] | null; hsk?: number; title?: string }) {
  const [topicIdx, setTopicIdx] = useState<number | null>(null);
  const [cardIdx, setCardIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState<Set<number>>(new Set());
  const [pinyinOn, setPinyinOn] = useState(true);

  const filtered = topicIdx === null ? cards : cards.filter(c => c.topicIdx === topicIdx);
  const total = filtered.length;
  const card = filtered[Math.min(cardIdx, total - 1)];
  const globalIdx = card ? cards.indexOf(card) : -1;
  const isKnown = globalIdx >= 0 && known.has(globalIdx);

  useEffect(() => { setCardIdx(0); setFlipped(false); }, [topicIdx]);

  function go(dir: 1 | -1) {
    setCardIdx(i => Math.max(0, Math.min(total - 1, i + dir)));
    setFlipped(false);
  }
  function toggleKnown() {
    if (globalIdx < 0) return;
    setKnown(prev => { const n = new Set(prev); n.has(globalIdx) ? n.delete(globalIdx) : n.add(globalIdx); return n; });
  }

  const knownCount = filtered.filter((c) => known.has(cards.indexOf(c))).length;
  const ci = Math.min(cardIdx, total - 1);

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: C.bg }}>
      {/* Topic filter (chỉ bộ có chia chủ đề) */}
      {topics && (
      <div style={{ background: C.white, borderBottom: `0.5px solid ${C.border}`, padding: compact ? "10px 14px" : "12px 24px", flexShrink: 0 }}>
        <div style={{ display: "flex", gap: 6, overflowX: "auto", scrollbarWidth: "none" as const, paddingBottom: 2 }}>
          {([null, ...topics.map((_, i) => i)] as (number | null)[]).map((ti, idx) => (
            <button key={idx} onClick={() => setTopicIdx(ti)} style={{ flexShrink: 0, background: topicIdx === ti ? C.teal : C.bg, color: topicIdx === ti ? "#fff" : C.muted, border: `0.5px solid ${topicIdx === ti ? C.teal : C.border}`, borderRadius: 20, padding: "5px 12px", fontSize: 11, cursor: "pointer", fontFamily: "inherit", fontWeight: topicIdx === ti ? 600 : 400 }}>
              {ti === null ? `Tất cả (${cards.length})` : `${topics[ti]}`}
            </button>
          ))}
        </div>
      </div>
      )}
      {/* Progress bar */}
      <div style={{ height: 3, background: C.border, flexShrink: 0 }}>
        <div style={{ height: 3, background: C.teal, width: total > 0 ? `${((ci + 1) / total) * 100}%` : "0%", transition: "width .2s" }} />
      </div>
      {/* Content */}
      <div style={{ flex: 1, overflowY: "auto", padding: compact ? "16px 16px 24px" : "24px 32px", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
        {/* Stats row */}
        <div style={{ width: "100%", maxWidth: 480, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 11, color: C.muted }}>{ci + 1} / {total} thẻ</div>
          <div style={{ display: "flex", gap: 7, alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 4, background: C.greenBg, border: `0.5px solid ${C.greenBorder}`, borderRadius: 20, padding: "3px 10px", fontSize: 10, color: C.greenDim, fontWeight: 600 }}>✓ {knownCount} thuộc</div>
            <button onClick={() => setPinyinOn(v => !v)} style={{ display: "flex", alignItems: "center", gap: 4, background: pinyinOn ? C.purpleBg : C.bg, border: `0.5px solid ${pinyinOn ? "#ddd8f9" : C.border}`, borderRadius: 20, padding: "3px 10px", fontSize: 10, color: pinyinOn ? C.purple : C.muted, cursor: "pointer", fontFamily: "inherit" }}>
              {pinyinOn ? <Eye size={10} /> : <EyeOff size={10} />} Pinyin
            </button>
          </div>
        </div>
        {/* Flip card */}
        {card && (
          <div style={{ width: "100%", maxWidth: 480, perspective: "1000px", cursor: "pointer" }} onClick={() => setFlipped(f => !f)}>
            <div style={{ transformStyle: "preserve-3d" as const, transition: "transform .45s", transform: flipped ? "rotateY(180deg)" : "none", position: "relative", height: compact ? 230 : 260 }}>
              {/* Front */}
              <div style={{ position: "absolute", inset: 0, backfaceVisibility: "hidden" as const, background: C.white, borderRadius: 20, border: `0.5px solid ${C.border}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 24, boxShadow: "0 4px 20px rgba(0,0,0,.06)" }}>
                <div style={{ position: "absolute", top: 12, left: 14, fontSize: 9, color: C.faint, fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: ".05em" }}>HSK {hsk} · {topics ? topics[card.topicIdx] : title}</div>
                <div style={{ position: "absolute", top: 12, right: 14, fontSize: 9, color: C.faint }}>nhấn để lật ↩</div>
                <div style={{ fontSize: compact ? 60 : 72, lineHeight: 1, color: C.dark, marginBottom: 10 }}>{card.ch}</div>
                {pinyinOn && <div style={{ fontSize: 15, color: C.teal, fontWeight: 600 }}>{card.py}</div>}
                {/* Dot pagination */}
                <div style={{ position: "absolute", bottom: 14, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 5 }}>
                  {filtered.slice(Math.max(0, ci - 2), Math.min(total, ci + 3)).map((_, j) => {
                    const ri = Math.max(0, ci - 2) + j;
                    return <div key={ri} style={{ width: ri === ci ? 16 : 6, height: 6, borderRadius: 3, background: ri === ci ? C.teal : C.border, transition: "all .2s" }} />;
                  })}
                </div>
              </div>
              {/* Back */}
              <div style={{ position: "absolute", inset: 0, backfaceVisibility: "hidden" as const, transform: "rotateY(180deg)", background: C.white, borderRadius: 20, border: `0.5px solid ${C.border}`, display: "flex", flexDirection: "column", padding: compact ? 18 : 22, boxShadow: "0 4px 20px rgba(0,0,0,.06)" }}>
                <div style={{ fontSize: 9, color: C.faint, marginBottom: 5, fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: ".05em" }}>HSK {hsk} · {topics ? topics[card.topicIdx] : title}</div>
                <div style={{ fontSize: compact ? 28 : 34, color: C.dark, fontWeight: 700, marginBottom: 2 }}>{card.ch}</div>
                {pinyinOn && <div style={{ fontSize: 13, color: C.teal, fontWeight: 600, marginBottom: 7 }}>{card.py}</div>}
                <div style={{ fontSize: compact ? 15 : 17, color: C.dark, fontWeight: 600, marginBottom: 10 }}>{card.vi}</div>
                <div style={{ flex: 1, background: C.bg, borderRadius: 12, padding: "10px 13px", display: "flex", flexDirection: "column", gap: 4, minHeight: 0 }}>
                  <div style={{ fontSize: 9, color: C.faint, fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: ".04em", marginBottom: 2 }}>Ví dụ</div>
                  <div style={{ fontSize: compact ? 12 : 13, color: C.dark, lineHeight: 1.6 }}>{card.exCh}</div>
                  {pinyinOn && <div style={{ fontSize: 10, color: C.muted, lineHeight: 1.5 }}>{card.exPy}</div>}
                  <div style={{ fontSize: 10, color: C.muted, lineHeight: 1.5 }}>→ {card.exVi}</div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Controls */}
        <div style={{ width: "100%", maxWidth: 480, display: "flex", gap: 8, alignItems: "center" }}>
          <button onClick={() => go(-1)} disabled={ci === 0} style={{ width: 44, height: 44, borderRadius: "50%", background: ci === 0 ? C.bg : C.white, border: `0.5px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", cursor: ci === 0 ? "default" : "pointer", flexShrink: 0 }}>
            <ArrowLeft size={17} color={ci === 0 ? C.faint : C.dark} />
          </button>
          <button onClick={toggleKnown} style={{ flex: 1, background: isKnown ? C.greenBg : C.white, border: `0.5px solid ${isKnown ? C.greenBorder : C.border}`, borderRadius: 12, padding: "10px 0", fontSize: 12, fontWeight: 600, color: isKnown ? C.greenDim : C.muted, cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
            {isKnown ? <><CheckCircle2 size={14} /> Đã thuộc</> : <><Circle size={14} /> Đánh dấu thuộc</>}
          </button>
          <button onClick={() => go(1)} disabled={ci === total - 1} style={{ width: 44, height: 44, borderRadius: "50%", background: ci === total - 1 ? C.bg : C.teal, border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: ci === total - 1 ? "default" : "pointer", flexShrink: 0 }}>
            <ChevronRight size={17} color={ci === total - 1 ? C.faint : "#fff"} />
          </button>
        </div>
        {/* Completion banner */}
        {knownCount === total && total > 0 && (
          <div style={{ width: "100%", maxWidth: 480, background: C.greenBg, border: `0.5px solid ${C.greenBorder}`, borderRadius: 14, padding: "14px 16px", textAlign: "center" }}>
            <div style={{ fontSize: 24, marginBottom: 6 }}>🎉</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.greenDim, marginBottom: 3 }}>Thuộc hết {total} thẻ!</div>
            <div style={{ fontSize: 11, color: C.muted }}>Bạn đã hoàn thành chủ đề này.</div>
          </div>
        )}
      </div>
    </div>
  );
}
