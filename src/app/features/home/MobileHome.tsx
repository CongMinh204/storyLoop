import { Flame, Lock, Zap } from "lucide-react";
import { C, GRADIENT, CTA_SHADOW, ON_PRIMARY_CHIP } from "../../lib/colors";
import { LIBRARY } from "../../data/library";
import { useContinueStory, heroText } from "./continueStory";
import type { StoryEntry } from "../../types";
import { useStoryProgress } from "../../lib/progress";
import { useViewer, streakLine, formatNumber } from "../auth/viewer";
import { GuestReminder } from "../auth/GuestReminder";
import { showIntro } from "../auth/useAuth";
import { BrandMark } from "../../components/BrandMark";

export function MobileHomeScreen({ onOpenStory }: { onOpenStory: (s: StoryEntry) => void }) {
  const target = useContinueStory(), txt = heroText(target);
  const v = useViewer(), sl = streakLine(v.streak), played = Object.keys(useStoryProgress()).length;
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: C.bg }}>
      <div style={{ background: C.surface, padding: "10px 18px 12px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0, borderBottom: `0.5px solid ${C.border}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {/* Khách bấm logo để quay lại trang giới thiệu */}
          {!v.signedIn && v.authEnabled ? (
            <button onClick={showIntro} aria-label="Về trang giới thiệu" title="Về trang giới thiệu" style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex" }}>
              <BrandMark size={30} radius={9} />
            </button>
          ) : <BrandMark size={30} radius={9} />}
          <div><div style={{ fontSize: 10, color: C.inkMuted }}>Chào buổi sáng 👋</div><div style={{ fontSize: 13, fontWeight: 700, color: C.ink }}>{v.name}</div></div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {v.signedIn && <div style={{ background: C.reward, color: C.ink, fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 20, display: "flex", alignItems: "center", gap: 4 }}><Flame size={12} /> {v.streak}</div>}
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: C.primaryDeep, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: C.onFill }}>{v.initials}</div>
        </div>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "14px 16px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ background: GRADIENT.primary, borderRadius: 18, padding: "20px 18px 18px", position: "relative", overflow: "hidden", minHeight: 206, flexShrink: 0 }}>
          <div style={{ position: "absolute", right: -16, bottom: -12, fontSize: 90, opacity: 0.12, lineHeight: 1, pointerEvents: "none" }}>🐼</div>
          <div style={{ position: "relative" }}>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,.92)", marginBottom: 4 }}>{target.story.title}</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: C.onFill, lineHeight: 1.35, marginBottom: 12 }}>{txt.headline}<br />{txt.hero}!</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <span style={{ background: ON_PRIMARY_CHIP, color: C.onFill, fontSize: 9, padding: "3px 9px", borderRadius: 20, fontWeight: 600 }}>HSK {target.story.hsk}</span>
              <div style={{ flex: 1, height: 5, background: "rgba(255,255,255,.25)", borderRadius: 20, maxWidth: 120 }}><div style={{ height: 5, borderRadius: 20, background: C.onFill, width: `${target.pct}%` }} /></div>
              <span style={{ fontSize: 10, color: "rgba(255,255,255,.9)", fontWeight: 600 }}>{target.pct}%</span>
            </div>
            <button onClick={() => onOpenStory(target.story)} style={{ background: C.cta, color: C.onFill, border: "none", borderRadius: 24, padding: "11px 22px", fontSize: 19, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: 154, boxShadow: CTA_SHADOW, position: "relative", zIndex: 2 }}>▶ {txt.button}</button>
          </div>
        </div>
        <div style={{ background: C.rewardBg, border: `0.5px solid ${C.rewardBorder}`, borderRadius: 14, padding: "12px 14px", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 40, height: 40, background: C.reward, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Flame size={20} color={C.ink} /></div>
          <div style={{ flex: 1 }}><div style={{ fontSize: 12, fontWeight: 700, color: C.ink, marginBottom: 2 }}>Thử thách hàng ngày <span style={{ background: C.rewardBorder, color: C.ink, fontSize: 8, padding: "1px 6px", borderRadius: 20, marginLeft: 4, fontWeight: 600 }}>Mới</span></div><div style={{ fontSize: 10, color: C.inkMuted }}>Hoàn thành 3 cảnh trong câu chuyện hôm nay</div></div>
          <div style={{ background: C.reward, color: C.ink, fontSize: 10, fontWeight: 700, padding: "5px 10px", borderRadius: 20, display: "flex", alignItems: "center", gap: 3, flexShrink: 0 }}><Zap size={10} /> +50</div>
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}><span style={{ fontSize: 13, fontWeight: 700, color: C.ink }}>Thư viện câu chuyện</span><span style={{ fontSize: 11, color: C.primaryText }}>Xem tất cả ›</span></div>
          <div style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 4, scrollbarWidth: "none" as const }}>
            {LIBRARY.map((s, i) => (
              <div key={i} style={{ flexShrink: 0, width: 116, background: C.surface, borderRadius: 14, border: `0.5px solid ${C.border}`, overflow: "hidden", cursor: "pointer" }}>
                <div style={{ height: 68, background: s.color, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  <span style={{ fontSize: 28 }}>{s.emoji}</span>
                  {s.premium && <div style={{ position: "absolute", top: 5, right: 5 }}><Lock size={11} color="rgba(255,255,255,.85)" /></div>}
                </div>
                <div style={{ padding: "8px 9px" }}><div style={{ fontSize: 10, fontWeight: 600, color: C.ink, marginBottom: 5, lineHeight: 1.35 }}>{s.title}</div><div style={{ display: "flex", gap: 4 }}><span style={{ fontSize: 8, padding: "2px 6px", borderRadius: 20, background: C.primaryBg, color: C.primaryText, fontWeight: 600 }}>{s.hsk}</span><span style={{ fontSize: 8, padding: "2px 6px", borderRadius: 20, background: C.inkBg, color: C.ink, fontWeight: 600 }}>{s.lv}</span></div></div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          {[{ icon: "📚", bg: C.primaryBg, val: "1,247", lbl: "Từ đã học" }, { icon: "🎮", bg: C.ctaBg, val: String(played), lbl: "Câu chuyện" }, { icon: "⚡", bg: C.rewardBg, val: formatNumber(v.xp), lbl: "Tổng XP" }].map((s, i) => (
            <div key={i} style={{ background: C.surface, borderRadius: 14, border: `0.5px solid ${C.border}`, padding: "14px 10px", display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
              <div style={{ width: 34, height: 34, borderRadius: 10, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>{s.icon}</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: C.ink }}>{s.val}</div>
              <div style={{ fontSize: 9, color: C.inkFaint, textAlign: "center" }}>{s.lbl}</div>
            </div>
          ))}
        </div>
        {v.signedIn || !v.authEnabled ? (
          <div style={{ background: C.rewardBg, borderRadius: 14, padding: "12px 14px", display: "flex", alignItems: "center", gap: 8, border: `0.5px solid ${C.rewardBorder}` }}>
            <Flame size={16} color={C.rewardDeep} />
            <span style={{ fontSize: 12, color: C.inkMuted }}><strong style={{ color: C.ink }}>{sl.title}</strong> — {sl.sub}</span>
          </div>
        ) : <GuestReminder />}
      </div>
    </div>
  );
}
