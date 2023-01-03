import React from 'react'
import styles from '../styles/Landing.module.css'

const home = () => {
  return (
    <div className={styles.mainContent}>

        {/* NAVIGATION */}
        <div className={styles.navigation}>
            <div className={styles.logoTran}><img src="/images/logo.png" className={styles.logo} alt="logo" /><p className={styles.name}>homas</p></div>
            <ul className={styles.navLinks}>
                <li><i className={styles.locator}>.01</i>About</li>
                <li><i className={styles.locator}>.02</i>Experience</li>
                <li><i className={styles.locator}>.03</i>Work</li>
                <li><i className={styles.locator}>.04</i>Contact</li>
                <li><button>RESUME</button></li>
            </ul>
        </div>

        {/* SECTION 1 */}
        <div className={styles.section1}></div>
    </div>
  )
}

export default home 