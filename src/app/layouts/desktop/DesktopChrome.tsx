import { Home, Library, Castle, Shield, TrendingUp, User, Flame, ArrowLeft } from "lucide-react";
import { C } from "../../lib/colors";
import type { Screen } from "../../types";

const D_NAV = [
  { key: "home"     as Screen, Icon: Home,       label: "Trang chủ"  },
  { key: "library"  as Screen, Icon: Library,    label: "Thư viện"   },
  { key: "chat"     as Screen, Icon: Castle,     label: "Câu chuyện" },
  { key: "bloom"    as Screen, Icon: Shield,     label: "Phòng tập"  },
  { key: "progress" as Screen, Icon: TrendingUp, label: "Tiến trình" },
  { key: "profile"  as Screen, Icon: User,       label: "Hồ sơ"      },
];

export function DesktopSidebar({ active, onChange }: { active: Screen; onChange: (s: Screen) => void }) {
  return (
    <aside style={{ width: 220, height: "100vh", background: C.white, borderRight: `0.5px solid ${C.border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
      <div style={{ padding: "22px 18px 18px", display: "flex", alignItems: "center", gap: 9, borderBottom: `0.5px solid ${C.border}` }}>
        <div style={{ width: 34, height: 34, background: C.teal, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17 }}>🐼</div>
        <span style={{ fontSize: 16, fontWeight: 700, color: C.dark }}>StoryLoop</span>
      </div>
      <div style={{ padding: "10px 0", flex: 1 }}>
        {D_NAV.map(({ key, Icon, label }) => (
          <button key={key} onClick={() => onChange(key)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 18px", fontSize: 13, cursor: "pointer", fontFamily: "inherit", width: "100%", textAlign: "left", background: active === key ? C.tealBg : "none", color: active === key ? C.teal : C.muted, borderTop: "none", borderRight: "none", borderBottom: "none", borderLeft: `3px solid ${active === key ? C.teal : "transparent"}`, fontWeight: active === key ? 600 : 400, transition: "all .15s" }}
            onMouseEnter={e => { if (active !== key) e.currentTarget.style.background = C.bg; }}
            onMouseLeave={e => { if (active !== key) e.currentTarget.style.background = "none"; }}>
            <Icon size={17} strokeWidth={active === key ? 2.5 : 1.8} />
            {label}
          </button>
        ))}
      </div>
      <div style={{ padding: "14px 16px", borderTop: `0.5px solid ${C.border}` }}>
        <div style={{ background: "#fff4ee", borderRadius: 12, padding: "11px 13px", display: "flex", alignItems: "center", gap: 9 }}>
          <Flame size={16} color={C.orange} />
          <div><div style={{ fontSize: 12, fontWeight: 700, color: C.dark }}>14 ngày streak</div><div style={{ fontSize: 10, color: C.muted }}>Giữ vững mỗi ngày!</div></div>
        </div>
      </div>
    </aside>
  );
}

export function DesktopTopbar({ title, onBack, right }: { title: string; onBack?: () => void; right?: React.ReactNode }) {
  return (
    <div style={{ height: 58, background: C.white, borderBottom: `0.5px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 28px", flexShrink: 0 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {onBack && <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", color: C.muted, display: "flex", alignItems: "center", gap: 5, fontSize: 13, fontFamily: "inherit", padding: 0 }}><ArrowLeft size={16} /> Quay lại</button>}
        {onBack && <span style={{ color: C.border }}>|</span>}
        <span style={{ fontSize: 15, fontWeight: 700, color: C.dark }}>{title}</span>
        {right}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ background: "#fff4ee", color: C.orange, fontSize: 12, fontWeight: 700, padding: "5px 13px", borderRadius: 20, display: "flex", alignItems: "center", gap: 5 }}><Flame size={13} /> 14 ngày streak</div>
        <div style={{ width: 34, height: 34, borderRadius: "50%", background: C.teal, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#fff" }}>MA</div>
      </div>
    </div>
  );
}
