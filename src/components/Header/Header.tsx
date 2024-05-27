import Image from "next/image";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={`container ${s.header}`}>
      {/* 1. 로고 */}
      <h1>
        <Image src="/svg/logo.svg" alt="앱티마이저 로고" width={200} height={50} />
      </h1>

      {/* 2. 네비게이션 */}
      <nav className={s.nav}>
        <ul>
          <li>앱티마이저</li>
          <li>서비스</li>
          <li>공지사항</li>
          <li>문의하기</li>
        </ul>
      </nav>

      {/* 3. 로그인 버튼 */}
      <button className={s.buttonLogin}>로그인</button>
    </header>
  );
};

export default Header;
