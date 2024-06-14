"use client";

import { useState } from "react";
import Image from "next/image";
import { ServiceButton, ServiceContent } from "./_components";
import s from "./ServiceSection.module.css";
import Aptifit from "@/public/png/aptifit.png";

const ServiceSection = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className={`${s.container} ${s.service}`}>
      <h2 className={s.title}>SERVICE</h2>
      <p className={s.desc}>앱티마이저가 제공하는 다양한 서비스를 만나보세요</p>
      <div className={s.serviceContainer}>
        {/* 사이드 네비게이션 */}
        <nav className={s.sidenav}>
          <div className={s.b2c}>
            <h3>개인을 위한 서비스</h3>
            <ul className={s.ul}>
              <ServiceButton
                id={0}
                active={activeService}
                setActive={setActiveService}
              >
                앱티핏 검사
              </ServiceButton>
              <ServiceButton
                id={1}
                active={activeService}
                setActive={setActiveService}
              >
                진로 챗봇 서비스
              </ServiceButton>
              <ServiceButton
                id={2}
                active={activeService}
                setActive={setActiveService}
              >
                진로 PT 서비스 구독
              </ServiceButton>
            </ul>
          </div>
          <div className={s.b2b}>
            <h3>단체를 위한 서비스</h3>
            <ul className={s.ul}>
              <ServiceButton
                id={3}
                active={activeService}
                setActive={setActiveService}
              >
                프리미엄 교육 서비스
              </ServiceButton>
              <ServiceButton
                id={4}
                active={activeService}
                setActive={setActiveService}
              >
                앱티핏 검사 단체 구매
              </ServiceButton>
            </ul>
          </div>
        </nav>
        {/* 모바일 네비게이션 */}
        <ul className={s.navMobile}>
          <div>
            <li>앱티핏 검사</li>
            <li>진로챗봇 서비스</li>
            <li>진로 PT 서비스</li>
          </div>
          <div>
            <li>프리미엄 교육</li>
            <li>맞춤 서비스 상담</li>
            <li>앱티핏 단체 구매</li>
          </div>
        </ul>
        {/* 콘텐츠 섹션 */}
        <ServiceContent id={activeService} />
        {/* <div className={s.product}>
          <div className={s.productImgContainer}>
            <Image src={Aptifit} alt="앱티핏 검사" fill />
          </div>
          <p className={s.productTitle}>앱티핏 검사</p>
          <p className={s.productDesc}>
            앱티핏 검사는 서울대 및 주요 대학의 교수진 자문을 받은 학문 프로파일
            데이터와 학생 프로파일 데이터를 학습한 AI 추천 모델을 사용하여, 각
            학과의 최신 학문적 트렌드와 세부적인 5대 특성을 바탕으로 최적의
            학과를 추천합니다.
          </p>
          <button className={s.button}>검사하기</button>
        </div> */}
      </div>
    </section>
  );
};

export default ServiceSection;
