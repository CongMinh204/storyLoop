import { useState, useRef } from "react";
import { ArrowLeft, Eye, EyeOff, Lightbulb } from "lucide-react";
import { C } from "../../lib/colors";
import { STORY_TURNS } from "../../data/stories/ngoc-hoang";
import type { ChatChoice, ChatTurn } from "../../types";
import { SituationBubble, NpcBubble, NpcReplyBubble, PlayerBubble, AnalysisBubble } from "./ChatBubbles";
import { ResultScreen } from "./ResultScreen";

type ChatMsg =
  | { type: "situation"; text: string }
  | { type: "npc"; turn: ChatTurn; pinyinOn: boolean }
  | { type: "player"; choice: ChatChoice; pinyinOn: boolean }
  | { type: "analysis"; choice: ChatChoice }
  | { type: "npcReply"; text: string }
  | { type: "result"; score: number; total: number };

export function ChatStoryEngine({ onHome, sidePanel }: { onHome: () => void; sidePanel?: React.ReactNode }) {
  const [turn, setTurn] = useState(0);
  const [messages, setMessages] = useState<ChatMsg[]>([
    { type: "situation", text: STORY_TURNS[0].situation },
    { type: "npc", turn: STORY_TURNS[0], pinyinOn: true },
  ]);
  const [chosen, setChosen] = useState<number | null>(null);
  const [pinyinOn, setPinyinOn] = useState(true);
  const [hintOpen, setHintOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const currentTurn = STORY_TURNS[turn];
  const waiting = chosen === null && !finished;

  function scrollBottom() {
    setTimeout(() => scrollRef.current?.scrollTo({ top: 99999, behavior: "smooth" }), 60);
  }

  function handleChoose(idx: number) {
    if (chosen !== null) return;
    const c = currentTurn.choices[idx];
    const newScore = score + (c.correct ? 1 : 0);
    setChosen(idx);
    setScore(newScore);
    setHintOpen(false);

    const playerMsg: ChatMsg = { type: "player", choice: c, pinyinOn };
    const analysisMsg: ChatMsg = { type: "analysis", choice: c };
    const replyMsg: ChatMsg = { type: "npcReply", text: c.correct ? currentTurn.replyCorrect : currentTurn.replyWrong };

    setMessages(m => [...m, playerMsg, analysisMsg, replyMsg]);
    scrollBottom();

    // after a beat, add next turn or result
    setTimeout(() => {
      const nextTurn = turn + 1;
      if (nextTurn >= STORY_TURNS.length) {
        setMessages(m => [...m, { type: "result", score: newScore, total: STORY_TURNS.length }]);
        setFinished(true);
      } else {
        const next = STORY_TURNS[nextTurn];
        setMessages(m => [...m,
          { type: "situation", text: next.situation },
          { type: "npc", turn: next, pinyinOn },
        ]);
        setTurn(nextTurn);
        setChosen(null);
      }
      scrollBottom();
    }, 900);
  }

  function restart() {
    setTurn(0); setChosen(null); setScore(0); setFinished(false); setHintOpen(false);
    setMessages([
      { type: "situation", text: STORY_TURNS[0].situation },
      { type: "npc", turn: STORY_TURNS[0], pinyinOn: true },
    ]);
    setTimeout(() => scrollRef.current?.scrollTo({ top: 0, behavior: "auto" }), 50);
  }

  const pct = Math.round(((turn + (chosen !== null ? 1 : 0)) / STORY_TURNS.length) * 100);

  return (
    <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
      {/* Main chat column */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: "#f0f2f7" }}>
        {/* Header */}
        <div style={{ background: C.white, padding: "10px 14px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0, borderBottom: `0.5px solid ${C.border}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
            <button onClick={onHome} style={{ background: "none", border: "none", cursor: "pointer", color: C.muted, display: "flex", padding: 4 }}><ArrowLeft size={19} /></button>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: "#6c3fc522", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🏯</div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: C.dark }}>Thử thách của Ngọc Hoàng</div>
              <div style={{ fontSize: 10, color: C.muted }}>Lượt {Math.min(turn + 1, STORY_TURNS.length)}/{STORY_TURNS.length} · HSK 1</div>
            </div>
          </div>
          <button onClick={() => setPinyinOn(v => !v)} style={{ background: pinyinOn ? C.purpleBg : C.bg, border: `0.5px solid ${pinyinOn ? "#ddd8f9" : C.border}`, borderRadius: 20, padding: "5px 10px", fontSize: 10, color: pinyinOn ? C.purple : C.muted, cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", gap: 4 }}>
            {pinyinOn ? <Eye size={10} /> : <EyeOff size={10} />} Pinyin
          </button>
        </div>
        {/* Progress */}
        <div style={{ height: 3, background: C.border, flexShrink: 0 }}>
          <div style={{ height: 3, background: C.purple, width: `${pct}%`, transition: "width .5s ease" }} />
        </div>

        {/* Message stream */}
        <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "14px 13px", display: "flex", flexDirection: "column", gap: 10 }}>
          {messages.map((msg, i) => {
            if (msg.type === "situation") return <SituationBubble key={i} text={msg.text} />;
            if (msg.type === "npc") return <NpcBubble key={i} turn={msg.turn} pinyinOn={pinyinOn} />;
            if (msg.type === "player") return <PlayerBubble key={i} choice={msg.choice} pinyinOn={pinyinOn} />;
            if (msg.type === "analysis") return <AnalysisBubble key={i} choice={msg.choice} />;
            if (msg.type === "npcReply") return <NpcReplyBubble key={i} text={msg.text} emoji={currentTurn.emoji} />;
            if (msg.type === "result") return (
              <ResultScreen key={i} score={msg.score} total={msg.total} onRestart={restart} onHome={onHome} />
            );
            return null;
          })}

          {/* Live hint button */}
          {waiting && !finished && (
            <>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button onClick={() => setHintOpen(v => !v)} style={{ display: "flex", alignItems: "center", gap: 5, background: hintOpen ? "#fffbf0" : C.bg, border: `0.5px solid ${hintOpen ? "#fde8c0" : C.border}`, borderRadius: 20, padding: "5px 13px", fontSize: 10, color: hintOpen ? "#7a5c1e" : C.muted, cursor: "pointer", fontFamily: "inherit" }}>
                  <Lightbulb size={11} color={hintOpen ? "#f5a623" : C.muted} /> {hintOpen ? "Ẩn gợi ý" : "Gợi ý"}
                </button>
              </div>
              {hintOpen && (
                <div style={{ background: "#fffbf0", border: "0.5px solid #fde8c0", borderRadius: 12, padding: "10px 13px", fontSize: 11, color: "#7a5c1e", lineHeight: 1.65 }}>
                  💡 {currentTurn.hint}
                </div>
              )}
            </>
          )}
        </div>

        {/* Choice bar */}
        {waiting && (
          <div style={{ background: C.white, borderTop: `0.5px solid ${C.border}`, padding: "10px 13px 14px", flexShrink: 0 }}>
            <div style={{ fontSize: 10, color: C.muted, fontWeight: 600, marginBottom: 8, letterSpacing: ".04em" }}>CHỌN CÂU TRẢ LỜI:</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {currentTurn.choices.map((c, i) => (
                <button key={i} onClick={() => handleChoose(i)}
                  style={{ background: C.bg, border: `0.5px solid ${C.border}`, borderRadius: 13, padding: "10px 13px", cursor: "pointer", textAlign: "left", fontFamily: "inherit", transition: "all .12s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.purpleBg; e.currentTarget.style.borderColor = C.purple; }}
                  onMouseLeave={e => { e.currentTarget.style.background = C.bg; e.currentTarget.style.borderColor = C.border; }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <span style={{ width: 20, height: 20, borderRadius: "50%", background: C.white, border: `0.5px solid ${C.border}`, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: C.muted, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>{String.fromCharCode(65 + i)}</span>
                    <div>
                      <div style={{ fontSize: 13, color: C.dark, lineHeight: 1.5 }}>{c.zh}</div>
                      {pinyinOn && <div style={{ fontSize: 10, color: C.faint, marginTop: 2 }}>{c.py}</div>}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Optional side panel (desktop) */}
      {sidePanel}
    </div>
  );
}
