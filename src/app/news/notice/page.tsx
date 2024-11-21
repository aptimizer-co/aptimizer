import s from "./NoticePage.module.css";

const PressPage = () => {
  return (
    <div className={s.container}>
      <div className={s.emptyWrapper}>
        <p className={s.emptyText}>현재 등록된 공지사항이 없습니다.</p>
      </div>
    </div>
  );
};

export default PressPage;
