import { redirect } from "next/navigation";

// git config 설정 로컬

const NewsPage = () => {
  redirect("/news/press#top");
};

export default NewsPage;
