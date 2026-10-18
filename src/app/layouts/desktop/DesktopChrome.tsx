import { Home, Library, Castle, Shield, TrendingUp, User, Flame, ArrowLeft, CloudUpload } from "lucide-react";
import { C } from "../../lib/colors";
import type { Screen } from "../../types";
import { useViewer } from "../../features/auth/viewer";
import { openAuth } from "../../features/auth/useAuth";

const D_NAV = [
  { key: "home"     as Screen, Icon: Home,       label: "Trang chủ"  },
  { key: "library"  as Screen, Icon: Library,    label: "Thư viện"   },
  { key: "chat"     as Screen, Icon: Castle,     label: "Câu chuyện" },
  { key: "bloom"    as Screen, Icon: Shield,     label: "Phòng tập"  },
  { key: "progress" as Screen, Icon: TrendingUp, label: "Tiến trình" },
  { key: "profile"  as Screen, Icon: User,       label: "Hồ sơ"      },
];

export function DesktopSidebar({ active, onChange }: { active: Screen; onChange: (s: Screen) => void }) {
  const v = useViewer();
  return (
    <aside style={{ width: 220, height: "100vh", background: C.surface, borderRight: `0.5px solid ${C.border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
      <div style={{ padding: "22px 18px 18px", display: "flex", alignItems: "center", gap: 9, borderBottom: `0.5px solid ${C.border}` }}>
        <div style={{ width: 34, height: 34, background: C.primary, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17 }}>🐼</div>
        <span style={{ fontSize: 16, fontWeight: 700, color: C.ink }}>StoryLoop</span>
      </div>
      <div style={{ padding: "10px 0", flex: 1 }}>
        {D_NAV.map(({ key, Icon, label }) => (
          <button key={key} onClick={() => onChange(key)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 18px", fontSize: 13, cursor: "pointer", fontFamily: "inherit", width: "100%", textAlign: "left", background: active === key ? C.primaryBg : "none", color: active === key ? C.primaryText : C.inkMuted, borderTop: "none", borderRight: "none", borderBottom: "none", borderLeft: `3px solid ${active === key ? C.primary : "transparent"}`, fontWeight: active === key ? 600 : 400, transition: "all .15s" }}
            onMouseEnter={e => { if (active !== key) e.currentTarget.style.background = C.bg; }}
            onMouseLeave={e => { if (active !== key) e.currentTarget.style.background = "none"; }}>
            <Icon size={17} strokeWidth={active === key ? 2.5 : 1.8} />
            {label}
          </button>
        ))}
      </div>
      <div style={{ padding: "14px 16px", borderTop: `0.5px solid ${C.border}` }}>
        {v.signedIn || !v.authEnabled ? (
          <div style={{ background: C.rewardBg, borderRadius: 12, padding: "11px 13px", display: "flex", alignItems: "center", gap: 9 }}>
            <Flame size={16} color={C.rewardDeep} />
            <div><div style={{ fontSize: 12, fontWeight: 700, color: C.ink }}>{v.streak > 0 ? `${v.streak} ngày streak` : "Chưa có streak"}</div><div style={{ fontSize: 10, color: C.inkMuted }}>{v.streak > 0 ? "Giữ vững mỗi ngày!" : "Học hôm nay để bắt đầu!"}</div></div>
          </div>
        ) : (
          <button onClick={() => openAuth("register")} style={{ width: "100%", background: C.primaryBg, border: "none", borderRadius: 12, padding: "11px 13px", display: "flex", alignItems: "center", gap: 9, cursor: "pointer", fontFamily: "inherit", textAlign: "left" }}>
            <CloudUpload size={16} color={C.primary} />
            <div><div style={{ fontSize: 12, fontWeight: 700, color: C.ink }}>Đang chơi khách</div><div style={{ fontSize: 10, color: C.primaryText, fontWeight: 600 }}>Đăng ký để lưu tiến độ</div></div>
          </button>
        )}
      </div>
    </aside>
  );
}

export function DesktopTopbar({ title, onBack, right }: { title: string; onBack?: () => void; right?: React.ReactNode }) {
  const v = useViewer();
  return (
    <div style={{ height: 58, background: C.surface, borderBottom: `0.5px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 28px", flexShrink: 0 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {onBack && <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", color: C.inkMuted, display: "flex", alignItems: "center", gap: 5, fontSize: 13, fontFamily: "inherit", padding: 0 }}><ArrowLeft size={16} /> Quay lại</button>}
        {onBack && <span style={{ color: C.border }}>|</span>}
        <span style={{ fontSize: 15, fontWeight: 700, color: C.ink }}>{title}</span>
        {right}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {v.signedIn && <div style={{ background: C.reward, color: C.ink, fontSize: 12, fontWeight: 700, padding: "5px 13px", borderRadius: 20, display: "flex", alignItems: "center", gap: 5 }}><Flame size={13} /> {v.streak} ngày streak</div>}
        <div title={v.name} style={{ width: 34, height: 34, borderRadius: "50%", background: C.primaryDeep, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: C.onFill }}>{v.initials}</div>
      </div>
    </div>
  );
}
