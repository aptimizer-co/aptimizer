"use client";

import { useUpdateNotice, useAuth } from "@/src/hooks/_index";
import { Container } from "@/src/components";
import s from "./NoticeDetailPage.module.css";

const NoticeDetailPage = () => {
  const {
    editMode,
    setEditMode,
    title,
    setTitle,
    content,
    setContent,
    currentDate,
    handleInput,
    handleSubmit,
    editPost,
    deletePost,
  } = useUpdateNotice();
  const auth = useAuth();

  return (
    <main className={s.NoticeDetailPage}>
      <Container>
        {editMode === false && (
          <>
            <div className={s.titleContainer}>
              <div className={s.titleContainerLeft}>
                <p className={s.date}>{currentDate}</p>
                <h2 className={s.title}>{title}</h2>
              </div>
              {auth && (
                <div className={s.titleContainerRight}>
                  <button className={`${s.button} ${s.edit}`} onClick={editPost}>
                    수정
                  </button>
                  <button className={`${s.button} ${s.delete}`} onClick={deletePost}>
                    삭제
                  </button>
                </div>
              )}
            </div>
            <p className={s.content}>{content}</p>
          </>
        )}
        {editMode && (
          <>
            <form className={s.form} onSubmit={handleSubmit}>
              <input type="text" className={s.input} value={title} onChange={(e) => handleInput(e, setTitle)} />
              <textarea className={s.textarea} value={content} onChange={(e) => handleInput(e, setContent)} />
              <input type="file" className={s.file} />
              <button className={s.button}>수정하기</button>
            </form>
          </>
        )}
      </Container>
    </main>
  );
};

export default NoticeDetailPage;
