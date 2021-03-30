import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import finsightLogo from "../../assets/images/finsight_logo_transparent.png";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Home() {
  return (
    <div
      className={`${styles.home} text-center flex flex-col h-full justify-center items-center`}
    >
      <img alt="finsight logo" className={styles.logo} src={finsightLogo} />
      <h1 className={`${styles.title}`}>Finsight UI</h1>
      <p className={`${styles.description}`}>
        A free CSS framework that provides ready-to-use frontend components and
        powerful utility classes that you can easily combine to build beautiful
        web interfaces.
      </p>
      <Link to="/docs" className={`btn btn-solid ${styles.cta} mt-8`}>
        Get Started
        <HiArrowNarrowRight className={`btn-icon-right ${styles.btnIcon}`} />
      </Link>
    </div>
  );
}
