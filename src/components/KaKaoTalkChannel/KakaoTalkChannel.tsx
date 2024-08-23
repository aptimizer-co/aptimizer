"use client";

import Image from "next/image";
import KaKaoTalkChannelLogo from "@/public/svg/KakaoTalk_logo.svg";
import s from "./KaKaoTalkChannel.module.css";
import Script from "next/script";

declare global {
  interface Window {
    Kakao: any;
  }
}

const KakaoTalkChannel = () => {
  const startChat = () => {
    if (window.Kakao) {
      window.Kakao.Channel.chat({
        channelPublicId: `${process.env.NEXT_PUBLIC_API_KAKAO_HOME_ID}`,
      });
    } else {
      alert("실패!");
    }
  };

  return (
    <>
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
        integrity={`${process.env.NEXT_PUBLIC_API_KAKAO_INTEGRITY}`}
        crossOrigin="anonymous"
        onLoad={() => {
          if (window.Kakao) {
            window.Kakao.init(`${process.env.NEXT_PUBLIC_API_KAKAO_API}`);
          }
        }}
        strategy="afterInteractive"
      ></Script>
      <button className={s.KaKaoTalkChannel} onClick={startChat}>
        <Image className={s.img} src={KaKaoTalkChannelLogo} alt="카카오 상담톡" />
      </button>
    </>
  );
};

export default KakaoTalkChannel;
