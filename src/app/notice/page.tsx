"use client";

import { useState, useEffect } from "react";
import { PostButton } from "./_components";
import { NewsSection, NoticeSection } from "./_sections";
import { Container } from "@/src/components";
import s from "./NoticePage.module.css";

const NoticePage = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const auth = sessionStorage.getItem("aptimizer-auth");

    if (auth) {
      setAuth(true);
    }
  }, []);

  return (
    <main className={s.NoticePage}>
      <Container>
        {/* 홍보 자료 */}
        <NewsSection />
        {/* 공지사항 */}
        <NoticeSection />
      </Container>

      {/* 관리자 권한이 있을 경우에는 글쓰기 버튼이 활성화 된다 */}
      {auth && (
        <div className={s.buttonContainer}>
          <PostButton />
        </div>
      )}
    </main>
  );
};

export default NoticePage;
