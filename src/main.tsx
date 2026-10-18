
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";
  import { applyColorTokens } from "./app/lib/colors";

  // Ghi bảng màu (lib/colors.ts) thành biến CSS --sl-* trước khi vẽ app
  applyColorTokens();
  createRoot(document.getElementById("root")!).render(<App />);
  