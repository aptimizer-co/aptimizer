"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Individual from "@/public/svg/individual.svg";
import Business from "@/public/svg/business.svg";
import s from "./Controller.module.css";

const Controller = ({ type, setType }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 800 && window.scrollY < 6000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // 버튼 스위치
  const handleClick = (type: string) => {
    setType(type);
  };

  // 개인 버튼 활성화
  const typeIndividual = type === "individual" ? s.active : "";

  // 기업 버튼 활성화
  const typeBusiness = type === "business" ? s.active : "";

  return (
    <div className={`${s.Controller} ${isVisible ? s.show : s.hide}`}>
      <button className={`${s.button} ${typeIndividual}`} onClick={() => handleClick("individual")}>
        <Image className={s.icon} src={Individual} alt="개인" />
        개인
      </button>
      <button className={`${s.button} ${typeBusiness}`} onClick={() => handleClick("business")}>
        <Image className={s.icon} src={Business} alt="기업" />
        기업
      </button>
    </div>
  );
};

export default Controller;
