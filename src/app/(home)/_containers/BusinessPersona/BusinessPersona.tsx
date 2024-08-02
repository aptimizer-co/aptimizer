import Image from "next/image";
import PersonaBusiness from "@/public/svg/persona_business.svg";
import { SpeechBubble } from "../../_components";
import s from "./BusinessPersona.module.css";

const BusinessPersona = () => {
  return (
    <div>
      <div className={s.speechBubbleContainerCenter}>
        <SpeechBubble direction="right" content="우리에게 효과적인 교육 프로그램이 뭘까?" />
      </div>
      <div className={s.speechBubbleContainerLeft}>
        <SpeechBubble direction="left" content="우리 단체에 잘 어울릴 사람의 유형을 알고싶어!" />
      </div>
      <div className={s.speechBubbleContainerRight}>
        <SpeechBubble direction="right" content="우리 직원들을 어떻게 유형화할 수 있을까?" />
      </div>
      <div className={s.imgContainer}>
        <Image src={PersonaBusiness} alt="고민하는 직장인" />
      </div>
    </div>
  );
};

export default BusinessPersona;
