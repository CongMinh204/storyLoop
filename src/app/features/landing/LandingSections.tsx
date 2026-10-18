import { ArrowRight, BookOpen, Check, Flame, Layers, Lock, MessageCircle } from "lucide-react";
import { C, GRADIENT } from "../../lib/colors";
import { Button } from "../../components/ui/button";
import { BrandMark } from "../../components/BrandMark";
import { BLOOM_ICONS, BLOOM_STAGES } from "../../data/bloom";
import { LIBRARY } from "../../data/library";
import { BLOOM, FEATURES, FINAL, HOW, PRICING, SHELF } from "../../data/landing";
import { useIsMobile } from "../../lib/useIsMobile";
import { chooseGuest, openAuth } from "../auth/useAuth";
import { Sparkle } from "./Decor";
import { Reveal, useCountUp, useInView } from "./Reveal";
import { asset, FONT_DISPLAY, heading, sectionPad, WRAP } from "./theme";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 12, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: C.primaryText }}>
      <span style={{ width: 7, height: 7, borderRadius: "50%", background: C.reward }} /> {children}
    </div>
  );
}

function SectionHead({ id, label, title, sub }: { id: string; label: string; title: string; sub?: string }) {
  return (
    <Reveal style={{ textAlign: "center", maxWidth: 640, margin: "0 auto clamp(32px, 5vw, 48px)" }}>
      <Eyebrow>{label}</Eyebrow>
      <h2 id={id} style={{ ...heading("clamp(28px, 4.2vw, 42px)"), marginTop: 12 }}>{title}</h2>
      {sub && <p style={{ fontSize: 15, lineHeight: 1.7, color: C.inkMuted, margin: "14px 0 0" }}>{sub}</p>}
    </Reveal>
  );
}

const card: React.CSSProperties = { background: C.surface, border: `0.5px solid ${C.border}`, borderRadius: 20 };
const iconTile = (bg: string): React.CSSProperties => ({ width: 46, height: 46, borderRadius: 14, background: bg, display: "flex", alignItems: "center", justifyContent: "center" });

