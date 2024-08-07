import { ServiceCard } from "../../_components";
import { Container, SectionSubtitle, SectionTitle } from "@/src/components";
import s from "./ServiceSection.module.css";

const ServiceSection = ({ type }) => {
  return (
    <section className={s.ServiceSection} id="service">
      <Container>
        <SectionTitle>SERVICES</SectionTitle>
        <SectionSubtitle>앱티마이저가 제공해주는 서비스</SectionSubtitle>
        <div className={s.serviceCardContainer}>
          {type === "individual" && (
            <>
              <ServiceCard service="앱티핏 검사 서비스" />
              <ServiceCard service="진로 챗봇 서비스" />
              <ServiceCard service="진로 PT 서비스 구독" />
            </>
          )}
          {type === "business" && (
            <>
              <ServiceCard service="프리미엄 교육 서비스" />
              <ServiceCard service="역량 분석/진단 개발 서비스" />
              <ServiceCard service="앱티핏 단체 검사" />
            </>
          )}
        </div>
        <p className={s.title}>앱티마이저가 제공하는 서비스를 지금 바로 만나보세요!</p>
      </Container>
    </section>
  );
};

export default ServiceSection;
