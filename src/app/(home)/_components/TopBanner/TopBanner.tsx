import Link from "next/link";
import s from "./TopBanner.module.css";
import Image from "next/image";

const TopBanner = () => {
  return (
    <div className={s.lineBanner}>
      <Link href="https://www.aptifit.co.kr/" className={s.link}>
        <Image
          className={s.bannerImage}
          src="/png/topbanner.png"
          alt="앱티핏 바로가기 배너 이미지"
          width={1286}
          height={120}
          priority
        />
      </Link>
    </div>
  );
};

export default TopBanner;
