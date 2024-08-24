"use client";

import { useRouter } from "next/navigation";
import s from "./Notice.module.css";

const Notice = () => {
  const router = useRouter();

  const goToNoticeDetailPage = () => {
    router.push(`/notice/${"1"}`);
  };

  return (
    <div className={s.notice} onClick={goToNoticeDetailPage}>
      <p className={s.date}>2024.05.14</p>
      <p className={s.title}>앱티마이저 서비스 정식 출시</p>
    </div>
  );
};

export default Notice;
