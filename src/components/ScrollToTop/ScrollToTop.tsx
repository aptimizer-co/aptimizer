"use client";

import { useState, useEffect } from "react";
import ArrowUp from "@/public/svg/arrow_upward.svg";
import Image from "next/image";
import s from "./ScrollToTop.module.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`${s.scrollToTop} ${isVisible ? s.show : s.hide}`}
      onClick={handleClick}
    >
      <Image
        className={s.icon}
        src={ArrowUp}
        alt="맨 위로"
        width={24}
        height={24}
      />
    </button>
  );
};

export default ScrollToTop;
