// import { Container } from "@/src/components";
// import s from "./HeroSection.module.css";
import Image from "next/image";
import s from "./test.module.css";
import Test from "@/public/png/test.png";

const HeroSection = () => {
  return (
    <section className={s.heroSection}>
      <div className={s.titleContainer}>
        <p className={s.title}>AI 기반 맞춤형 진로 설계 서비스</p>
        <p className={s.subTitle}>앱티마이저와 함께 당신의 미래를 설계하세요!</p>
      </div>

      <div className={s.imageContainer}>
        <Image className={s.image} src={Test} alt="Hero Image" width={1500} height={560} />
      </div>
    </section>
  );
  // return (
  //   <section className={s.hero}>
  //     <div className={s.heroImage}>
  //       <p className={s.heroContent}>
  //         누구나 적성을 찾아 자신의 상상과 열정을
  //         <br />
  //         실현시키는 세상을 만드는 기업
  //       </p>
  //       <p className={s.heroContentMobile}>
  //         누구나 적성을 찾아
  //         <br />
  //         자신의 상상과 열정을
  //         <br />
  //         실현시키는 세상을 만드는 기업
  //       </p>
  //     </div>
  //   </section>
  // );
};

export default HeroSection;
