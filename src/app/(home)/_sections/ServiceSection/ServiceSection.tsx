"use client";

import { useState } from "react";
import { ServiceContent, ServiceSidebar } from "./_components";
import { SectionTitle, SectionSubtitle } from "@/src/components";
import s from "./ServiceSection.module.css";

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
        <ServiceSidebar
          activeService={activeService}
          setActiveService={setActiveService}
        />
        {/* 콘텐츠 섹션 */}
        <ServiceContent id={activeService} />
      </div>
    </section>
  );
};

export default ServiceSection;
