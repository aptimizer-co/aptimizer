"use client";

import Image from "next/image";
import s from "./CarouselButtons.module.css";

interface CarouselButtonsProps {
  onPrevClick?: () => void;
  onNextClick?: () => void;
  isPrevDisabled?: boolean;
  isNextDisabled?: boolean;
}

const CarouselButtons = ({
  onPrevClick,
  onNextClick,
  isPrevDisabled,
  isNextDisabled,
}: CarouselButtonsProps) => {
  return (
    <div className={s.latestNewsButtonContainer}>
      <Image
        src="/svg/carousel_arrow.svg"
        alt="이전 뉴스"
        width={40}
        height={40}
        draggable={false}
        className={`${s.carouselButton} ${s.prevButton} ${
          isPrevDisabled ? s.disabled : ""
        }`}
        onClick={!isPrevDisabled ? onPrevClick : undefined}
      />
      <Image
        src="/svg/carousel_arrow.svg"
        alt="다음 뉴스"
        width={40}
        height={40}
        draggable={false}
        className={`${s.carouselButton} ${isNextDisabled ? s.disabled : ""}`}
        onClick={!isNextDisabled ? onNextClick : undefined}
      />
    </div>
  );
};

export default CarouselButtons;
