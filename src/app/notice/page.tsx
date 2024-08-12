import { NewsCard } from "./_components";
import { Container, SectionTitle, SectionSubtitle } from "@/src/components";
import s from "./NoticePage.module.css";

const NoticePage = () => {
  return (
    <main className={s.NoticePage}>
      <Container>
        <SectionTitle>NEWS</SectionTitle>
        <SectionSubtitle>언론 속의 앱티마이저</SectionSubtitle>
        <div className={s.newsContainer}>
          <NewsCard />
        </div>
      </Container>
    </main>
  );
};

export default NoticePage;
