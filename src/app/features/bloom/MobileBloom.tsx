import { useState, useRef, useEffect } from "react";
import { Eye, EyeOff, Zap } from "lucide-react";
import { C } from "../../lib/colors";
import { BLOOM_STAGES, BLOOM_ICONS } from "../../data/bloom";
import { BloomContent } from "./BloomContent";
import { FlashcardScreen } from "../flashcard/FlashcardScreen";
import { LessonPicker } from "./LessonPicker";
import { LESSONS } from "../../data/lessons";

export function MobileBloomScreen() {
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
    <button onClick={() => !off && setMode(m)} disabled={off} title={off ? "Chọn một truyện để luyện Bloom" : undefined} style={{ opacity: off ? 0.4 : 1, flex: 1, padding: "7px 0", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", border: "none", background: mode === m ? C.white : "none", color: mode === m ? C.dark : C.muted, boxShadow: mode === m ? "0 1px 4px rgba(0,0,0,.09)" : "none", transition: "all .15s", ...(off ? { cursor: "not-allowed" } : {}) }}>{label}</button>
    );
  };

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: C.bg }}>
      {/* Header */}
      <div style={{ background: C.white, borderBottom: `0.5px solid ${C.border}`, padding: "12px 16px 10px", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: C.dark }}>Phòng tập</div>
          {showBloom && (
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <button onClick={() => setPinyinOn(v => !v)} style={{ display: "flex", alignItems: "center", gap: 4, background: pinyinOn ? C.purpleBg : C.bg, border: `0.5px solid ${pinyinOn ? "#ddd8f9" : C.border}`, borderRadius: 20, padding: "4px 10px", fontSize: 10, color: pinyinOn ? C.purple : C.muted, cursor: "pointer", fontFamily: "inherit", fontWeight: 500 }}>
                {pinyinOn ? <Eye size={11} /> : <EyeOff size={11} />} Pinyin
              </button>
              <div style={{ display: "flex", alignItems: "center", gap: 4, background: C.greenBg, border: `0.5px solid ${C.greenBorder}`, borderRadius: 20, padding: "4px 10px", fontSize: 10, color: C.greenDim, fontWeight: 600 }}><Zap size={11} /> +{(stage+1)*10} XP</div>
            </div>
          )}
        </div>
        {/* Chọn bài */}
        <div style={{ marginBottom: 10 }}><LessonPicker lessons={LESSONS} value={lessonId} onChange={pickLesson} /></div>
        {/* Mode tabs */}
        <div style={{ background: C.bg, borderRadius: 10, padding: "3px", display: "flex", gap: 2, marginBottom: showBloom ? 10 : 0 }}>
          {tabBtn("bloom", "🧠 BLOOM")}
          {tabBtn("flashcard", "🃏 Flashcard")}
        </div>
        {/* Bloom stage indicators — only in bloom mode */}
        {showBloom && (
          <div style={{ display: "flex", gap: 6 }}>
            {BLOOM_STAGES.map((bs, i) => { const Icon = BLOOM_ICONS[i], isDone = complete || i < stage, isActive = !complete && i === stage; return <div key={i} style={{ flex: 1, padding: "8px 4px 7px", borderRadius: 10, textAlign: "center", background: isDone ? C.greenBg : isActive ? C.tealBg : C.bg, border: `0.5px solid ${isDone ? C.greenBorder : isActive ? "#bdeaf0" : C.border}` }}><div style={{ color: isDone ? C.greenDim : isActive ? C.teal : C.muted, marginBottom: 3, display: "flex", justifyContent: "center" }}><Icon size={13} /></div><div style={{ fontSize: 10, fontWeight: 600, color: isDone ? C.greenDim : isActive ? C.teal : C.muted }}>{bs.label}</div></div>; })}
          </div>
        )}
      </div>

      {!showBloom || !bloom ? (
        <FlashcardScreen key={lessonId} compact cards={lesson.cards} topics={lesson.topics ?? null} hsk={lesson.hsk} title={lesson.title} />
      ) : (
        <>
          <div style={{ height: 3, background: C.border, flexShrink: 0 }}><div style={{ height: 3, background: C.teal, width: `${Math.round(((stage+1)/4)*100)}%`, transition: "width .35s" }} /></div>
          <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "16px 16px 28px", background: C.dBg }}>
            {complete ? (
              <div style={{ textAlign: "center", paddingTop: 24 }}>
                <div style={{ fontSize: 64, marginBottom: 12 }}>🏆</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: C.dText, marginBottom: 6 }}>Hoàn thành 4 cấp độ!</div>
                <div style={{ fontSize: 12, color: C.dSub, marginBottom: 22 }}>Bạn đã thành thạo từ vựng {bloom.doneShort}</div>
                <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 22 }}>
                  {[{ val: "+40", sub: "XP kiếm được", bg: C.greenBg, bdr: C.greenBorder, col: C.greenDim }, { val: `${bloom.words}`, sub: "Từ đã nắm", bg: C.purpleBg, bdr: "#ddd8f9", col: C.purple }].map((s, i) => <div key={i} style={{ background: s.bg, border: `0.5px solid ${s.bdr}`, borderRadius: 14, padding: "12px 22px", textAlign: "center" }}><div style={{ fontSize: 22, fontWeight: 700, color: s.col }}>{s.val}</div><div style={{ fontSize: 10, color: C.muted }}>{s.sub}</div></div>)}
                </div>
                <button onClick={() => { setStage(0); setComplete(false); }} style={{ width: "100%", background: C.teal, color: "#fff", border: "none", borderRadius: 14, padding: 14, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>Luyện lại từ đầu</button>
              </div>
            ) : <BloomContent key={`${lessonId}-${stage}`} items={bloom.items} emoji={lesson.emoji} stage={stage} onNext={() => setStage(s => s+1)} onComplete={() => setComplete(true)} pinyinOn={pinyinOn} />}
          </div>
        </>
      )}
    </div>
  );
}