// ─── Bốn bước Bloom + flashcard ───
export function BloomSection() {
  const mobile = useIsMobile();
  return (
    <section id="bloom" aria-labelledby="bloom-title" style={{ ...sectionPad, background: C.surface }}>
      <div style={WRAP}>
        <SectionHead id="bloom-title" label={BLOOM.label} title={BLOOM.title} sub={BLOOM.sub} />
        <div style={{ display: "grid", gridTemplateColumns: mobile ? "repeat(2, 1fr)" : "repeat(auto-fit, minmax(170px, 1fr))", gap: mobile ? 12 : 16 }}>
          {BLOOM_STAGES.map((s, i) => {
            const Icon = BLOOM_ICONS[i];
            return (
              <Reveal key={s.id} delay={i * 90} className="ld-lift" style={{ ...card, padding: "22px 18px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
                <div className="ld-icon" style={{ ...iconTile(s.bg), border: `0.5px solid ${s.border}` }}><Icon size={22} color={s.color} /></div>
                <div style={{ fontSize: 16, fontWeight: 800, color: C.ink }}>{s.label}</div>
                <div style={{ fontSize: 13, lineHeight: 1.55, color: C.inkMuted }}>{BLOOM.subs[i]}</div>
              </Reveal>
            );
          })}
          <Reveal delay={4 * 90} className="ld-lift" style={{ ...card, padding: "22px 18px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 10, background: C.primaryBg, borderColor: C.primaryBorder, gridColumn: mobile ? "1 / -1" : undefined }}>
            <div className="ld-icon" style={{ ...iconTile(C.surface) }}><Layers size={22} color={C.primaryText} /></div>
            <div style={{ fontSize: 16, fontWeight: 800, color: C.ink }}>{BLOOM.flashcard.label}</div>
            <div style={{ fontSize: 13, lineHeight: 1.55, color: C.inkMuted }}>{BLOOM.flashcard.sub}</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── Ba tính năng chính ───
export function FeaturesSection() {
  const icons = [
    { Icon: MessageCircle, bg: C.primaryBg, color: C.primaryText },
    { Icon: BookOpen, bg: C.inkBg, color: C.ink },
    { Icon: Flame, bg: C.rewardBg, color: C.rewardDeep },
  ];
  return (
    <section id="tinh-nang" aria-labelledby="features-title" style={sectionPad}>
      <div style={WRAP}>
        <SectionHead id="features-title" label={FEATURES.label} title={FEATURES.title} sub={FEATURES.sub} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          {FEATURES.items.map((f, i) => {
            const { Icon, bg, color } = icons[i];
            return (
              <Reveal key={f.title} delay={i * 120} className="ld-lift" style={{ ...card, padding: 26, display: "flex", flexDirection: "column", gap: 12 }}>
                <div className="ld-icon" style={iconTile(bg)}><Icon size={22} color={color} /></div>
                <h3 style={{ fontFamily: FONT_DISPLAY, fontSize: 21, fontWeight: 700, color: C.ink, margin: "4px 0 0", lineHeight: 1.25 }}>{f.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: C.inkMuted, margin: 0, flex: 1 }}>{f.text}</p>
                <button onClick={f.action === "guest" ? chooseGuest : () => openAuth("register")}
                  style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 6, background: "none", border: "none", padding: 0, marginTop: 6, color: C.primaryText, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
                  {f.cta} <ArrowRight size={15} />
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Một ô số trong thẻ kết quả: số đếm từ 0 lên khi thẻ cuộn tới
function StatTile({ s, active, bg }: { s: (typeof HOW.card.stats)[number]; active: boolean; bg: string }) {
  const n = useCountUp(s.to ?? 0, active);
  return (
    <div style={{ background: bg, borderRadius: 14, padding: "12px 8px", textAlign: "center" }}>
      <div style={{ fontSize: 17, fontWeight: 800, color: C.ink, fontVariantNumeric: "tabular-nums" }}>
        {s.to === undefined ? s.text : `${s.prefix ?? ""}${n}${s.suffix ?? ""}`}
      </div>
      <div style={{ fontSize: 11, color: C.inkMuted, marginTop: 2 }}>{s.label}</div>
    </div>
  );
}

function ResultCard() {
  const r = HOW.card;
  const [ref, seen] = useInView<HTMLDivElement>();
  const pct = useCountUp(r.pct, seen);
  return (
    <div ref={ref} className={`ld-reveal${seen ? " is-in" : ""}`} style={{ ...card, background: C.bg, width: "100%", maxWidth: 440, padding: 24, "--d": "150ms" } as React.CSSProperties}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, marginBottom: 6 }}>
        <div style={{ fontFamily: FONT_DISPLAY, fontSize: 20, fontWeight: 700, color: C.ink }}>{r.title}</div>
        <span style={{ background: C.reward, color: C.ink, fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 20 }}>{r.badge}</span>
      </div>
      <div style={{ fontSize: 13, color: C.inkMuted, marginBottom: 20 }}>{r.story}</div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, fontWeight: 700, color: C.ink, marginBottom: 8 }}>
        <span>Hoàn thành</span><span style={{ fontVariantNumeric: "tabular-nums" }}>{pct}%</span>
      </div>
      <div style={{ height: 10, borderRadius: 10, background: C.border, overflow: "hidden" }}>
        <div className="ld-bar" style={{ width: seen ? `${r.pct}%` : "0%", height: "100%", background: C.primary, borderRadius: 10 }} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginTop: 20 }}>
        {r.stats.map((s, i) => <StatTile key={s.label} s={s} active={seen} bg={[C.primaryBg, C.rewardBg, C.inkBg][i]} />)}
      </div>
      <p style={{ fontSize: 11, color: C.inkFaint, margin: "16px 0 0", lineHeight: 1.5 }}>{r.note}</p>
    </div>
  );
}

// ─── Quy trình + thẻ kết quả minh hoạ ───
export function HowSection() {
  return (
    <section aria-labelledby="how-title" style={{ ...sectionPad, background: C.surface }}>
      <div style={{ ...WRAP, display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(32px, 5vw, 64px)" }}>
        <div style={{ flex: "1 1 380px", minWidth: 0 }}>
          <Reveal>
            <Eyebrow>{HOW.label}</Eyebrow>
            <h2 id="how-title" style={{ ...heading("clamp(28px, 4.2vw, 42px)"), margin: "12px 0 28px" }}>{HOW.title}</h2>
          </Reveal>
          <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 22 }}>
            {HOW.steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={150 + i * 140} style={{ display: "flex", gap: 16 }}>
                <span aria-hidden="true" style={{ width: 38, height: 38, borderRadius: "50%", background: C.primaryDeep, color: C.onFill, fontSize: 15, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</span>
                <div>
                  <div style={{ fontSize: 17, fontWeight: 800, color: C.ink, marginBottom: 4 }}>{s.title}</div>
                  <div style={{ fontSize: 14, lineHeight: 1.65, color: C.inkMuted }}>{s.text}</div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
        <div style={{ flex: "1 1 340px", minWidth: 0, display: "flex", justifyContent: "center" }}>
          <ResultCard />
        </div>
      </div>
    </section>
  );
}

// ─── Thư viện truyện thật (data/library.ts) ───
export function ShelfSection() {
  const mobile = useIsMobile();
  return (
    <section id="truyen" aria-labelledby="shelf-title" style={sectionPad}>
      <div style={WRAP}>
        <SectionHead id="shelf-title" label={SHELF.label} title={SHELF.title} sub={SHELF.sub} />
        {/* Mobile: một hàng cuộn ngang như trang chủ của app; desktop: lưới 5 cột */}
        <div style={mobile
          ? { display: "flex", gap: 12, overflowX: "auto", scrollSnapType: "x proximity", scrollbarWidth: "none" as const, margin: "0 -20px", padding: "0 20px 6px" }
          : { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 16 }}>
          {LIBRARY.map((s, i) => {
            const body = (
              <>
                <div style={{ height: 116, background: s.color, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  <span className="ld-emoji" style={{ fontSize: 46 }}>{s.emoji}</span>
                  {s.premium && <Lock size={15} color={C.onFill} style={{ position: "absolute", top: 10, right: 10 }} />}
                </div>
                <div style={{ padding: "14px 16px 16px" }}>
                  <div style={{ fontSize: 14, fontWeight: 800, color: C.ink, lineHeight: 1.35, minHeight: 38 }}>{s.title}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 10 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 9px", borderRadius: 20, background: C.primaryBg, color: C.primaryText }}>HSK {s.hsk}</span>
                    {s.tags.slice(0, 1).map(t => <span key={t} style={{ fontSize: 11, padding: "3px 9px", borderRadius: 20, background: C.inkBg, color: C.ink }}>{t}</span>)}
                  </div>
                </div>
              </>
            );
            // Hàng cuộn ngang trên mobile: thẻ nằm ngoài mép màn hình không bao giờ "cuộn tới" theo chiều dọc nên không dùng hiệu ứng hiện dần
            return mobile
              ? <div key={s.id} style={{ ...card, overflow: "hidden", flex: "0 0 168px", scrollSnapAlign: "start" }}>{body}</div>
              : <Reveal key={s.id} delay={i * 90} className="ld-lift" style={{ ...card, overflow: "hidden" }}>{body}</Reveal>;
          })}
        </div>
        <Reveal style={{ textAlign: "center", marginTop: 32 }}>
          <Button variant="outline" onClick={chooseGuest} className="ld-btn h-12 rounded-full border-[var(--sl-primary)] bg-transparent px-8 text-[15px] font-bold text-[var(--sl-primary-text)] hover:bg-[var(--sl-primary-bg)] hover:text-[var(--sl-primary-text)]">
            {SHELF.cta} <ArrowRight size={16} />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Gói học: miễn phí và Premium sắp ra mắt ───
export function PricingSection() {
  const free = PRICING.free, pr = PRICING.premium;
  const list = (items: string[]) => (
    <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 0", display: "flex", flexDirection: "column", gap: 11 }}>
      {items.map(t => (
        <li key={t} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 14, color: C.ink, lineHeight: 1.5 }}>
          <Check size={17} color={C.primary} strokeWidth={3} style={{ flexShrink: 0, marginTop: 2 }} /> {t}
        </li>
      ))}
    </ul>
  );
  return (
    <section id="goi" aria-labelledby="pricing-title" style={{ ...sectionPad, background: C.surface }}>
      <div style={WRAP}>
        <SectionHead id="pricing-title" label={PRICING.label} title={PRICING.title} sub={PRICING.sub} />
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 24 }}>
          <Reveal className="ld-lift" style={{ ...card, background: C.bg, flex: "1 1 320px", maxWidth: 460, padding: 30, display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: C.primaryText }}>{free.name}</div>
            {/* Giá dùng font không chân vì số của font có chân là kiểu cũ ("0" trông như chữ "o") */}
            <div style={{ fontSize: 46, fontWeight: 800, color: C.ink, margin: "6px 0 4px", lineHeight: 1.2 }}>{free.price}</div>
            <div style={{ fontSize: 14, color: C.inkMuted }}>{free.text}</div>
            {list(free.includes)}
            <div style={{ flex: 1, minHeight: 24 }} />
            <Button onClick={chooseGuest} className="ld-btn h-12 w-full rounded-full bg-[var(--sl-primary-deep)] text-[15px] font-bold text-white hover:bg-[var(--sl-primary-hover)]">{free.cta}</Button>
          </Reveal>
          <Reveal delay={150} className="ld-lift" style={{ ...card, flex: "1 1 320px", maxWidth: 460, overflow: "hidden", display: "flex", flexDirection: "column", borderColor: C.rewardBorder }}>
            <div style={{ height: 150, overflow: "hidden" }}>
              <img className="ld-kenburns" src={asset("landscape.jpg")} alt="Chú chim bay trên cuốn sách mở, minh hoạ cho gói Premium sắp ra mắt" width={960} height={473} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 22%", display: "block" }} />
            </div>
            <div style={{ padding: 30, display: "flex", flexDirection: "column", flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                <div style={{ fontFamily: FONT_DISPLAY, fontSize: 28, fontWeight: 800, color: C.ink }}>{pr.name}</div>
                <span style={{ background: C.reward, color: C.ink, fontSize: 12, fontWeight: 700, padding: "5px 12px", borderRadius: 20 }}>{pr.badge}</span>
              </div>
              <div style={{ fontSize: 14, color: C.inkMuted, marginTop: 6 }}>{pr.text}</div>
              {list(pr.includes)}
              <div style={{ flex: 1, minHeight: 24 }} />
              <Button disabled className="h-12 w-full rounded-full bg-[var(--sl-bg-sunken)] text-[15px] font-bold text-[var(--sl-ink-muted)] disabled:opacity-100">{pr.cta}</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── Thanh kêu gọi cuối trang ───
export function FinalSection() {
  return (
    <section aria-labelledby="final-title" style={{ padding: "clamp(48px, 7vw, 80px) 0" }}>
      <div style={WRAP}>
        <Reveal style={{ position: "relative", overflow: "hidden", background: GRADIENT.primary, borderRadius: 28, padding: "clamp(32px, 6vw, 60px)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 28 }}>
          <Sparkle size={20} color={C.reward} delay={0} style={{ top: "14%", right: "36%" }} />
          <Sparkle size={13} color={C.onFill} delay={900} style={{ top: "68%", right: "8%" }} />
          <Sparkle size={16} color={C.reward} delay={1600} style={{ top: "10%", right: "6%" }} />
          <Sparkle size={11} color={C.onFill} delay={500} style={{ bottom: "12%", left: "46%" }} />
          <div style={{ flex: "1 1 360px", minWidth: 0, position: "relative" }}>
            <div className="ld-float" style={{ width: 52 }}><BrandMark size={52} radius={16} border="1px solid rgba(255,255,255,.35)" /></div>
            <h2 id="final-title" style={{ ...heading("clamp(26px, 4vw, 40px)"), color: C.onFill, marginTop: 20 }}>{FINAL.title}</h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,.92)", margin: "14px 0 0", maxWidth: 520 }}>{FINAL.sub}</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, position: "relative" }}>
            <Button onClick={() => openAuth("register")} className="ld-btn ld-pulse h-14 rounded-full bg-[var(--sl-cta)] px-8 text-[19px] font-bold text-white hover:bg-[var(--sl-cta-hover)]">{FINAL.cta}</Button>
            <Button variant="outline" onClick={chooseGuest} className="ld-btn h-14 rounded-full border-white bg-transparent px-7 text-[15px] font-bold text-white hover:bg-white/15 hover:text-white">Chơi thử ngay</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
