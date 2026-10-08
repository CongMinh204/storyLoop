import { Home, TrendingUp, User, Shield, Library } from "lucide-react";
import { C } from "../../lib/colors";
import type { Screen } from "../../types";

export function MobileStatusBar() {
  return (
    <div style={{ height: 50, background: C.white, display: "flex", alignItems: "flex-end", justifyContent: "space-between", padding: "0 22px 8px", flexShrink: 0 }}>
      <span style={{ fontSize: 13, fontWeight: 700, color: C.dark }}>9:41</span>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 1.5 }}>{[4,6,8,10,12].map((h, i) => <div key={i} style={{ width: 3, height: h, borderRadius: 1.5, background: i < 4 ? C.dark : C.border }} />)}</div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>{[10,7,4].map((w, i) => <div key={i} style={{ width: w, height: 2, borderRadius: 1, background: i < 2 ? C.dark : C.border }} />)}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 1 }}>
          <div style={{ width: 22, height: 11, borderRadius: 3, border: `1.5px solid ${C.dark}`, padding: "1.5px", display: "flex" }}><div style={{ width: "82%", background: C.dark, borderRadius: 1.5 }} /></div>
          <div style={{ width: 2, height: 5, background: C.dark, borderRadius: 1 }} />
        </div>
      </div>
    </div>
  );
}

const M_NAV = [
  { key: "home"     as Screen, Icon: Home,       label: "Trang chủ" },
  { key: "library"  as Screen, Icon: Library,    label: "Thư viện"  },
  { key: "bloom"    as Screen, Icon: Shield,     label: "Phòng tập" },
  { key: "progress" as Screen, Icon: TrendingUp, label: "Tiến trình"},
  { key: "profile"  as Screen, Icon: User,       label: "Hồ sơ"     },
];

export function MobileBottomNav({ active, onChange }: { active: Screen; onChange: (s: Screen) => void }) {
  return (
    <div style={{ height: 56, background: C.white, borderTop: `0.5px solid ${C.border}`, display: "flex", flexShrink: 0 }}>
      {M_NAV.map(({ key, Icon, label }) => (
        <button key={key} onClick={() => onChange(key)} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3, background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", color: active === key ? C.teal : C.muted }}>
          <Icon size={20} strokeWidth={active === key ? 2.5 : 1.8} />
          <span style={{ fontSize: 9, fontWeight: active === key ? 600 : 400 }}>{label}</span>
        </button>
      ))}
    </div>
  );
}
