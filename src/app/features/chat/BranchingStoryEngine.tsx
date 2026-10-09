import { useState, useRef, useEffect, useMemo } from "react";
import { ArrowLeft, Eye, EyeOff, FastForward } from "lucide-react";
import { C } from "../../lib/colors";
import type { BranchingStory, PickOption, StoryChoice, StoryLine, StoryNode, StoryEntry } from "../../types";
import {
  SituationBubble, NpcBubble, NarrationBubble, QuoteBubble, PlayerLineBubble,
  StructureBubble, PlayerPickBubble, PickAnalysisBubble,
} from "./ChatBubbles";
import { EndingCard } from "./EndingCard";
import { getProgress, reportProgress, markCompleted } from "../../lib/progress";

const LINE_DELAY = 550;    // ms giữa hai câu thoại
const READ_DELAY = 1800;   // ms chờ sau khi hiện phân tích, để kịp đọc
const LATIN = /[A-Za-zÀ-ỹ]/;

type PickLine = Extract<StoryLine, { kind: "pick" }>;

type Msg =
  | { type: "line"; line: StoryLine }
  | { type: "pick"; option: PickOption }
  | { type: "pickAnalysis"; option: PickOption; correct: PickOption }
  | { type: "choice"; choice: StoryChoice }
  | { type: "analysis"; choice: StoryChoice }
  | { type: "ending"; node: StoryNode };

// reveal: đang hiện từng câu · pick: chờ chọn câu của "你" · choose: chờ chọn hướng đi
// analysis: đang xem phân tích hướng đi · ended: hết truyện
type Phase = "reveal" | "pick" | "choose" | "analysis" | "ended";

// Số cảnh trên nhánh dài nhất, dùng cho thanh tiến độ
function longestPath(tree: BranchingStory): number {
  const memo: Record<string, number> = {};
  const walk = (id: string): number => {
    if (memo[id] !== undefined) return memo[id];
    memo[id] = 1; // chặn vòng lặp nếu dữ liệu lỗi
    const n = tree.nodes[id];
    const nexts = n.choices ? n.choices.map(c => c.next) : n.next ? [n.next] : [];
    return (memo[id] = 1 + Math.max(0, ...nexts.map(walk)));
  };
  return walk(tree.start);
}

