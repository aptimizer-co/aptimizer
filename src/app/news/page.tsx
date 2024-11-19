"use client";

import NewsNavbar from "./_components/Navigation/Navigation";
import Carousel from "./_components/Carousel/Carousel";
import s from "./NewsPage.module.css";

const NewsPage = () => {
  return (
    <main className={s.NewsPage}>
      {/* 현재 페이지 위치와 페이지 제목 */}
      <div className={s.currentLocation}>
        <p className={s.currentLocationText}>Home</p>
        <p className={s.currentLocationText}>News</p>
      </div>
      <div className={s.titleContainer}>
        <h1 className={s.title}>뉴스룸</h1>
      </div>

      {/* 최신 뉴스 */}
      <Carousel />
      <NewsNavbar />
      <aside className={s.sidebar}>
        <h2>관련 소식</h2>
        {/* 사이드바 컨텐츠 */}
      </aside>
    </main>
  );
};

export default NewsPage;
