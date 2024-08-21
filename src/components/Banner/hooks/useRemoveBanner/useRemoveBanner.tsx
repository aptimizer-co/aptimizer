"use client";

import { useState, useEffect } from "react";

const useRemoveBanner = () => {
  const [isBannerRemoved, setIsBannerRemoved] = useState(false);

  useEffect(() => {
    const bannerRemoved = sessionStorage.getItem("isBannerRemoved");

    if (bannerRemoved === "true") {
      setIsBannerRemoved(true);
    }
  }, []);

  const removeBanner = () => {
    sessionStorage.setItem("isBannerRemoved", "true");
    setIsBannerRemoved(true);
  };

  return { isBannerRemoved, removeBanner };
};

export default useRemoveBanner;
