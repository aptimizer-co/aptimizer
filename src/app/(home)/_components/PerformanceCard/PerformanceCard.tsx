"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import HandshakeSVG from "@/public/svg/handshake.svg";
import StudentsSVG from "@/public/svg/students.svg";
import MentorSVG from "@/public/svg/mentor.svg";
import SurveySVG from "@/public/svg/survey.svg";
import s from "./PerformanceCard.module.css";

interface IPerformanceCard {
  type: "students" | "handshake" | "survey" | "mentor";
  animate: boolean;
}

const PerformanceCard = ({ animate, type }: IPerformanceCard) => {
  const [studentNumber, setStudentNumber] = useState(0);
  const [partnerNumber, setPartnerNumber] = useState(0);
  const [dataNumber, setDataNumber] = useState(0);
  const [employeeNumber, setEmployeeNumber] = useState(0);

  useEffect(() => {
    if (animate && studentNumber < 3000) {
      const timer = setTimeout(() => {
        setStudentNumber(studentNumber + 100);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [studentNumber, animate]);

  useEffect(() => {
    if (animate && partnerNumber < 4) {
      const timer = setTimeout(() => {
        setPartnerNumber(partnerNumber + 1);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [partnerNumber, animate]);

  useEffect(() => {
    if (animate && dataNumber < 4.7) {
      const timer = setTimeout(() => {
        setDataNumber(dataNumber + 0.1);
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [dataNumber, animate]);

  useEffect(() => {
    if (animate && employeeNumber < 300) {
      const timer = setTimeout(() => {
        setEmployeeNumber(employeeNumber + 10);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [employeeNumber, animate]);

  switch (type) {
    case "students":
      return (
        <div className={s.performanceCard}>
          <Image className={s.icon} src={StudentsSVG} alt="학생 아이콘" width={48} height={48} />
          <p className={s.title}>멘토링한 학생</p>
          <p className={s.numbers}>
            {studentNumber.toLocaleString("ko-KR")} <span className={s.counter}>명</span>
          </p>
        </div>
      );
    case "mentor":
      return (
        <div className={s.performanceCard}>
          <Image className={s.icon} src={MentorSVG} alt="보유 멘토" width={48} height={48} />
          <p className={s.title}>보유 멘토</p>
          <p className={s.numbers}>
            {employeeNumber.toLocaleString("ko-KR")} <span className={s.counter}>명</span>
          </p>
        </div>
      );
    case "handshake":
      return (
        <div className={s.performanceCard}>
          <Image className={s.icon} src={HandshakeSVG} alt="협력사" width={48} height={48} />
          <p className={s.title}>협력사</p>
          <p className={s.numbers}>
            {partnerNumber.toLocaleString("ko-KR")} <span className={s.counter}>곳</span>
          </p>
        </div>
      );
    case "survey":
      return (
        <div className={s.performanceCard}>
          <Image className={s.icon} src={SurveySVG} alt="만족도" width={48} height={48} />
          <p className={s.title}>만족 점수</p>
          <p className={s.numbers}>
            {dataNumber.toLocaleString("ko-KR")} <span className={s.counter}>점</span>
          </p>
        </div>
      );
  }

  return (
    <div className={s.performanceCard}>
      <Image className={s.icon} src={StudentsSVG} alt="멘토링 학생" width={48} height={48} />
      <p className={s.title}>멘토링 학생</p>
      <p className={s.numbers}>
        32,000 <span className={s.counter}>명</span>
      </p>
    </div>
  );
};

export default PerformanceCard;
