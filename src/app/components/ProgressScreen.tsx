import { useState } from "react";
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, RadarChart, PolarGrid,
  PolarAngleAxis, Radar,
} from "recharts";
import {
  Trophy, Flame, Zap, BookOpen,
  CheckCircle2, Circle, ChevronLeft, ChevronRight,
} from "lucide-react";
import { C } from "../lib/colors";
import { useViewer, formatNumber } from "../features/auth/viewer";
import { GuestReminder } from "../features/auth/GuestReminder";
import { useActivity } from "../features/progress/useActivity";
import {
  useLearningSummary, weekSeries, monthSeries, monthList, sumPoints,
  type AchievementStatus, type AchievementState,
} from "../features/progress/learningStats";

// Số liệu thật: XP, streak và biểu đồ lấy từ server (chỉ khi đăng nhập); từ đã học, kỹ năng và thành tích
// tính từ tiến độ truyện và Phòng tập (features/progress/learningStats.ts).

// Màu của thành tích theo tông (data/achievements.ts); chưa mở thì xám
const TONE = {
  reward: { color: C.rewardDeep, bg: C.rewardBg, border: C.rewardBorder },
  primary: { color: C.primaryText, bg: C.primaryBg, border: C.primaryBorder },
  ink: { color: C.ink, bg: C.inkBg, border: C.inkBorder },
};
const LOCKED = { color: C.inkMuted, bg: C.bg, border: C.border };
const STATUS_LABEL: Record<AchievementStatus, string> = { done: "Đạt được", active: "Đang làm", locked: "Chưa mở" };
const toneOf = (a: AchievementState) => (a.status === "locked" ? LOCKED : TONE[a.tone]);

// ─── Custom tooltip ───────────────────────────────────────────────────────────
type TooltipProps = { active?: boolean; payload?: { value: number | null; payload?: { full?: string } }[]; label?: string };

function XpTooltip({ active, payload, label }: TooltipProps) {
  if (!active || !payload?.length || payload[0].value == null) return null;
  return (
    <div style={{ background: C.surface, border: `0.5px solid ${C.border}`, borderRadius: 8, padding: "6px 10px", fontSize: 11, color: C.ink, boxShadow: "0 2px 8px rgba(0,0,0,.08)" }}>
      <div style={{ color: C.inkMuted, marginBottom: 2 }}>{payload[0].payload?.full ?? label}</div>
      <div style={{ fontWeight: 600, color: C.primaryText }}>{formatNumber(payload[0].value)} XP</div>
    </div>
  );
}

function CorrectTooltip({ active, payload, label }: TooltipProps) {
  if (!active || !payload?.length || payload[0].value == null) return null;
  return (
    <div style={{ background: C.surface, border: `0.5px solid ${C.border}`, borderRadius: 8, padding: "6px 10px", fontSize: 11, color: C.ink, boxShadow: "0 2px 8px rgba(0,0,0,.08)" }}>
      <div style={{ color: C.inkMuted, marginBottom: 2 }}>{payload[0].payload?.full ?? label}</div>
      <div style={{ fontWeight: 600, color: C.ink }}>{formatNumber(payload[0].value)} câu đúng</div>
    </div>
  );
}

