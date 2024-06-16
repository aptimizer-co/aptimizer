import s from './page.module.css';
import { ScrollToTop } from '@/src/components';
import { AskSection, HeroSection, ServiceSection } from './_sections';

const Home = () => {
  return (
    <main className={s.home}>
      <HeroSection />
      <ServiceSection />
      <AskSection />
      <ScrollToTop />
    </main>
  );
};

export default Home;
