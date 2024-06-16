'use client';

import {
  Container,
  SectionTitle,
  SectionSubtitle,
  Input,
} from '@/src/components';
import s from './AskSection.module.css';

const AskSection = () => {
  return (
    <section className={s.askSection}>
      <Container>
        <SectionTitle>ASK US</SectionTitle>
        <SectionSubtitle>
          자세한 내용이 궁금하다면 편하게 문의해보세요
        </SectionSubtitle>
        <form action="">
          <div className={s.askFormContainer}>
            <Input label="이름" type="input" name="name" placeholder="김앱티" />
            <Input
              label="이메일"
              type="input"
              name="email"
              placeholder="aptimizer@example.com"
            />
            <Input
              label="전화번호"
              type="input"
              name="phone"
              placeholder="01012345678"
            />
            <Input
              label="문의내용"
              type="textarea"
              name="text"
              placeholder="문의내용을 입력해주세요"
            />
          </div>
          <button className={s.askFormButton} type="button">
            문의하기
          </button>
        </form>
      </Container>
    </section>
  );
};

export default AskSection;
