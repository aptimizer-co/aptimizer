import s from "./BannerSection.module.css";

const BannerSection = () => {
  return (
    <div className={s.banner}>
      <div className={`${s.container} ${s.bannerInnerContainer}`}>
        <span className={s.bannerTitle}>APTIMZER</span>
      </div>
    </div>
  );
};

export default BannerSection;
