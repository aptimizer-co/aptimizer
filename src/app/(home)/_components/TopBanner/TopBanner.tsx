import Link from "next/link";
import s from "./TopBanner.module.css";
import Image from "next/image";

const TopBanner = () => {
  return (
    <div className={s.lineBanner}>
      <Link href="https://www.aptifit.co.kr/" className={s.link}>
        <Image
          className={`${s.bannerImage} ${s.desktopBanner}`}
          src="/jpg/250312_kt_banner_1286x160.jpg"
          alt="앱티핏 바로가기 배너 이미지"
          width={1286}
          height={160}
          priority
        />
        <Image
          className={`${s.bannerImage} ${s.mobileBanner}`}
          src="/jpg/250312_kt_banner_640x200.jpg"
          alt="앱티핏 바로가기 배너 이미지"
          width={640}
          height={200}
          priority
        />
      </Link>
    </div>
  );
};

export default TopBanner;
