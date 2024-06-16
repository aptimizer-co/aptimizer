import Image from "next/image";
import Doctor from "@/public/png/doctor.png";
import CEO from "@/public/png/ceo.png";
import MaleArtist from "@/public/png/artist.png";
import s from "./MobileHeroSection.module.css";

const MobileHeroSection = () => {
  return (
    <div className={s.mobileHeroSection}>
      {/* <div className={s.imageContainerMobile}>
        <Image className={s.imageMobile} src={Doctor} alt="의사" width={350} />
      </div> */}
      <div className={s.imageContainerMobile}>
        <Image className={s.imageMobile} src={CEO} alt="CEO" width={380} />
      </div>
      {/* <div className={s.imageContainerMobile}>
        <Image
          className={s.imageMobile}
          src={FemaleArtist}
          alt="여자 아티스트"
          width={250}
        />
      </div>
      <div className={s.imageContainerMobile}>
        <Image
          className={s.imageMobile}
          src={MaleArtist}
          alt="남자 아티스트"
          width={340}
        />
      </div> */}
    </div>
  );
};

export default MobileHeroSection;
