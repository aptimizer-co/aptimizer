import { Container, SectionTitle, SectionSubtitle } from "@/src/components";
import s from "./IntroSection.module.css";

const IntroSection = () => {
  return (
    <section className={s.intro}>
      <Container style={s.container}>
        <SectionTitle>INTRODUCTION</SectionTitle>
        <SectionSubtitle>앱티마이저는 어떤 기업인가</SectionSubtitle>
        <div className={s.videoContainer}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/a1jaQzP8feY?si=v6HeD-Rllmpa_BNA"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // referrerPolicy="strict-origin-when-cross-origin"
            className={s.video}
          />
        </div>

        <p className={s.message}>
          누구나 적성을 찾아 자신의 상상과 열정을
          <br />
          실현시키는 세상을 만드는 기업
        </p>

        <p className={s.messageMobile}>
          누구나 적성을 찾아
          <br />
          자신의 상상과 열정을
          <br />
          실현시키는 세상을 만드는 기업
        </p>
      </Container>
    </section>
  );
};

export default IntroSection;