// ─── ProgressScreen ───────────────────────────────────────────────────────────
export function ProgressScreen() {
  const [tab, setTab] = useState<"week" | "month">("week");
  const [monthPick, setMonthPick] = useState<number | null>(null); // null = tháng mới nhất
  const [achTab, setAchTab] = useState<"all" | "done" | "active" | "locked">("all");

  const v = useViewer();
  const { words, skills, achievements, achievementsDone: doneCount } = useLearningSummary();
  const activity = useActivity(v.signedIn ? v.user?.id ?? null : null, v.xp);
  const act = activity.data;

  const weekData = act ? weekSeries(act.days, act.today) : [];
  const months = act ? monthList(act.today, v.user?.createdAt) : [];
  const monthIdx = Math.min(monthPick ?? months.length - 1, months.length - 1);
  const monthData = act && months.length ? monthSeries(act.days, months[monthIdx].key, act.today) : [];
  const setMonthIdx = (fn: (i: number) => number) => setMonthPick(fn(monthIdx));
  const totalMonthXP = sumPoints(monthData, "xp");
  const totalMonthCorrect = sumPoints(monthData, "correct");
  const totalMonthStories = sumPoints(monthData, "completed");

  const filteredAch = achievements.filter(a => achTab === "all" || a.status === achTab);

  const statCard = (icon: React.ReactNode, val: string | number, lbl: string, accent: string, bg: string) => (
    <div style={{ flex: "1 1 120px", background: C.surface, borderRadius: 10, border: `0.5px solid ${C.border}`, padding: "10px 12px", display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{ width: 30, height: 30, borderRadius: 8, background: bg, display: "flex", alignItems: "center", justifyContent: "center", color: accent, flexShrink: 0 }}>{icon}</div>
      <div>
        <div style={{ fontSize: 15, fontWeight: 700, color: C.ink }}>{val}</div>
        <div style={{ fontSize: 9, color: C.inkFaint }}>{lbl}</div>
      </div>
    </div>
  );

  return (
    <div style={{ flex: 1, overflowY: "auto", padding: "14px 16px 32px", background: C.bg }}>

      {/* Summary stats */}
      <div style={{ display: "flex", gap: 7, marginBottom: 14, flexWrap: "wrap" as const }}>
        {statCard(<Zap size={14} />, formatNumber(v.xp), "Tổng XP", C.rewardDeep, C.rewardBg)}
        {statCard(<BookOpen size={14} />, formatNumber(words), "Từ đã học", C.primary, C.primaryBg)}
        {statCard(<Flame size={14} />, v.streak, "Ngày streak", C.rewardDeep, C.rewardBg)}
        {statCard(<Trophy size={14} />, `${doneCount}/${achievements.length}`, "Thành tích", C.rewardDeep, C.rewardBg)}
      </div>

      {/* Chart card: biểu đồ cần tài khoản; khách thấy lời nhắc đăng ký (không có backend thì ẩn) */}
      {!v.signedIn ? (
        v.authEnabled && <div style={{ marginBottom: 14 }}><GuestReminder /></div>
      ) : (
      <div style={{ background: C.surface, borderRadius: 12, border: `0.5px solid ${C.border}`, padding: "14px", marginBottom: 14 }}>
        {/* Tab switcher */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: C.ink }}>Biểu đồ hoạt động</div>
          <div style={{ display: "flex", background: C.bg, borderRadius: 8, padding: 2 }}>
            {(["week", "month"] as const).map(t => (
              <button key={t} onClick={() => setTab(t)} style={{
                padding: "4px 12px", borderRadius: 6, fontSize: 11, cursor: "pointer", fontFamily: "inherit",
                background: tab === t ? C.surface : "transparent",
                color: tab === t ? C.ink : C.inkMuted,
                border: tab === t ? `0.5px solid ${C.border}` : "none",
                fontWeight: tab === t ? 600 : 400,
                boxShadow: tab === t ? "0 1px 4px rgba(0,0,0,.08)" : "none",
              }}>{t === "week" ? "Tuần này" : "Theo tháng"}</button>
            ))}
          </div>
        </div>

        {!act ? (
          <div style={{ height: 200, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, fontSize: 11, color: C.inkMuted }}>
            {activity.error ? (
              <>
                <span>Không tải được biểu đồ.</span>
                <button onClick={activity.retry} style={{ background: C.bg, border: `0.5px solid ${C.border}`, borderRadius: 20, padding: "4px 12px", fontSize: 11, color: C.ink, cursor: "pointer", fontFamily: "inherit", fontWeight: 600 }}>Thử lại</button>
              </>
            ) : "Đang tải biểu đồ…"}
          </div>
        ) : (<>
        {/* Month navigator */}
        {tab === "month" && (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
            <button onClick={() => setMonthIdx(i => Math.max(0, i - 1))} disabled={monthIdx === 0}
              style={{ background: "none", border: `0.5px solid ${C.border}`, borderRadius: 6, width: 26, height: 26, display: "flex", alignItems: "center", justifyContent: "center", cursor: monthIdx === 0 ? "default" : "pointer", color: monthIdx === 0 ? C.border : C.inkMuted }}>
              <ChevronLeft size={14} />
            </button>
            <span style={{ fontSize: 12, fontWeight: 600, color: C.ink }}>{months[monthIdx].label}</span>
            <button onClick={() => setMonthIdx(i => Math.min(months.length - 1, i + 1))} disabled={monthIdx === months.length - 1}
              style={{ background: "none", border: `0.5px solid ${C.border}`, borderRadius: 6, width: 26, height: 26, display: "flex", alignItems: "center", justifyContent: "center", cursor: monthIdx === months.length - 1 ? "default" : "pointer", color: monthIdx === months.length - 1 ? C.border : C.inkMuted }}>
              <ChevronRight size={14} />
            </button>
          </div>
        )}

        {/* XP chart */}
        <div style={{ fontSize: 10, color: C.inkMuted, marginBottom: 4 }}>XP kiếm được</div>
        <ResponsiveContainer width="100%" height={110}>
          {tab === "week" ? (
            <AreaChart data={weekData} margin={{ top: 4, right: 4, left: -28, bottom: 0 }}>
              <defs>
                <linearGradient id="xpGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={C.primary} stopOpacity={0.25} />
                  <stop offset="95%" stopColor={C.primary} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={C.border} vertical={false} />
              <XAxis dataKey="label" tick={{ fontSize: 10, fill: C.inkMuted }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 9, fill: C.inkMuted }} axisLine={false} tickLine={false} allowDecimals={false} />
              <Tooltip content={<XpTooltip />} />
              <Area type="monotone" dataKey="xp" stroke={C.primary} strokeWidth={2} fill="url(#xpGrad)" dot={{ r: 3, fill: C.primary, strokeWidth: 0 }} activeDot={{ r: 5 }} />
            </AreaChart>
          ) : (
            <BarChart data={monthData} margin={{ top: 4, right: 4, left: -28, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={C.border} vertical={false} />
              <XAxis dataKey="label" tick={{ fontSize: 10, fill: C.inkMuted }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 9, fill: C.inkMuted }} axisLine={false} tickLine={false} allowDecimals={false} />
              <Tooltip content={<XpTooltip />} />
              <Bar dataKey="xp" fill={C.primary} radius={[4, 4, 0, 0]} maxBarSize={36} />
            </BarChart>
          )}
        </ResponsiveContainer>

        {/* Correct-answers chart (mỗi câu chỉ tính lần đầu chọn đúng, như XP) */}
        <div style={{ fontSize: 10, color: C.inkMuted, marginTop: 10, marginBottom: 4 }}>Câu trả lời đúng</div>
        <ResponsiveContainer width="100%" height={90}>
          {tab === "week" ? (
            <BarChart data={weekData} margin={{ top: 4, right: 4, left: -28, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={C.border} vertical={false} />
              <XAxis dataKey="label" tick={{ fontSize: 10, fill: C.inkMuted }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 9, fill: C.inkMuted }} axisLine={false} tickLine={false} allowDecimals={false} />
              <Tooltip content={<CorrectTooltip />} />
              <Bar dataKey="correct" fill={C.ink} radius={[4, 4, 0, 0]} maxBarSize={28} />
            </BarChart>
          ) : (
            <BarChart data={monthData} margin={{ top: 4, right: 4, left: -28, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={C.border} vertical={false} />
              <XAxis dataKey="label" tick={{ fontSize: 10, fill: C.inkMuted }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 9, fill: C.inkMuted }} axisLine={false} tickLine={false} allowDecimals={false} />
              <Tooltip content={<CorrectTooltip />} />
              <Bar dataKey="correct" fill={C.ink} radius={[4, 4, 0, 0]} maxBarSize={28} />
            </BarChart>
          )}
        </ResponsiveContainer>

        {/* Month summary row */}
        {tab === "month" && (
          <div style={{ display: "flex", gap: 8, marginTop: 12, paddingTop: 12, borderTop: `0.5px solid ${C.border}` }}>
            {[
              { val: formatNumber(totalMonthXP), lbl: "Tổng XP", color: C.primaryText },
              { val: formatNumber(totalMonthCorrect), lbl: "Câu đúng", color: C.ink },
              { val: totalMonthStories, lbl: "Câu chuyện", color: C.ctaText },
            ].map((s, i) => (
              <div key={i} style={{ flex: 1, textAlign: "center" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: s.color }}>{s.val}</div>
                <div style={{ fontSize: 9, color: C.inkFaint }}>{s.lbl}</div>
              </div>
            ))}
          </div>
        )}
        </>)}
      </div>
      )}

      {/* Skill radar */}
      <div style={{ background: C.surface, borderRadius: 12, border: `0.5px solid ${C.border}`, padding: "14px", marginBottom: 14 }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: C.ink, marginBottom: 10 }}>Kỹ năng tổng hợp</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <ResponsiveContainer width="100%" height={180}>
            <RadarChart data={skills} margin={{ top: 8, right: 8, bottom: 8, left: 8 }}>
              <PolarGrid stroke={C.border} />
              <PolarAngleAxis dataKey="skill" tick={{ fontSize: 9, fill: C.inkMuted }} />
              <Radar dataKey="value" stroke={C.primary} fill={C.primary} fillOpacity={0.18} strokeWidth={1.5} dot={{ r: 2.5, fill: C.primary }} />
            </RadarChart>
          </ResponsiveContainer>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
            {skills.map((s) => (
              <div key={s.skill}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                  <span style={{ fontSize: 10, color: C.ink }}>{s.skill} <span style={{ color: C.inkFaint }}>· {s.detail}</span></span>
                  <span style={{ fontSize: 10, fontWeight: 600, color: s.value >= 75 ? C.success : s.value >= 55 ? C.primaryText : C.ctaText }}>{s.value}%</span>
                </div>
                <div style={{ height: 4, background: C.bg, borderRadius: 20 }}>
                  <div style={{ height: 4, borderRadius: 20, width: `${s.value}%`, background: s.value >= 75 ? C.success : s.value >= 55 ? C.primary : C.cta, transition: "width .4s" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div style={{ background: C.surface, borderRadius: 12, border: `0.5px solid ${C.border}`, padding: "14px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: C.ink }}>Thành tích</div>
          <span style={{ fontSize: 10, color: C.inkMuted }}>{doneCount}/{achievements.length} đạt được</span>
        </div>

        {/* Filter tabs */}
        <div style={{ display: "flex", gap: 5, marginBottom: 12 }}>
          {([["all", "Tất cả"], ["done", "Đạt được"], ["active", "Đang làm"], ["locked", "Chưa mở"]] as [typeof achTab, string][]).map(([key, lbl]) => (
            <button key={key} onClick={() => setAchTab(key)} style={{
              padding: "3px 10px", borderRadius: 20, fontSize: 10, cursor: "pointer", fontFamily: "inherit",
              background: achTab === key ? C.primary : C.bg,
              color: achTab === key ? C.onFill : C.inkMuted,
              border: achTab === key ? "none" : `0.5px solid ${C.border}`,
              fontWeight: achTab === key ? 600 : 400,
            }}>{lbl}</button>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {filteredAch.map((a) => {
            const pct = a.total > 0 ? Math.min(100, Math.round((a.progress / a.total) * 100)) : 0;
            const t = toneOf(a);
            return (
              <div key={a.id} style={{
                display: "flex", alignItems: "center", gap: 10,
                background: a.status === "locked" ? C.bg : t.bg,
                border: `0.5px solid ${t.border}`,
                borderRadius: 10, padding: "10px 12px",
                opacity: a.status === "locked" ? 0.6 : 1,
              }}>
                <div style={{ width: 34, height: 34, borderRadius: 10, background: a.status === "locked" ? C.border : t.color, display: "flex", alignItems: "center", justifyContent: "center", color: C.onFill, flexShrink: 0 }}>
                  {a.status === "done" ? <CheckCircle2 size={16} /> : a.status === "locked" ? <Circle size={16} /> : <a.Icon size={15} />}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 2 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: a.status === "locked" ? C.inkMuted : C.ink, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{a.title}</div>
                    <span style={{ fontSize: 9, padding: "2px 6px", borderRadius: 20, marginLeft: 6, flexShrink: 0, background: a.status === "done" ? C.successBg : a.status === "active" ? C.ctaBg : C.bg, color: a.status === "done" ? C.success : a.status === "active" ? C.cta : C.inkMuted, fontWeight: 600 }}>
                      {STATUS_LABEL[a.status]}
                    </span>
                  </div>
                  <div style={{ fontSize: 10, color: C.inkMuted, marginBottom: a.status !== "done" ? 5 : 0 }}>{a.desc}</div>
                  {a.status !== "done" && (
                    <>
                      <div style={{ height: 4, background: C.border, borderRadius: 20 }}>
                        <div style={{ height: 4, borderRadius: 20, background: a.status === "active" ? t.color : C.border, width: `${pct}%`, transition: "width .4s" }} />
                      </div>
                      <div style={{ fontSize: 9, color: C.inkFaint, marginTop: 2 }}>{formatNumber(a.progress)} / {formatNumber(a.total)}</div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
