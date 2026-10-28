import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronLeft, Eye, EyeOff } from "lucide-react";
import { C, CTA_SHADOW } from "../../lib/colors";
import { BLOOM_STAGES } from "../../data/bloom";
import { BloomContent } from "./BloomContent";
import { FlashcardScreen } from "../flashcard/FlashcardScreen";
import { LESSONS } from "../../data/lessons";
import { StoryPicker } from "../practice/StoryPicker";
import { ModeSwitch, type PracticeMode } from "../practice/ModeSwitch";
import { BloomStepper } from "../practice/BloomStepper";
import { BottomSheet, ModeSheet } from "../practice/BottomSheet";
import { getPractice, setBloomDone, setBloomStage, usePracticeProgress } from "../practice/practiceProgress";
import { lastPlayedLessonId, summarize } from "../practice/lessonStatus";

// Phòng tập (mobile): trang danh sách truyện → bảng chọn Bloom / Flashcard → màn luyện.
// Trong màn luyện vẫn đổi được truyện (nút tên truyện) và đổi chế độ (tab) mà không phải quay lại.
export function MobileBloomScreen() {
  const progress = usePracticeProgress();
  const [view, setView] = useState<"list" | "practice">("list");
  const [pendingId, setPendingId] = useState<string | null>(null);   // truyện vừa chọn, đang hiện bảng chọn chế độ
  const [switching, setSwitching] = useState(false);                 // bảng "Đổi truyện" trong màn luyện
  const [lessonId, setLessonId] = useState(LESSONS[0].id);
  const [mode, setMode] = useState<PracticeMode>("bloom");
  const [stage, setStage] = useState(0), [complete, setComplete] = useState(false);
  const [pinyinOn, setPinyinOn] = useState(true);
  const lesson = LESSONS.find(l => l.id === lessonId)!;
  const bloom = lesson.bloom;
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => { scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" }); }, [stage]);

  function open(id: string, m: PracticeMode) {
    setLessonId(id); setMode(m); setStage(getPractice(id)?.bloomStage ?? 0); setComplete(false);
    setPendingId(null); setSwitching(false); setView("practice");
  }
  const showBloom = mode === "bloom" && !!bloom;

  // Thẻ "Đang học dở": bài luyện gần nhất chưa xong
  const resumeId = lastPlayedLessonId(LESSONS, progress);
  const resume = resumeId ? LESSONS.find(l => l.id === resumeId) : undefined;
  const resumeSum = resume ? summarize(resume, progress[resume.id]) : undefined;
  const showResume = !!resume && !!resumeSum && resumeSum.started && resumeSum.kind !== "done";

  const pending = pendingId ? LESSONS.find(l => l.id === pendingId) : undefined;

  if (view === "list") {
    return (
      <div style={{ flex: 1, position: "relative", display: "flex", flexDirection: "column", overflow: "hidden", background: C.bg }}>
        <header style={{ background: C.surface, borderBottom: `0.5px solid ${C.border}`, padding: "16px 16px 12px", flexShrink: 0 }}>
          <h1 style={{ margin: 0, fontSize: 22, fontWeight: 800, lineHeight: 1.2, color: C.ink }}>Phòng tập</h1>
          <p style={{ margin: "2px 0 0", fontSize: 13, color: C.inkMuted }}>Chọn một truyện để ôn từ vựng</p>
        </header>
        <div style={{ paddingTop: 12, flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>
          <StoryPicker lessons={LESSONS} touch onSelect={setPendingId}
            aboveList={showResume && resume && resumeSum ? (
              <section aria-label="Tiếp tục luyện" style={{ boxSizing: "border-box", background: C.surface, border: `0.5px solid ${C.border}`, borderRadius: 20, padding: 16, margin: "8px 0 4px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span aria-hidden style={{ flex: "0 0 52px", height: 52, borderRadius: 16, background: C.primaryBg, border: `1px solid ${C.primaryBorder}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26 }}>{resume.emoji}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ margin: 0, fontSize: 12, fontWeight: 700, color: C.primaryText }}>Đang học dở</p>
                    <p style={{ margin: "2px 0 0", fontSize: 16, fontWeight: 700, lineHeight: 1.3, color: C.ink }}>{resume.title}</p>
                    <p style={{ margin: "2px 0 0", fontSize: 12, color: C.inkMuted }}>{resumeSum.bloomStarted ? `Bloom · cấp ${progress[resume.id].bloomStage + 1}/4 ${BLOOM_STAGES[progress[resume.id].bloomStage].label}` : resumeSum.flashLabel}</p>
                  </div>
                </div>
                {resumeSum.bloomStarted && (
                  <div role="progressbar" aria-label="Tiến độ Bloom" aria-valuenow={progress[resume.id].bloomStage} aria-valuemin={0} aria-valuemax={4} style={{ height: 6, borderRadius: 9999, background: C.border, marginTop: 14 }}>
                    <div style={{ width: `${(progress[resume.id].bloomStage / 4) * 100}%`, height: 6, borderRadius: 9999, background: C.primary }} />
                  </div>
                )}
                <button type="button" onClick={() => open(resume.id, resumeSum.bloomStarted ? "bloom" : "flashcard")}
                  style={{ width: "100%", height: 56, marginTop: 14, border: 0, borderRadius: 9999, background: C.cta, color: C.onFill, fontSize: 19, fontWeight: 700, boxShadow: CTA_SHADOW, cursor: "pointer", fontFamily: "inherit" }}>Tiếp tục</button>
              </section>
            ) : undefined} />
        </div>
        {pending && <ModeSheet lesson={pending} summary={summarize(pending, progress[pending.id])} onPick={m => open(pending.id, m)} onClose={() => setPendingId(null)} />}
      </div>
    );
  }

  return (
    <div style={{ flex: 1, position: "relative", display: "flex", flexDirection: "column", overflow: "hidden", background: C.bg }}>
      <div style={{ background: C.surface, borderBottom: `0.5px solid ${C.border}`, padding: "8px 12px 12px", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button type="button" aria-label="Về danh sách truyện" onClick={() => setView("list")} style={{ flex: "0 0 44px", height: 44, border: 0, borderRadius: 9999, background: "none", color: C.ink, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><ChevronLeft size={22} /></button>
          <button type="button" aria-label={`Đổi truyện: ${lesson.title}`} aria-haspopup="dialog" onClick={() => setSwitching(true)}
            style={{ flex: 1, minWidth: 0, display: "flex", alignItems: "center", gap: 8, height: 44, padding: "0 14px", borderRadius: 9999, border: `0.5px solid ${C.borderStrong}`, background: C.bg, color: C.ink, cursor: "pointer", textAlign: "left", fontFamily: "inherit" }}>
            <span aria-hidden style={{ fontSize: 18 }}>{lesson.emoji}</span>
            <span style={{ flex: 1, minWidth: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontSize: 14, fontWeight: 700 }}>{lesson.title}</span>
            <ChevronDown size={16} color={C.inkMuted} aria-hidden style={{ flexShrink: 0 }} />
          </button>
          {showBloom && (
            <button type="button" aria-pressed={pinyinOn} aria-label={`Pinyin: ${pinyinOn ? "bật" : "tắt"}`} onClick={() => setPinyinOn(v => !v)} style={{ flex: "0 0 44px", height: 44, border: 0, borderRadius: 9999, background: pinyinOn ? C.inkBg : C.bg, color: pinyinOn ? C.ink : C.inkMuted, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              {pinyinOn ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          )}
        </div>
        <div style={{ marginTop: 10 }}><ModeSwitch touch mode={mode} bloomEnabled={!!bloom} onChange={setMode} /></div>
        {showBloom && (
          <div style={{ marginTop: 10 }}>
            <BloomStepper compact stage={stage} complete={complete} />
          </div>
        )}
      </div>

      {!showBloom || !bloom ? (
        <FlashcardScreen key={lessonId} compact lessonId={lessonId} cards={lesson.cards} topics={lesson.topics ?? null} hsk={lesson.hsk} title={lesson.title} />
      ) : (
        <>
          <div style={{ height: 3, background: C.border, flexShrink: 0 }}><div style={{ height: 3, background: C.primary, width: `${Math.round(((stage + 1) / 4) * 100)}%`, transition: "width .35s" }} /></div>
          <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "16px 16px 28px", background: C.bg }}>
            {complete ? (
              <div style={{ textAlign: "center", paddingTop: 24 }}>
                <div style={{ fontSize: 64, marginBottom: 12 }}>🏆</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: C.ink, marginBottom: 6 }}>Hoàn thành 4 cấp độ!</div>
                <div style={{ fontSize: 12, color: C.inkMuted, marginBottom: 22 }}>Bạn đã thành thạo từ vựng {bloom.doneShort}</div>
                <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 22 }}>
                  {[{ val: "+40", sub: "XP kiếm được", bg: C.rewardBg, bdr: C.rewardBorder, col: C.rewardDeep }, { val: `${bloom.words}`, sub: "Từ đã nắm", bg: C.inkBg, bdr: C.inkBorder, col: C.ink }].map((s, i) => <div key={i} style={{ background: s.bg, border: `0.5px solid ${s.bdr}`, borderRadius: 14, padding: "12px 22px", textAlign: "center" }}><div style={{ fontSize: 22, fontWeight: 700, color: s.col }}>{s.val}</div><div style={{ fontSize: 10, color: C.inkMuted }}>{s.sub}</div></div>)}
                </div>
                <button onClick={() => { setStage(0); setComplete(false); setBloomStage(lessonId, 0); }} style={{ width: "100%", background: C.primaryDeep, color: C.onFill, border: "none", borderRadius: 14, padding: 14, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>Luyện lại từ đầu</button>
              </div>
            ) : <BloomContent key={`${lessonId}-${stage}`} items={bloom.items} emoji={lesson.emoji} stage={stage} onNext={() => { setStage(stage + 1); setBloomStage(lessonId, stage + 1); }} onComplete={() => { setComplete(true); setBloomDone(lessonId); }} pinyinOn={pinyinOn} />}
          </div>
        </>
      )}

      {switching && (
        <BottomSheet label="Đổi truyện" tall onClose={() => setSwitching(false)}>
          <h2 style={{ margin: "0 16px 10px", fontSize: 18, fontWeight: 800, color: C.ink }}>Đổi truyện</h2>
          <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>
            <StoryPicker lessons={LESSONS} touch selectedId={lessonId} onSelect={id => open(id, mode === "bloom" && !LESSONS.find(l => l.id === id)!.bloom ? "flashcard" : mode)} />
          </div>
        </BottomSheet>
      )}
    </div>
  );
}
