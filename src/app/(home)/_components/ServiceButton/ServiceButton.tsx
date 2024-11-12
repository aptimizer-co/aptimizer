import styles from "./ServiceButton.module.css";

interface ServiceButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  label?: string;
  title: string;
  href?: string;
  isComingSoon?: boolean;
  comingSoonDate?: string; // 출시 예정일 prop 추가
}

const ServiceButton = ({
  children,
  onClick,
  label,
  title,
  href,
  isComingSoon = false,
  comingSoonDate,
}: ServiceButtonProps) => {
  const handleClick = (e: React.MouseEvent) => {
    if (isComingSoon) {
      e.preventDefault();
      const message = comingSoonDate
        ? `${comingSoonDate} 출시 예정입니다.`
        : "출시 예정입니다.";
      alert(message);
      return;
    }
    onClick?.();
  };

  return (
    <a
      href={href || "#"}
      onClick={handleClick}
      className={styles.button}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className={`${styles.label} ${
          isComingSoon ? styles.comingSoonLabel : styles.defaultLabel
        }`}
      >
        {label}
      </div>
      <div
        className={`${styles.content} ${!children ? styles.contentOnly : ""}`}
      >
        <div className={styles.title}>{title}</div>
        {children && <div className={styles.childrenContainer}>{children}</div>}
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
