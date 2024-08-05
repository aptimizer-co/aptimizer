import Image from "next/image";
import Motivation from "@/public/svg/edup_motivation.svg";
import Family from "@/public/svg/edup_family.svg";
import Reading from "@/public/svg/edup_reading.svg";
import s from "./EffectSection.module.css";

const EffectSection = () => {
  return (
    <section className={s.EffectSection}>
      <p className={s.title}>프로그램 효과</p>
      <div className={s.iconContianer}>
        <div className={s.icon}>
          <Image className={s.iconImg} src={Motivation} alt="" />
          <span className={s.iconTitle}>학습 동기 강화</span>
        </div>
        <div className={s.icon}>
          <Image className={s.iconImg} src={Reading} alt="" />
          <span className={s.iconTitle}>자기주도적 역량증진</span>
        </div>
        <div className={s.icon}>
          <Image className={s.iconImg} src={Family} alt="" />
          <span className={s.iconTitle}>가정적 성장</span>
        </div>
      </div>
      <p className={s.description}>
        정확한 적성 진단, 분석을 기반으로 한 멘토링, 다양한 교육 프로그램으로
        구성된 에듀 프리미엄은 대학진학 및 학습동기를 강화하고, 자기주도적
        역량을 키워 프로그램 참여자의 꿈을 키우고, 미래 설계를 지원해 드립니다.
      </p>
      <p className={s.description}>
        또한 학부모님들을 위한 특강을 통해 자녀 개인의 성장이 아닌 가정
        전체적으로 자녀의 진로에 대한 이해를 높여드립니다.
      </p>
    </section>
  );
};

export default EffectSection;
