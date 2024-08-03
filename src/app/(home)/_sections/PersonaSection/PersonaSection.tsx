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
    <Container>
      <section className={s.PersonaSection}>{renderPersona(type)}</section>
    </Container>
  );
};

export default PersonaSection;
