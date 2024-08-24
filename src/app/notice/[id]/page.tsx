import { Container } from "@/src/components";
import s from "./NoticeDetailPage.module.css";

const NoticeDetailPage = () => {
  return (
    <main className={s.NoticeDetailPage}>
      <Container>
        <p className={s.date}>2024.05.14</p>
        <h2 className={s.title}>앱티마이저 서비스 정식출시!</h2>
        <p className={s.content}>
          국가는 사회보장·사회복지의 증진에 노력할 의무를 진다. 공무원의 신분과 정치적 중립성은 법률이 정하는 바에
          의하여 보장된다. 근로조건의 기준은 인간의 존엄성을 보장하도록 법률로 정한다. 감사위원은 원장의 제청으로
          대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다. 모든 국민은 인간으로서의 존엄과 가치를
          가지며, 행복을 추구할 권리를 가진다. 국가는 개인이 가지는 불가침의 기본적 인권을 확인하고 이를 보장할 의무를
          진다.
        </p>
      </Container>
    </main>
  );
};

export default NoticeDetailPage;
