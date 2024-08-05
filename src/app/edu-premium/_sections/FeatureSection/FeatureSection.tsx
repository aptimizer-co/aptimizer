import Image from "next/image";
import Students from "@/public/jpg/students.jpg";
import Outdoor from "@/public/jpg/outdoor.jpg";
import Mentor from "@/public/jpg/mentor.jpg";
import s from "./FeatureSection.module.css";

const FeatureSection = () => {
  return (
    <section className={s.FeatureSection}>
      <h2 className={s.title}>프로그램 특장점</h2>
      <div className={s.feature}>
        <div className={s.textContainer}>
          <span className={s.number}>01</span>
          <p className={s.description}>
            에듀프리미엄 참여자의 학습 동기 및 습관, 생활습관에 장기적인 변화를
            가져옵니다. 이미 3천명이 넘는 초중고 학생들이 효과를 검증한
            프로그램으로 구성되어 있습니다.
          </p>
        </div>
        <div className={s.imgContainer}>
          <Image className={s.img} src={Students} alt="" />
        </div>
      </div>
      <div className={s.feature}>
        <div className={`${s.textContainer} ${s.order}`}>
          <span className={s.number}>02</span>
          <p className={s.description}>
            생생하고 강렬한 경험을 할 수 있는 오프라인 학습, 주기적이고 지속적인
            변화를 도와주는 온라인 학습을 모두 경험해 보세요.
          </p>
        </div>
        <div className={s.imgContainer}>
          <Image className={s.img} src={Outdoor} alt="" />
        </div>
      </div>
      <div className={s.feature}>
        <div className={s.textContainer}>
          <span className={s.number}>03</span>
          <p className={s.description}>
            멘토들과 강사진으로부터 직접 듣는 강의부터, 멘토와의 진로 멘토링,
            직접 행동하는 체험 프로그램, 서울대 관악 캠퍼스 투어 프로그램 까지.
            에듀 프리미엄을 통해 풍부한 경험을 얻어가세요.
          </p>
        </div>
        <div className={s.imgContainer}>
          <Image className={s.img} src={Mentor} alt="" />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
