import s from "./page.module.css";
import { Services } from "./_sections";

const Home = () => {
  return (
    <main className={`container ${s.home}`}>
      {/* <section className={s.heroSection}>
        <div className={s.heroPC}>
          <p className={s.heroContent}>
            누구나 적성을 찾아 자신의 상상과 열정을
            <br />
            실현시키는 세상을 만드는 기업
          </p>
        </div>

        <div className={s.heroTablet}>
          <p className={s.heroContent}>
            누구나 적성을 찾아 자신의 상상과 열정을
            <br />
            실현시키는 세상을 만드는 기업
          </p>
        </div>

        <div className={s.heroMobile}>
          <p className={s.heroContentMobile}>
            누구나 적성을 찾아
            <br />
            자신의 상상과 열정을
            <br />
            실현시키는 세상을 만드는 기업
          </p>
        </div>
      </section> */}
      <Services />
    </main>
  );
};

export default Home;
