import { Container } from '@/src/components/index';
import Link from 'next/link';
import s from './NotFound.module.css';

const NotFound = () => {
  return (
    <Container>
      <main className={s.notFound}>
        <div className={s.textContainer}>
          <p>현재 이곳은 공사 중입니다!</p>
          <Link href="/">🚀 지구로 귀환하기</Link>
        </div>
      </main>
    </Container>
  );
};

export default NotFound;
