import Image from "next/image";
import B2C1 from "@/public/jpg/b2c1.jpg";
import B2C2 from "@/public/jpg/b2c2.jpg";
import B2C3 from "@/public/jpg/b2c3.jpg";
import B2B1 from "@/public/jpg/b2b1.jpg";
import s from "./Service.module.css";

type TService = {
  type: string;
};

const Service = ({ type }: TService) => {
  const renderService = (type: string) => {
    switch (type) {
      case "1":
        return (
          <div className={s.Service}>
            <div className={s.textContainer}>
              <p className={s.title}>01 앱티핏 학과적성진단</p>
              <p className={s.description}>
                앱티마이저가 직접 개발한 AI 기반 적성 진단 검사는 약 135명
                이상의 서울대 및 국내 주요대학 교수진의 도움으로 형성된 학과
                데이터를 바탕으로 합니다. AI 기술을 통해 학과 데이터를 분석하여
                검사자의 적성을 정확히 진단해드리며, 진단으로 끝나지 않고
                실제적인 도움이 될 수 있도록 멘토링 프로그램과 연계해드립니다.
              </p>
            </div>
            <div className={s.imgContainer}>
              <Image className={s.img} src={B2C1} alt="" />
            </div>
          </div>
        );
      case "2":
        return (
          <div className={s.Service}>
            <div className={s.textContainer}>
              <p className={s.title}>02 1:4 대학생 멘토링</p>
              <p className={s.description}>
                앱티마이저는 자기주도적이고 능동적인 진로 설정 및 설계를 돕기
                위해 현직 대학생들이 직접 멘토링을 제공합니다. 학습 동기부여,
                진로 상담, 자기 확인을 통한 진로 설정, 진로 정보 제공 등 다양한
                프로그램으로 구성된 체계적인 프로그램을 앱티마이저의 멘토들이
                진행합니다. 또한, 앱티핏 검사 결과와 참여자의 학과 선호를
                기반으로 앱티마이저가 보유한 멘토 중 가장 적절한 멘토를 매칭해
                드립니다.
              </p>
            </div>
            <div className={s.imgContainer}>
              <Image className={s.img} src={B2C2} alt="" />
            </div>
          </div>
        );
      case "3":
        return (
          <div className={s.Service}>
            <div className={s.textContainer}>
              <p className={s.title}>03 디지털 트랜스포메이션(DT) 체험교육</p>
              <p className={s.description}>
                디지털 대전환 시대를 살아가는 모두에게 4차 산업혁명 기술에 대한
                체계적인 이해와 체험 교육을 통해 지혜와 통찰을 제공합니다.
                참여형 교육을 통해 실제 기술을 몸으로 체험해보고 쉽게 이해할 수
                있습니다. 교육 내용에 스토리와 미션 해결을 포함하여 참여자가
                몰입해서 참여할 수 있도록 구성하였습니다.
              </p>
            </div>
            <div className={s.imgContainer}>
              <Image className={s.img} src={B2C3} alt="" />
            </div>
          </div>
        );
      case "4":
        return (
          <div className={s.Service}>
            <div className={s.textContainer}>
              <p className={s.title}>04 학부모 특강</p>
              <p className={s.description}>
                자녀가 자신의 인생과 진로를 잘 찾아 행복한 삶을 살도록 돕기 위해
                부모가 무엇을 어떻게 해야 하는지 알려드립니다. 적성에 맞는 길을
                찾은 사람과 그렇지 않은 사람을 비교하며 적성을 찾는 것의
                중요성을 보여드립니다. 에듀 프리미엄에 참여한 자녀의 진로
                성장뿐만 아니라, 가정 전체적인 성장을 도모해 드립니다.
              </p>
            </div>
            <div className={s.imgContainer}>
              <Image className={s.img} src={B2B1} alt="" />
            </div>
          </div>
        );
    }
  };

  return renderService(type);
};

export default Service;
