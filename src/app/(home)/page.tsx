import s from './page.module.css';
import { HeroSection, ServiceSection } from './_sections';

const Home = () => {
  return (
    <main className={s.home}>
      <HeroSection />
      {/* <ServiceSection /> */}
    </main>
  );
};

export default Home;
