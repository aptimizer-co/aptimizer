import { Container } from "@/src/components/index";
import Link from "next/link";
import Image from "next/image";
import Robot from "@/public/svg/robot.svg";
import s from "./NotFound.module.css";

const NotFound = () => {
  return (
    <Container>
      <main className={s.notFound}>
        <Image className={s.image} src={Robot} alt="앱티봇" width={120} />
        <div className={s.textContainer}>
          <p>이 페이지는 아직 공사 중입니다!</p>
          <Link href="/">🚀 지구로 귀환하기</Link>
        </div>
      </main>
    </Container>
  );
};

export default NotFound;
