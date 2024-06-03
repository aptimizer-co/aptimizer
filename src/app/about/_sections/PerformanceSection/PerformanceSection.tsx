import Image from "next/image";
import PerformanceImage from "@/public/png/about-performance.png";
import Wave from "@/public/svg/wave.svg";
import { SectionTitle, SectionSubtitle } from "@/src/components";
import { PerformanceCard } from "@/src/app/about/_components";
import s from "./PerformanceSection.module.css";

const PerformanceSection = () => {
  return (
    <section className={`${s.container} ${s.performanceSection}`}>
      <SectionTitle>PERFORMANCE</SectionTitle>
      <SectionSubtitle>앱티마이저가 보여주는 성과</SectionSubtitle>

      <div className={s.innerContainer}>
        <div className={s.image}>
          <Image src={PerformanceImage} alt="데이터 이미지" fill />
        </div>

        <div className={s.PerformanceCardContainer}>
          <PerformanceCard type="students" />
          <PerformanceCard type="handshake" />
          <PerformanceCard type="data" />
          <PerformanceCard type="experiment" />
        </div>
      </div>
      {/* 
      <div className={s.wave}>
        <Image src={Wave} alt="데이터 이미지" fill />
      </div> */}
    </section>
  );
};

export default PerformanceSection;
