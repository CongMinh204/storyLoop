import { Facebook, Mail } from "lucide-react";
import { C } from "../../lib/colors";
import { BrandMark } from "../../components/BrandMark";
import { CONTACT_EMAIL, FACEBOOK_URL, FOOTER, NAV } from "../../data/landing";
import { scrollToSection, WRAP } from "./theme";

const colTitle: React.CSSProperties = { fontSize: 13, fontWeight: 800, color: C.onFill, margin: "0 0 14px", letterSpacing: ".04em", textTransform: "uppercase" };
const linkStyle: React.CSSProperties = { background: "none", border: "none", padding: 0, color: "rgba(255,255,255,.82)", fontSize: 14, cursor: "pointer", fontFamily: "inherit", textAlign: "left", textDecoration: "none" };

// Chân trang: giới thiệu ngắn, Facebook của dự án, liên kết nội bộ, liên hệ
export function LandingFooter() {
  return (
    <footer style={{ background: C.ink, padding: "clamp(40px, 6vw, 64px) 0 28px" }}>
      <div style={{ ...WRAP, display: "flex", flexWrap: "wrap", gap: "36px 56px" }}>
        <div style={{ flex: "2 1 300px", minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <BrandMark size={38} radius={11} />
            <span style={{ fontSize: 18, fontWeight: 800, color: C.onFill }}>StoryLoop</span>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,.82)", margin: "16px 0 0", maxWidth: 380 }}>{FOOTER.about}</p>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.reward, margin: "22px 0 10px" }}>{FOOTER.social}</div>
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label={FOOTER.facebook}
            style={{ display: "inline-flex", alignItems: "center", gap: 10, color: C.onFill, textDecoration: "none", fontSize: 14, fontWeight: 600 }}>
            <span style={{ width: 38, height: 38, borderRadius: "50%", background: "rgba(255,255,255,.14)", display: "flex", alignItems: "center", justifyContent: "center" }}><Facebook size={18} /></span>
            {FOOTER.facebook}
          </a>
        </div>
        <div style={{ flex: "1 1 140px" }}>
          <h3 style={colTitle}>Khám phá</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {NAV.map(n => <button key={n.id} style={linkStyle} onClick={() => scrollToSection(n.id)}>{n.label}</button>)}
          </div>
        </div>
        <div style={{ flex: "1 1 200px" }}>
          <h3 style={colTitle}>Liên hệ</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {CONTACT_EMAIL && (
              <a href={`mailto:${CONTACT_EMAIL}`} style={{ ...linkStyle, display: "inline-flex", alignItems: "center", gap: 8 }}><Mail size={15} /> {CONTACT_EMAIL}</a>
            )}
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" style={linkStyle}>Nhắn tin qua Facebook</a>
          </div>
        </div>
      </div>
      <div style={{ ...WRAP, marginTop: 36 }}>
        <div style={{ borderTop: "1px solid rgba(255,255,255,.18)", paddingTop: 20, fontSize: 12, color: "rgba(255,255,255,.72)" }}>{FOOTER.copyright}</div>
      </div>
    </footer>
  );
}
