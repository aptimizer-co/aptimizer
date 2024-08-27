"use client";

import { useRouter } from "next/navigation";
import s from "./PostButton.module.css";

const PostButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/notice/new");
  };

  return (
    <button className={s.PostButton} onClick={handleClick}>
      글쓰기
    </button>
  );
};

export default PostButton;
