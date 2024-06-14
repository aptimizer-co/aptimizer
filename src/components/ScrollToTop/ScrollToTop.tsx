"use client";

import ArrowUp from "@/public/svg/arrow_upward.svg";
import Image from "next/image";
import s from "./ScrollToTop.module.css";

const ScrollToTop = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 부드럽게 스크롤
    });
  };

  return (
    <button className={s.scrollToTop} onClick={handleClick}>
      <Image className={s.icon} src={ArrowUp} alt="" width={24} height={24} />
    </button>
  );
};

export default ScrollToTop;
