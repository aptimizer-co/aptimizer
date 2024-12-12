"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import {
  Container,
  SectionTitle,
  SectionSubtitle,
  Input,
} from "@/src/components";
import s from "./AskSection.module.css";

const AskSection = () => {
  const [askFormValues, setAskFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    text: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setAskFormValues({
      ...askFormValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, phone, text } = askFormValues;

    if (!name || !email || !phone || !text) {
      alert("모든 내용을 입력해주세요!");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/send_email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
            text: text,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("서버에서 오류 응답");
      }

      const data = await response.json();
      alert("문의가 접수됐습니다!");

      setAskFormValues({
        name: "",
        email: "",
        phone: "",
        text: "",
      });
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };

  return (
    <section id="askSection" className={s.askSection}>
      <Container>
        <SectionTitle>ASK US</SectionTitle>
        <SectionSubtitle>
          자세한 내용이 궁금하다면 편하게 문의해보세요 (운영 시간: 09:00 -
          18:00)
        </SectionSubtitle>
        <form onSubmit={handleSubmit}>
          <div className={s.askFormContainer}>
            <Input
              label="이름"
              type="input"
              name="name"
              placeholder="김앱티"
              value={askFormValues.name}
              onChange={handleChange}
            />
            <Input
              label="이메일"
              type="input"
              name="email"
              placeholder="aptimizer@example.com"
              value={askFormValues.email}
              onChange={handleChange}
            />
            <Input
              label="전화번호"
              type="input"
              name="phone"
              placeholder="01012345678"
              value={askFormValues.phone}
              onChange={handleChange}
            />
            <Input
              label="문의내용"
              type="textarea"
              name="text"
              placeholder="문의내용을 입력해주세요"
              value={askFormValues.text}
              onChange={handleChange}
            />
          </div>
          <button className={s.askFormButton} type="submit">
            문의하기
          </button>
        </form>
      </Container>
    </section>
  );
};

export default AskSection;
