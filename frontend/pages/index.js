import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ThemeToggle from "../components/ToggleTheme";

export default function Home() {
  const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Thomas Matlock's Site</title>
        <meta name="description" content="Thomas Matlocks Personal Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.mainContent}>
        <div className={styles.content}>
          {/* NAVIGATION */}
          <div className={styles.navigation}>
            <div className={styles.logoTran}>
              <img src="/images/logo.png" className={styles.logo} alt="logo" />
              <p className={styles.name}>homas</p>
            </div>
            <ul className={styles.navLinks}>
              <li>
                <i className={styles.locator}>.01</i>About
              </li>
              <li>
                <i className={styles.locator}>.02</i>Experience
              </li>
              <li>
                <i className={styles.locator}>.03</i>Work
              </li>
              <li>
                <i className={styles.locator}>.04</i>Contact
              </li>
              <li>
                <button>RESUME</button>
              </li>
            </ul>
          </div>

          {/* SECTION 1 */}
          <div className={styles.section1}>
            <div className={styles.introContent}>
              <p className={styles.hi}>Hi, my name is </p>
              <h1 className={styles.introHeader}>Thomas Matlock.</h1>
              <h1 className={styles.secondaryHeader}>
                DESIGNER. DEVELOPER. INNOVATOR.
              </h1>
              <p className={styles.description}>
                Highly-analytical Full Stack Developer proficient with a range
                of programming languages and tools. Collaborative team player
                with exceptional technical skills and four years of expertise in
                the field. Expert at deciphering and resolving intricate
                problems with a focused and analytical approach.
              </p>
              <button type="button" className={styles.btn}>
                CHECK OUT MY RESUME
              </button>
            </div>
          </div>

          {/* SECTION 2 */}
          <div className={styles.section2}>
            <div className={styles.content2}>
              <div className={styles.info2}>
                <div className={styles.txtBox}>
                  <div className={styles.txtHeads}>
                    <p className={styles.sec1}>01.</p>
                    <p className={styles.about}>About Me</p>
                  </div>
                  <br />
                  <br />
                  <p className={styles.descript}>
                    Hello! My name is Thomas and I enjoy innovation and
                    creativity. love building and it has lead me down a very
                    interesting path. I am a passionate Javascript developer,
                    but I also have a background in Data Analytics and big data.
                    <br />
                    <br />
                    Taking what I learned from Data Science and my knowledge of
                    code, I ahave been applying this information to a copmputer
                    vision camera. I will be able to expand on the reports that
                    I can create with such a functioning prototype. I am using
                    Python with a postgres database and will be using nextjs for
                    a client facing tool. Here are a few technologies I’ve been
                    working with recently:
                  </p>
                  <ul>
                    <li>JavaScript (ES6+)</li>
                    <li>Next.js</li>
                    <li>MongoDB</li>
                    <li>Node.js</li>
                    <li>WordPress</li>
                    <li>postgresql</li>
                  </ul>
                </div>
                <div className={styles.aboutImg}>
                  <p>Thomas Matlock</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
