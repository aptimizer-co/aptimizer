import { ServiceCard } from "../../_components";
import { Container, SectionSubtitle, SectionTitle } from "@/src/components";
import s from "./ServiceSection.module.css";
import HomeCardAnimation from "../../_components/HomeCardAnimation/HomeCardAnimation";
import ServiceButton from "../../_components/ServiceButton/ServiceButton";

const ServiceSection = ({ type }) => {
  return (
    <section className={s.ServiceSection} id="service">
      <Container>
        <SectionTitle>SERVICES</SectionTitle>
        <SectionSubtitle>앱티마이저가 제공해주는 서비스</SectionSubtitle>
        <p className={s.title}>앱티마이저가 제공하는 서비스를 지금 바로 만나보세요!</p>
        <div className={s.serviceButtonContainer}>
          <ServiceButton href="https://www.aptifit.co.kr/" label="TRY NOW" title="앱티핏 대학생·성인용 ">
            <p className={s.serviceButtonText}>
              전공선택을 앞두거나, 전과, 복수전공, <br /> 부전공을 고민하는 대학생
            </p>
          </ServiceButton>
          <ServiceButton href="https://www.aptifit.co.kr/" label="TRY NOW" title="앱티핏 고등학생용">
            <p className={s.serviceButtonText}>대학 진학을 앞둔 고등학생</p>
          </ServiceButton>
        </div>
        <div className={s.serviceButtonContainer}>
          <ServiceButton href="https://www.aptifit.co.kr/" label="TRY NOW" title="앱티핏 중학생용">
            <p className={s.serviceButtonText}>고등학교 진학을 앞둔 중학생</p>
          </ServiceButton>
          <ServiceButton href="https://www.aptifit.co.kr/" label="TRY NOW" title="앱티핏 초등학생용">
            <p className={s.serviceButtonText}>중학교 진학을 앞둔 초등학생</p>
          </ServiceButton>
        </div>
        {/* <HomeCardAnimation /> */}
        {/* 
        {type === "individual" && (
          <div className={s.serviceCardContainer}>
            <ServiceCard service="앱티핏 검사 서비스" />
            <ServiceCard service="진로 챗봇 서비스" />
            <ServiceCard service="진로 PT 서비스 구독" />
          </div>
        )}
        {type === "business" && (
          <div className={s.serviceCardContainer}>
            <ServiceCard service="프리미엄 교육 서비스" />
            <ServiceCard service="역량 분석/진단 개발 서비스" />
            <ServiceCard service="앱티핏 단체 검사" />
          </div>
        )} */}
      </Container>
    </section>
  );
};

export default ServiceSection;
