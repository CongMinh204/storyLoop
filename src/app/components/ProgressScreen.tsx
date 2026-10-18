import { useState } from "react";
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, RadarChart, PolarGrid,
  PolarAngleAxis, Radar,
} from "recharts";
import {
  Trophy, Flame, Zap, BookOpen, Star, Crown, Shield,
  CheckCircle2, Circle, ChevronLeft, ChevronRight, TrendingUp,
  Brain, Target, Award, Mic,
} from "lucide-react";
import { C } from "../lib/colors";

// ─── Data ────────────────────────────────────────────────────────────────────

const WEEKLY_DATA = [
  { day: "T2", xp: 120, words: 18, minutes: 22 },
  { day: "T3", xp: 85,  words: 12, minutes: 15 },
  { day: "T4", xp: 210, words: 31, minutes: 38 },
  { day: "T5", xp: 170, words: 25, minutes: 29 },
  { day: "T6", xp: 95,  words: 14, minutes: 17 },
  { day: "T7", xp: 260, words: 38, minutes: 44 },
  { day: "CN", xp: 190, words: 27, minutes: 33 },
];

const MONTHLY_DATA: Record<string, { week: string; xp: number; words: number; stories: number }[]> = {
  "Tháng 1": [
    { week: "T1", xp: 620, words: 87, stories: 2 },
    { week: "T2", xp: 890, words: 124, stories: 3 },
    { week: "T3", xp: 740, words: 103, stories: 3 },
    { week: "T4", xp: 1050, words: 148, stories: 4 },
  ],
  "Tháng 2": [
    { week: "T1", xp: 480, words: 68, stories: 2 },
    { week: "T2", xp: 970, words: 135, stories: 4 },
    { week: "T3", xp: 860, words: 119, stories: 3 },
    { week: "T4", xp: 1120, words: 156, stories: 5 },
  ],
  "Tháng 3": [
    { week: "T1", xp: 750, words: 105, stories: 3 },
    { week: "T2", xp: 1080, words: 150, stories: 4 },
    { week: "T3", xp: 930, words: 130, stories: 4 },
    { week: "T4", xp: 1230, words: 172, stories: 5 },
  ],
  "Tháng 4": [
    { week: "T1", xp: 820, words: 115, stories: 3 },
    { week: "T2", xp: 1150, words: 161, stories: 5 },
    { week: "T3", xp: 980, words: 137, stories: 4 },
    { week: "T4", xp: 1340, words: 187, stories: 6 },
  ],
  "Tháng 5": [
    { week: "T1", xp: 690, words: 97, stories: 3 },
    { week: "T2", xp: 1200, words: 168, stories: 5 },
    { week: "T3", xp: 1050, words: 147, stories: 4 },
    { week: "T4", xp: 1480, words: 207, stories: 6 },
  ],
  "Tháng 6": [
    { week: "T1", xp: 910, words: 127, stories: 4 },
    { week: "T2", xp: 1320, words: 185, stories: 5 },
    { week: "T3", xp: 1130, words: 158, stories: 5 },
    { week: "T4", xp: 1560, words: 218, stories: 7 },
  ],
};

const MONTHS = Object.keys(MONTHLY_DATA);

const SKILL_RADAR = [
  { skill: "Từ vựng", value: 82 },
  { skill: "Ngữ pháp", value: 68 },
  { skill: "Nghe", value: 55 },
  { skill: "Đọc", value: 76 },
  { skill: "Viết", value: 61 },
  { skill: "Nói", value: 48 },
];

type AchievementStatus = "done" | "active" | "locked";

