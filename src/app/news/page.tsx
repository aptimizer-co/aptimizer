import Image from "next/image";
import NewsNavbar from "./_components/NewsNavbar/NewsNavbar";
import s from "./NewsPage.module.css";

const NewsPage = () => {
  return (
    <main className={s.NewsPage}>
      {/* 현재 페이지 위치 */}
      <div className={s.currentLocation}>
        <p className={s.currentLocationText}>Home</p>
        <p className={s.currentLocationText}>News</p>
      </div>

      {/* 타이틀 */}
      <div className={s.titleContainer}>
        <h1 className={s.title}>뉴스룸</h1>
      </div>
      {/* 최신 뉴스 */}
      <div className={s.latestNewsContainer}>
        {/* 뉴스 이미지 */}
        <Image
          src="/jpg/news-test.jpg"
          alt="최신 뉴스"
          width={590}
          height={450}
          className={s.latestNewsImage}
        />
        <div className={s.latestNewsContentContainer}>
          {/* 프로젝트 이름 */}
          <p className={s.latestNewsProject}>APTIFIT</p>

          {/* 뉴스 제목 */}
          <h2 className={s.latestNewsTitle}>
            앱티마이저, 3분기 매출 2조 428억원, <br /> 영업이익 286억원 달성
          </h2>
          {/* 뉴스 내용 */}
          <p className={s.latestNewsContent}>
            - 앱티핏, 이익 향상 견인··· 영업이익 전년 대비 74.9% 증가 - 스누로
            매각 등 통해 부채비율 대폭 개선… 재무구조 안정화 성과 창출 - ROE
            3.5%, 연간 주당 배당금 250원 이상 목표로 하는 기업가치 제고 계...
          </p>
          {/* 뉴스 작성일 */}
          <p className={s.latestNewsDate}>2025.03.05</p>
        </div>

        {/* 이동 버튼 */}
        <div className={s.latestNewsButtonContainer}>
          <Image
            src="/svg/carousel_arrow.svg"
            alt="이전 뉴스"
            width={40}
            height={40}
            className={`${s.carouselButton} ${s.prevButton}`}
          />
          <Image
            src="/svg/carousel_arrow.svg"
            alt="다음 뉴스"
            width={40}
            height={40}
            className={s.carouselButton}
          />
        </div>
      </div>

      <NewsNavbar />
      <aside className={s.sidebar}>
        <h2>관련 소식</h2>
        {/* 사이드바 컨텐츠 */}
      </aside>
    </main>
  );
};

export default NewsPage;
