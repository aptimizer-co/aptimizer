import Image from "next/image";
import Service1 from "@/public/svg/service1.svg";
import Service2 from "@/public/svg/service2.svg";
import Service3 from "@/public/svg/service3.svg";
import Service4 from "@/public/svg/service4.svg";
import Service6 from "@/public/svg/service6.svg";
import s from "./ServiceCard.module.css";

const ServiceCard = ({ service }) => {
  const renderServiceCard = (service) => {
    switch (service) {
      case "앱티핏 검사 서비스":
        return (
          <div className={s.ServiceCard}>
            <div className={s.imgContainer}>
              <Image className={s.img} src={Service1} alt="" />
            </div>
            <div className={s.textContainer}>
              <p className={s.title}>앱티핏 검사 서비스</p>
              <p className={s.description}>
                AI 추천 모델을 활용하여, 135개 학과의 최신 트렌드와 학과 적성의 5대 요소를 기반으로 최적의 학과를
                추천합니다.
              </p>
            </div>
          </div>
        );
      case "진로 챗봇 서비스":
        return (
          <div className={s.ServiceCard}>
            <div className={s.imgContainer}>
              <Image className={s.img} src={Service2} alt="" />
            </div>
            <div className={s.textContainer}>
              <p className={s.title}>진로 챗봇 서비스</p>
              <p className={s.description}>
                개인화된 진로 상담을 제공하는 진로 챗봇과 함께 맞춤형 진로 상담을 체험해보세요.
              </p>
            </div>
          </div>
        );
      case "진로 PT 서비스 구독":
        return (
          <div className={s.ServiceCard}>
            <div className={s.imgContainer}>
              <Image className={s.img} src={Service3} alt="" />
            </div>
            <div className={s.textContainer}>
              <p className={s.title}>진로 PT 서비스 구독</p>
              <p className={s.description}>
                앱티마이저가 제공하는 모든 서비스를 체계적이고 단계적으로 체험하면서 최적의 진로를 설계해보세요.
              </p>
            </div>
          </div>
        );
      case "프리미엄 교육 서비스":
        return (
          <div className={s.ServiceCard}>
            <div className={s.imgContainer}>
              <Image className={s.img} src={Service4} alt="" />
            </div>
            <div className={s.textContainer}>
              <p className={s.title}>프리미엄 교육 서비스</p>
              <p className={s.description}>
                프리미엄 교육 서비스를 통해 단체의 특성에 맞게 PT 서비스를 맞춤형으로 경험해보세요.
              </p>
            </div>
          </div>
        );
      case "역량 분석/진단 개발 서비스":
        return (
          <div className={s.ServiceCard}>
            <div className={s.imgContainer}>
              <Image className={s.img} src={Service4} alt="" />
            </div>
            <div className={s.textContainer}>
              <p className={s.title}>역량 분석/진단 개발 서비스</p>
              <p className={s.description}>
                단체의 성장을 위해 학업 역량, 직무 역량을 유형화하고, 분석 및 진단 할 수 있는 서비스를 경험해보세요.
              </p>
            </div>
          </div>
        );
      case "앱티핏 단체 검사":
        return (
          <div className={s.ServiceCard}>
            <div className={s.imgContainer}>
              <Image className={s.img} src={Service6} alt="" />
            </div>
            <div className={s.textContainer}>
              <p className={s.title}>앱티핏 단체 검사</p>
              <p className={s.description}>
                앱티마이저의 AI 기반 적성 검사를 단체에 적용해보고 집단 전체에 대한 분석 보고서도 받아보세요.
              </p>
            </div>
          </div>
        );
    }
  };

  return renderServiceCard(service);
};

export default ServiceCard;
