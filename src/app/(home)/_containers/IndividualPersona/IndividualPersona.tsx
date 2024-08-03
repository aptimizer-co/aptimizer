import Image from "next/image";
import PersonaIndividual from "@/public/svg/persona_individual.svg";
import { SpeechBubble } from "../../_components";
import s from "./IndividualPersona.module.css";

const IndividualPersona = () => {
  return (
    <>
      <p className={s.subtitle}>다음과 같은 고민을 한 번이라도 해보셨다면</p>
      <p className={s.title}>앱티마이저가 필요하다는 뜻입니다!</p>
      <div className={s.speechBubbleContainerCenter}>
        <SpeechBubble direction="right" content="진로, 진학 도움은 어디서 받아야 하지?" />
      </div>
      <div className={s.speechBubbleContainerLeft}>
        <SpeechBubble direction="left" content="내가 뭘 좋아하는지 모르겠어." />
      </div>
      <div className={s.speechBubbleContainerRight}>
        <SpeechBubble direction="right" content="학과가 나랑 너무 안 맞아!" />
      </div>
      <div className={s.imgContainer}>
        <Image src={PersonaIndividual} alt="고민하는 여학생" />
      </div>
    </>
  );
};

export default IndividualPersona;
