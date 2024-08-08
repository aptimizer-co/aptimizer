import Link from "next/link";
import s from "./TestSection.module.css";

const TestSection = () => {
  return (
    <section className={s.TestSection}>
      <p className={s.title}>앱티핏 베타 테스트 체험하기</p>
      <div className={s.buttonContainer}>
        <Link href="https://hanla.vercel.app/" className={s.button}>
          체험하기
        </Link>
      </div>
    </section>
  );
};

export default TestSection;
