"use client";

import { useState } from "react";
import Image from "next/image";
import s from "./Header.module.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className={`${s.container} ${s.header}`}>
        {/* 1. 로고 */}
        <h1>
          <Image
            src="/svg/logo.svg"
            alt="앱티마이저 로고"
            width={160}
            height={40}
          />
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

        {/* 4. 모바일 */}
        {isMobileMenuOpen ? (
          <button
            className={s.mobileButton}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Image
              src="/svg/close.svg"
              alt="모바일 메뉴 숨김 버튼"
              width={40}
              height={40}
            />
          </button>
        ) : (
          <button
            className={s.mobileButton}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Image
              src="/svg/menu.svg"
              alt="모바일 메뉴 표시 버튼"
              width={40}
              height={40}
            />
          </button>
        )}
      </header>
      {isMobileMenuOpen && (
        <nav className={`${s.container} ${s.mobileNav}`}>
          <ul>
            <li>앱티마이저</li>
            <li>서비스</li>
            <li>공지사항</li>
            <li>문의하기</li>
            <li>로그인</li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Header;
