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
        channelPublicId: "_ZeUTxl",
      });
    } else {
      alert("실패!");
    }
  };

  return (
    <>
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
        integrity="sha384-TiCUE00h649CAMonG018J2ujOgDKW/kVWlChEuu4jK2vxfAAD0eZxzCKakxg55G4"
        crossOrigin="anonymous"
        onLoad={() => {
          if (window.Kakao) {
            window.Kakao.init("c089c8172def97eb00c07217cae17495");
          }
        }}
        strategy="afterInteractive"
      ></Script>
      <button className={s.KaKaoTalkChannel} onClick={startChat}>
        <Image className={s.img} src={KaKaoTalkChannelLogo} alt="카카오 상담톡"></Image>
      </button>
    </>
  );
};

export default KakaoTalkChannel;
