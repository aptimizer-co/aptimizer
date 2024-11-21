"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import LinkIcon from "@/public/svg/link.svg";
import Image from "next/image";
import s from "./Header.module.css";
import Logo from "@/public/svg/logo.svg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (section) => {
    setIsMobileMenuOpen(false);

    if (pathname !== "/") {
      router.push("/");
    }

    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            <li className={s.li}>
              <button
                className={s.button}
                onClick={() => scrollToSection("intro")}
              >
                기업 소개
              </button>
            </li>
            <li className={s.li}>
              <button
                className={s.button}
                onClick={() => scrollToSection("service")}
              >
                서비스
              </button>
            </li>
            <li className={s.li}>
              <button
                className={s.button}
                onClick={() => scrollToSection("askSection")}
              >
                문의
              </button>
            </li>
            <li className={s.li}>
              <button
                className={s.button}
                onClick={() => scrollToSection("location")}
              >
                회사 위치
              </button>
            </li>
            <li className={s.li}>
              <Link className={s.link} href={"/news"}>
                뉴스룸
                <Image className={s.linkIcon} src={LinkIcon} alt="" />
              </Link>
            </li>
          </ul>
        </nav>

        {/* 3. 로그인 버튼 */}
        {/* <Link className={s.buttonLogin} href={"/login"}>
          로그인
        </Link> */}
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
        <>
          <nav className={`${s.container} ${s.mobileNav}`}>
            <ul>
              <li>
                <button
                  className={s.mobileLink}
                  onClick={() => scrollToSection("intro")}
                >
                  기업 소개
                </button>
              </li>
              <li>
                <button
                  className={s.mobileLink}
                  onClick={() => scrollToSection("service")}
                >
                  서비스
                </button>
              </li>
              <li>
                <button
                  className={s.mobileLink}
                  onClick={() => scrollToSection("askSection")}
                >
                  문의
                </button>
              </li>
              <li>
                <button
                  className={s.mobileLink}
                  onClick={() => scrollToSection("location")}
                >
                  회사 위치
                </button>
              </li>
              <li>
                <Link className={s.mobilea} href={"/notice"}>
                  공지사항
                  <Image className={s.linkIcon} src={LinkIcon} alt="" />
                </Link>
              </li>
            </ul>
          </nav>
          <div className={s.blackBackground}></div>
        </>
      )}
    </div>
  );
};

export default Header;
