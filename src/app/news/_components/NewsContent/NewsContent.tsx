import s from "./NewsContent.module.css";

interface NewsContentProps {
  projectName: string;
  title: string;
  content: string;
  date: string;
  className?: string;
}

const NewsContent = ({
  projectName,
  title,
  content,
  date,
  className = "",
}: NewsContentProps) => {
  return (
    <div className={`${s.contentContainer} ${className}`}>
      <p className={s.projectName}>{projectName}</p>
      <h2 className={s.title}>{title}</h2>
      <p className={s.content}>{content}</p>
      <p className={s.date}>{date}</p>
    </div>
  );
};

export default NewsContent;
