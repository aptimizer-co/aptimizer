import NewsCard from "../_components/NewsCard/NewsCard";
import { newsData } from "../_data/mockData";
import Link from "next/link";
import s from "./PressPage.module.css";

const PressPage = () => {
  return (
    <main className={s.pressPage}>
      <aside className={s.sidebar}>
        {newsData.map((news) => (
          <Link key={news.id} href={`/news/press/${news.id}`}>
            {/* 추가 */}
            <NewsCard
              image={news.image}
              badge={news.badge}
              title={news.title}
              content={news.content}
              date={news.date}
            />
          </Link>
        ))}
      </aside>
    </main>
  );
};

export default PressPage;
