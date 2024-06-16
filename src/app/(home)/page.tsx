import s from './page.module.css';
import { AskSection, HeroSection, ServiceSection } from './_sections';

const Home = () => {
  return (
    <main className={s.home}>
      <HeroSection />
      <ServiceSection />
      <AskSection />
    </main>
  );
};

export default Home;
