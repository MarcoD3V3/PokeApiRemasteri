import React from "react";
import styles from "./NavBar.module.scss";
import logo from "/logo.svg";

const NavBar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img className={styles.logoImg} src={logo} alt="logoDeMiPagina" />
        </div>
        <nav className={styles.navLinks}>
          <ul className={styles.listLinks}>
            <li className={styles.itemLink}>
              <a href="#" className={styles.link}>
                itemasd
              </a>
            </li>
            <li className={styles.itemLink}>
              <a href="#" className={styles.link}>
                itemasd
              </a>
            </li>
            <li className={styles.itemLink}>
              <a href="#" className={styles.link}>
                itemasd
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
