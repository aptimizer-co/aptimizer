import { BannerSection, IntroSection } from "./_sections";
import s from "./page.module.css";

const AboutPage = () => {
  return (
    <main>
      {/* 1. 배너 섹션 */}
      <BannerSection />
      {/* 2. 인트로 섹션 */}
      <IntroSection />
    </main>
  );
};

export default AboutPage;