const ACHIEVEMENTS: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  progress: number;
  total: number;
  status: AchievementStatus;
  xp: number;
  color: string;
  bg: string;
  border: string;
}[] = [
  {
    icon: <Flame size={15} />, title: "Streak Thần Thánh", desc: "Học 14 ngày liên tiếp",
    progress: 14, total: 14, status: "done", xp: 100,
    color: C.rewardDeep, bg: C.rewardBg, border: C.rewardBorder,
  },
  {
    icon: <Trophy size={15} />, title: "Chinh Phục Thiên Đình", desc: "Hoàn thành câu chuyện đầu tiên",
    progress: 1, total: 1, status: "done", xp: 150,
    color: C.rewardDeep, bg: C.rewardBg, border: C.rewardBorder,
  },
  {
    icon: <BookOpen size={15} />, title: "Từ Điển Sống", desc: "Học 1000 từ vựng",
    progress: 1247, total: 1000, status: "done", xp: 200,
    color: C.primaryText, bg: C.primaryBg, border: C.primaryBorder,
  },
  {
    icon: <Brain size={15} />, title: "Bloom Master", desc: "Hoàn thành cả 4 cấp Bloom trong 1 phiên",
    progress: 4, total: 4, status: "done", xp: 80,
    color: C.ink, bg: C.inkBg, border: C.inkBorder,
  },
  {
    icon: <Star size={15} />, title: "Ngôi Sao Đang Lên", desc: "Đạt 3000 XP tổng cộng",
    progress: 3890, total: 3000, status: "done", xp: 120,
    color: C.rewardDeep, bg: C.rewardBg, border: C.rewardBorder,
  },
  {
    icon: <Target size={15} />, title: "Mục Tiêu HSK 4", desc: "Hoàn thành tất cả bài HSK 3",
    progress: 7, total: 12, status: "active", xp: 300,
    color: C.primaryText, bg: C.primaryBg, border: C.primaryBorder,
  },
  {
    icon: <Mic size={15} />, title: "Luyện Âm Chuẩn", desc: "Dùng tính năng luyện nói 10 lần",
    progress: 6, total: 10, status: "active", xp: 80,
    color: C.ink, bg: C.inkBg, border: C.inkBorder,
  },
  {
    icon: <Flame size={15} />, title: "Rồng Lửa", desc: "Duy trì streak 30 ngày",
    progress: 14, total: 30, status: "active", xp: 250,
    color: C.rewardDeep, bg: C.rewardBg, border: C.rewardBorder,
  },
  {
    icon: <Crown size={15} />, title: "Bá Chủ HSK 5", desc: "Mở khoá nội dung HSK 5",
    progress: 0, total: 1, status: "locked", xp: 500,
    color: C.inkMuted, bg: C.bg, border: C.border,
  },
  {
    icon: <Award size={15} />, title: "Huyền Thoại", desc: "Đạt 10,000 XP tổng cộng",
    progress: 3890, total: 10000, status: "locked", xp: 1000,
    color: C.inkMuted, bg: C.bg, border: C.border,
  },
];

// ─── Custom tooltip ───────────────────────────────────────────────────────────
function XpTooltip({ active, payload, label }: { active?: boolean; payload?: { value: number }[]; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ background: C.surface, border: `0.5px solid ${C.border}`, borderRadius: 8, padding: "6px 10px", fontSize: 11, color: C.ink, boxShadow: "0 2px 8px rgba(0,0,0,.08)" }}>
      <div style={{ color: C.inkMuted, marginBottom: 2 }}>{label}</div>
      <div style={{ fontWeight: 600, color: C.primaryText }}>{payload[0].value} XP</div>
    </div>
  );
}

function WordsTooltip({ active, payload, label }: { active?: boolean; payload?: { value: number }[]; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ background: C.surface, border: `0.5px solid ${C.border}`, borderRadius: 8, padding: "6px 10px", fontSize: 11, color: C.ink, boxShadow: "0 2px 8px rgba(0,0,0,.08)" }}>
      <div style={{ color: C.inkMuted, marginBottom: 2 }}>{label}</div>
      <div style={{ fontWeight: 600, color: C.ink }}>{payload[0].value} từ</div>
    </div>
  );
}

