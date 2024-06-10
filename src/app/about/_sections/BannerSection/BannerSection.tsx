import { Container } from "@/src/components";
import s from "./BannerSection.module.css";

const BannerSection = () => {
  return (
    <div className={s.banner}>
      <Container style={s.container}>
        <span className={s.bannerTitle}>EXCELLENCE FOR ALL</span>
      </Container>
    </div>
  );
};

export default BannerSection;
