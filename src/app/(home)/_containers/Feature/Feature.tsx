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
              <p className={s.title}>01 AI를 기반으로 정확하게 개인화된 적성 검사</p>
              <p className={s.content}>
                서울대 및 국내 주요 대학의 재학생과 교수진을 기반으로 학과 프로파일을 제작, 이를 AI로 분석해 학과
                페르소나를 제작해 정확한 진단을 수행합니다.
              </p>
              <p className={s.content}>
                또한 검사자의 응답을 실시간으로 분석해 검사자에게 적합한 문항으로 변경해 제시하는 개인화된 진단을
                제공합니다.
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
              <p className={s.title}>02 검증된 데이터를 기반으로 하는 정확한 진단</p>
              <p className={s.content}>
                서울대 및 국내 주요 대학의 재학생과 교수진의 검수를 통해 더욱 정확한 프로파일 기반을 다졌습니다.
              </p>
              <p className={s.content}>
                또한 검사자분들의 정확한 진단을 위해 현 대학생들의 약 1,859건의 응답, 279,204건의 문항 데이터를 통해
                정확성을 높였습니다. 어느 검사보다 트렌디하고, 정확한 진단을 받아보세요.
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
              <p className={s.title}>03 단순 진단으로 끝나지 않는 연계 서비스</p>
              <p className={s.content}>
                적성 요소를 5개로 유형화해 검사자 본인이 어떤 면에서 적합한지 상세하게 분석해드립니다.
              </p>
              <p className={s.content}>
                적성에 대한 분석 뿐만 아니라, 해당 학과의 정보 또한 자세하고 정확하게 알려드립니다. 최종적으로는 진단
                결과를 기반으로 이루어지는 진로 교육 서비스와도 연결해서 체험할 수 있습니다.
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
              <p className={s.content}>고객의 단체, 회사 등에 맞춤형 프리미엄 교육 서비스를 제작, 운영해드립니다.</p>
              <p className={s.content}>
                앱티마이저가 가진 모든 서비스와 교육 프로그램을 활용합니다. 온라인, 오프라인 환경 모두 적용 가능한
                앱티마이저의 프리미엄 서비스를 제작해드립니다.
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
              <p className={s.title}>02 학업, 업무 역량 유형화 및 분석 서비스</p>
              <p className={s.content}>
                단체의 성격, 업무, 과업 등에 따른 적합한 역량을 유형화 해드립니다. 필요 역량을 유형화 및 분석해서 역량
                모델을 제작하고, 이것을 평가할 수 있는 진단 프로그램, 역량을 개발할 수 있는 프로그램 등, 단체의 발전을
                위한 서비스를 제공해드립니다.
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
                검사 단체 구매시, 검사자 개인에게 제공되는 정보 이외에 집단적 데이터를 분석해 제공해 드립니다.
              </p>
              <p className={s.content}>
                단체의 진로 성숙도나 진로 편향도, 그룹별 차이 등 진로 교육에 활용 될 수 있는 다양한 데이터를 분석해
                제공해드립니다.
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
