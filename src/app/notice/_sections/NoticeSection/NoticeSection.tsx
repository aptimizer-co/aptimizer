import { useState, useEffect } from "react";
import { Notice } from "../../_components";
import { SectionTitle, SectionSubtitle } from "@/src/components";
import s from "./NoticeSection.module.css";

const NoticeSection = () => {
  const [notice, setNotice] = useState([]);

  useEffect(() => {
    const getNotice = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_NOTICE}`);

        // 응답이 성공적인지 확인합니다
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        // 응답 데이터를 JSON으로 변환합니다
        const data = await res.json();
        setNotice(data.slice(0, 5));
      } catch (error) {
        console.log(error.message);
      }
    };
    getNotice();
  }, []);

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
