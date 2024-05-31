import s from "./page.module.css";
import { HeroSection, Services } from "./_sections";

const Home = () => {
  return (
    <main className={`container ${s.home}`}>
      <HeroSection />
      {/* <Services /> */}
    </main>
  );
};

export default Home;
