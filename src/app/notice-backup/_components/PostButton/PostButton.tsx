"use client";

import Image from "next/image";
import Pencil from "@/public/svg/pencil.svg";
import { useRouter } from "next/navigation";
import s from "./PostButton.module.css";

const PostButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/notice/new");
  };

  return (
    <button className={s.PostButton} onClick={handleClick}>
      <Image src={Pencil} alt="글쓰기" />
    </button>
  );
};

export default PostButton;
