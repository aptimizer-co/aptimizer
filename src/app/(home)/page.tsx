import s from "./page.module.css";

const Home = () => {
  return (
    <main className={`container ${s.home}`}>
      <section className={s.hero}>
        <p className={s.title}>
          누구나 적성을 찾아 자신의 상상과 열정을
          <br />
          실현시키는 세상을 만드는 기업
        </p>
      </section>
    </main>
  );
};

export default Home;
