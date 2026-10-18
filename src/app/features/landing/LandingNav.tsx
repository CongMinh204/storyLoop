import { useEffect, useState } from "react";
import { C } from "../../lib/colors";
import { BrandMark } from "../../components/BrandMark";
import { Button } from "../../components/ui/button";
import { NAV } from "../../data/landing";
import { useIsMobile } from "../../lib/useIsMobile";
import { openAuth } from "../auth/useAuth";
import { scrollToSection, WRAP } from "./theme";

// Thanh trên dính đầu trang: logo, liên kết cuộn tới từng phần, Đăng nhập / Đăng ký.
// Màn nhỏ: liên kết xuống hàng thứ hai dạng chip cuộn ngang, như mẫu. Cuộn xuống thì thanh nổi lên bằng một lớp bóng nhẹ.
export function LandingNav() {
  const mobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const link = (id: string, label: string, chip: boolean) => (
    <button key={id} onClick={() => scrollToSection(id)}
      style={chip
        ? { flexShrink: 0, background: C.surface, border: `0.5px solid ${C.border}`, color: C.inkMuted, borderRadius: 20, padding: "7px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }
        : { background: "none", border: "none", color: C.inkMuted, fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", padding: "8px 4px" }}
      onMouseEnter={e => { if (!chip) e.currentTarget.style.color = C.ink; }}
      onMouseLeave={e => { if (!chip) e.currentTarget.style.color = C.inkMuted; }}>
      {label}
    </button>
  );
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 20, background: C.bg, borderBottom: `0.5px solid ${C.border}`, boxShadow: scrolled ? "0 8px 24px rgba(25,62,65,.08)" : "none", transition: "box-shadow .3s ease" }}>
      <div style={{ ...WRAP, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, height: mobile ? 56 : 68 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <BrandMark size={mobile ? 32 : 38} radius={10} />
          <span style={{ fontSize: mobile ? 16 : 18, fontWeight: 800, color: C.ink }}>StoryLoop</span>
        </div>
        {!mobile && <nav aria-label="Các phần của trang" style={{ display: "flex", alignItems: "center", gap: 22 }}>{NAV.map(n => link(n.id, n.label, false))}</nav>}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Button variant="outline" onClick={() => openAuth("login")}
            className="ld-btn h-9 rounded-full border-[var(--sl-primary)] bg-transparent px-4 text-[13px] font-bold text-[var(--sl-primary-text)] hover:bg-[var(--sl-primary-bg)] hover:text-[var(--sl-primary-text)]">
            Đăng nhập
          </Button>
          <Button onClick={() => openAuth("register")}
            className="ld-btn h-9 rounded-full bg-[var(--sl-primary-deep)] px-4 text-[13px] font-bold text-white hover:bg-[var(--sl-primary-hover)]">
            Đăng ký
          </Button>
        </div>
      </div>
      {mobile && (
        <nav aria-label="Các phần của trang" style={{ display: "flex", gap: 8, overflowX: "auto", padding: "0 20px 10px", scrollbarWidth: "none" as const }}>
          {NAV.map(n => link(n.id, n.label, true))}
        </nav>
      )}
    </header>
  );
}
