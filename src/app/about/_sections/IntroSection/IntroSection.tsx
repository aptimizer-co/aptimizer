import { SectionTitle, SectionSubtitle } from "@/src/components";
import s from "./IntroSection.module.css";

const IntroSection = () => {
  return (
    <section className={`${s.container} ${s.intro}`}>
      <SectionTitle>INTRODUCTION</SectionTitle>
      <SectionSubtitle>앱티마이저는 어떤 기업인가</SectionSubtitle>
      <div className={s.video}></div>
      <p className={s.message}>
        누구나 적성을 찾아 자신의 상상과 열정을
        <br />
        실현시키는 세상을 만드는 기업
      </p>
    </section>
  );
};

export default IntroSection;
