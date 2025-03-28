"use client";

import s from "./ApplySection.module.css";
import Link from "next/link";

const ApplySection = () => {
  return (
    <section className={s.ApplySection}>
      <p className={s.title}>에듀 프리미엄 지금 바로 신청하기</p>
      <div className={s.buttonContainer}>
        <Link
          href="https://edu-premium.aptimizer.co.kr/"
          className={s.button}
          target="_blank"
        >
          신청하기
        </Link>
      </div>
    </section>
  );
};

export default ApplySection;
