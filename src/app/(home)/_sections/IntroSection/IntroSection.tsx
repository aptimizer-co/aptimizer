"use client";
import { useInView } from "react-intersection-observer";
import { Container, SectionTitle, SectionSubtitle } from "@/src/components";
import s from "./IntroSection.module.css";

const IntroSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      className={`${s.introSection} ${inView ? s.introSectionAnimate : ""}`}
      ref={ref}
      id="intro"
    >
      <Container style={s.container}>
        <SectionTitle>INTRODUCTION</SectionTitle>
        <SectionSubtitle>앱티마이저는 어떤 기업인가</SectionSubtitle>
        <div className={s.videoContainer}>
          <iframe
            width="544"
            src="https://www.youtube.com/embed/uStv-iT6c3I?si=l26SoZOgl1p5N0hO"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className={s.video}
          />
          <iframe
            width="544"
            src="https://www.youtube.com/embed/qOyzW0dwkfw?si=4S8zNbl2s4UwSfGZ"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className={s.video}
          />
        </div>

        <p className={s.message}>
          누구나 적성을 찾아 자신의 상상과 열정을
          <br />
          실현시키는 세상을 만드는 기업
        </p>
        <div className={s.descriptionContainer}>
          <p className={s.description}>
            앱티마이저는 2024년 1월 서울대학교 기술지주회사 자회사로 설립된
            에듀테크 기업으로 인공지능을 활용하여 적성을 진단하는 서비스를
            제공합니다. 서울대학교 교육학과 오헌석 교수가 대표이사를 맡고
            있으며, 지난 20여년간 적성, 역량, 전문성에 관해 축적된 연구 결과와
            진단도구를 기반으로 인공지능을 활용하여 다양한 분야의 적성을
            진단해주는 서비스를 제공하는 기업입니다.
            <br />
            앱터마이저의 기업 비전은 누구나 적성을 찾아 자신의 상상과 열정을
            실현시키는 세상을 만들어 Excellence for All을 실현하는 것입니다.
            모든 사람들이 자신에게 딱 맞는 길을 찾아 후회없는 행복한 인생을
            살아가는 데 도움을 드리고자 합니다.
          </p>
        </div>

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
