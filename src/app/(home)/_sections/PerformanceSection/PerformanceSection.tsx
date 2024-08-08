"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import PerformanceImage from "@/public/png/about-performance.png";
import Performance from "@/public/svg/performance.svg";
import { Container, SectionTitle, SectionSubtitle } from "@/src/components";
import { PerformanceCard } from "@/src/app/about/_components";
import s from "./PerformanceSection.module.css";

const PerformanceSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section className={`${s.performanceSection} ${inView ? s.performanceSectionAnimate : ""}`} ref={ref}>
      <Container style={s.container}>
        <SectionTitle>PERFORMANCE</SectionTitle>
        <SectionSubtitle>앱티마이저가 보여주는 성과</SectionSubtitle>
        <div className={s.innerContainer}>
          <div className={s.image}>
            <Image src={Performance} alt="데이터 이미지" fill />
          </div>

          <div className={s.performanceCardContainer}>
            <PerformanceCard animate={inView} type="students" />
            <PerformanceCard animate={inView} type="handshake" />
            <PerformanceCard animate={inView} type="mentor" />
            <PerformanceCard animate={inView} type="survey" />
          </div>
        </div>
        <p className={s.title}>믿을 수 있는 경험과 운영 노하우를 지닌 기업</p>
        <p className={s.mobileTitle}>
          믿을 수 있는 경험과 운영<br></br>노하우를 지닌 기업
        </p>
      </Container>
    </section>
  );
};

export default PerformanceSection;
