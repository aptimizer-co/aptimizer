import s from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={s.hero}>
      <div className={s.heroImage}>
        <p className={s.heroContent}>
          누구나 적성을 찾아 자신의 상상과 열정을
          <br />
          실현시키는 세상을 만드는 기업
        </p>
        <p className={s.heroContentMobile}>
          누구나 적성을 찾아
          <br />
          자신의 상상과 열정을
          <br />
          실현시키는 세상을 만드는 기업
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
