import { Container } from '@/src/components';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.footerInner}>
          <p className={s.copyright}>
            Copyright © 2024 Aptimizer. All rights reserved.
          </p>
          <p className={s.agreement}>개인정보처리방침 | 서비스이용약관</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
