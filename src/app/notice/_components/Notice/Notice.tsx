import s from "./Notice.module.css";

const Notice = () => {
  return (
    <div className={s.notice}>
      <p className={s.date}>2024.05.14</p>
      <p className={s.title}>앱티마이저 서비스 정식 출시</p>
    </div>
  );
};

export default Notice;
