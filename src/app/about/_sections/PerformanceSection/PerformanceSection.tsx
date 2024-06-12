"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import PerformanceImage from "@/public/png/about-performance.png";
import { Container, SectionTitle, SectionSubtitle } from "@/src/components";
import { PerformanceCard } from "@/src/app/about/_components";
import s from "./PerformanceSection.module.css";

const PerformanceSection = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.5 } // 섹션의 50%가 뷰포트에 들어왔을 때 트리거
    );

    const currentSectionRef = sectionRef.current;

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  return (
    <section className={s.performanceSection} ref={sectionRef}>
      <Container style={s.container}>
        <SectionTitle>PERFORMANCE</SectionTitle>
        <SectionSubtitle>앱티마이저가 보여주는 성과</SectionSubtitle>

        <div className={s.innerContainer}>
          <div className={s.image}>
            <Image src={PerformanceImage} alt="데이터 이미지" fill />
          </div>

          <div className={s.performanceCardContainer}>
            <PerformanceCard animate={animate} type="students" />
            <PerformanceCard animate={animate} type="handshake" />
            <PerformanceCard animate={animate} type="data" />
            <PerformanceCard animate={animate} type="experiment" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PerformanceSection;
