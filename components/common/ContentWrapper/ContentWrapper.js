import styles from "./ContentWrapper.module.css";

export default function ContentWrapper({ children }) {
  return (
    <div className={`${styles.outer}`}>
      <div className={`${styles.inner}`}>{children}</div>
    </div>
  );
}
