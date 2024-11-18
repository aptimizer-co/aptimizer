"use client";

import { useRouter } from "next/navigation";
import s from "./Notice.module.css";

const Notice = ({ data }) => {
  const { id, title, date } = data;
  const router = useRouter();

  const goToNoticeDetailPage = () => {
    router.push(`/notice/${id}`);
  };

  return (
    <div className={s.notice} onClick={goToNoticeDetailPage}>
      <p className={s.date}>{date}</p>
      <p className={s.title}>{title}</p>
    </div>
  );
};

export default Notice;
