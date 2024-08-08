"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// import Close from "@/public/svg/banner_close.svg";
import Logo from "@/public/png/edu-premium-logo.png";
import s from "./Banner.module.css";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <div className={`${s.Banner} ${isVisible ? s.show : s.hide}`}>
        <Image className={s.img} src={Logo} alt="" width={150} height={150} />
        <p className={s.description}>
          한라 EFETE
          <br />
          수분양자를 위한
          <br />
          프리미엄 교육 프로그램
        </p>
        <p className={s.title}>에듀 프리미엄</p>
        <Link className={s.link} href="/edu-premium">
          지금 신청하기
        </Link>
      </div>

      {/* 모바일 */}
      <div className={`${s.mobileBanner} ${isVisible ? s.show : s.hide}`}>
        <Link className={s.mobileLink} href="/edu-premium">
          <Image className={s.mobileBannerImg} src={Logo} alt="" width={48} height={48} />
        </Link>
      </div>
    </>
  );
};

export default Banner;
