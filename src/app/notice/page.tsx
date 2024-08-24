import { NewsSection, NoticeSection } from "./_sections";
import { Container } from "@/src/components";
import s from "./NoticePage.module.css";

const NoticePage = () => {
  return (
    <main className={s.NoticePage}>
      <Container>
        {/* 홍보 자료 */}
        <NewsSection />
        {/* 공지사항 */}
        <NoticeSection />
      </Container>
    </main>
  );
};

export default NoticePage;
