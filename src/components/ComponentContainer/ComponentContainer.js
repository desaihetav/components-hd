import CodeSnippet from "../CodeSnippet/CodeSnippet";
import styles from "./ComponentContainer.module.css";

export default function ComponentContainer({
  title,
  description,
  codeString,
  children,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.content}>{children}</div>
      <CodeSnippet codeString={codeString} />
    </div>
  );
}
