"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import DataSVG from "@/public/svg/data.svg";
import ExperimentSVG from "@/public/svg/experiment.svg";
import HandshakeSVG from "@/public/svg/handshake.svg";
import StudentsSVG from "@/public/svg/students.svg";
import s from "./PerformanceCard.module.css";

interface IPerformanceCard {
  type: "students" | "handshake" | "data" | "experiment";
  animate: boolean;
}

const PerformanceCard = ({ animate, type }: IPerformanceCard) => {
  const [studentNumber, setStudentNumber] = useState(0);
  const [partnerNumber, setPartnerNumber] = useState(0);
  const [dataNumber, setDataNumber] = useState(0);
  const [employeeNumber, setEmployeeNumber] = useState(0);

  useEffect(() => {
    if (animate && studentNumber < 20000) {
      const timer = setTimeout(() => {
        setStudentNumber(studentNumber + 200);
      }, 20);
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
    if (animate && dataNumber < 26000) {
      const timer = setTimeout(() => {
        setDataNumber(dataNumber + 200);
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [dataNumber, animate]);

  useEffect(() => {
    if (animate && employeeNumber < 20) {
      const timer = setTimeout(() => {
        setEmployeeNumber(employeeNumber + 1);
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
    case "experiment":
      return (
        <div className={s.performanceCard}>
          <Image className={s.icon} src={ExperimentSVG} alt="실험 아이콘" width={48} height={48} />
          <p className={s.title}>석박사급 인력</p>
          <p className={s.numbers}>
            {employeeNumber.toLocaleString("ko-KR")} <span className={s.counter}>명</span>
          </p>
        </div>
      );
    case "handshake":
      return (
        <div className={s.performanceCard}>
          <Image className={s.icon} src={HandshakeSVG} alt="협력사 아이콘" width={48} height={48} />
          <p className={s.title}>협력사</p>
          <p className={s.numbers}>
            {partnerNumber.toLocaleString("ko-KR")} <span className={s.counter}>곳</span>
          </p>
        </div>
      );
    case "data":
      return (
        <div className={s.performanceCard}>
          <Image className={s.icon} src={DataSVG} alt="데이터 아이콘" width={48} height={48} />
          <p className={s.title}>보유 학생 데이터</p>
          <p className={s.numbers}>
            {dataNumber.toLocaleString("ko-KR")} <span className={s.counter}>개</span>
          </p>
        </div>
      );
  }

  return (
    <div className={s.performanceCard}>
      <Image className={s.icon} src={StudentsSVG} alt="학생 아이콘" width={48} height={48} />
      <p className={s.title}>멘토링 학생</p>
      <p className={s.numbers}>
        32,000 <span className={s.counter}>명</span>
      </p>
    </div>
  );
};

export default PerformanceCard;
