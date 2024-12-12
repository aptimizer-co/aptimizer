"use client";

import { usePathname } from "next/navigation";
import s from "./ProgramTitle.module.css";

const ProgramTitle = () => {
  const pathname = usePathname();

  const getPageInfo = () => {
    const pathSegments = pathname.split("/").filter(Boolean);
    console.log(pathSegments);

    const titleMap: { [key: string]: string } = {
      "aptifit-relay": "앱티핏 릴레이",
      apply: "신청하기",
    };

    const isApplyPage = pathSegments.includes("apply");
    const programType = pathSegments[1];

    const breadcrumbs = [
      "Home",
      "Programs",
      titleMap[programType] || "",
      isApplyPage ? titleMap["apply"] : "",
    ].filter(Boolean);

    const title = isApplyPage
      ? `${titleMap[programType]} ${titleMap["apply"]}`
      : titleMap[programType];

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

export default ProgramTitle;
