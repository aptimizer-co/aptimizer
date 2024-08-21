"use client";

import { useState, useEffect } from "react";

const useScrollInView = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // scrollY 크기에 따라 isVisible의 상태가 업데이트됨
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

  return isVisible;
};

export default useScrollInView;
