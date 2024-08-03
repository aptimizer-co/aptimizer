"use client";

import { useState } from "react";
import s from "./page.module.css";
import { ScrollToTop } from "@/src/components";
import { Controller } from "./_components";
import { AskSection, FeatureSection, HeroSection, PersonaSection, ServiceSection } from "./_sections";

const Home = () => {
  const [type, setType] = useState<"individual" | "business">("individual");

  return (
    <main className={s.home}>
      {/* <HeroSection /> */}
      <PersonaSection type={type} />
      <FeatureSection type={type} />
      {/* <ServiceSection /> */}
      {/* <AskSection /> */}
      {/* <ScrollToTop /> */}
      <div className={s.controllerContainer}>
        <Controller type={type} setType={setType} />
      </div>
    </main>
  );
};

export default Home;
