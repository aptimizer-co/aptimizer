import s from "./ApplySection.module.css";

const ApplySection = () => {
  return (
    <section className={s.ApplySection}>
      <p className={s.title}>에듀 프리미엄 지금 바로 신청하기</p>
      <div className={s.buttonContainer}>
        <button className={s.button}>신청하기</button>
      </div>
    </section>
  );
};

export default ApplySection;
