import { Input } from "@/src/components";
import s from "./page.module.css";

const AskPage = () => {
  return (
    <main className={s.ask}>
      <div className={s.banner}>
        <div className={`${s.container} ${s.bannerInner}`}>
          <h2 className={s.title}>문의하기</h2>
        </div>
      </div>
      <section className={s.container}>
        <Input
          type="input"
          label="성함"
          name="name"
          placeholder="이름을 입력하세요."
        />
        <Input
          type="input"
          label="이메일"
          name="name"
          placeholder="이메일을 입력하세요."
        />
        <Input
          type="input"
          label="전화번호"
          name="name"
          placeholder="전화번호를 입력하세요."
        />
        <Input
          type="textarea"
          label="문의사항"
          name="question"
          placeholder="문의사항을 입력하세요."
        />
      </section>
    </main>
  );
};

export default AskPage;
