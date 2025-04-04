"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import s from "./Navigation.module.css";

const Navigation = () => {
  const pathname = usePathname();

  if (/\/news\/[^/]+\/\d+$/.test(pathname)) {
    return null;
  }

  const menuItems = [
    { name: "보도자료", path: "/news/press" },
    { name: "공지사항", path: "/news/notice" },
  ];

  return (
    <nav className={s.navbar} aria-label="뉴스 네비게이션">
      <ul className={s.nav_list} role="tablist">
        {menuItems.map((item) => (
          <li
            key={item.name}
            role="tab"
            aria-selected={pathname.startsWith(item.path)}
            className={`${s.nav_item} ${
              pathname.startsWith(item.path) ? s.active : ""
            }`}
          >
            <Link href={item.path} className={s.nav_link}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
