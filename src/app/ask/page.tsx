import s from "./page.module.css";

const AskPage = () => {
  return (
    <main className={s.ask}>
      <div className={s.banner}>
        <div className={`${s.container} ${s.bannerInner}`}>
          <h2 className={s.title}>문의하기</h2>
        </div>
      </div>
      <section className={s.container}></section>
    </main>
  );
};

export default AskPage;
