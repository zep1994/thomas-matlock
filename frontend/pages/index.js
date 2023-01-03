import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ThemeToggle from "../components/ToggleTheme";

export default function Home() {


  const [drop, setDrop] = useState(1)

  function displayDropdown(id) {
    if (id == drop) {
      setDrop(1)
    } else {
      setDrop(id)
    }
  }

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
        <title>Thomas Matlock</title>
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
                <i className={styles.locator}>.01</i><a href="#about">About</a> 
              </li>
              <li>
                <i className={styles.locator}>.02</i><a href="#exp">Experience</a>
              </li>
              <li>
                <i className={styles.locator}>.03</i><a href="#work">Work</a>
              </li>
              <li>
                <i className={styles.locator}>.04</i><a href="#contact">Contact</a>
              </li>
              <li>
                <button><a href="thomas-matlock-resume.pdf" target="_blank">RESUME</a></button>
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
                <a href="thomas-matlock-resume.pdf" target="_blank">CHECK OUT MY RESUME</a>
              </button>
            </div>
          </div>

          {/* SECTION 2 */}
          <div id="about" className={styles.section2}>
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
                    creativity. I love building and it has lead me down a very
                    interesting path. I am a passionate Javascript developer,
                    but I also have a background in Data Analytics and Big Data.
                    <br />
                    <br />
                    Taking what I learned from Data Science and my knowledge of
                    code, I have been applying this information to a copmputer
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

          {/* SECTION 3 */}
          <div id="experience" className={styles.section3}>
            <div className={styles.content3}>
              <div className={styles.info3}>

                <div className={styles.txtHeads2}>
                  <p className={styles.sec1}>02.</p>
                  <p className={styles.about}>Where I've Worked</p>
                </div>

                <div className={styles.workDrawer}>

                  <div className={styles.coList}>
                    <ul className={styles.coUl}>
                      <li className={styles.coLi} onClick={()=>displayDropdown(1)}>Liquid Creative</li>
                      <li className={styles.coLi} onClick={()=>displayDropdown(2)}>C Spire</li>
                      <li className={styles.coLi} onClick={()=>displayDropdown(3)}>Ergon, Inc.</li>
                      <li className={styles.coLi} onClick={()=>displayDropdown(4)}>MThree</li>
                    </ul>
                  </div>

                  <div className={styles.expList}>
                  {drop == 1 && (
                    <>
                      <div className={styles.coItem}>
                        <h3 className={styles.coTitle}>Systems Manager / Full Stack Developer <a target="_blank" href="https://liquid-creative.com/">@Liquid Creative</a></h3>
                        <p className={styles.coDates}>10/22 - 12/22</p>
                        <ul className={styles.coExp}>
                            <li>Hosted and maintained more than fifty websites, using a full stack of web technologies</li>
                            <li>Constructed two additional sites in a single month to get the department's wait times back to a reasonable level.</li>
                            <li>Completed a month-long crash course on NextJS and Strapi, Apache, and continued Laravel work.</li>
                            <li>Lowered customer wait times by 50 % while managing just one employee.</li>
                        </ul>
                      </div>
                    </>
                  )}  
                  {drop == 2 && (
                    <>
                      <div className={styles.coItem}>
                        <h3 className={styles.coTitle}>Systems Auditor <a target="_blank" href="https://www.cspire.com">@C Spire</a></h3>
                        <p className={styles.coDates}>07/22 - 10/22</p>
                        <ul className={styles.coExp}>
                            <li>Tracked data Constantly and meticulously to ensure the highest degree of precision in response to the need. Performed risk
                                analysis and used discretion to identify system vulnerabilities and provide solutions. Built previously hand-coded problems using 
                                Windows Task Scheduler, Python, and ACL in conjunction with SQL queries. Advised developers on problems with databases, performance, 
                                and other issues. Documented testing procedures for developers and future testing use. Recommended changes and corrections to developers 
                                for optimal software performance and usability.</li>
                            <li>Utilized ACL to provide continuous monitoring for Agile Auditing, saving countless hours of programming work.</li>
                        </ul>
                      </div>
                    </>
                  )}

                  {drop == 3 && (
                    <>
                      <div className={styles.coItem}>
                        <h3 className={styles.coTitle}>IT Internal Auditor <a target="_blank" href="https://ergon.com/">@Ergon, Inc.</a></h3>
                        <p className={styles.coDates}>04/21 - 07/22</p>
                        <ul className={styles.coExp}>
                            <li>Fostered enduring connections between audit and other divisions and external businesses. Designed, implemented, and maintained audit 
                              software to examine millions of journal entries. Created new financial system theft controls based on risk. </li>
                            <li>Saved hundreds of dollars every quarter by assessing risks and instituting constant monitoring. .</li>
                        </ul>
                      </div>
                      <br />
                      <br />
                      <div className={styles.coItem}>
                        <h3 className={styles.coTitle}>Application Developer <a target="_blank" href="https://ergon.com/">@Ergon, Inc.</a></h3>
                        <p className={styles.coDates}>01/20 - 04/21</p>
                        <ul className={styles.coExp}>
                            <li>Developed genuine, long-lasting connections that boosted confidence across teams. Identified patterns in the data and devised a 
                              system that cuts preparation time by days. 
                              Successfully mastered new software and took on the role of system administrator.</li>
                            <li>Redesigned legacy software to drastically cut down on support requests..</li>
                        </ul>
                      </div>
                    </>
                  )}


                  {drop == 4 && (
                    <>
                      <div className={styles.coItem}>
                        <h3 className={styles.coTitle}>MThree <a target="_blank" href="https://morganstanley.com/">@MThree</a></h3>
                        <p className={styles.coDates}>04/19 - 12/19</p>
                        <ul className={styles.coExp}>
                            <li>Mentored Bash/Shell Scripting to create the purpose of creating automation scripts to streamline the procedure. Established TCP/IP connections emphasizing the application and network layer. 
                                Employed Linux machines and used Regex to seek patterns and spot mistakes.</li>
                            <li>Enhanced efficiency by querying the database using SQL and collecting relevant data.</li>
                        </ul>
                      </div>
                    </>
                  )}
                    
                  </div>

                </div>    

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
