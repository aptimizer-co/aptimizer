"use client";

import { usePathname } from "next/navigation";
import s from "./Title.module.css";

const Title = () => {
  const pathname = usePathname();

  const getPageInfo = () => {
    const pathSegments = pathname.split("/").filter(Boolean);

    const titleMap: { [key: string]: string } = {
      press: "보도자료",
      notice: "공지사항",
      social: "소셜미디어",
    };

    const isDetailPage = pathSegments.length > 2;
    const pageType = pathSegments[1];

    const breadcrumbs = ["Home", "News", titleMap[pageType] || ""].filter(
      Boolean
    );

    const title = isDetailPage ? titleMap[pageType] : "뉴스룸";

    return {
      currentPage: title,
      breadcrumbs,
    };
  };

  const { currentPage, breadcrumbs } = getPageInfo();

  return (
    <header>
      <nav aria-label="현재 페이지 위치 안내" className={s.currentLocation}>
        <ol className={s.currentLocationList}>
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className={s.currentLocationText}>
              {crumb}
            </li>
          ))}
        </ol>
      </nav>
      <section className={s.titleContainer}>
        <h1 className={s.title}>{currentPage}</h1>
      </section>
    </header>
  );
};

export default Title;
