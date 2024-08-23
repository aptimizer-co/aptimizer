"use client";

import Image from "next/image";
import KaKaoTalkChannelLogo from "@/public/svg/KakaoTalk_logo.svg";
import s from "./KaKaoTalkChannel.module.css";
declare global {
  interface Window {
    Kakao: any;
  }
}

const KakaoTalkChannel = () => {
  const startChat = () => {
    alert("하이");
  };

  return (
    <button className={s.KaKaoTalkChannel} onClick={startChat}>
      <Image className={s.img} src={KaKaoTalkChannelLogo} alt="카카오 상담톡"></Image>
    </button>
  );
};

export default KakaoTalkChannel;