// ─── ProgressScreen ───────────────────────────────────────────────────────────
export function ProgressScreen() {
  const [tab, setTab] = useState<"week" | "month">("week");
  const [monthIdx, setMonthIdx] = useState(MONTHS.length - 1);
  const [achTab, setAchTab] = useState<"all" | "done" | "active" | "locked">("all");

  const monthData = MONTHLY_DATA[MONTHS[monthIdx]];
  const totalMonthXP = monthData.reduce((s, r) => s + r.xp, 0);
  const totalMonthWords = monthData.reduce((s, r) => s + r.words, 0);
  const totalMonthStories = monthData.reduce((s, r) => s + r.stories, 0);

  const filteredAch = ACHIEVEMENTS.filter(a => achTab === "all" || a.status === achTab);
  const doneCount = ACHIEVEMENTS.filter(a => a.status === "done").length;

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
        {statCard(<Zap size={14} />, "3,890", "Tổng XP", C.rewardDeep, C.rewardBg)}
        {statCard(<BookOpen size={14} />, "1,247", "Từ đã học", C.primary, C.primaryBg)}
        {statCard(<Flame size={14} />, "14", "Ngày streak", C.rewardDeep, C.rewardBg)}
        {statCard(<Trophy size={14} />, `${doneCount}/${ACHIEVEMENTS.length}`, "Thành tích", C.rewardDeep, C.rewardBg)}
      </div>

      {/* Chart card */}
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

        {/* Month navigator */}
        {tab === "month" && (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
            <button onClick={() => setMonthIdx(i => Math.max(0, i - 1))} disabled={monthIdx === 0}
              style={{ background: "none", border: `0.5px solid ${C.border}`, borderRadius: 6, width: 26, height: 26, display: "flex", alignItems: "center", justifyContent: "center", cursor: monthIdx === 0 ? "default" : "pointer", color: monthIdx === 0 ? C.border : C.inkMuted }}>
              <ChevronLeft size={14} />
            </button>
            <span style={{ fontSize: 12, fontWeight: 600, color: C.ink }}>{MONTHS[monthIdx]}</span>
            <button onClick={() => setMonthIdx(i => Math.min(MONTHS.length - 1, i + 1))} disabled={monthIdx === MONTHS.length - 1}
              style={{ background: "none", border: `0.5px solid ${C.border}`, borderRadius: 6, width: 26, height: 26, display: "flex", alignItems: "center", justifyContent: "center", cursor: monthIdx === MONTHS.length - 1 ? "default" : "pointer", color: monthIdx === MONTHS.length - 1 ? C.border : C.inkMuted }}>
              <ChevronRight size={14} />
            </button>
          </div>
        )}

        {/* XP chart */}
        <div style={{ fontSize: 10, color: C.inkMuted, marginBottom: 4 }}>XP kiếm được</div>
        <ResponsiveContainer width="100%" height={110}>
          {tab === "week" ? (
            <AreaChart data={WEEKLY_DATA} margin={{ top: 4, right: 4, left: -28, bottom: 0 }}>
              <defs>
                <linearGradient id="xpGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={C.primary} stopOpacity={0.25} />
                  <stop offset="95%" stopColor={C.primary} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={C.border} vertical={false} />
              <XAxis dataKey="day" tick={{ fontSize: 10, fill: C.inkMuted }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 9, fill: C.inkMuted }} axisLine={false} tickLine={false} />
              <Tooltip content={<XpTooltip />} />
              <Area type="monotone" dataKey="xp" stroke={C.primary} strokeWidth={2} fill="url(#xpGrad)" dot={{ r: 3, fill: C.primary, strokeWidth: 0 }} activeDot={{ r: 5 }} />
            </AreaChart>
          ) : (
            <BarChart data={monthData} margin={{ top: 4, right: 4, left: -28, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={C.border} vertical={false} />
              <XAxis dataKey="week" tick={{ fontSize: 10, fill: C.inkMuted }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 9, fill: C.inkMuted }} axisLine={false} tickLine={false} />
              <Tooltip content={<XpTooltip />} />
              <Bar dataKey="xp" fill={C.primary} radius={[4, 4, 0, 0]} maxBarSize={36} />
            </BarChart>
          )}
        </ResponsiveContainer>

        {/* Words chart */}
        <div style={{ fontSize: 10, color: C.inkMuted, marginTop: 10, marginBottom: 4 }}>Từ vựng học được</div>
        <ResponsiveContainer width="100%" height={90}>
          {tab === "week" ? (
            <BarChart data={WEEKLY_DATA} margin={{ top: 4, right: 4, left: -28, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={C.border} vertical={false} />
              <XAxis dataKey="day" tick={{ fontSize: 10, fill: C.inkMuted }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 9, fill: C.inkMuted }} axisLine={false} tickLine={false} />
              <Tooltip content={<WordsTooltip />} />
              <Bar dataKey="words" fill={C.ink} radius={[4, 4, 0, 0]} maxBarSize={28} />
            </BarChart>
          ) : (
            <BarChart data={monthData} margin={{ top: 4, right: 4, left: -28, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={C.border} vertical={false} />
              <XAxis dataKey="week" tick={{ fontSize: 10, fill: C.inkMuted }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 9, fill: C.inkMuted }} axisLine={false} tickLine={false} />
              <Tooltip content={<WordsTooltip />} />
              <Bar dataKey="words" fill={C.ink} radius={[4, 4, 0, 0]} maxBarSize={28} />
            </BarChart>
          )}
        </ResponsiveContainer>

        {/* Month summary row */}
        {tab === "month" && (
          <div style={{ display: "flex", gap: 8, marginTop: 12, paddingTop: 12, borderTop: `0.5px solid ${C.border}` }}>
            {[
              { val: totalMonthXP.toLocaleString(), lbl: "Tổng XP", color: C.primaryText },
              { val: totalMonthWords.toLocaleString(), lbl: "Từ học được", color: C.ink },
              { val: totalMonthStories, lbl: "Câu chuyện", color: C.ctaText },
            ].map((s, i) => (
              <div key={i} style={{ flex: 1, textAlign: "center" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: s.color }}>{s.val}</div>
                <div style={{ fontSize: 9, color: C.inkFaint }}>{s.lbl}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Skill radar */}
      <div style={{ background: C.surface, borderRadius: 12, border: `0.5px solid ${C.border}`, padding: "14px", marginBottom: 14 }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: C.ink, marginBottom: 10 }}>Kỹ năng tổng hợp</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <ResponsiveContainer width="100%" height={180}>
            <RadarChart data={SKILL_RADAR} margin={{ top: 8, right: 8, bottom: 8, left: 8 }}>
              <PolarGrid stroke={C.border} />
              <PolarAngleAxis dataKey="skill" tick={{ fontSize: 9, fill: C.inkMuted }} />
              <Radar dataKey="value" stroke={C.primary} fill={C.primary} fillOpacity={0.18} strokeWidth={1.5} dot={{ r: 2.5, fill: C.primary }} />
            </RadarChart>
          </ResponsiveContainer>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
            {SKILL_RADAR.map((s) => (
              <div key={s.skill}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                  <span style={{ fontSize: 10, color: C.ink }}>{s.skill}</span>
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
          <span style={{ fontSize: 10, color: C.inkMuted }}>{doneCount}/{ACHIEVEMENTS.length} đạt được</span>
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
          {filteredAch.map((a, i) => {
            const pct = Math.min(100, Math.round((a.progress / a.total) * 100));
            return (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 10,
                background: a.status === "locked" ? C.bg : a.bg,
                border: `0.5px solid ${a.border}`,
                borderRadius: 10, padding: "10px 12px",
                opacity: a.status === "locked" ? 0.6 : 1,
              }}>
                <div style={{ width: 34, height: 34, borderRadius: 10, background: a.status === "locked" ? C.border : a.color, display: "flex", alignItems: "center", justifyContent: "center", color: C.onFill, flexShrink: 0 }}>
                  {a.status === "done" ? <CheckCircle2 size={16} /> : a.status === "locked" ? <Circle size={16} /> : a.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 2 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: a.status === "locked" ? C.inkMuted : C.ink, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{a.title}</div>
                    <span style={{ fontSize: 9, padding: "2px 6px", borderRadius: 20, marginLeft: 6, flexShrink: 0, background: a.status === "done" ? C.successBg : a.status === "active" ? C.ctaBg : C.bg, color: a.status === "done" ? C.success : a.status === "active" ? C.cta : C.inkMuted, fontWeight: 600 }}>
                      +{a.xp} XP
                    </span>
                  </div>
                  <div style={{ fontSize: 10, color: C.inkMuted, marginBottom: a.status !== "done" ? 5 : 0 }}>{a.desc}</div>
                  {a.status !== "done" && (
                    <>
                      <div style={{ height: 4, background: C.border, borderRadius: 20 }}>
                        <div style={{ height: 4, borderRadius: 20, background: a.status === "active" ? a.color : C.border, width: `${pct}%`, transition: "width .4s" }} />
                      </div>
                      <div style={{ fontSize: 9, color: C.inkFaint, marginTop: 2 }}>{a.progress.toLocaleString()} / {a.total.toLocaleString()}</div>
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
