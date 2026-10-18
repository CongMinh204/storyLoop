import { Flame, Lock, Zap } from "lucide-react";
import { C, GRADIENT, ON_PRIMARY_CHIP } from "../../lib/colors";
import { LIBRARY } from "../../data/library";
import { useContinueStory, heroText } from "./continueStory";
import type { StoryEntry } from "../../types";
import { DesktopTopbar } from "../../layouts/desktop/DesktopChrome";
import { useStoryProgress } from "../../lib/progress";
import { useViewer, streakLine, formatNumber } from "../auth/viewer";
import { GuestReminder } from "../auth/GuestReminder";

export function DesktopHomeScreen({ onOpenStory }: { onOpenStory: (s: StoryEntry) => void }) {
  const target = useContinueStory(), txt = heroText(target), st = target.story;
  const v = useViewer(), sl = streakLine(v.streak), played = Object.keys(useStoryProgress()).length;
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <DesktopTopbar title={`Chào buổi sáng, ${v.name} 👋`} />
      <div style={{ flex: 1, overflowY: "auto", padding: "28px 32px", background: C.bg }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 20, marginBottom: 24 }}>
          {/* Left: Hero + Continue */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: GRADIENT.primary, borderRadius: 18, padding: "28px 32px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", right: -20, bottom: -20, fontSize: 130, opacity: 0.1, lineHeight: 1 }}>🐼</div>
              <div style={{ position: "relative" }}>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,.92)", marginBottom: 6, fontWeight: 500 }}>{st.title}</div>
                <div style={{ fontSize: 26, fontWeight: 700, color: C.onFill, lineHeight: 1.3, marginBottom: 16 }}>{txt.headline}<br />{txt.hero}!</div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22 }}>
                  <span style={{ background: ON_PRIMARY_CHIP, color: C.onFill, fontSize: 11, padding: "4px 11px", borderRadius: 20, fontWeight: 600 }}>HSK {st.hsk}</span>
                  <div style={{ flex: 1, height: 6, background: "rgba(255,255,255,.25)", borderRadius: 20, maxWidth: 200 }}><div style={{ height: 6, borderRadius: 20, background: C.onFill, width: `${target.pct}%` }} /></div>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,.9)", fontWeight: 600 }}>{target.pct}% hoàn thành</span>
                </div>
                <button onClick={() => onOpenStory(st)} style={{ background: C.cta, color: C.onFill, border: "none", borderRadius: 28, padding: "13px 28px", fontSize: 19, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", display: "inline-flex", alignItems: "center", gap: 8 }}>▶ {txt.button} ngay</button>
              </div>
            </div>
            <div style={{ background: C.surface, borderRadius: 16, border: `0.5px solid ${C.border}`, overflow: "hidden" }}>
              <div style={{ display: "flex", gap: 0 }}>
                <div style={{ width: 100, background: st.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, flexShrink: 0 }}>{st.emoji}</div>
                <div style={{ padding: "16px 20px", flex: 1 }}>
                  <div style={{ display: "flex", gap: 6, marginBottom: 8 }}><span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 20, background: C.primaryBg, color: C.primaryText, fontWeight: 600 }}>HSK {st.hsk}</span><span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 20, background: C.inkBg, color: C.ink, fontWeight: 600 }}>{st.lv}</span></div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: C.ink, marginBottom: 4 }}>{st.title}</div>
                  <div style={{ fontSize: 12, color: C.inkMuted, marginBottom: 8 }}>{[st.character && `Nhân vật: ${st.character}`, st.minutes && `~${st.minutes} phút`].filter(Boolean).join(" · ")}</div>
                  <div style={{ fontSize: 12, color: C.inkFaint, lineHeight: 1.6, fontStyle: "italic" }}>{st.quote && <>&ldquo;{st.quote}&rdquo;</>}</div>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Stats + Daily */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {[{ icon: "📚", bg: C.primaryBg, val: "1,247", lbl: "Từ đã học" }, { icon: "🎮", bg: C.ctaBg, val: String(played), lbl: "Câu chuyện" }, { icon: "⚡", bg: C.rewardBg, val: formatNumber(v.xp), lbl: "Tổng XP" }, { icon: "🏆", bg: C.rewardBg, val: "5/10", lbl: "Thành tích" }].map((s, i) => (
                <div key={i} style={{ background: C.surface, borderRadius: 14, border: `0.5px solid ${C.border}`, padding: "14px 12px", display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17 }}>{s.icon}</div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: C.ink }}>{s.val}</div>
                  <div style={{ fontSize: 10, color: C.inkFaint }}>{s.lbl}</div>
                </div>
              ))}
            </div>
            <div style={{ background: C.rewardBg, border: `0.5px solid ${C.rewardBorder}`, borderRadius: 14, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 44, height: 44, background: C.reward, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Flame size={22} color={C.ink} /></div>
              <div style={{ flex: 1 }}><div style={{ fontSize: 13, fontWeight: 700, color: C.ink, marginBottom: 3 }}>Thử thách hàng ngày <span style={{ background: C.rewardBorder, color: C.ink, fontSize: 9, padding: "1px 7px", borderRadius: 20, marginLeft: 4, fontWeight: 600 }}>Mới</span></div><div style={{ fontSize: 11, color: C.inkMuted }}>Hoàn thành 3 cảnh trong câu chuyện hôm nay</div></div>
              <div style={{ background: C.reward, color: C.ink, fontSize: 11, fontWeight: 700, padding: "6px 12px", borderRadius: 20, display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}><Zap size={12} /> +50 XP</div>
            </div>
            {v.signedIn || !v.authEnabled ? (
              <div style={{ background: C.rewardBg, borderRadius: 14, padding: "13px 16px", display: "flex", alignItems: "center", gap: 8, border: `0.5px solid ${C.rewardBorder}` }}>
                <Flame size={16} color={C.rewardDeep} />
                <span style={{ fontSize: 12, color: C.inkMuted }}><strong style={{ color: C.ink }}>{sl.title}</strong> — {sl.sub}</span>
              </div>
            ) : <GuestReminder />}
          </div>
        </div>
        {/* Library grid */}
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}><span style={{ fontSize: 15, fontWeight: 700, color: C.ink }}>Thư viện câu chuyện</span><span style={{ fontSize: 12, color: C.primaryText, cursor: "pointer", fontWeight: 500 }}>Xem tất cả ›</span></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 12 }}>
            {LIBRARY.map((s, i) => (
              <div key={i} style={{ background: C.surface, borderRadius: 14, border: `0.5px solid ${C.border}`, overflow: "hidden", cursor: "pointer" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = C.primary)} onMouseLeave={e => (e.currentTarget.style.borderColor = C.border)}>
                <div style={{ height: 80, background: s.color, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  <span style={{ fontSize: 32 }}>{s.emoji}</span>
                  {s.premium && <div style={{ position: "absolute", top: 6, right: 6 }}><Lock size={12} color="rgba(255,255,255,.85)" /></div>}
                </div>
                <div style={{ padding: "10px 11px" }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: C.ink, marginBottom: 6, lineHeight: 1.35 }}>{s.title}</div>
                  <div style={{ display: "flex", gap: 5 }}><span style={{ fontSize: 9, padding: "2px 7px", borderRadius: 20, background: C.primaryBg, color: C.primaryText, fontWeight: 600 }}>{s.hsk}</span><span style={{ fontSize: 9, padding: "2px 7px", borderRadius: 20, background: C.inkBg, color: C.ink, fontWeight: 600 }}>{s.lv}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
