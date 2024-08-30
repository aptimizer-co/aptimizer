"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Container } from "@/src/components";
import s from "./NoticeDetailPage.module.css";

const NoticeDetailPage = () => {
  const params = useParams();
  const router = useRouter();

  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleInput = (e, setState) => {
    setState(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = fetch(`${process.env.NEXT_PUBLIC_API_NOTICE}/${params.id}`, {
        method: "PATCH",
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

    setEditMode(false);
  };

  const editPost = () => {
    setEditMode(true);
  };

  const deletePost = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_NOTICE}/${params.id}`, {
        method: "DELETE",
      });
      alert("글이 삭제됐습니다!");
    } catch (error) {
      console.error(error);
    }

    router.push("/notice");
  };

  useEffect(() => {
    const getNoticeDetail = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_NOTICE}/${params.id}`);

        // 응답이 성공적인지 확인합니다
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        // 응답 데이터를 JSON으로 변환합니다
        const data = await res.json();

        const { title, content } = data;
        setTitle(title);
        setContent(content);
      } catch (error) {
        console.log(error.message);
      }
    };
    getNoticeDetail();
  }, []);

  return (
    <main className={s.NoticeDetailPage}>
      <Container>
        {editMode === false && (
          <>
            <div className={s.titleContainer}>
              <div className={s.titleContainerLeft}>
                <p className={s.date}>2024.05.14</p>
                <h2 className={s.title}>{title}</h2>
              </div>
              <div className={s.titleContainerRight}>
                <button className={`${s.button} ${s.edit}`} onClick={editPost}>
                  수정
                </button>
                <button className={`${s.button} ${s.delete}`} onClick={deletePost}>
                  삭제
                </button>
              </div>
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
