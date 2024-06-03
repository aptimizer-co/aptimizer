import Image from "next/image";
import { SectionTitle, SectionSubtitle } from "@/src/components";
import HistoryImage from "@/public/png/about-history.png";
import s from "./History.module.css";

const HistorySection = () => {
  return (
    <section className={`${s.container} ${s.history}`}>
      <SectionTitle>HISTORY</SectionTitle>
      <SectionSubtitle>앱티마이저가 걸어온 길</SectionSubtitle>

      <div className={s.image}>
        <Image src={HistoryImage} alt="역사 이미지" fill />
      </div>

      <div className={s.innerContainer}>
        <p className={s.historyTitle}>진단도구 개발</p>
        <p className={s.timeLine}>2010 전문가 성장잠재력 측정도구 개발</p>
        <p className={s.timeLine}>2013 캐디 전문성 진단도구 개발</p>
        <p className={s.timeLine}>2014 창업역량 모델링 및 진단도구 개발</p>
        <p className={s.timeLine}>2014 공군교관 전문성 진단도구 개발</p>
        <p className={s.timeLine}>2015 학교장 역량 진단도구 개발</p>
        <p className={s.timeLine}>2016 해군교관 전문성 진단도구 개발</p>
        <p className={s.timeLine}>2019 교감 진단도구 개발</p>
        <p className={s.timeLine}>
          2022 크래프톤 교육프로그램 성과측정 도구 개발
        </p>
        <p className={s.timeLine}>2023 에듀버스 공통역량 진단도구 개발</p>
      </div>

      <div className={s.innerContainer}>
        <p className={s.historyTitle}>진로 교육</p>
        <p className={s.timeLine}>2021 스누로 멘토링 프로그램 개발 및 운영</p>
        <p className={s.timeLine}>2022 스누로 미래교육(4차산업교육)</p>
      </div>
    </section>
  );
};

export default HistorySection;
