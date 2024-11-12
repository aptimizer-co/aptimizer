"use client";

import { useState, useEffect } from "react";

const useRemoveBanner = (bannerKey: string) => {
  const [isBannerRemoved, setIsBannerRemoved] = useState(false);

  useEffect(() => {
    const bannerRemoved = sessionStorage.getItem(`isBannerRemoved_${bannerKey}`);

    if (bannerRemoved === "true") {
      setIsBannerRemoved(true);
    }
  }, [bannerKey]);

  const removeBanner = () => {
    sessionStorage.setItem(`isBannerRemoved_${bannerKey}`, "true");
    setIsBannerRemoved(true);
  };

  return { isBannerRemoved, removeBanner };
};

export default useRemoveBanner;
