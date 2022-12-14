import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <ul className={styles.navUl}>
          <div className={styles.menuUl}>
            <div className={styles.navPrimaryHeader}>
              <img src="/images/me2.jpg" alt="" className={styles.headerImg_nav} />
              <h1>THOMAS MATLOCK</h1>
            </div>
            <a href="/">
              <li className={styles.nav_MenuItems}>HOME</li>
            </a>
            <a href="/about">
              <li className={styles.nav_MenuItems}>ABOUT</li>
            </a>
            <a href="/portfolio">
              <li className={styles.nav_MenuItems}>PORTFOLIO</li>
            </a>
            <a href="/resume">
              <li className={styles.nav_MenuItems}>RESUME</li>
            </a>
            <a href="/skills">
              <li className={styles.nav_MenuItems}>SKILLS</li>
            </a>
            <a href="/contact">
              <li className={styles.nav_MenuItems}>CONTACT</li>
            </a>
            <a href="/contact">
              <button type="button" className={styles.navContactBtn}>Call Me</button>
            </a>
            <p className={styles.nav_p}>
              Thomas Matlock <br />
              Jackson, MS, 39211 <br />
              United States
            </p>
          </div>
        </ul>
      </div>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <h1 className={styles.primaryTitle}>CLAIRVOYANT</h1>
          <br />
          <h1 className={styles.secondaryTitle}>FULL STACK DEVELOPER</h1>
        </div>
        <div className={styles.topRight}>
          <img src='/images/tags.png' alt='Coding Tags' className={styles.codingImg} />
        </div>
        </div>
    </div>
  );
};

export default Header;
