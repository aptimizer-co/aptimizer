import { SectionTitle, SectionSubtitle } from "@/src/components";
import s from "./Location.module.css";

const LocationSection = () => {
  return (
    <section className={`${s.container} ${s.location}`}>
      <SectionTitle>LOCATION</SectionTitle>
      <SectionSubtitle>찾으러 오시는 길</SectionSubtitle>
      <div className={s.map}></div>
      <p className={s.text}>서울특별신 관악구 신림로 117(히어로즈 건물, 403호)</p>
    </section>
  );
};

export default LocationSection;
