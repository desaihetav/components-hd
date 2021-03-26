import React from "react";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className="flex items-stretch w-full">
        <div className="btn btn-ghost">cssHD</div>
      </div>
    </div>
  );
}
