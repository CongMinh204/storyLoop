import { useEffect, useState, type CSSProperties } from "react";
import { Check, Flame, Sparkles, Zap } from "lucide-react";
import { C } from "../../lib/colors";
import { Button } from "../../components/ui/button";
import { HERO } from "../../data/landing";
import { STORY_TURNS } from "../../data/stories/ngoc-hoang";
import { useIsMobile } from "../../lib/useIsMobile";
import { chooseGuest, openAuth } from "../auth/useAuth";
import { FloatingLeaves, Sparkle } from "./Decor";
import { prefersReducedMotion } from "./Reveal";
import { asset, FONT_DISPLAY, WRAP } from "./theme";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

// Khung chat minh hoạ, dựng từ chính dữ liệu truyện "Thử thách của Ngọc Hoàng" (lượt 2: Tiên nữ mời trà).
// picked = đáp án A đang được "chọn" (vòng lặp tự động bên dưới), để người xem thấy cách chơi.
function ChatMock({ picked }: { picked: boolean }) {
  const turn = STORY_TURNS[1];
  return (
    <div role="img" aria-label="Minh hoạ giao diện chơi truyện: nhân vật Tiên nữ mời trà và ba đáp án để chọn"
      style={{ background: C.surface, borderRadius: 20, border: `0.5px solid ${C.border}`, boxShadow: "0 18px 40px rgba(25,62,65,.14)", overflow: "hidden", textAlign: "left" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 9, padding: "10px 14px", borderBottom: `0.5px solid ${C.border}` }}>
        <div style={{ width: 28, height: 28, borderRadius: 9, background: C.inkBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>🏯</div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.ink }}>Thử thách của Ngọc Hoàng</div>
          <div style={{ fontSize: 10, color: C.inkMuted }}>Lượt 2/5 · HSK 1</div>
        </div>
      </div>
      <div style={{ padding: "12px 14px", background: C.bgSunken, display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ fontSize: 10, color: C.inkMuted }}>{turn.speaker}</div>
        <div style={{ background: C.surface, borderRadius: "14px 14px 14px 4px", padding: "9px 12px" }}>
          <div style={{ fontSize: 13, color: C.ink, lineHeight: 1.5 }}>{turn.zh}</div>
          <div style={{ fontSize: 10, color: C.inkMuted, fontStyle: "italic", marginTop: 3, lineHeight: 1.45 }}>{turn.vi}</div>
        </div>
      </div>
      <div style={{ padding: "10px 14px 12px", display: "flex", flexDirection: "column", gap: 6 }}>
        {turn.choices.map((c, i) => {
          const on = picked && i === 0;
          return (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "center", border: `0.5px solid ${on ? C.primary : C.border}`, background: on ? C.primaryBg : C.bg, borderRadius: 11, padding: "7px 10px", transform: on ? "scale(1.02)" : "none", transition: "all .35s ease" }}>
              <span style={{ width: 18, height: 18, borderRadius: "50%", background: on ? C.primaryDeep : C.surface, border: `0.5px solid ${on ? C.primaryDeep : C.border}`, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700, color: on ? C.onFill : C.inkMuted, flexShrink: 0, transition: "all .35s ease" }}>{String.fromCharCode(65 + i)}</span>
              <span style={{ fontSize: 12, color: C.ink, lineHeight: 1.4, flex: 1 }}>{c.zh}</span>
              <Check size={15} color={C.primaryText} strokeWidth={3} style={{ flexShrink: 0, opacity: on ? 1 : 0, transition: "opacity .35s ease" }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Chip({ children, bg, color, style, bob }: { children: React.ReactNode; bg: string; color: string; style: CSSProperties; bob: number }) {
  return (
    <div className="ld-bob" style={{ position: "absolute", display: "flex", alignItems: "center", gap: 5, background: bg, color, fontSize: 12, fontWeight: 700, padding: "7px 13px", borderRadius: 20, boxShadow: "0 8px 20px rgba(25,62,65,.16)", ...delay(bob), ...style }}>{children}</div>
  );
}

export function LandingHero() {
  const mobile = useIsMobile();
  // Vòng lặp: đáp án A được chọn 2,4 giây rồi bỏ chọn 2,4 giây; mỗi lần chọn chip +10 XP nảy lên
  const [picked, setPicked] = useState(false);
  const [pop, setPop] = useState(0);
  useEffect(() => {
    if (prefersReducedMotion()) return;
    let on = false;
    const first = setTimeout(() => { on = true; setPicked(true); setPop(p => p + 1); }, 1800);
    const id = setInterval(() => { on = !on; setPicked(on); if (on) setPop(p => p + 1); }, 2400);
    return () => { clearTimeout(first); clearInterval(id); };
  }, []);

  return (
    <section aria-labelledby="hero-title" style={{ position: "relative", overflow: "hidden", padding: "clamp(32px, 6vw, 72px) 0 clamp(48px, 7vw, 88px)" }}>
      <FloatingLeaves />
      <div style={{ ...WRAP, position: "relative", zIndex: 1, display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(32px, 5vw, 64px)" }}>
        <div style={{ flex: "1.25 1 440px", minWidth: 0 }}>
          <div className="ld-rise" style={{ display: "inline-flex", alignItems: "center", gap: 7, background: C.primaryBg, color: C.primaryText, fontSize: 12, fontWeight: 700, padding: "6px 13px", borderRadius: 20, marginBottom: 20, ...delay(0) }}>
            <Sparkles size={13} /> {HERO.label}
          </div>
          <h1 id="hero-title" style={{ fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: "clamp(36px, 5.2vw, 56px)", lineHeight: 1.08, letterSpacing: "-.02em", color: C.ink, margin: 0 }}>
            <span className="ld-rise" style={{ display: "block", ...delay(120) }}>{HERO.title}</span>
            <span className="ld-rise" style={{ display: "block", fontStyle: "italic", fontWeight: 700, color: C.cta, ...delay(280) }}>{HERO.titleAccent}</span>
          </h1>
          <p className="ld-rise" style={{ fontSize: "clamp(15px, 1.6vw, 17px)", lineHeight: 1.7, color: C.inkMuted, margin: "22px 0 0", maxWidth: 520, ...delay(440) }}>{HERO.sub}</p>
          <div className="ld-rise" style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 28, ...delay(580) }}>
            <Button onClick={chooseGuest} className="ld-btn ld-pulse h-14 rounded-full bg-[var(--sl-cta)] px-8 text-[19px] font-bold text-white hover:bg-[var(--sl-cta-hover)]">
              {HERO.primary}
            </Button>
            <Button variant="outline" onClick={() => openAuth("register")} className="ld-btn h-14 rounded-full border-[var(--sl-primary)] bg-transparent px-7 text-[15px] font-bold text-[var(--sl-primary-text)] hover:bg-[var(--sl-primary-bg)] hover:text-[var(--sl-primary-text)]">
              {HERO.secondary}
            </Button>
          </div>
          <ul className="ld-rise" style={{ listStyle: "none", padding: 0, margin: "26px 0 0", display: "flex", flexWrap: "wrap", gap: "10px 22px", ...delay(720) }}>
            {HERO.checks.map(t => (
              <li key={t} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, color: C.inkMuted }}>
                <Check size={15} color={C.primary} strokeWidth={3} /> {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="ld-rise" style={{ flex: "1 1 360px", minWidth: 0, display: "flex", justifyContent: "center", ...delay(300) }}>
          {/* Desktop: khung chat chồng lên phần dưới ảnh tròn. Mobile: ảnh trên, khung chat nối liền bên dưới để không che ảnh */}
          <div style={{ position: "relative", width: "100%", maxWidth: mobile ? 380 : 520, paddingBottom: mobile ? 0 : 170 }}>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", inset: "4% 6% 0 6%", borderRadius: "50%", background: C.primaryBg }} />
              <div className="ld-float" style={{ position: "relative" }}>
                <img src={asset("hero-emblem.jpg")} alt="Biểu tượng StoryLoop: chú chim bay trên cuốn sách mở giữa phong cảnh núi đồi"
                  width={720} height={720} style={{ display: "block", width: mobile ? "88%" : "100%", margin: "0 auto", height: "auto", aspectRatio: "1", borderRadius: "50%", objectFit: "cover" }} />
              </div>
              <Sparkle size={22} color={C.reward} delay={0} style={{ top: "6%", left: "8%" }} />
              <Sparkle size={14} color={C.primary} delay={700} style={{ top: "26%", left: "-2%" }} />
              <Sparkle size={18} color={C.reward} delay={1300} style={{ top: "44%", right: "-3%" }} />
              <Sparkle size={12} color={C.cta} delay={400} style={{ top: "2%", right: "28%" }} />
              <Sparkle size={16} color={C.reward} delay={1900} style={{ top: "62%", left: "-4%" }} />
              <Chip bg={C.reward} color={C.ink} bob={0} style={{ top: "6%", right: 0 }}>
                <span key={pop} className="ld-pop"><Zap size={13} /> +10 XP</span>
              </Chip>
              <Chip bg={C.surface} color={C.rewardDeep} bob={1200} style={{ top: "56%", right: mobile ? 0 : "-1%" }}><Flame size={13} /> Chuỗi ngày học</Chip>
            </div>
            <div className="ld-bob" style={{ ...(mobile ? { position: "relative", marginTop: -36, zIndex: 1 } : { position: "absolute", left: "-2%", right: "34%", bottom: 0 }), ...delay(600) }}>
              <ChatMock picked={picked} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
