import { useState, useEffect } from "react";
import { Notice } from "../../_components";
import { SectionTitle, SectionSubtitle } from "@/src/components";
import s from "./NoticeSection.module.css";
import { useGetNotice } from "@/src/hooks/_index";

const NoticeSection = () => {
  const notice = useGetNotice();

  return (
    <section className={s.NoticeSection}>
      {/* 섹션 제목 */}
      <SectionTitle>NOTIFICATION</SectionTitle>
      <SectionSubtitle>공지사항</SectionSubtitle>
      {/* 공지사항 목록 */}
      {notice.map((v, i) => {
        return <Notice key={i} data={v} />;
      })}
    </section>
  );
};

export default NoticeSection;
