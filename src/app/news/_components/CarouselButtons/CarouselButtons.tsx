"use client";

import Image from "next/image";
import s from "./CarouselButtons.module.css";

interface CarouselButtonsProps {
  onPrevClick?: () => void;
  onNextClick?: () => void;
}

const CarouselButtons = ({
  onPrevClick,
  onNextClick,
}: CarouselButtonsProps) => {
  return (
    <div className={s.latestNewsButtonContainer}>
      <Image
        src="/svg/carousel_arrow.svg"
        alt="이전 뉴스"
        width={40}
        height={40}
        className={`${s.carouselButton} ${s.prevButton}`}
        onClick={onPrevClick}
      />
      <Image
        src="/svg/carousel_arrow.svg"
        alt="다음 뉴스"
        width={40}
        height={40}
        className={s.carouselButton}
        onClick={onNextClick}
      />
    </div>
  );
};

export default CarouselButtons;
