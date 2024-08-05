import s from "./IntroSection.module.css";

const IntroSection = () => {
  return (
    <section className={s.IntroSection}>
      <p className={s.title}>
        자녀의 진로설계를 위한 최고의 선택, 에듀 프리미엄
      </p>

      <div className={s.videoContainer}>
        <iframe
          src="https://player.vimeo.com/video/969644801?h=cbfde2f010&autoplay=1&title=0&byline=0&portrait=0"
          width="720"
          height="480"
          frameborder="0"
          allow="fullscreen; picture-in-picture"
          allowfullscreen
          className={s.video}
        />
      </div>

      <p className={s.description}>
        아파트가 단순한 주거 공간으로 끝나는 게 아닌, 가정 내 모든 니즈를
        충족하기 위한 EFETE의 첫걸음
      </p>
      <p className={s.description}>
        EFETE 분양계약자의 자녀분들에게 최고의 진로 프로그램 경험을 제공해
        드리기 위해 앱티마이저가 직접 개발한 다양하고 체계적으로 구성된 교육
        특화 서비스 입니다.
      </p>
    </section>
  );
};

export default IntroSection;
