import { useState, useEffect } from "react";
import { Brain, Coffee, Bolt, Pencil, Zap, Eye } from "lucide-react";
import { C } from "../../lib/colors";
import { BLOOM_STAGES, BLOOM_DATA } from "../../data/bloom";

export function BloomContent({ stage, onNext, onComplete, pinyinOn = true }: { stage: number; onNext: () => void; onComplete: () => void; pinyinOn?: boolean }) {
  const data = BLOOM_DATA[stage], meta = BLOOM_STAGES[stage], xp = (stage + 1) * 10;
  const [answered, setAnswered] = useState(false);
  const [chosen, setChosen] = useState<number | null>(null);
  const [fillVal, setFillVal] = useState(""), [fillState, setFillState] = useState<"idle"|"correct"|"wrong">("idle");
  const [writeVal, setWriteVal] = useState(""), [writeState, setWriteState] = useState<"idle"|"correct"|"wrong">("idle");
  const [feedback, setFeedback] = useState<{ ok: boolean; text: string } | null>(null);

  useEffect(() => {
    setAnswered(false); setChosen(null); setFillVal(""); setFillState("idle");
    setWriteVal(""); setWriteState("idle"); setFeedback(null);
  }, [stage]);

  // Strip "(pinyin)" annotations when pinyin is off
  const stripPy = (s: string) => pinyinOn ? s : s.replace(/\s*\([^)]*\)/g, "");

  const card: React.CSSProperties = { background: C.dSurface, borderRadius: 14, padding: "18px 16px", textAlign: "center", border: `0.5px solid ${C.dBorder}`, marginBottom: 12 };

  function answerMCQ(idx: number) {
    if (answered) return;
    setAnswered(true); setChosen(idx);
    const correct = (data as any).correct;
    setFeedback(idx === correct
      ? { ok: true,  text: `<strong>Chính xác!</strong> ${(data as any).explain}` }
      : { ok: false, text: `<strong>Chưa đúng.</strong> ${(data as any).explain}` });
  }

  function checkFill() {
    if (answered) return;
    const d = data as typeof BLOOM_DATA[2];
    if (fillVal.includes(d.ans)) { setFillState("correct"); setAnswered(true); setFeedback({ ok: true, text: `<strong>Xuất sắc!</strong> ${d.explain}` }); }
    else { setFillState("wrong"); setFeedback({ ok: false, text: `<strong>Thử lại!</strong> Đáp án: <strong>${d.ans}</strong>` }); setTimeout(() => { setFillState("idle"); setFillVal(""); setFeedback(null); }, 1200); }
  }

  function checkWrite() {
    const d = data as typeof BLOOM_DATA[3];
    if (d.check(writeVal)) { setWriteState("correct"); setAnswered(true); setFeedback({ ok: true, text: d.explain.replace(/\n/g, "<br>") }); }
    else { setWriteState("wrong"); setFeedback({ ok: false, text: "<strong>Hãy dùng từ 证明 trong câu!</strong>" }); setTimeout(() => setWriteState("idle"), 1000); }
  }

  function showHint() {
    setAnswered(true);
    if (data.type === "dùng") setFeedback({ ok: false, text: `Đáp án: <strong>${(data as typeof BLOOM_DATA[2]).ans}</strong> — ${(data as typeof BLOOM_DATA[2]).explain}` });
    if (data.type === "viết") setFeedback({ ok: true, text: (data as typeof BLOOM_DATA[3]).explain.replace(/\n/g, "<br>") });
  }

  const MCQOpts = (data as any).opts, MCQCorrect = (data as any).correct;
  const inp: React.CSSProperties = { width: "100%", borderRadius: 10, padding: "11px 13px", fontSize: 14, color: C.dText, outline: "none", fontFamily: "inherit", boxSizing: "border-box" };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, borderRadius: 20, padding: "5px 12px", fontSize: 11, fontWeight: 600, background: meta.bg, border: `0.5px solid ${meta.border}`, color: meta.color }}>
          {stage === 0 && <Brain size={12} />}{stage === 1 && <Coffee size={12} />}{stage === 2 && <Bolt size={12} />}{stage === 3 && <Pencil size={12} />}
          {data.type === "nhớ" ? "Kiểm tra trí nhớ" : data.type === "hiểu" ? "Hiểu ngữ cảnh" : data.type === "dùng" ? "Áp dụng tình huống" : "Tự tạo câu"}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 4, background: C.greenBg, border: `0.5px solid ${C.greenBorder}`, borderRadius: 20, padding: "4px 9px", fontSize: 10, color: C.greenDim, fontWeight: 600 }}>
          <Zap size={11} /> +{xp} XP
        </div>
      </div>

      {data.type === "nhớ" && <div style={card}><div style={{ fontSize: 10, color: C.dSub, marginBottom: 6 }}>🏯 {data.story}</div><div style={{ fontSize: 11, color: C.dSub, marginBottom: 12 }}>{data.q}</div><div style={{ fontSize: 56, color: C.dText, lineHeight: 1, marginBottom: 6 }}>{data.char}</div>{pinyinOn && <div style={{ fontSize: 13, fontWeight: 600, color: data.pinyinColor }}>{data.pinyin}</div>}</div>}
      {data.type === "hiểu" && <div style={card}><div style={{ fontSize: 10, color: C.dSub, marginBottom: 6 }}>🏯 {data.story}</div><div style={{ fontSize: 11, color: C.dSub, marginBottom: 12 }}>{data.q}</div><div style={{ fontSize: 15, color: C.dText, lineHeight: 1.5, marginBottom: 4 }}>{stripPy(data.sent)}</div><div style={{ fontSize: 11, color: C.dSub }}>{data.sentVi}</div></div>}

      {(data.type === "nhớ" || data.type === "hiểu") && (
        <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 12 }}>
          {MCQOpts.map((opt: string, i: number) => {
            const isC = i === MCQCorrect, isCh = chosen === i;
            let bg = C.dSurface, border = C.dBorder, color = C.dText;
            if (answered && isC) { bg = C.greenBg; border = C.greenDim; color = C.greenDim; }
            else if (answered && isCh && !isC) { bg = C.redBg; border = C.red; color = C.red; }
            return (
              <button key={i} onClick={() => answerMCQ(i)} disabled={answered} style={{ background: bg, border: `0.5px solid ${border}`, borderRadius: 12, padding: "11px 13px", cursor: answered ? "default" : "pointer", fontSize: 12, color, textAlign: "left", display: "flex", alignItems: "center", justifyContent: "space-between", fontFamily: "inherit" }}
                onMouseEnter={e => { if (!answered) e.currentTarget.style.borderColor = C.teal; }}
                onMouseLeave={e => { if (!answered) e.currentTarget.style.borderColor = C.dBorder; }}>
                <div>{data.type === "hiểu" ? <><div style={{ fontSize: 12, marginBottom: 2 }}>{opt}</div><div style={{ fontSize: 10, color: C.dSub }}>{(data as typeof BLOOM_DATA[1]).optsVi[i]}</div></> : opt}</div>
                {answered && isC && <span style={{ fontSize: 14 }}>✓</span>}
                {answered && isCh && !isC && <span style={{ fontSize: 14 }}>✗</span>}
              </button>
            );
          })}
        </div>
      )}

      {data.type === "dùng" && (<><div style={card}><div style={{ fontSize: 10, color: C.dSub, marginBottom: 6 }}>🏯 {data.story}</div><div style={{ fontSize: 11, color: C.dSub }}>{data.q}</div></div><div style={{ background: C.white, borderRadius: 12, padding: "11px 13px", border: `0.5px solid ${C.dBorder}`, fontSize: 11, color: C.dSub, lineHeight: 1.65, marginBottom: 12 }}>{(data as typeof BLOOM_DATA[2]).prompt.split("\n").map((l, i) => <span key={i}>{stripPy(l)}<br /></span>)}<br /><strong style={{ color: C.dText, fontSize: 13 }}>{(data as typeof BLOOM_DATA[2]).tmpl}</strong><br /><span style={{ fontSize: 10 }}>{(data as typeof BLOOM_DATA[2]).tmplVi}</span></div><div style={{ marginBottom: 12 }}><div style={{ fontSize: 10, color: C.dSub, marginBottom: 6 }}>Điền vào chỗ trống (___)</div><input value={fillVal} onChange={e => setFillVal(e.target.value)} placeholder={stripPy((data as typeof BLOOM_DATA[2]).hint)} style={{ ...inp, background: fillState === "correct" ? C.greenBg : fillState === "wrong" ? C.redBg : C.dSurface, border: `0.5px solid ${fillState === "correct" ? C.greenDim : fillState === "wrong" ? C.red : C.dBorder}` }} /></div></>)}

      {data.type === "viết" && (<><div style={card}><div style={{ fontSize: 10, color: C.dSub, marginBottom: 6 }}>🏯 {data.story}</div><div style={{ fontSize: 11, color: C.dSub, marginBottom: 10 }}>{stripPy(data.q)}</div><div style={{ fontSize: 15, color: C.dText, lineHeight: 1.5, marginBottom: 3 }}>{pinyinOn ? "证明 (zhèngmíng)" : "证明"}</div><div style={{ fontSize: 11, color: C.dSub }}>chứng minh — xác nhận điều gì đó là sự thật</div></div><div style={{ background: C.white, borderRadius: 12, padding: "11px 13px", border: `0.5px solid ${C.dBorder}`, fontSize: 11, color: C.dSub, lineHeight: 1.65, marginBottom: 12 }}>{(data as typeof BLOOM_DATA[3]).prompt}</div><div style={{ marginBottom: 12 }}><div style={{ fontSize: 10, color: C.dSub, marginBottom: 6 }}>Câu của bạn:</div><textarea value={writeVal} onChange={e => setWriteVal(e.target.value)} rows={3} placeholder={(data as typeof BLOOM_DATA[3]).ph} style={{ ...inp, background: writeState === "correct" ? C.greenBg : writeState === "wrong" ? C.redBg : C.dSurface, border: `0.5px solid ${writeState === "correct" ? C.greenDim : writeState === "wrong" ? C.red : C.dBorder}`, resize: "none" }} /></div></>)}

      {feedback && <div style={{ borderRadius: 12, padding: "11px 13px", marginBottom: 12, fontSize: 11, lineHeight: 1.6, background: feedback.ok ? C.greenBg : C.redBg, border: `0.5px solid ${feedback.ok ? C.greenBorder : C.redBorder}`, color: feedback.ok ? C.greenDim : "#f09595" }} dangerouslySetInnerHTML={{ __html: feedback.text }} />}

      <div style={{ display: "flex", gap: 8 }}>
        {(data.type === "dùng" || data.type === "viết") && !answered && <button onClick={showHint} style={{ background: C.dSurface, color: C.muted, border: `0.5px solid ${C.dBorder}`, borderRadius: 12, padding: "12px 14px", fontSize: 11, cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", gap: 4 }}><Eye size={13} /></button>}
        {!answered && (data.type === "nhớ" || data.type === "hiểu") ? null : !answered
          ? <button onClick={data.type === "dùng" ? checkFill : checkWrite} style={{ flex: 1, background: C.teal, color: "#fff", border: "none", borderRadius: 12, padding: 13, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>{data.type === "dùng" ? "Kiểm tra ✓" : "Nộp bài ✓"}</button>
          : <button onClick={stage < 3 ? onNext : onComplete} style={{ flex: 1, background: C.teal, color: "#fff", border: "none", borderRadius: 12, padding: 13, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>{stage < 3 ? "Tiếp theo →" : "Hoàn thành 🏆"}</button>}
      </div>
    </div>
  );
}
