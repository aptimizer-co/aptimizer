"use client";

import { useState, useRef, use, useEffect } from "react";
import s from "./page.module.css";
import { ScrollToTop, Banner } from "@/src/components";
import { Controller } from "./_components";
import { useInView } from "react-intersection-observer";
import {
  AskSection,
  FeatureSection,
  HeroSection,
  IntroSection,
  PersonaSection,
  ServiceSection,
  LocationSection,
  PerformanceSection,
  VisionSection,
} from "./_sections";

const Home = () => {
  const [type, setType] = useState<"individual" | "business">("individual");

  return (
    <main className={s.home}>
      <HeroSection />
      <IntroSection />
      {/* <VisionSection /> */}
      <PerformanceSection />
      <div className={`${s.controllerContainer}`}>
        <Controller type={type} setType={setType} />
      </div>
      <PersonaSection type={type} />
      <FeatureSection type={type} />
      <ServiceSection type={type} />
      <AskSection />
      <LocationSection />
      {/* <ScrollToTop /> */}
      {/* <div className={`${s.controllerContainer} ${inView ? s.show : ""}`}>
        <Controller type={type} setType={setType} />
      </div> */}

      <Banner />
    </main>
  );
};

export default Home;
