import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import styles from "./Navbar.module.css";
import { FiMenu } from "react-icons/fi";
import finsightLogo from "../../assets/images/finsight_logo_transparent.png";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const location = useLocation();

  return (
    <>
      <div className={styles.navbar}>
        <button className="btn btn-ghost btn-icon" onClick={showSidebar}>
          <FiMenu />
        </button>
        <Link
          to="/"
          className={`h-full row flex-center ml-auto mr-8 ${styles.logoContainer}`}
        >
          <img
            className={`${styles.logoImage}`}
            alt="Finsight Logo"
            src={finsightLogo}
          />
          <span className={styles.logoText}>Finsight UI</span>
        </Link>
      </div>
      <nav
        className={
          sidebar ? `${styles.navMenu} ${styles.active}` : styles.navMenu
        }
      >
        <ul className={styles.navMenuItems} onClick={showSidebar}>
          {SidebarData.map((item, index) => {
            return (
              <li
                key={index}
                className={`${
                  item.path === location.pathname
                    ? styles.navTextActive
                    : styles.navText
                }`}
              >
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
