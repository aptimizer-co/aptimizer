"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import PerformanceImage from "@/public/png/about-performance.png";
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
            <Image src={PerformanceImage} alt="데이터 이미지" fill />
          </div>

          <div className={s.performanceCardContainer}>
            <PerformanceCard animate={inView} type="students" />
            <PerformanceCard animate={inView} type="handshake" />
            <PerformanceCard animate={inView} type="data" />
            <PerformanceCard animate={inView} type="experiment" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PerformanceSection;
