"use client";

import { useState } from "react";
import s from "./Navigation.module.css";

const Navigation = () => {
  const [activeTab, setActiveTab] = useState("보도자료");

  const menuItems = ["보도자료", "공지사항", "소셜 미디어"];

  return (
    <nav className={s.navbar}>
      <ul className={s.nav_list}>
        {menuItems.map((item) => (
          <li
            key={item}
            className={`${s.nav_item} ${activeTab === item ? s.active : ""}`}
            onClick={() => setActiveTab(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
