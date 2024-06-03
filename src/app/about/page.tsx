import { Navigation } from "@/src/components";
import {
  BannerSection,
  HistorySection,
  IntroSection,
  LocationSection,
  PerformanceSection,
} from "./_sections";
import s from "./page.module.css";

const AboutPage = () => {
  return (
    <main>
      {/* 1. 배너 섹션 */}
      <BannerSection />
      {/* 2. 네비게이션 */}
      <Navigation />
      {/* 3. 인트로 섹션 */}
      <IntroSection />
      {/* 4. 히스토리 섹션 */}
      <HistorySection />
      {/* 5. 퍼포먼스 섹션 */}
      {/* <PerformanceSection /> */}
      {/* 6. 위치 섹션 */}
      <LocationSection />
    </main>
  );
};

export default AboutPage;
