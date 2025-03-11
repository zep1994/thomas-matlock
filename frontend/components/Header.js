import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css"; // Using Home.module.css for consistent styling

const Header = () => {
  return (
    <header className={styles.navigation}>
      <div className={styles.logoTran}>
        <Link href="/">
            <img src="/images/logo.png" className={styles.logo} alt="logo" />
            <p className={styles.name}>homas</p>
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <i className={styles.locator}>.01</i>
          <Link href="/#about">About</Link>
        </li>
        <li>
          <i className={styles.locator}>.02</i>
          <Link href="/#experience">About</Link>

        </li>
        <li>
          <i className={styles.locator}>.03</i>
          <Link href="/#work">About</Link>
        </li>
        <li>
          <i className={styles.locator}>.04</i>
          <Link href="/#contact">Contact</Link>
        </li>
        <li>
          <button>
            <a href="/Thomas Matlock Resume.pdf" target="_blank">
              RESUME
            </a>
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
