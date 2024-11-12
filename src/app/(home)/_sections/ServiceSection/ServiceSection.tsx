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
        <p className={s.title}>
          앱티마이저가 제공하는 서비스를 지금 바로 만나보세요!
        </p>
        <div className={s.serviceButtonContainer}>
          <ServiceButton
            href="https://www.aptifit.co.kr/"
            label="APTIFIT"
            title="앱티핏 2025 수능 특별판"
          >
            <p>
              설명글 입니다. 설명글 입니다. 설명글 입니다. 설명글 입니다. 설명글
              입니다. 설명글 입니다. 설명글 입니다.
            </p>
          </ServiceButton>
          <ServiceButton
            href="https://www.aptifit.co.kr/"
            label="APTIFIT"
            title="앱티핏 대학생·성인용 "
          >
            <p>
              설명글 입니다. 설명글 입니다. 설명글 입니다. 설명글 입니다. 설명글
              입니다. 설명글 입니다. 설명글 입니다.
            </p>
          </ServiceButton>
          <ServiceButton
            isComingSoon
            comingSoonDate="2025년 1월"
            label="1월 출시예정"
            title="앱티핏 고등학생용"
          >
            <p>
              설명글 입니다. 설명글 입니다. 설명글 입니다. 설명글 입니다. 설명글
              입니다. 설명글 입니다. 설명글 입니다.
            </p>
          </ServiceButton>
          <ServiceButton
            isComingSoon
            comingSoonDate="2025년 1월"
            label="1월 출시예정"
            title="앱티핏 중학생용"
          >
            <p>
              설명글 입니다. 설명글 입니다. 설명글 입니다. 설명글 입니다. 설명글
              입니다. 설명글 입니다. 설명글 입니다.
            </p>
          </ServiceButton>
          <ServiceButton
            isComingSoon
            comingSoonDate="2025년 3월"
            label="3월 출시예정"
            title="앱티핏 초등학생용"
          >
            <p>
              설명글 입니다. 설명글 입니다. 설명글 입니다. 설명글 입니다. 설명글
              입니다. 설명글 입니다. 설명글 입니다.
            </p>
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
