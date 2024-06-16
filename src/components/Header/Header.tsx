"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import s from "./Header.module.css";
import Logo from "@/public/svg/logo.svg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={s.outer}>
      <header className={`${s.container} ${s.header}`}>
        {/* 1. 로고 */}
        <h1>
          <a href="/">
            <Image src={Logo} alt="앱티마이저 로고" width={160} height={40} />
          </a>
        </h1>

        {/* 2. 네비게이션 */}
        <nav className={s.nav}>
          <ul>
            <li>
              <Link href={"/about"}>회사소개</Link>
              {/* <button
                type="button"
                className={s.navButton}
              >
                회사소개
              </button> */}
            </li>
            <li>
              <Link href={"/"}>서비스</Link>
              {/* <button
                type="button"
                className={s.navButton}
                onClick={() => scrollToView('serviceSection')}
              >
                서비스
              </button> */}
            </li>
            {/* <li>
              <Link href={'/ask'}>문의하기</Link>
              <button
                type="button"
                className={s.navButton}
                onClick={() => scrollToView('askSection')}
              >
                문의하기
              </button>
            </li> */}
            <li>
              <Link href={"/notice"}>공지사항</Link>
            </li>
          </ul>
        </nav>

        {/* 3. 로그인 버튼 */}
        <Link className={s.buttonLogin} href={"/login"}>
          로그인
        </Link>
        {/* <button className={s.buttonLogin}>로그인</button> */}

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
            <li onClick={() => setIsMobileMenuOpen(false)}>
              <Link href={"/about"}>앱티마이저</Link>
            </li>
            <li onClick={() => setIsMobileMenuOpen(false)}>
              <Link href={"/"}>서비스</Link>
            </li>
            <li onClick={() => setIsMobileMenuOpen(false)}>
              <Link href={"/"}>공지사항</Link>
            </li>
            <li onClick={() => setIsMobileMenuOpen(false)}>
              <Link href={"/ask"}>문의하기</Link>
            </li>
            <li onClick={() => setIsMobileMenuOpen(false)}>
              <Link href={"/"}>로그인</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Header;
