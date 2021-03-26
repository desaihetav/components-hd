import styles from "./SectionHeader.module.css";

export default function SectionHeader({ title, description }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
