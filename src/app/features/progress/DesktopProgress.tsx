import { C } from "../../lib/colors";
import { ProgressScreen } from "../../components/ProgressScreen";
import { DesktopTopbar } from "../../layouts/desktop/DesktopChrome";

export function DesktopProgressWrapper() {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <DesktopTopbar title="Tiến trình học tập" />
      <ProgressScreen />
    </div>
  );
}
