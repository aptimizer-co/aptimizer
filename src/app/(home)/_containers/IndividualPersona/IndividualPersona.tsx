import Image from "next/image";
import PersonaIndividual from "@/public/svg/persona_individual.svg";
import { SpeechBubble } from "../../_components";
import s from "./IndividualPersona.module.css";

const IndividualPersona = () => {
  return (
    <>
      <div className={s.speechBubbleContainerCenter}>
        <SpeechBubble
          direction="right"
          content="어떤 학과를 가야 하는지 모르겠어."
        />
      </div>
      <div className={s.speechBubbleContainerLeft}>
        <SpeechBubble
          direction="left"
          content="지금 학과가 나랑 너무 안 맞아!"
        />
      </div>
      <div className={s.speechBubbleContainerRight}>
        <SpeechBubble
          direction="right"
          content="새로운 공부를 한다면 어떤 분야를 선택해야 할까?"
        />
      </div>
      <div className={s.speechBubbleContainerLeft}>
        <SpeechBubble
          direction="left"
          content="나를 설레게 하는 분야와 진로는 어느쪽일까?"
        />
      </div>
      <div className={s.imgContainer}>
        <Image
          className={s.img}
          src={PersonaIndividual}
          alt="고민하는 여학생"
        />
      </div>
      <p className={s.subtitle}>다음과 같은 고민을 한 번이라도 해보셨다면</p>
      <p className={s.title}>앱티마이저가 필요하다는 뜻입니다!</p>
    </>
  );
};

export default IndividualPersona;
