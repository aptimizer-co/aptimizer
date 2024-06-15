"use client";
import { SectionTitle, SectionSubtitle } from "@/src/components";

import { useState } from "react";
import Image from "next/image";
import { ServiceButton, ServiceContent, ServiceSidebar } from "./_components";
import s from "./ServiceSection.module.css";
import Aptifit from "@/public/png/aptifit.png";

const ServiceSection = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className={s.serviceSection}>
      <SectionTitle>SERVICE</SectionTitle>
      <SectionSubtitle>
        앱티마이저가 제공하는 다양한 서비스를 만나보세요
      </SectionSubtitle>
      <div className={s.serviceContainer}>
        {/* 사이드바 메뉴 */}
        <ServiceSidebar />
        {/* 콘텐츠 섹션 */}
        {/* <ServiceContent id={activeService} /> */}
      </div>
    </section>
  );
};

export default ServiceSection;
