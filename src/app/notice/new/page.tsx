"use client";

import { Container } from "@/src/components";
import s from "./NoticeNewPage.module.css";

const NoticeNewPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className={s.NoticeNewPage}>
      <Container>
        <form className={s.form} onSubmit={handleSubmit}>
          <input type="text" className={s.input} />
          <textarea className={s.textarea} />
          <input type="file" className={s.file} />
          <button className={s.button}>글쓰기</button>
        </form>
      </Container>
    </main>
  );
};

export default NoticeNewPage;
