"use client";

import s from "./ApplySection.module.css";
import Link from "next/link";

const ApplySection = () => {
  return (
    <section className={s.ApplySection}>
      <p className={s.title}>에듀 프리미엄 지금 바로 신청하기</p>
      <div className={s.buttonContainer}>
        <Link href="/edu-premium/apply" className={s.button}>
          신청하기
        </Link>
      </div>
    </section>
  );
};

export default ApplySection;
