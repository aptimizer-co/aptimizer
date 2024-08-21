"use client";

import Image from "next/image";
import Link from "next/link";
import Close from "@/public/svg/banner_close.svg";
import Logo from "@/public/png/edu-premium-logo.png";
import s from "./Banner.module.css";
import { useRemoveBanner, useScrollInView } from "./hooks";

const Banner = () => {
  const isVisible = useScrollInView();
  const { isBannerRemoved, removeBanner } = useRemoveBanner();

  // ScrollY가 범위 안에 들지 않았거나 세션 스토리지에 제거 데이터가 있을 시에는 렌더링하지 않는다.
  if (!isVisible || isBannerRemoved) {
    return null;
  }

  return (
    <>
      {/* PC */}
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
        <button className={s.cancelButton} onClick={removeBanner}>
          <Image src={Close} alt="" className={s.cancelIcon} />
        </button>
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
