import { Container, SectionTitle, SectionSubtitle } from "@/src/components";
import s from "./Location.module.css";

const LocationSection = () => {
  return (
    <section className={s.section}>
      <Container style={s.container}>
        <SectionTitle>LOCATION</SectionTitle>
        <SectionSubtitle>찾으러 오시는 길</SectionSubtitle>
        <div className={s.map}></div>
        <p className={s.text}>서울특별신 관악구 신림로 117</p>
        <p className={s.text}>히어로즈 건물, 403호</p>
      </Container>
    </section>
  );
};

export default LocationSection;
