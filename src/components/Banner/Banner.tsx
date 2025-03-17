"use client";

import Image from "next/image";
import Link from "next/link";
import Close from "@/public/svg/banner_close.svg";
import CloseBlack from "@/public/svg/banner_close_black.svg";
import Logo from "@/public/png/edu-premium-logo.png";
import aptifitBanner from "@/public/png/250314_aptimizer_side_834x1876_bg.png";
import aptifitBannerButton from "@/public/png/250314_banner_button.png";
import aptifitBannerDetail from "@/public/png/250314_banner_button_2.png";
import s from "./Banner.module.css";
import { useRemoveBanner } from "./hooks";

const Banner = () => {
  const {
    isBannerRemoved: isAptifitBannerRemoved,
    removeBanner: removeAptifitBanner,
  } = useRemoveBanner("aptifit");
  const { isBannerRemoved: isEduBannerRemoved, removeBanner: removeEduBanner } =
    useRemoveBanner("edu");

  return (
    <>
      {/* 앱티핏 PC 배너 */}
      {!isAptifitBannerRemoved && (
        <div className={s.aptifitBannerContainer}>
          <Link href="https://aptifit.co.kr">
            <div className={`${s.sideBanner} ${s.aptifitBanner} ${s.show}`}>
              <Image
                src={aptifitBanner}
                alt="앱티핏 바로가기 오른쪽 배너"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </Link>
          <button
            className={`${s.aptifitBannerButton} ${s.show}`}
            onClick={() => window.open("https://aptifit.co.kr", "_blank")}
          >
            <Image
              src={aptifitBannerButton}
              alt="앱티핏 바로가기 오른쪽 배너"
              width={375}
              height={98}
              style={{
                objectFit: "contain",
                width: "100%",
                height: "auto",
              }}
            />
          </button>
          <button
            className={`${s.aptifitBannerDetailButton} ${s.show}`}
            onClick={() =>
              window.open(
                "https://blog.naver.com/aptimizer/223795632863",
                "_blank"
              )
            }
          >
            <Image
              src={aptifitBannerDetail}
              alt="블로그 가기 오른쪽 배너"
              width={842}
              height={186}
              style={{
                objectFit: "contain",
                width: "100%",
                height: "auto",
              }}
            />
          </button>
          <button
            className={`${s.sideBannerCancelButton} ${s.show}`}
            onClick={removeAptifitBanner}
          >
            <Image
              src={CloseBlack}
              alt="앱티핏 바로가기 오른쪽 배너 안보기"
              className={s.cancelIcon}
            />
          </button>
        </div>
      )}

      {/* 에듀프리미엄 PC 배너 */}
      {!isEduBannerRemoved && (
        <div className={`${s.Banner} ${s.show}`}>
          <Image className={s.img} src={Logo} alt="" width={100} height={100} />
          <p className={s.title}>에듀 프리미엄</p>
          <Link className={s.link} href="/edu-premium">
            지금 신청하기
          </Link>
          <button className={s.cancelButton} onClick={removeEduBanner}>
            <Image src={Close} alt="" className={s.cancelIcon} />
          </button>
        </div>
      )}

      {/* 새로운 모바일 배너 */}
      <Link href="https://www.aptifit.co.kr/">
        <div className={`${s.sideMobileBanner} ${s.show}`}>
          <Image
            src="/png/sidemobilebanner.png"
            alt="모바일 사이드 배너"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </Link>
      {/* 기존 모바일 배너 */}
      <div className={`${s.mobileBanner} ${s.show}`}>
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
