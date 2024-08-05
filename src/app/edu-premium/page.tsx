import { Container } from "@/src/components";
import {
  IntroSection,
  FeatureSection,
  EffectSection,
  ServiceSection,
  ScheduleSection,
  ApplySection,
} from "./_sections";
import s from "./EduPremiumPage.module.css";

const EduPremiumPage = () => {
  return (
    <main className={s.EduPremiumPage}>
      <Container>
        <IntroSection />
        <FeatureSection />
        <EffectSection />
        <ServiceSection />
        <ScheduleSection />
        <ApplySection />
      </Container>
    </main>
  );
};

export default EduPremiumPage;
