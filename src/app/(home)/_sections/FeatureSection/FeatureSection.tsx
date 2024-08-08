import { Feature } from "../../_containers";
import { Container, SectionSubtitle, SectionTitle } from "@/src/components";
import s from "./FeatureSection.module.css";

const FeatureSection = ({ type }) => {
  return (
    <section className={s.FeatureSection}>
      <Container>
        {/* 개인상품 */}
        {type === "individual" && (
          <div className={s.container}>
            <Feature type="B2C1" />
            <Feature type="B2C2" />
            <Feature type="B2C3" />
          </div>
        )}
        {/* 기업상품 */}
        {type === "business" && (
          <div className={s.container}>
            <Feature type="B2B1" />
            <Feature type="B2B2" />
            <Feature type="B2B3" />
          </div>
        )}
      </Container>
    </section>
  );
};

export default FeatureSection;
