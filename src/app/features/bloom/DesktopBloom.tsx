import { useState, useRef, useEffect } from "react";
import { Eye, EyeOff, Zap } from "lucide-react";
import { C } from "../../lib/colors";
import { BLOOM_STAGES, BLOOM_ICONS } from "../../data/bloom";
import { DesktopTopbar } from "../../layouts/desktop/DesktopChrome";
import { BloomContent } from "./BloomContent";
import { FlashcardScreen } from "../flashcard/FlashcardScreen";
import { LessonPicker } from "./LessonPicker";
import { LESSONS } from "../../data/lessons";

export function DesktopBloomScreen() {
  const [mode, setMode] = useState<"bloom" | "flashcard">("bloom");
  const [stage, setStage] = useState(0), [complete, setComplete] = useState(false);
  const [pinyinOn, setPinyinOn] = useState(true);
  const [lessonId, setLessonId] = useState(LESSONS[0].id);
  const lesson = LESSONS.find(l => l.id === lessonId)!;
  const bloom = lesson.bloom;
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => { scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" }); }, [stage]);

  // Đổi bài: Bloom quay về cấp 1; bài không có Bloom (HSK1) thì chuyển sang Flashcard
  function pickLesson(id: string) {
    setLessonId(id); setStage(0); setComplete(false);
    if (!LESSONS.find(l => l.id === id)!.bloom) setMode("flashcard");
  }
  const showBloom = mode === "bloom" && !!bloom;

  const tabBtn = (m: "bloom" | "flashcard", label: string) => {
    const off = m === "bloom" && !bloom;
    return (
    <button onClick={() => !off && setMode(m)} disabled={off} title={off ? "Chọn một truyện để luyện Bloom" : undefined} style={{ opacity: off ? 0.4 : 1, padding: "6px 18px", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", border: "none", background: mode === m ? C.white : "none", color: mode === m ? C.dark : C.muted, boxShadow: mode === m ? "0 1px 4px rgba(0,0,0,.09)" : "none", transition: "all .15s", ...(off ? { cursor: "not-allowed" } : {}) }}>{label}</button>
    );
  };

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <DesktopTopbar title="Phòng tập"
        right={
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginLeft: 16 }}>
            {/* Mode switcher */}
            <div style={{ background: C.bg, borderRadius: 10, padding: "3px", display: "flex", gap: 2 }}>
              {tabBtn("bloom", "🧠 BLOOM")}
              {tabBtn("flashcard", "🃏 Flashcard")}
            </div>
            {/* Bloom-only controls */}
            {showBloom && <>
              <button onClick={() => setPinyinOn(v => !v)} style={{ display: "flex", alignItems: "center", gap: 5, background: pinyinOn ? C.purpleBg : C.bg, border: `0.5px solid ${pinyinOn ? "#ddd8f9" : C.border}`, borderRadius: 20, padding: "5px 13px", fontSize: 12, color: pinyinOn ? C.purple : C.muted, cursor: "pointer", fontFamily: "inherit", fontWeight: 500 }}>
                {pinyinOn ? <Eye size={13} /> : <EyeOff size={13} />} {pinyinOn ? "Pinyin: Bật" : "Pinyin: Tắt"}
              </button>
              <div style={{ display: "flex", alignItems: "center", gap: 5, background: C.greenBg, border: `0.5px solid ${C.greenBorder}`, borderRadius: 20, padding: "4px 11px", fontSize: 11, color: C.greenDim, fontWeight: 600 }}><Zap size={12} /> +{(stage+1)*10} XP</div>
            </>}
          </div>
        } />
      {/* Chọn bài */}
      <div style={{ background: C.white, borderBottom: `0.5px solid ${C.border}`, padding: "10px 28px", flexShrink: 0 }}>
        <LessonPicker lessons={LESSONS} value={lessonId} onChange={pickLesson} />
      </div>

      {!showBloom || !bloom ? (
        <FlashcardScreen key={lessonId} cards={lesson.cards} topics={lesson.topics ?? null} hsk={lesson.hsk} title={lesson.title} />
      ) : (
        <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
          {/* Stage panel left */}
          <div style={{ width: 200, background: C.white, borderRight: `0.5px solid ${C.border}`, flexShrink: 0, display: "flex", flexDirection: "column" }}>
            <div style={{ padding: "16px 14px", borderBottom: `0.5px solid ${C.border}` }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: C.muted, marginBottom: 10, textTransform: "uppercase" as const, letterSpacing: ".05em" }}>Cấp độ Bloom</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {BLOOM_STAGES.map((bs, i) => { const Icon = BLOOM_ICONS[i], isDone = complete || i < stage, isActive = !complete && i === stage; return (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 9, padding: "9px 11px", borderRadius: 10, background: isDone ? C.greenBg : isActive ? C.tealBg : C.bg, border: `0.5px solid ${isDone ? C.greenBorder : isActive ? "#bdeaf0" : C.border}` }}>
                    <div style={{ color: isDone ? C.greenDim : isActive ? C.teal : C.muted }}><Icon size={15} /></div>
                    <div><div style={{ fontSize: 11, fontWeight: 600, color: isDone ? C.greenDim : isActive ? C.teal : C.muted }}>{bs.label}</div><div style={{ fontSize: 9, color: isDone ? C.green : isActive ? C.teal : C.faint }}>{isDone ? "Hoàn thành ✓" : isActive ? "Đang làm..." : "Chưa mở"}</div></div>
                  </div>
                ); })}
              </div>
            </div>
            <div style={{ padding: "14px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
              <div style={{ height: 5, background: C.border, borderRadius: 20, marginBottom: 6 }}><div style={{ height: 5, background: C.teal, width: `${Math.round(((stage+1)/4)*100)}%`, borderRadius: 20, transition: "width .35s" }} /></div>
              <div style={{ fontSize: 10, color: C.muted, textAlign: "center" }}>{stage+1}/4 cấp độ</div>
            </div>
          </div>
          {/* Content */}
          <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "28px", background: C.dBg }}>
            <div style={{ maxWidth: 600, margin: "0 auto" }}>
              {complete ? (
                <div style={{ textAlign: "center", paddingTop: 40 }}>
                  <div style={{ fontSize: 72, marginBottom: 16 }}>🏆</div>
                  <div style={{ fontSize: 22, fontWeight: 700, color: C.dText, marginBottom: 8 }}>Hoàn thành cả 4 cấp độ!</div>
                  <div style={{ fontSize: 13, color: C.dSub, marginBottom: 28 }}>Bạn đã thành thạo từ vựng {bloom.doneLong}</div>
                  <div style={{ display: "flex", justifyContent: "center", gap: 14, marginBottom: 28 }}>
                    {[{ val: "+40", sub: "XP kiếm được", bg: C.greenBg, bdr: C.greenBorder, col: C.greenDim }, { val: `${bloom.words}`, sub: "Từ đã nắm", bg: C.purpleBg, bdr: "#ddd8f9", col: C.purple }, { val: "Bloom 4", sub: "Cấp độ đạt", bg: C.tealBg, bdr: "#bdeaf0", col: C.teal }].map((s, i) => <div key={i} style={{ background: s.bg, border: `0.5px solid ${s.bdr}`, borderRadius: 14, padding: "14px 24px", textAlign: "center" }}><div style={{ fontSize: 20, fontWeight: 700, color: s.col }}>{s.val}</div><div style={{ fontSize: 10, color: C.muted, marginTop: 3 }}>{s.sub}</div></div>)}
                  </div>
                  <button onClick={() => { setStage(0); setComplete(false); }} style={{ background: C.teal, color: "#fff", border: "none", borderRadius: 14, padding: "14px 40px", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>Luyện lại từ đầu</button>
                </div>
              ) : <BloomContent key={`${lessonId}-${stage}`} items={bloom.items} emoji={lesson.emoji} stage={stage} onNext={() => setStage(s => s+1)} onComplete={() => setComplete(true)} pinyinOn={pinyinOn} />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
