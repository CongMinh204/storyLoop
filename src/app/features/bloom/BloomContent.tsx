import { useState, useEffect } from "react";
import { Brain, Coffee, Bolt, Pencil, Zap, Eye } from "lucide-react";
import { C } from "../../lib/colors";
import { BLOOM_STAGES } from "../../data/bloom";
import type { BloomSet, BloomDung, BloomViet, BloomHieu } from "../../types";
import { playSound, preloadSounds } from "../../lib/sound";

export function BloomContent({ items, emoji, stage, onNext, onComplete, pinyinOn = true }: { items: BloomSet["items"]; emoji: string; stage: number; onNext: () => void; onComplete: () => void; pinyinOn?: boolean }) {
  const data = items[stage], meta = BLOOM_STAGES[stage], xp = (stage + 1) * 10;
  const [answered, setAnswered] = useState(false);
  const [chosen, setChosen] = useState<number | null>(null);
  const [fillVal, setFillVal] = useState(""), [fillState, setFillState] = useState<"idle"|"correct"|"wrong">("idle");
  const [writeVal, setWriteVal] = useState(""), [writeState, setWriteState] = useState<"idle"|"correct"|"wrong">("idle");
  const [feedback, setFeedback] = useState<{ ok: boolean; text: string } | null>(null);

  useEffect(() => {
    setAnswered(false); setChosen(null); setFillVal(""); setFillState("idle");
    setWriteVal(""); setWriteState("idle"); setFeedback(null);
  }, [stage]);

  useEffect(preloadSounds, []);

  // Strip "(pinyin)" annotations when pinyin is off
  const stripPy = (s: string) => pinyinOn ? s : s.replace(/\s*\([^)]*\)/g, "");

  const card: React.CSSProperties = { background: C.surface, borderRadius: 14, padding: "18px 16px", textAlign: "center", border: `0.5px solid ${C.border}`, marginBottom: 12 };

  function answerMCQ(idx: number) {
    if (answered) return;
    setAnswered(true); setChosen(idx);
    const correct = (data as any).correct;
    playSound(idx === correct ? "right" : "wrong");
    setFeedback(idx === correct
      ? { ok: true,  text: `<strong>Chính xác!</strong> ${(data as any).explain}` }
      : { ok: false, text: `<strong>Chưa đúng.</strong> ${(data as any).explain}` });
  }

  function checkFill() {
    if (answered) return;
    const d = data as BloomDung;
    playSound(fillVal.includes(d.ans) ? "right" : "wrong");
    if (fillVal.includes(d.ans)) { setFillState("correct"); setAnswered(true); setFeedback({ ok: true, text: `<strong>Xuất sắc!</strong> ${d.explain}` }); }
    else { setFillState("wrong"); setFeedback({ ok: false, text: `<strong>Thử lại!</strong> Đáp án: <strong>${d.ans}</strong>` }); setTimeout(() => { setFillState("idle"); setFillVal(""); setFeedback(null); }, 1200); }
  }

  function checkWrite() {
    const d = data as BloomViet;
    playSound(d.check(writeVal) ? "right" : "wrong");
    if (d.check(writeVal)) { setWriteState("correct"); setAnswered(true); setFeedback({ ok: true, text: d.explain.replace(/\n/g, "<br>") }); }
    else { setWriteState("wrong"); setFeedback({ ok: false, text: `<strong>${d.missMsg}</strong>` }); setTimeout(() => setWriteState("idle"), 1000); }
  }

  function showHint() {
    setAnswered(true);
    if (data.type === "dùng") setFeedback({ ok: false, text: `Đáp án: <strong>${(data as BloomDung).ans}</strong> — ${(data as BloomDung).explain}` });
    if (data.type === "viết") setFeedback({ ok: true, text: (data as BloomViet).explain.replace(/\n/g, "<br>") });
  }

  const MCQOpts = (data as any).opts, MCQCorrect = (data as any).correct;
  const inp: React.CSSProperties = { width: "100%", borderRadius: 10, padding: "11px 13px", fontSize: 14, color: C.ink, outline: "none", fontFamily: "inherit", boxSizing: "border-box" };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, borderRadius: 20, padding: "5px 12px", fontSize: 11, fontWeight: 600, background: meta.bg, border: `0.5px solid ${meta.border}`, color: meta.color }}>
          {stage === 0 && <Brain size={12} />}{stage === 1 && <Coffee size={12} />}{stage === 2 && <Bolt size={12} />}{stage === 3 && <Pencil size={12} />}
          {data.type === "nhớ" ? "Kiểm tra trí nhớ" : data.type === "hiểu" ? "Hiểu ngữ cảnh" : data.type === "dùng" ? "Áp dụng tình huống" : "Tự tạo câu"}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 4, background: C.rewardBg, border: `0.5px solid ${C.rewardBorder}`, borderRadius: 20, padding: "4px 9px", fontSize: 10, color: C.ink, fontWeight: 600 }}>
          <Zap size={11} /> +{xp} XP
        </div>
      </div>

      {data.type === "nhớ" && <div style={card}><div style={{ fontSize: 10, color: C.inkMuted, marginBottom: 6 }}>{emoji} {data.story}</div><div style={{ fontSize: 11, color: C.inkMuted, marginBottom: 12 }}>{data.q}</div><div style={{ fontSize: 56, color: C.ink, lineHeight: 1, marginBottom: 6 }}>{data.char}</div>{pinyinOn && <div style={{ fontSize: 13, fontWeight: 600, color: data.pinyinColor }}>{data.pinyin}</div>}</div>}
      {data.type === "hiểu" && <div style={card}><div style={{ fontSize: 10, color: C.inkMuted, marginBottom: 6 }}>{emoji} {data.story}</div><div style={{ fontSize: 11, color: C.inkMuted, marginBottom: 12 }}>{data.q}</div><div style={{ fontSize: 15, color: C.ink, lineHeight: 1.5, marginBottom: 4 }}>{stripPy(data.sent)}</div><div style={{ fontSize: 11, color: C.inkMuted }}>{data.sentVi}</div></div>}

      {(data.type === "nhớ" || data.type === "hiểu") && (
        <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 12 }}>
          {MCQOpts.map((opt: string, i: number) => {
            const isC = i === MCQCorrect, isCh = chosen === i;
            let bg = C.surface, border = C.border, color = C.ink;
            if (answered && isC) { bg = C.successBg; border = C.success; color = C.success; }
            else if (answered && isCh && !isC) { bg = C.dangerBg; border = C.danger; color = C.danger; }
            return (
              <button key={i} onClick={() => answerMCQ(i)} disabled={answered} style={{ background: bg, border: `0.5px solid ${border}`, borderRadius: 12, padding: "11px 13px", cursor: answered ? "default" : "pointer", fontSize: 12, color, textAlign: "left", display: "flex", alignItems: "center", justifyContent: "space-between", fontFamily: "inherit" }}
                onMouseEnter={e => { if (!answered) e.currentTarget.style.borderColor = C.primary; }}
                onMouseLeave={e => { if (!answered) e.currentTarget.style.borderColor = C.border; }}>
                <div>{data.type === "hiểu" ? <><div style={{ fontSize: 12, marginBottom: 2 }}>{opt}</div><div style={{ fontSize: 10, color: C.inkMuted }}>{(data as BloomHieu).optsVi[i]}</div></> : opt}</div>
                {answered && isC && <span style={{ fontSize: 14 }}>✓</span>}
                {answered && isCh && !isC && <span style={{ fontSize: 14 }}>✗</span>}
              </button>
            );
          })}
        </div>
      )}

      {data.type === "dùng" && (<><div style={card}><div style={{ fontSize: 10, color: C.inkMuted, marginBottom: 6 }}>{emoji} {data.story}</div><div style={{ fontSize: 11, color: C.inkMuted }}>{data.q}</div></div><div style={{ background: C.surface, borderRadius: 12, padding: "11px 13px", border: `0.5px solid ${C.border}`, fontSize: 11, color: C.inkMuted, lineHeight: 1.65, marginBottom: 12 }}>{(data as BloomDung).prompt.split("\n").map((l, i) => <span key={i}>{stripPy(l)}<br /></span>)}<br /><strong style={{ color: C.ink, fontSize: 13 }}>{(data as BloomDung).tmpl}</strong><br /><span style={{ fontSize: 10 }}>{(data as BloomDung).tmplVi}</span></div><div style={{ marginBottom: 12 }}><div style={{ fontSize: 10, color: C.inkMuted, marginBottom: 6 }}>Điền vào chỗ trống (___)</div><input value={fillVal} onChange={e => setFillVal(e.target.value)} placeholder={stripPy((data as BloomDung).hint)} style={{ ...inp, background: fillState === "correct" ? C.successBg : fillState === "wrong" ? C.dangerBg : C.surface, border: `0.5px solid ${fillState === "correct" ? C.success : fillState === "wrong" ? C.danger : C.border}` }} /></div></>)}

      {data.type === "viết" && (<><div style={card}><div style={{ fontSize: 10, color: C.inkMuted, marginBottom: 6 }}>{emoji} {data.story}</div><div style={{ fontSize: 11, color: C.inkMuted, marginBottom: 10 }}>{stripPy(data.q)}</div><div style={{ fontSize: 15, color: C.ink, lineHeight: 1.5, marginBottom: 3 }}>{pinyinOn ? `${data.word} (${data.wordPy})` : data.word}</div><div style={{ fontSize: 11, color: C.inkMuted }}>{data.wordVi}</div></div><div style={{ background: C.surface, borderRadius: 12, padding: "11px 13px", border: `0.5px solid ${C.border}`, fontSize: 11, color: C.inkMuted, lineHeight: 1.65, marginBottom: 12 }}>{(data as BloomViet).prompt}</div><div style={{ marginBottom: 12 }}><div style={{ fontSize: 10, color: C.inkMuted, marginBottom: 6 }}>Câu của bạn:</div><textarea value={writeVal} onChange={e => setWriteVal(e.target.value)} rows={3} placeholder={(data as BloomViet).ph} style={{ ...inp, background: writeState === "correct" ? C.successBg : writeState === "wrong" ? C.dangerBg : C.surface, border: `0.5px solid ${writeState === "correct" ? C.success : writeState === "wrong" ? C.danger : C.border}`, resize: "none" }} /></div></>)}

      {feedback && <div style={{ borderRadius: 12, padding: "11px 13px", marginBottom: 12, fontSize: 11, lineHeight: 1.6, background: feedback.ok ? C.successBg : C.dangerBg, border: `0.5px solid ${feedback.ok ? C.successBorder : C.dangerBorder}`, color: feedback.ok ? C.success : C.danger }} dangerouslySetInnerHTML={{ __html: feedback.text }} />}

      <div style={{ display: "flex", gap: 8 }}>
        {(data.type === "dùng" || data.type === "viết") && !answered && <button onClick={showHint} style={{ background: C.surface, color: C.inkMuted, border: `0.5px solid ${C.border}`, borderRadius: 12, padding: "12px 14px", fontSize: 11, cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", gap: 4 }}><Eye size={13} /></button>}
        {!answered && (data.type === "nhớ" || data.type === "hiểu") ? null : !answered
          ? <button onClick={data.type === "dùng" ? checkFill : checkWrite} style={{ flex: 1, background: C.primaryDeep, color: C.onFill, border: "none", borderRadius: 12, padding: 13, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>{data.type === "dùng" ? "Kiểm tra ✓" : "Nộp bài ✓"}</button>
          : <button onClick={stage < 3 ? onNext : () => { playSound("complete"); onComplete(); }}style={{ flex: 1, background: C.primaryDeep, color: C.onFill, border: "none", borderRadius: 12, padding: 13, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>{stage < 3 ? "Tiếp theo →" : "Hoàn thành 🏆"}</button>}
      </div>
    </div>
  );
}
