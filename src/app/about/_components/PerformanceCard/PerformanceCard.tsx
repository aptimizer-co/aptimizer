import Image from "next/image";
import DataSVG from "@/public/svg/data.svg";
import ExperimentSVG from "@/public/svg/experiment.svg";
import HandshakeSVG from "@/public/svg/handshake.svg";
import StudentsSVG from "@/public/svg/students.svg";
import s from "./PerformanceCard.module.css";

interface IPerformanceCard {
  type: "students" | "handshake" | "data" | "experiment";
}

const PerformanceCard = ({ type }: IPerformanceCard) => {
  switch (type) {
    case "students":
      return (
        <div className={s.performanceCard}>
          <Image className={s.icon} src={StudentsSVG} alt="학생 아이콘" width={48} height={48} />
          <p className={s.title}>멘토링한 학생</p>
          <p className={s.numbers}>
            32,000 <span className={s.counter}>명</span>
          </p>
        </div>
      );
    case "experiment":
      return (
        <div className={s.performanceCard}>
          <Image className={s.icon} src={ExperimentSVG} alt="실험 아이콘" width={48} height={48} />
          <p className={s.title}>석박사급 인력</p>
          <p className={s.numbers}>
            20 <span className={s.counter}>명</span>
          </p>
        </div>
      );
    case "handshake":
      return (
        <div className={s.performanceCard}>
          <Image className={s.icon} src={HandshakeSVG} alt="협력사 아이콘" width={48} height={48} />
          <p className={s.title}>함께하는 협력사</p>
          <p className={s.numbers}>
            4 <span className={s.counter}>곳</span>
          </p>
        </div>
      );
    case "data":
      return (
        <div className={s.performanceCard}>
          <Image className={s.icon} src={DataSVG} alt="데이터 아이콘" width={48} height={48} />
          <p className={s.title}>보유한 학생 데이터</p>
          <p className={s.numbers}>
            260,000 <span className={s.counter}>개</span>
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
