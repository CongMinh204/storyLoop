import { Flame } from "lucide-react";
import { C } from "../../lib/colors";
import { ProgressScreen } from "../../components/ProgressScreen";
import { useViewer } from "../auth/viewer";

export function MobileProgressWrapper() {
  const v = useViewer();
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div style={{ background: C.surface, padding: "12px 16px", borderBottom: `0.5px solid ${C.border}`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: C.ink }}>Tiến trình học tập</div>
        {v.signedIn && <div style={{ background: C.reward, color: C.ink, fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 20, display: "flex", alignItems: "center", gap: 4 }}><Flame size={12} /> {v.streak} ngày</div>}
      </div>
      <ProgressScreen />
    </div>
  );
}
