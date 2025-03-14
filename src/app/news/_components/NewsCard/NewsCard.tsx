import Image from "next/image";
import s from "./NewsCard.module.css";

type NewsCardProps = {
  image: string;
  badge: string;
  title: string;
  content: string;
  date: string;
  className?: string;
};

const NewsCard = ({
  image,
  badge,
  title,
  content,
  date,
  className = "",
}: NewsCardProps) => {
  return (
    <div className={`${s.cardContainer} ${className}`}>
      <div className={s.imageWrapper}>
        <Image
          src={image}
          alt="최근 뉴스 이미지"
          width={390}
          height={220}
          className={s.newsImage}
        />
      </div>
      <div className={s.contentContainer}>
        <p className={s.badge}>{badge}</p>
        <h2 className={s.title}>{title}</h2>
        <p className={s.content}>{content}</p>
        <p className={s.date}>{date}</p>
      </div>
    </div>
  );
};

export default NewsCard;
