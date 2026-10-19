
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";
  import { applyColorTokens } from "./app/lib/colors";
  import { initAnalytics } from "./app/lib/analytics";

  // Ghi bảng màu (lib/colors.ts) thành biến CSS --sl-* trước khi vẽ app
  applyColorTokens();
  initAnalytics();
  createRoot(document.getElementById("root")!).render(<App />);
  