import s from "./page.module.css";

const Home = () => {
  return (
    <main className={`container ${s.home}`}>
      <section className={s.heroSection}>
        {/* PC */}
        <div className={s.heroPC}>
          <p className={s.heroContent}>
            누구나 적성을 찾아 자신의 상상과 열정을
            <br />
            실현시키는 세상을 만드는 기업
          </p>
        </div>

        {/* 태블릿 */}
        <div className={s.heroTablet}>
          <p className={s.heroContent}>
            누구나 적성을 찾아 자신의 상상과 열정을
            <br />
            실현시키는 세상을 만드는 기업
          </p>
        </div>

        {/* 모바일 */}
        <div className={s.heroMobile}>
          <p className={s.heroContentMobile}>
            누구나 적성을 찾아
            <br />
            자신의 상상과 열정을
            <br />
            실현시키는 세상을 만드는 기업
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
