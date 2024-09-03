"use client";

import { Container } from "@/src/components";
import s from "./NoticeNewPage.module.css";
import { usePostNotice } from "@/src/hooks/_index";

const NoticeNewPage = () => {
  const { title, setTitle, content, setContent, handleInput, handleSubmit } = usePostNotice();

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
