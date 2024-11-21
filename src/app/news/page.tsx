import { redirect } from "next/navigation";

// git config 설정

const NewsPage = () => {
  redirect("/news/press#top");
};

export default NewsPage;
