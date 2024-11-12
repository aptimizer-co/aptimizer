import styles from "./ServiceButton.module.css";

interface ServiceButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  label?: string;
  title: string;
  href: string;
}

const ServiceButton = ({
  children,
  onClick,
  label,
  title,
  href,
}: ServiceButtonProps) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={styles.button}
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* 나머지 내용은 동일 */}
      <div className={styles.label}>{label}</div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.childrenContainer}>{children}</div>
      </div>
      <div className={styles.iconContainer}>
        <div className={styles.iconWrapper}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default ServiceButton;
