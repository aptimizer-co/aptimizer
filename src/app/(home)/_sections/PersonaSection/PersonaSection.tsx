import { Container, SectionTitle, SectionSubtitle } from "@/src/components";
import s from "./PersonaSection.module.css";
import { IndividualPersona, BusinessPersona } from "../../_containers";

type TPersonaSection = {
  type: "individual" | "business";
};

const PersonaSection = ({ type }: TPersonaSection) => {
  const renderPersona = (type: "individual" | "business") => {
    switch (type) {
      case "individual":
        return <IndividualPersona />;
      case "business":
        return <BusinessPersona />;
    }
  };

  return (
    <section className={s.PersonaSection} id="persona">
      <Container>
        <SectionTitle>SPECIALTY</SectionTitle>
        <SectionSubtitle>앱티마이저를 골라야 하는 이유</SectionSubtitle>
        {renderPersona(type)}
      </Container>
    </section>
  );
};

export default PersonaSection;
