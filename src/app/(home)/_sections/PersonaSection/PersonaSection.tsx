import Image from "next/image";
import PersonaIndividual from "@/public/svg/persona_individual.svg";
import { Container } from "@/src/components";
import { SpeechBubble } from "../../_components";
import s from "./PersonaSection.module.css";
import { IndividualPersona, BusinessPersona } from "../../_containers";

const PersonaSection = () => {
  const renderPersona = (type: "individual" | "business") => {
    switch (type) {
      case "individual":
        return <IndividualPersona />;
      case "business":
        return <BusinessPersona />;
    }
  };

  return (
    <Container>
      <section className={s.PersonaSection}>{renderPersona("business")}</section>
    </Container>
  );
};

export default PersonaSection;
