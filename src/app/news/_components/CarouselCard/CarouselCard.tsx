import Image from "next/image";
import Link from "next/link";
import s from "./CarouselCard.module.css";

type NewsCardProps = {
  id: number;
  image: string;
  badge: string;
  title: string;
  content: string;
  date: string;
  className?: string;
};

const NewsCard = ({
  id,
  image,
  badge,
  title,
  content,
  date,
  className = "",
}: NewsCardProps) => {
  return (
    <div className={`${s.cardContainer} ${className}`}>
      <Link href={`/news/press/${id}`} className={s.imageLink}>
        <div className={s.imageWrapper}>
          <Image
            src={image}
            alt="최근 뉴스 이미지"
            width={590}
            height={450}
            className={s.latestNewsImage}
          />
        </div>
      </Link>
      <div className={s.contentContainer}>
        <p className={s.badge}>{badge}</p>
        <Link href={`/news/press/${id}`} className={s.contentLink}>
          <h2 className={s.title}>{title}</h2>
          <p className={s.content}>{content}</p>
        </Link>
        <p className={s.date}>{date}</p>
      </div>
    </div>
  );
};

export default NewsCard;
