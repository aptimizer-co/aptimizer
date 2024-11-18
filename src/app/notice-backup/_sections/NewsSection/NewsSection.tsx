import { NewsCard } from "../../_components";
import { SectionTitle, SectionSubtitle } from "@/src/components";
import s from "./NewsSection.module.css";

const NewsSection = () => {
  return (
    <section className={s.NewsSection}>
      <SectionTitle>NEWS</SectionTitle>
      <SectionSubtitle>언론 속의 앱티마이저</SectionSubtitle>
      <div className={s.newsContainer}>
        <NewsCard />
      </div>
    </section>
  );
};

export default NewsSection;
