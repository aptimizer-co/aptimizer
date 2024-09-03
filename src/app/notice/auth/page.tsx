"use client";

import { useAdminLogin } from "@/src/hooks/_index";
import { Container } from "@/src/components";
import s from "./NoticeAuthPage.module.css";

const NoticeAuthPage = () => {
  const { id, setId, password, setPassword, handleLogin, handleInputChange } = useAdminLogin();

  return (
    <main className={s.NoticeAuthPage}>
      <Container>
        <div className={s.container}>
          <p className={s.title}>게시판 관리자</p>
          <form className={s.form} onSubmit={handleLogin}>
            <input name="id" className={s.input} type="text" value={id} onChange={(e) => handleInputChange(e, setId)} />
            <input
              name="password"
              className={s.input}
              type="password"
              value={password}
              onChange={(e) => handleInputChange(e, setPassword)}
            />
            <button className={s.button}>로그인</button>
          </form>
        </div>
      </Container>
    </main>
  );
};

export default NoticeAuthPage;
