import Image from "next/image";
import B2C1 from "@/public/jpg/b2c1.jpg";
import B2C2 from "@/public/jpg/b2c2.jpg";
import B2C3 from "@/public/jpg/b2c3.jpg";
import B2B1 from "@/public/jpg/b2b1.jpg";
import B2B2 from "@/public/jpg/b2b2.jpg";
import B2B3 from "@/public/jpg/b2b3.jpg";
import s from "./Feature.module.css";

type TFeature = {
  type: string;
};

const Feature = ({ type }: TFeature) => {
  const renderFeature = (type: string) => {
    switch (type) {
      case "B2C1":
        return (
          <div className={s.Feature}>
            <div className={s.textContainer}>
              <p className={s.title}>
                01 AI를 활용한 개인 맞춤형 적성 진단 검사
              </p>
              <p className={s.content}>
                서울대, 연세대, 고려대 및 국내 30여 주요 대학 학과의 교수진,
                135명과 대학생 및 재학생 300여 명이 참여하여 개발한 135개의 학과
                프로파일과 4,050개에 달하는 문항 데이터베이스를 학습한
                인공지능이 여러분의 적성을 정확하게 진단해 줍니다.
              </p>
              <p className={s.content}>
                또한 응답을 실시간으로 분석해 개인별로 적합한 문항을 제시하여
                맞춤형 진단을 제공합니다.
              </p>
            </div>
            <div className={s.imgContainer}>
              <Image className={s.img} src={B2C1} alt="" />
            </div>
          </div>
        );
      case "B2C2":
        return (
          <div className={s.Feature}>
            <div className={s.textContainer}>
              <p className={s.title}>02 적성 진단 95%의 정확도</p>
              <p className={s.content}>
                대학생 800여 명, 대학원생 1,000여 명을 대상으로 적성 진단의
                정확도를 검증하였습니다.
              </p>
              <p className={s.content}>
                인공지능 거대 언어 모델과 커리어넷, 워크넷, 대학 학과 홈페이지
                등의 공개 정보 300만 건을 학습한 인공지능인 앱티핏이 정확한 적성
                진단을 제공합니다.
              </p>
            </div>
            <div className={s.imgContainer}>
              <Image className={s.img} src={B2C2} alt="" />
            </div>
          </div>
        );
      case "B2C3":
        return (
          <div className={s.Feature}>
            <div className={s.textContainer}>
              <p className={s.title}>
                03 전공과 진로 선택에 필요한 상세한 정보 제공
              </p>
              <p className={s.content}>
                역량, 흥미, 가치, 개인 특성, 지식의 5가지 적성 요소와 나의
                강점과 약점에 관한 상세한 분석을 제공해 드립니다.
              </p>
              <p className={s.content}>
                적성에 관한 정보뿐만 아니라, 해당 학과 소개, 인재상, 교육과정을
                알려드리며, 나의 희망 학과와 적성 학과를 비교해 드립니다. 더
                나아가 학과를 졸업하고 진출하는 직업 분야의 연봉, 직업 만족도 등
                진로 설계에 필요한 13개 요소, 30개 항목에 관한 정보를
                제공합니다.
              </p>
            </div>
            <div className={s.imgContainer}>
              <Image className={s.img} src={B2C3} alt="" />
            </div>
          </div>
        );
      case "B2B1":
        return (
          <div className={s.Feature}>
            <div className={s.textContainer}>
              <p className={s.title}>01 맞춤 프리미엄 교육 서비스 자체 제작</p>
              <p className={s.content}>
                고객의 단체, 회사 등에 맞춤형 프리미엄 교육 서비스를 제작,
                운영해드립니다.
              </p>
              <p className={s.content}>
                앱티마이저가 가진 모든 서비스와 교육 프로그램을 활용합니다.
                온라인, 오프라인 환경 모두 적용 가능한 앱티마이저의 프리미엄
                서비스를 제작해드립니다.
              </p>
            </div>
            <div className={s.imgContainer}>
              <Image className={s.img} src={B2B1} alt="" />
            </div>
          </div>
        );
      case "B2B2":
        return (
          <div className={s.Feature}>
            <div className={s.textContainer}>
              <p className={s.title}>
                02 학업, 업무 역량 유형화 및 분석 서비스
              </p>
              <p className={s.content}>
                단체의 성격, 업무, 과업 등에 따른 적합한 역량을 유형화
                해드립니다. 필요 역량을 유형화 및 분석해서 역량 모델을 제작하고,
                이것을 평가할 수 있는 진단 프로그램, 역량을 개발할 수 있는
                프로그램 등, 단체의 발전을 위한 서비스를 제공해드립니다.
              </p>
            </div>
            <div className={s.imgContainer}>
              <Image className={s.img} src={B2B2} alt="" />
            </div>
          </div>
        );
      case "B2B3":
        return (
          <div className={s.Feature}>
            <div className={s.textContainer}>
              <p className={s.title}>03 다양한 집단적 데이터 분석 정보 제공</p>
              <p className={s.content}>
                검사 단체 구매시, 검사자 개인에게 제공되는 정보 이외에 집단적
                데이터를 분석해 제공해 드립니다.
              </p>
              <p className={s.content}>
                단체의 진로 성숙도나 진로 편향도, 그룹별 차이 등 진로 교육에
                활용 될 수 있는 다양한 데이터를 분석해 제공해드립니다.
              </p>
            </div>
            <div className={s.imgContainer}>
              <Image className={s.img} src={B2B3} alt="" />
            </div>
          </div>
        );
    }
  };

  return renderFeature(type);
};

export default Feature;