export function BranchingStoryEngine({ story, tree, onHome, sidePanel }: { story: StoryEntry; tree: BranchingStory; onHome: () => void; sidePanel?: React.ReactNode }) {
  const [nodeId, setNodeId] = useState(tree.start);
  const [queue, setQueue] = useState<StoryLine[]>(tree.nodes[tree.start].lines);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [phase, setPhase] = useState<Phase>("reveal");
  const [scene, setScene] = useState(1);
  const [fast, setFast] = useState(false);
  const [pending, setPending] = useState<StoryChoice | null>(null);
  // Kết thúc đã mở: đọc từ tiến độ đã lưu để còn nguyên sau khi tải lại trang
  const [seen, setSeen] = useState<Set<string>>(() => new Set(getProgress(story.id)?.endings ?? []));
  const [score, setScore] = useState({ right: 0, total: 0 });
  const scoreRef = useRef(score);    // điểm mới nhất, dùng khi ghi hoàn thành trong effect
  const [pinyinOn, setPinyinOn] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const readPause = useRef(false);   // true ngay sau khi hiện phân tích: chờ lâu hơn trước câu kế

  const maxScenes = useMemo(() => longestPath(tree), [tree]);
  const allEndings = useMemo(() => Object.values(tree.nodes).filter(n => n.ending), [tree]);
  const node = tree.nodes[nodeId];
  const activePick = phase === "pick" ? (queue[0] as PickLine) : null;

  function scrollBottom() {
    setTimeout(() => scrollRef.current?.scrollTo({ top: 99999, behavior: "smooth" }), 60);
  }

  function goTo(id: string) {
    setNodeId(id);
    setQueue(tree.nodes[id].lines);
    setScene(s => s + 1);
    setFast(false);
    setPhase("reveal");
  }

  // Hiện từng câu của cảnh. Gặp câu "你" cần chọn thì dừng; hết câu thì chờ chọn hướng đi,
  // sang cảnh kế, hoặc kết thúc.
  useEffect(() => {
    if (phase !== "reveal") return;
    const head = queue[0];
    if (head && head.kind === "pick") {
      setPhase("pick");
      scrollBottom();
      return;
    }
    const delay = fast ? 60 : readPause.current ? READ_DELAY : queue.length > 0 ? LINE_DELAY : 250;
    const t = setTimeout(() => {
      readPause.current = false;
      if (queue.length > 0) {
        const [line, ...rest] = queue;
        setMessages(m => [...m, { type: "line", line }]);
        setQueue(rest);
      } else if (node.ending) {
        setMessages(m => [...m, { type: "ending", node }]);
        setSeen(s => new Set(s).add(node.id));
        markCompleted(story.id, { ending: node.id, score: scoreRef.current });
        setPhase("ended");
      } else if (node.choices) {
        setPhase("choose");
      } else if (node.next) {
        goTo(node.next);
      }
      scrollBottom();
    }, delay);
    return () => clearTimeout(t);
  }, [phase, queue, nodeId, fast]);

  // Chọn câu của "你": hiện câu đã chọn và phân tích, truyện tự chạy tiếp
  function handlePick(opt: PickOption) {
    if (!activePick) return;
    const correct = activePick.options.find(o => o.correct)!;
    setMessages(m => [...m, { type: "pick", option: opt }, { type: "pickAnalysis", option: opt, correct }]);
    const nextScore = { right: score.right + (opt.correct ? 1 : 0), total: score.total + 1 };
    scoreRef.current = nextScore;
    setScore(nextScore);
    reportProgress(story.id, pct);
    setQueue(q => q.slice(1));
    setFast(false);
    readPause.current = true;
    setPhase("reveal");
    scrollBottom();
  }

  // Chọn hướng đi: hiện phân tích, bấm Tiếp tục mới sang cảnh kế
  function handleChoose(c: StoryChoice) {
    if (phase !== "choose") return;
    setMessages(m => [...m, { type: "choice", choice: c }, { type: "analysis", choice: c }]);
    setPending(c);
    reportProgress(story.id, pct);
    setPhase("analysis");
    scrollBottom();
  }

  function handleContinue() {
    if (!pending) return;
    const next = pending.next;
    setPending(null);
    goTo(next);
  }

  function restart() {
    setNodeId(tree.start);
    setQueue(tree.nodes[tree.start].lines);
    setMessages([]);
    setScene(1);
    setFast(false);
    setPending(null);
    setScore({ right: 0, total: 0 });
    scoreRef.current = { right: 0, total: 0 };
    readPause.current = false;
    setPhase("reveal");
    setTimeout(() => scrollRef.current?.scrollTo({ top: 0, behavior: "auto" }), 50);
  }

  function renderLine(line: StoryLine, key: number) {
    switch (line.kind) {
      case "narration":
        return LATIN.test(line.text) ? <NarrationBubble key={key} text={line.text} /> : <SituationBubble key={key} text={line.text} />;
      case "quote":
        return <QuoteBubble key={key} zh={line.zh} py={line.py} vi={line.vi} pinyinOn={pinyinOn} />;
      case "npc":
        return <NpcBubble key={key} turn={{ ...line, emoji: tree.characters[line.speaker] ?? "💬" }} pinyinOn={pinyinOn} />;
      case "player":
        return <PlayerLineBubble key={key} zh={line.zh} py={line.py} vi={line.vi} pinyinOn={pinyinOn} />;
      case "pick":
        return null;   // luôn được xử lý qua handlePick, không hiện trực tiếp
    }
  }

  // Thanh lựa chọn dùng chung cho câu của "你" và hướng đi
  const options: { label?: string; zh: string; py: string; onPick: () => void }[] =
    activePick ? activePick.options.map(o => ({ zh: o.zh, py: o.py, onPick: () => handlePick(o) }))
    : phase === "choose" && node.choices ? node.choices.map(c => ({ label: c.label, zh: c.zh, py: c.py, onPick: () => handleChoose(c) }))
    : [];

  const pct = phase === "ended" ? 100 : Math.min(95, Math.round((scene / maxScenes) * 100));

  return (
    <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
      {/* Main chat column */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: "#f0f2f7" }}>
        {/* Header */}
        <div style={{ background: C.white, padding: "10px 14px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0, borderBottom: `0.5px solid ${C.border}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
            <button onClick={onHome} style={{ background: "none", border: "none", cursor: "pointer", color: C.muted, display: "flex", padding: 4 }}><ArrowLeft size={19} /></button>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: story.color + "22", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>{story.emoji}</div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: C.dark }}>{story.title}</div>
              <div style={{ fontSize: 10, color: C.muted }}>Cảnh {scene} · HSK {story.hsk}{score.total > 0 ? ` · Đúng ${score.right}/${score.total}` : ""}</div>
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
            if (msg.type === "line") return renderLine(msg.line, i);
            if (msg.type === "pick") return <PlayerPickBubble key={i} option={msg.option} pinyinOn={pinyinOn} />;
            if (msg.type === "pickAnalysis") return <PickAnalysisBubble key={i} option={msg.option} correct={msg.correct} />;
            if (msg.type === "choice") return <PlayerLineBubble key={i} zh={msg.choice.zh} py={msg.choice.py} vi={msg.choice.vi} pinyinOn={pinyinOn} />;
            if (msg.type === "analysis") return <StructureBubble key={i} choice={msg.choice} />;
            if (msg.type === "ending") return (
              <EndingCard key={i} ending={msg.node.ending!} allEndings={allEndings} seen={seen} vocab={tree.vocab} score={score} onRestart={restart} onHome={onHome} />
            );
            return null;
          })}

          {/* Bỏ qua phần hiện từng câu */}
          {phase === "reveal" && !fast && queue.length > 1 && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button onClick={() => setFast(true)} style={{ display: "flex", alignItems: "center", gap: 5, background: C.bg, border: `0.5px solid ${C.border}`, borderRadius: 20, padding: "5px 13px", fontSize: 10, color: C.muted, cursor: "pointer", fontFamily: "inherit" }}>
                <FastForward size={11} /> Hiện nhanh
              </button>
            </div>
          )}
        </div>

        {/* Choice bar */}
        {options.length > 0 && (
          <div style={{ background: C.white, borderTop: `0.5px solid ${C.border}`, padding: "10px 13px 14px", flexShrink: 0 }}>
            <div style={{ fontSize: 10, color: C.muted, fontWeight: 600, marginBottom: 8, letterSpacing: ".04em" }}>BẠN SẼ NÓI GÌ?</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {options.map((o, i) => (
                <button key={`${nodeId}-${queue.length}-${i}`} onClick={o.onPick}
                  style={{ background: C.bg, border: `0.5px solid ${C.border}`, borderRadius: 13, padding: "10px 13px", cursor: "pointer", textAlign: "left", fontFamily: "inherit", transition: "all .12s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.purpleBg; e.currentTarget.style.borderColor = C.purple; }}
                  onMouseLeave={e => { e.currentTarget.style.background = C.bg; e.currentTarget.style.borderColor = C.border; }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <span style={{ width: 20, height: 20, borderRadius: "50%", background: C.white, border: `0.5px solid ${C.border}`, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: C.muted, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>{String.fromCharCode(65 + i)}</span>
                    <div>
                      {o.label && <div style={{ fontSize: 10, color: C.purple, fontWeight: 600, marginBottom: 2 }}>{o.label}</div>}
                      <div style={{ fontSize: 13, color: C.dark, lineHeight: 1.5 }}>{o.zh}</div>
                      {pinyinOn && <div style={{ fontSize: 10, color: C.faint, marginTop: 2 }}>{o.py}</div>}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Đọc xong phân tích hướng đi thì bấm để sang cảnh tiếp */}
        {phase === "analysis" && (
          <div style={{ background: C.white, borderTop: `0.5px solid ${C.border}`, padding: "10px 13px 14px", flexShrink: 0 }}>
            <button onClick={handleContinue} style={{ width: "100%", background: C.purple, color: "#fff", border: "none", borderRadius: 13, padding: "12px 0", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
              Tiếp tục ▸
            </button>
          </div>
        )}
      </div>

      {/* Optional side panel (desktop) */}
      {sidePanel}
    </div>
  );
}
