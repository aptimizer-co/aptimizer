"use client";

import { useState } from "react";
import CarouselCard from "../CarouselCard/CarouselCard";
import CarouselButtons from "../CarouselButtons/CarouselButtons";
import { newsData } from "./mockData";
import s from "./Carousel.module.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrevClick = () => {
    if (currentIndex > 0 && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => prev - 1);
      setTimeout(() => setIsAnimating(false), 400);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < newsData.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => prev + 1);
      setTimeout(() => setIsAnimating(false), 400);
    }
  };

  return (
    <div className={s.carouselContainer}>
      <div
        className={`${s.newsCardWrapper} ${isAnimating ? s.fadeEffect : ""}`}
      >
        <CarouselCard {...newsData[currentIndex]} />
        <div className={s.buttonWrapper}>
          <CarouselButtons
            onPrevClick={handlePrevClick}
            onNextClick={handleNextClick}
            isPrevDisabled={currentIndex === 0}
            isNextDisabled={currentIndex === newsData.length - 1}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
