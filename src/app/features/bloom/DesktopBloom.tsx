import { useState, useRef, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { C } from "../../lib/colors";
import { DesktopTopbar } from "../../layouts/desktop/DesktopChrome";
import { BloomContent } from "./BloomContent";
import { FlashcardScreen } from "../flashcard/FlashcardScreen";
import { LESSONS } from "../../data/lessons";
import { StoryPicker } from "../practice/StoryPicker";
import { ModeSwitch, type PracticeMode } from "../practice/ModeSwitch";
import { BloomStepper } from "../practice/BloomStepper";
import { getPractice, setBloomDone, setBloomStage, usePracticeProgress } from "../practice/practiceProgress";
import { lastPlayedLessonId, metaLine } from "../practice/lessonStatus";

// Phòng tập (desktop): cột trái chọn truyện, bên phải là khung luyện với tab Bloom / Flashcard.
export function DesktopBloomScreen() {
  const progress = usePracticeProgress();
  const [lessonId, setLessonId] = useState(() => lastPlayedLessonId(LESSONS, progress) ?? LESSONS[0].id);
  const lesson = LESSONS.find(l => l.id === lessonId)!;
  const bloom = lesson.bloom;
  const [mode, setMode] = useState<PracticeMode>(bloom ? "bloom" : "flashcard");
  const [stage, setStage] = useState(() => getPractice(lessonId)?.bloomStage ?? 0), [complete, setComplete] = useState(false);
  const [pinyinOn, setPinyinOn] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => { scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" }); }, [stage]);

  // Đổi bài: Bloom tiếp tục ở cấp đã lưu; bài không có Bloom (HSK1) thì chuyển sang Flashcard
  function pickLesson(id: string) {
    const next = LESSONS.find(l => l.id === id)!;
    setLessonId(id); setStage(getPractice(id)?.bloomStage ?? 0); setComplete(false);
    setMode(m => (m === "bloom" && !next.bloom ? "flashcard" : m));
  }
  const showBloom = mode === "bloom" && !!bloom;

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <DesktopTopbar title="Phòng tập" />
      <div style={{ flex: 1, display: "flex", minHeight: 0 }}>
        {/* Chọn truyện */}
        <aside aria-label="Danh sách truyện" style={{ width: 320, flexShrink: 0, display: "flex", flexDirection: "column", background: C.surface, borderRight: `0.5px solid ${C.border}`, minHeight: 0 }}>
          <StoryPicker lessons={LESSONS} selectedId={lessonId} onSelect={pickLesson} />
        </aside>

        {/* Khung luyện */}
        <section aria-label={`Luyện: ${lesson.title}`} style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 28px", background: C.surface, borderBottom: `0.5px solid ${C.border}`, flexShrink: 0 }}>
            <span aria-hidden style={{ width: 44, height: 44, borderRadius: 14, background: C.primaryBg, border: `1px solid ${C.primaryBorder}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{lesson.emoji}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <h1 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: C.ink, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{lesson.title}</h1>
              <p style={{ margin: "2px 0 0", fontSize: 12, color: C.inkMuted }}>HSK {lesson.hsk} · {metaLine(lesson)}</p>
            </div>
            {showBloom && (
              <button type="button" aria-pressed={pinyinOn} onClick={() => setPinyinOn(v => !v)} style={{ display: "flex", alignItems: "center", gap: 5, background: pinyinOn ? C.inkBg : C.bg, border: `0.5px solid ${pinyinOn ? C.inkBorder : C.border}`, borderRadius: 20, padding: "6px 13px", fontSize: 12, color: pinyinOn ? C.ink : C.inkMuted, cursor: "pointer", fontFamily: "inherit", fontWeight: 500 }}>
                {pinyinOn ? <Eye size={13} /> : <EyeOff size={13} />} {pinyinOn ? "Pinyin: Bật" : "Pinyin: Tắt"}
              </button>
            )}
            <div style={{ width: 240, flexShrink: 0 }}><ModeSwitch mode={mode} bloomEnabled={!!bloom} onChange={setMode} /></div>
          </div>

          {!showBloom || !bloom ? (
            <FlashcardScreen key={lessonId} lessonId={lessonId} cards={lesson.cards} topics={lesson.topics ?? null} hsk={lesson.hsk} title={lesson.title} />
          ) : (
            <>
              <div style={{ padding: "16px 28px 0", flexShrink: 0 }}>
                <div style={{ maxWidth: 600, margin: "0 auto" }}><BloomStepper stage={stage} complete={complete} /></div>
              </div>
              <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "20px 28px 28px", background: C.bg }}>
                <div style={{ maxWidth: 600, margin: "0 auto" }}>
                  {complete ? (
                    <div style={{ textAlign: "center", paddingTop: 40 }}>
                      <div style={{ fontSize: 72, marginBottom: 16 }}>🏆</div>
                      <div style={{ fontSize: 22, fontWeight: 700, color: C.ink, marginBottom: 8 }}>Hoàn thành cả 4 cấp độ!</div>
                      <div style={{ fontSize: 13, color: C.inkMuted, marginBottom: 28 }}>Bạn đã thành thạo từ vựng {bloom.doneLong}</div>
                      <div style={{ display: "flex", justifyContent: "center", gap: 14, marginBottom: 28 }}>
                        {[{ val: "+40", sub: "XP kiếm được", bg: C.rewardBg, bdr: C.rewardBorder, col: C.rewardDeep }, { val: `${bloom.words}`, sub: "Từ đã nắm", bg: C.inkBg, bdr: C.inkBorder, col: C.ink }, { val: "Bloom 4", sub: "Cấp độ đạt", bg: C.primaryBg, bdr: C.primaryBorder, col: C.primary }].map((s, i) => <div key={i} style={{ background: s.bg, border: `0.5px solid ${s.bdr}`, borderRadius: 14, padding: "14px 24px", textAlign: "center" }}><div style={{ fontSize: 20, fontWeight: 700, color: s.col }}>{s.val}</div><div style={{ fontSize: 10, color: C.inkMuted, marginTop: 3 }}>{s.sub}</div></div>)}
                      </div>
                      <button onClick={() => { setStage(0); setComplete(false); setBloomStage(lessonId, 0); }} style={{ background: C.primaryDeep, color: C.onFill, border: "none", borderRadius: 14, padding: "14px 40px", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>Luyện lại từ đầu</button>
                    </div>
                  ) : <BloomContent key={`${lessonId}-${stage}`} items={bloom.items} emoji={lesson.emoji} stage={stage} onNext={() => { setStage(stage + 1); setBloomStage(lessonId, stage + 1); }} onComplete={() => { setComplete(true); setBloomDone(lessonId); }} pinyinOn={pinyinOn} />}
                </div>
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
}
