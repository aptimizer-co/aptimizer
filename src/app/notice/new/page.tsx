"use client";

import { Container } from "@/src/components";
import s from "./NoticeNewPage.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

const NoticeNewPage = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [file, setFile] = useState("");

  const handleInput = (e, setState) => {
    setState(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = fetch(`${process.env.NEXT_PUBLIC_API_NOTICE}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          content: content,
          image: "",
        }),
      });

      console.log(res);
    } catch (error) {
      console.error(error);
    }

    router.push("/notice");
  };

  return (
    <main className={s.NoticeNewPage}>
      <Container>
        <form className={s.form} onSubmit={handleSubmit}>
          <input type="text" className={s.input} value={title} onChange={(e) => handleInput(e, setTitle)} />
          <textarea className={s.textarea} value={content} onChange={(e) => handleInput(e, setContent)} />
          <input type="file" className={s.file} />
          <button className={s.button}>글쓰기</button>
        </form>
      </Container>
    </main>
  );
};

export default NoticeNewPage;
