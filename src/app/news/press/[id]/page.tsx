import { newsData } from "../../_data/mockData";
import ShareButton from "../../_components/ShareButton/ShareButton";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import s from "./PressDetailPage.module.css";
import Link from "next/link";
import Image from "next/image";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const news = newsData.find((item) => item.id === parseInt(params.id));

  if (!news) {
    return {
      title: "뉴스를 찾을 수 없습니다",
    };
  }

  return {
    title: news.title,
    description: news.content.slice(0, 100),
    openGraph: {
      title: news.title,
      description: news.content.slice(0, 100),
      images: [news.image],
    },
  };
}

export default function PressDetailPage({ params }: Props) {
  const news = newsData.find((item) => item.id === parseInt(params.id));

  if (!news) {
    notFound();
  }

  const contentSentences = news.content.split(".").slice(0, 3).join(".") + ".";

  return (
    <article className={s.pressArticle}>
      <header className={s.header}>
        <span className={s.badge}>{news.badge}</span>
        <h1 className={s.title}>{news.title}</h1>
        <div className={s.dateAndShare}>
          <time dateTime={news.date} className={s.date}>
            {news.date}
          </time>
          <ShareButton url={news.link} />
        </div>
      </header>

      <div className={s.imageContainer}>
        <Image
          src={news.image}
          alt={news.title}
          className={s.image}
          width={1000}
          height={562}
          priority
        />
      </div>

      <div className={s.content}>
        {contentSentences}
        <a
          href={news.link}
          target="_blank"
          rel="noopener noreferrer"
          className={s.sourceLink}
        >
          기사 원문 보기
        </a>
      </div>

      <footer className={s.footer}>
        <Link href="/news/press" className={s.listLink}>
          목록으로
        </Link>
      </footer>
    </article>
  );
}
