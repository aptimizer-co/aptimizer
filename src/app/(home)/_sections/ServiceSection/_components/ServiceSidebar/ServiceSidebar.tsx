"use client";

import { useState } from "react";
import { ServiceButton } from "../index";
import s from "./ServiceSidebar.module.css";

const ServiceSidebar = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <>
      {/* PC */}
      <nav className={s.serviceSidebar}>
        <div className={s.serviceContainer}>
          <h3 className={s.title}>개인을 위한 서비스</h3>
          <ul className={s.list}>
            <li className={s.listItem}>
              <ServiceButton
                id={0}
                active={activeService}
                setActive={setActiveService}
              >
                앱티핏 검사
              </ServiceButton>
            </li>
            <li className={s.listItem}>
              <ServiceButton
                id={1}
                active={activeService}
                setActive={setActiveService}
              >
                진로 챗봇 서비스
              </ServiceButton>
            </li>
            <li className={s.listItem}>
              <ServiceButton
                id={2}
                active={activeService}
                setActive={setActiveService}
              >
                진로 PT 서비스 구독
              </ServiceButton>
            </li>
          </ul>
        </div>
        <div className={s.serviceContainer}>
          <h3 className={s.title}>단체를 위한 서비스</h3>
          <ul className={s.list}>
            <li className={s.listItem}>
              <ServiceButton
                id={3}
                active={activeService}
                setActive={setActiveService}
              >
                프리미엄 교육 서비스
              </ServiceButton>
            </li>
            <li className={s.listItem}>
              <ServiceButton
                id={4}
                active={activeService}
                setActive={setActiveService}
              >
                앱티핏 검사 단체 구매
              </ServiceButton>
            </li>
          </ul>
        </div>
      </nav>
      {/* 모바일 */}
      <nav className={s.serviceSidebarMobile}>
        <ul className={s.listMobile}>
          <li className={s.listItemMobile}>
            <ServiceButton
              id={0}
              active={activeService}
              setActive={setActiveService}
            >
              앱티핏 검사
            </ServiceButton>
          </li>
          <li className={s.listItemMobile}>
            <ServiceButton
              id={1}
              active={activeService}
              setActive={setActiveService}
            >
              진로 챗봇 서비스
            </ServiceButton>
          </li>
          <li className={s.listItemMobile}>
            <ServiceButton
              id={2}
              active={activeService}
              setActive={setActiveService}
            >
              진로 PT 서비스 구독
            </ServiceButton>
          </li>
          <li className={s.listItemMobile}>
            <ServiceButton
              id={3}
              active={activeService}
              setActive={setActiveService}
            >
              프리미엄 교육 서비스
            </ServiceButton>
          </li>
          <li className={s.listItemMobile}>
            <ServiceButton
              id={4}
              active={activeService}
              setActive={setActiveService}
            >
              앱티핏 검사 단체 구매
            </ServiceButton>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default ServiceSidebar;
