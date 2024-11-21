import s from "./SocialPage.module.css";

const SocialPage = () => {
  return (
    <div className={s.container}>
      <div className={s.emptyWrapper}>
        <p className={s.emptyText}>현재 등록된 소셜 미디어 소식이 없습니다.</p>
      </div>
    </div>
  );
};

export default SocialPage;
