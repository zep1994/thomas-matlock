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
        <div className={styles.section1}>
            <div className={styles.introContent}>
                <p className={styles.hi}>Hi, my name is </p>
                <h1 className={styles.introHeader}>Thomas Matlock.</h1>
                <h1 className={styles.secondaryHeader}>DESIGNER. DEVELOPER. INNOVATOR.</h1>
                <p className={styles.description}>Highly-analytical Full Stack Developer proficient with a range of programming languages and tools. 
                Collaborative team player with exceptional technical skills and four years of expertise in the field. 
                Expert at deciphering and resolving intricate problems with a focused and analytical approach.</p>
                <button type='button' className={styles.btn}>CHECK OUT MY RESUME</button>
            </div>
        </div>
    </div>
  )
}

export default home 