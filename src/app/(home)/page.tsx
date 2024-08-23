"use client";

import { useState, useRef, use, useEffect } from "react";
import s from "./page.module.css";
import { ScrollToTop, Banner, KaKaoTalkChannel } from "@/src/components";
import { Controller } from "./_components";
import {
  AskSection,
  FeatureSection,
  HeroSection,
  IntroSection,
  PersonaSection,
  ServiceSection,
  LocationSection,
  PerformanceSection,
} from "./_sections";

const Home = () => {
  const [type, setType] = useState<"individual" | "business">("individual");

  return (
    <main className={s.home}>
      <HeroSection />
      <div className={`${s.controllerContainer}`}>
        <Controller type={type} setType={setType} />
      </div>
      <IntroSection />
      <PerformanceSection />
      <PersonaSection type={type} />
      <FeatureSection type={type} />
      <ServiceSection type={type} />
      <AskSection />
      <LocationSection />
      {/* <ScrollToTop /> */}
      <Banner />
      <KaKaoTalkChannel />
    </main>
  );
};

export default Home;
