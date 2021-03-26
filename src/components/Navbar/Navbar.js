import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import styles from "./Navbar.module.css";
import { FiGithub, FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className={styles.navbar}>
        <button className="btn btn-ghost btn-icon" onClick={showSidebar}>
          <FiMenu />
        </button>
        <span className={styles.logo}>FinsightUI</span>
        <a href="/" className="btn btn-ghost btn-icon ml-auto">
          <FiGithub />
        </a>
      </div>
      <nav
        className={
          sidebar ? `${styles.navMenu} ${styles.active}` : styles.navMenu
        }
      >
        <ul className={styles.navMenuItems} onClick={showSidebar}>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={styles.navText}>
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
