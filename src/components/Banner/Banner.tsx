"use client";

import Image from "next/image";
import Link from "next/link";
import Close from "@/public/svg/banner_close.svg";
import CloseBlack from "@/public/svg/banner_close_black.svg";
import Logo from "@/public/png/edu-premium-logo.png";
import aptifitBanner from "@/public/png/sidebanner.png";
import s from "./Banner.module.css";
import { useRemoveBanner, useScrollInView } from "./hooks";

const Banner = () => {
  const isVisible = useScrollInView();
  const { isBannerRemoved, removeBanner } = useRemoveBanner();

  if (!isVisible || isBannerRemoved) {
    return null;
  }

  return (
    <>
      {/* 앱티핏 PC 배너 */}
      <div>
        <Link href="https://www.aptifit.co.kr/">
          <div className={`${s.sideBanner} ${isVisible ? s.show : s.hide}`}>
            <Image
              src={aptifitBanner}
              alt="앱티핏 바로가기 오른쪽 배너"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </Link>
        <button className={s.sideBannerCancelButton} onClick={removeBanner}>
          <Image
            src={CloseBlack}
            alt="앱티핏 바로가기 오른쪽 배너 안보기"
            className={s.cancelIcon}
          />
        </button>
      </div>

      {/* 에듀프리미엄 PC 배너 */}
      <div className={`${s.Banner} ${isVisible ? s.show : s.hide}`}>
        <Image className={s.img} src={Logo} alt="" width={100} height={100} />
        <p className={s.title}>에듀 프리미엄</p>
        <Link className={s.link} href="/edu-premium">
          지금 신청하기
        </Link>
        <button className={s.cancelButton} onClick={removeBanner}>
          <Image src={Close} alt="" className={s.cancelIcon} />
        </button>
      </div>

      {/* 새로운 모바일 배너 */}
      <Link href="https://www.aptifit.co.kr/">
        <div className={`${s.sideMobileBanner} ${isVisible ? s.show : s.hide}`}>
          <Image
            src="/png/sidemobilebanner.png"
            alt="모바일 사이드 배너"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </Link>
      {/* 기존 모바일 배너 */}
      <div className={`${s.mobileBanner} ${isVisible ? s.show : s.hide}`}>
        <Link className={s.mobileLink} href="/edu-premium">
          <Image
            className={s.mobileBannerImg}
            src={Logo}
            alt=""
            width={48}
            height={48}
          />
        </Link>
      </div>
    </>
  );
};

export default Banner;
