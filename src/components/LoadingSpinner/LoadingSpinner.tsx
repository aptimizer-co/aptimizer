import styles from "./LoadingSpinner.module.css";

interface LoadingSpinnerProps {
  className?: string;
}

export default function LoadingSpinner({ className }: LoadingSpinnerProps) {
  return <div className={`${styles.loader} ${className || ""}`} />;
}
