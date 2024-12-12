import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function CompletePage() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image
          src="/company/aptimizer_symbol.svg"
          alt="aptimizer"
          className={styles.symbol}
          width={100}
          height={40}
        />
        <Image
          src="/company/aptimizer_logo.svg"
          alt="aptimizer"
          className={styles.logo}
          width={40}
          height={40}
        />
      </div>

      <h1 className={styles.title}>신청 접수가 완료되었습니다.</h1>

      <p className={styles.description}>
        해당 담당자가 영업일 2일 이내로 연락드릴 예정입니다. 신청 내역은
        등록하신 이메일에서 확인하실 수 있습니다.
      </p>

      <div className={styles.contactInfo}>
        <p className={styles.contactItem}>
          문의처: 앱티마이저 (카카오채널), 담당자: (장형우 팀장) 010-6317-5947
        </p>
      </div>

      <Link href="/" className={styles.link}>
        확인
      </Link>
    </div>
  );
}
