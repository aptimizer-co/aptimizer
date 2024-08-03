import { Feature } from "../../_containers";
import { Container } from "@/src/components";
import s from "./FeatureSection.module.css";

const FeatureSection = ({ type }) => {
  return (
    <section className={s.FeatureSection}>
      <Container>
        <p className={s.title}>오직 앱티마이저만이 줄 수 있는 혜택!</p>
        {/* 개인상품 */}
        {type === "individual" && (
          <>
            <Feature type="B2C1" />
            <Feature type="B2C2" />
            <Feature type="B2C3" />
          </>
        )}
        {/* 기업상품 */}
        {type === "business" && (
          <>
            <Feature type="B2B1" />
            <Feature type="B2B2" />
            <Feature type="B2B3" />
          </>
        )}
      </Container>
    </section>
  );
};

export default FeatureSection;
