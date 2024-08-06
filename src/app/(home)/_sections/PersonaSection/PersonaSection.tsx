import { Container } from "@/src/components";
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
      <Container>{renderPersona(type)}</Container>
    </section>
  );
};

export default PersonaSection;
