import { Home, TrendingUp, User, Shield, Library } from "lucide-react";
import { C } from "../../lib/colors";
import type { Screen } from "../../types";

// Thanh trạng thái giả (giờ, sóng, pin) của khung điện thoại trong bản Figma. App giờ chạy toàn màn hình
// trên điện thoại thật nên không dùng nữa; giữ lại để tham khảo.
export function MobileStatusBar() {
  return (
    <div style={{ height: 50, background: C.surface, display: "flex", alignItems: "flex-end", justifyContent: "space-between", padding: "0 22px 8px", flexShrink: 0 }}>
      <span style={{ fontSize: 13, fontWeight: 700, color: C.ink }}>9:41</span>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 1.5 }}>{[4,6,8,10,12].map((h, i) => <div key={i} style={{ width: 3, height: h, borderRadius: 1.5, background: i < 4 ? C.ink : C.border }} />)}</div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>{[10,7,4].map((w, i) => <div key={i} style={{ width: w, height: 2, borderRadius: 1, background: i < 2 ? C.ink : C.border }} />)}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 1 }}>
          <div style={{ width: 22, height: 11, borderRadius: 3, border: `1.5px solid ${C.ink}`, padding: "1.5px", display: "flex" }}><div style={{ width: "82%", background: C.ink, borderRadius: 1.5 }} /></div>
          <div style={{ width: 2, height: 5, background: C.ink, borderRadius: 1 }} />
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

// Thanh điều hướng dưới: cao 56px, cộng thêm phần vạch vuốt của iPhone (safe-area) để nút không bị đè
export function MobileBottomNav({ active, onChange }: { active: Screen; onChange: (s: Screen) => void }) {
  return (
    <nav aria-label="Điều hướng chính" style={{ height: "calc(56px + env(safe-area-inset-bottom))", paddingBottom: "env(safe-area-inset-bottom)", background: C.surface, borderTop: `0.5px solid ${C.border}`, display: "flex", flexShrink: 0 }}>
      {M_NAV.map(({ key, Icon, label }) => (
        <button key={key} onClick={() => onChange(key)} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3, background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", color: active === key ? C.primaryText : C.inkMuted }}>
          <Icon size={20} strokeWidth={active === key ? 2.5 : 1.8} />
          <span style={{ fontSize: 9, fontWeight: active === key ? 600 : 400 }}>{label}</span>
        </button>
      ))}
    </nav>
  );
}
