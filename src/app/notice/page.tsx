import { NewsCard } from "./_components";
import { Container, SectionTitle, SectionSubtitle } from "@/src/components";
import s from "./NoticePage.module.css";

const NoticePage = () => {
  return (
    <main className={s.NoticePage}>
      <Container>
        {/* 홍보 자료 */}
        <NewsSection />
      </Container>
    </main>
  );
};

export default NoticePage;
