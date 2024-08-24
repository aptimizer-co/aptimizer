import { Notice } from "../../_components";
import { SectionTitle, SectionSubtitle } from "@/src/components";
import s from "./NoticeSection.module.css";

const NoticeSection = () => {
  return (
    <section className={s.NoticeSection}>
      {/* 섹션 제목 */}
      <SectionTitle>NOTIFICATION</SectionTitle>
      <SectionSubtitle>공지사항</SectionSubtitle>
      {/* 공지사항 목록 */}
      <Notice />
    </section>
  );
};

export default NoticeSection;
