"use client";

import s from "./ApplySection.module.css";

const ApplySection = () => {
  const handleClick = () => {
    alert("지금은 신청 기간이 아닙니다!");
  };

  return (
    <section className={s.ApplySection}>
      <p className={s.title}>에듀 프리미엄 지금 바로 신청하기</p>
      <div className={s.buttonContainer}>
        <button className={s.button} onClick={handleClick}>
          신청하기
        </button>
      </div>
    </section>
  );
};

export default ApplySection;
