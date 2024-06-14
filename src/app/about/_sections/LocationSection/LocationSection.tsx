"use client";

import { useInView } from "react-intersection-observer";
import { Container, SectionTitle, SectionSubtitle } from "@/src/components";
import s from "./Location.module.css";

const LocationSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section className={`${s.locationSection} ${inView ? s.locationSectionAnimate : ""}`} ref={ref}>
      <Container style={s.container}>
        <SectionTitle>LOCATION</SectionTitle>
        <SectionSubtitle>찾으러 오시는 길</SectionSubtitle>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.578640324865!2d126.93371877642703!3d37.470669429618546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9fe627285cdf%3A0x92766509fa80ec1!2z7ISc7Jq47Yq567OE7IucIOq0gOyVheq1rCDsi6DrprzroZwgMTE3!5e0!3m2!1sko!2skr!4v1706185717035!5m2!1sko!2skr"
          className={s.map}
        />
        <p className={s.text}>서울특별시 관악구 신림로 117</p>
        <p className={s.text}>히어로즈 건물, 403호</p>
      </Container>
    </section>
  );
};

export default LocationSection;
