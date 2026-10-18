import { C } from "../../lib/colors";
import "./landing.css";
import { LandingNav } from "./LandingNav";
import { LandingHero } from "./LandingHero";
import { BloomSection, FeaturesSection, HowSection, ShelfSection, PricingSection, FinalSection } from "./LandingSections";
import { LandingFooter } from "./LandingFooter";

// Trang giới thiệu hiện đầu tiên khi chưa đăng nhập (và chưa chọn chơi khách). Là trang cuộn toàn màn hình,
// dùng chung cho desktop và mobile (bố cục tự co theo bề ngang). Ba nút dẫn tới đăng nhập, đăng ký, chơi khách.
export function LandingScreen() {
  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.ink, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <LandingNav />
      <main>
        <LandingHero />
        <BloomSection />
        <FeaturesSection />
        <HowSection />
        <ShelfSection />
        <PricingSection />
        <FinalSection />
      </main>
      <LandingFooter />
    </div>
  );
}
