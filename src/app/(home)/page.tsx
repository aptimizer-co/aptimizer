import s from "./page.module.css";
import { HeroSection, ServiceSection } from "./_sections";
import { Container } from "@/src/components";

const Home = () => {
  return (
    <main className={s.home}>
      <Container>
        {/* <HeroSection /> */}
        <ServiceSection />
      </Container>
    </main>
  );
};

export default Home;
