"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import s from "./NewsCard.module.css";
import NEWS from "@/public/jpg/news.jpg";

const NewsCard = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("https://biz.chosun.com/real_estate/real_estate_general/2024/05/30/S2ZBPOI4ANDDHEENWA2HQTJLYY/");
  };

  return (
    <div className={s.NewsCard} onClick={handleClick}>
      <div className={s.textContainer}>
        <span className={s.date}>2024.08.08</span>
        <p className={s.title}>HL D&I한라, 서울대 기술지주 ‘앱티마이저’와 ‘에피트’ 교육특화 협력...</p>
      </div>
      <div className={s.imgContainer}>
        <Image className={s.img} src={NEWS} alt="" />
      </div>
    </div>
  );
};

export default NewsCard;
