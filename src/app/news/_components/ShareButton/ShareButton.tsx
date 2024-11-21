"use client";

import { ShareIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import s from "./ShareButton.module.css";

interface ShareButtonProps {
  url: string;
}

export default function ShareButton({ url }: ShareButtonProps) {
  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert("기사 링크가 클립보드에 복사되었습니다.");
    } catch (err) {
      alert("기사 링크 복사에 실패했습니다.");
    }
  };

  return (
    <button
      className={s.shareButton}
      aria-label="기사 공유"
      onClick={handleShare}
    >
      <ShareIcon className={s.icon} />
      <p className={s.shareText}>공유</p>
    </button>
  );
}
