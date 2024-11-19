import s from "./Title.module.css";

const Title = () => {
  return (
    <header>
      <nav aria-label="현재 페이지 위치 안내" className={s.currentLocation}>
        <ol className={s.currentLocationList}>
          <li className={s.currentLocationText}>Home</li>
          <li className={s.currentLocationText}>News</li>
        </ol>
      </nav>
      <section className={s.titleContainer}>
        <h1 className={s.title}>뉴스룸</h1>
      </section>
    </header>
  );
};

export default Title;
