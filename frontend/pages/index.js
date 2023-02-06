import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ThemeToggle from "../components/ToggleTheme";

export default function Home() {
  const [drop, setDrop] = useState(1);

  function displayDropdown(id) {
    if (id == drop) {
      setDrop(1);
    } else {
      setDrop(id);
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
        <link rel="icon" href="/images/logo.png" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <div className={styles.mainContent}>
        <div className={styles.content}>
          <div className={styles.socialLinks}>
            <ul className={styles.socialUl}>
              <li>
                <a target="_blank" href="https://github.com/zep1994">
                  <img src="/images/github2.png" alt="" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/twmatlock/"
                >
                  <img src="/images/linkedin2.png" alt="" />
                </a>
              </li>
              <li>
                <a target="_blank" href="mailto:thomasmatlockbba@gmail.com">
                  <img src="/images/gmail2.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
          {/* NAVIGATION */}
          <div className={styles.navigation}>
            <div className={styles.logoTran}>
              <a href="/">
                <img
                  src="/images/logo.png"
                  className={styles.logo}
                  alt="logo"
                />
                <p className={styles.name}>homas</p>
              </a>
            </div>
            <ul className={styles.navLinks}>
              <li>
                <i className={styles.locator}>.01</i>
                <a href="#about">About</a>
              </li>
              <li>
                <i className={styles.locator}>.02</i><a href="#exp">Experience</a>
              </li>
              <li>
                <i className={styles.locator}>.03</i>
                <a href="#work">Work</a>
              </li>
              <li>
                <i className={styles.locator}>.04</i>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <button>
                  <a href="Thomas Matlock Resume 2023.pdf" target="_blank">
                    RESUME
                  </a>
                </button>
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
                <a href="Thomas Matlock Resume 2023.pdf.pdf" target="_blank">
                  CHECK OUT MY RESUME
                </a>
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
                    creativity. I love building and it has led me down a very
                    interesting path. I am a passionate Javascript developer,
                    but I also have a background in Data Analytics and Big Data.
                    <br />
                    <br />
                    Taking what I learned from Data Science and my knowledge of
                    code, I have been applying this information to a copmputer
                    vision camera. I believe my skills can add value as a modern day
                    full-stack developer (still trying to figure out that modern day part ;)
                    My automated reporting has saved time and money and I would like to bring my skills
                    to a company for years to come. Please reach out if you are interested in working together.
                    I am using Next.js, Node, and Python with a Postgres database. Here are a few technologies I’ve been
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
          <div id="exp" className={styles.section3}>
            <div className={styles.content3}>
              <div className={styles.info3}>
                <div className={styles.txtHeads2}>
                  <p className={styles.sec1}>02.</p>
                  <p className={styles.about}>Where I've Worked</p>
                </div>

                <div className={styles.workDrawer}>
                  <div className={styles.coList}>
                    <ul className={styles.coUl}>
                      <li
                        className={styles.coLi}
                        onClick={() => displayDropdown(1)}
                      >
                        Liquid Creative
                      </li>
                      <li
                        className={styles.coLi}
                        onClick={() => displayDropdown(2)}
                      >
                        C Spire
                      </li>
                      <li
                        className={styles.coLi}
                        onClick={() => displayDropdown(3)}
                      >
                        Ergon, Inc.
                      </li>
                      <li
                        className={styles.coLi}
                        onClick={() => displayDropdown(4)}
                      >
                        MThree
                      </li>
                    </ul>
                  </div>

                  <div className={styles.expList}>
                    {drop == 1 && (
                      <>
                        <div className={styles.coItem}>
                          <h3 className={styles.coTitle}>
                            Systems Manager / Full Stack Developer{" "}
                            <a
                              target="_blank"
                              href="https://liquid-creative.com/"
                            >
                              @Liquid Creative
                            </a>
                          </h3>
                          <p className={styles.coDates}>10/22 - 12/22</p>
                          <ul className={styles.coExp}>
                            <li>
                              Hosted and maintained more than fifty websites,
                              using a full stack of web technologies
                            </li>
                            <li>
                              Constructed two additional sites in a single month
                              to get the department's wait times back to a
                              reasonable level.
                            </li>
                            <li>
                              Completed a month-long crash course on NextJS and
                              Strapi, Apache, and continued Laravel work.
                            </li>
                            <li>
                              Lowered customer wait times by 50 % while managing
                              just one employee.
                            </li>
                          </ul>
                        </div>
                      </>
                    )}
                    {drop == 2 && (
                      <>
                        <div className={styles.coItem}>
                          <h3 className={styles.coTitle}>
                            Systems Auditor{" "}
                            <a target="_blank" href="https://www.cspire.com">
                              @C Spire
                            </a>
                          </h3>
                          <p className={styles.coDates}>07/22 - 10/22</p>
                          <ul className={styles.coExp}>
                            <li>
                              Tracked data Constantly and meticulously to ensure
                              the highest degree of precision in response to the
                              need. Performed risk analysis and used discretion
                              to identify system vulnerabilities and provide
                              solutions. Built previously hand-coded problems
                              using Windows Task Scheduler, Python, and ACL in
                              conjunction with SQL queries. Advised developers
                              on problems with databases, performance, and other
                              issues. Documented testing procedures for
                              developers and future testing use. Recommended
                              changes and corrections to developers for optimal
                              software performance and usability.
                            </li>
                            <li>
                              Utilized ACL to provide continuous monitoring for
                              Agile Auditing, saving countless hours of
                              programming work.
                            </li>
                          </ul>
                        </div>
                      </>
                    )}
                    {drop == 3 && (
                      <>
                        <div className={styles.coItem}>
                          <h3 className={styles.coTitle}>
                            IT Internal Auditor{" "}
                            <a target="_blank" href="https://ergon.com/">
                              @Ergon, Inc.
                            </a>
                          </h3>
                          <p className={styles.coDates}>04/21 - 07/22</p>
                          <ul className={styles.coExp}>
                            <li>
                              Fostered enduring connections between audit and
                              other divisions and external businesses. Designed,
                              implemented, and maintained audit software to
                              examine millions of journal entries. Created new
                              financial system theft controls based on risk.{" "}
                            </li>
                            <li>
                              Saved hundreds of dollars every quarter by
                              assessing risks and instituting constant
                              monitoring. .
                            </li>
                          </ul>
                        </div>
                        <br />
                        <br />
                        <div className={styles.coItem}>
                          <h3 className={styles.coTitle}>
                            Application Developer{" "}
                            <a target="_blank" href="https://ergon.com/">
                              @Ergon, Inc.
                            </a>
                          </h3>
                          <p className={styles.coDates}>01/20 - 04/21</p>
                          <ul className={styles.coExp}>
                            <li>
                              Developed genuine, long-lasting connections that
                              boosted confidence across teams. Identified
                              patterns in the data and devised a system that
                              cuts preparation time by days. Successfully
                              mastered new software and took on the role of
                              system administrator.
                            </li>
                            <li>
                              Redesigned legacy software to drastically cut down
                              on support requests..
                            </li>
                          </ul>
                        </div>
                      </>
                    )}
                    {drop == 4 && (
                      <>
                        <div className={styles.coItem}>
                          <h3 className={styles.coTitle}>
                            MThree{" "}
                            <a
                              target="_blank"
                              href="https://morganstanley.com/"
                            >
                              @MThree
                            </a>
                          </h3>
                          <p className={styles.coDates}>04/19 - 12/19</p>
                          <ul className={styles.coExp}>
                            <li>
                              Mentored Bash/Shell Scripting to create the
                              purpose of creating automation scripts to
                              streamline the procedure. Established TCP/IP
                              connections emphasizing the application and
                              network layer. Employed Linux machines and used
                              Regex to seek patterns and spot mistakes.
                            </li>
                            <li>
                              Enhanced efficiency by querying the database using
                              SQL and collecting relevant data.
                            </li>
                          </ul>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 6 */}
          <div className={styles.section6}>
            <div className={styles.content6}>
              <div className={styles.info6}>
                <div className={styles.txtHeads2}>
                  <p className={styles.sec1}>04.</p>
                  <p className={styles.about}>Things I've Built</p>
                </div>

                <div className={styles.workList}>
                  <div className={styles.project1}>
                    <div className={styles.imgGradient}>
                      <div className={styles.projectImg}></div>
                    </div>
                    <div className={styles.pro1Info}>
                      <span className={styles.feat}>Featured Project</span>
                      <h3 className={styles.proName}>Game Up</h3>
                      <p className={styles.description}>
                        One of my first project where I learned Node whiles I
                        was at Flatiron. This was a project I did on the side.
                        We were learning Rails, but I could not help but learn
                        some Node. Little did I know at the time, I was forming
                        a deep bond with Javascript. I have come learn so much
                        about it since i started.
                      </p>
                      <ul className={styles.stackUl}>
                        <li className={styles.listItem}>VsCode</li>
                        <li className={styles.listItem}>Node.js</li>
                        <li className={styles.listItem}>EJS</li>
                        <li className={styles.listItem}>Bash</li>
                      </ul>
                      <button>
                        <a
                          href="https://github.com/zep1994/Version_01_GameUp"
                          target="_blank"
                        >
                          Learn More
                        </a>
                      </button>
                    </div>
                  </div>

                  <div className={styles.project2}>
                    <div className={styles.pro2Info}>
                      <span className={styles.feat}>Featured Project</span>
                      <h3 className={styles.proName}>Full Stack Node Application</h3>
                      <p className={styles.description}>
                        This application goes deep into how node works, I cover authentication, api development, frontend templating and much more.
                        I really go into depth with this project. I plan to cover everything. Follow this application for the most recent updates, (https://github.com/zep1994/Node_Project_2023)
                      </p>
                      <ul className={styles.stackUl2}>
                        <li className={styles.listItem}>VsCode</li>
                        <li className={styles.listItem}>Node.js</li>
                        <li className={styles.listItem}>NoSQL</li>
                        <li className={styles.listItem}>Bash</li>
                      </ul>
                      <button>
                        <a
                          href="https://github.com/zep1994/Simple_Blockchain_JS"
                          target="_blank"
                        >
                          Learn More
                        </a>
                      </button>
                    </div>
                    <div className={styles.imgGradient}>
                      <div className={styles.projectImg2}></div> 
                    </div>
                  </div>

                  <div className={styles.project3}>
                    <div className={styles.imgGradient}>
                      <div className={styles.projectImg3}></div>
                    </div>
                    <div className={styles.pro3Info}>
                      <span className={styles.feat}>Featured Project</span>
                      <h3 className={styles.proName}>Internal Audit App</h3>
                      <p className={styles.description}>
                        This project is built with workflow and memory in mind. This stores information in a meaningful way that allows the user the to run custom analytics on the files that are saved within thie dataase.
                      </p>
                      <ul className={styles.stackUl2}>
                        <li className={styles.listItem}>VsCode</li>
                        <li className={styles.listItem}>Node.js</li>
                        <li className={styles.listItem}>JQuery</li>
                        <li className={styles.listItem}>EJS</li>
                        <li className={styles.listItem}>Bash</li>
                      </ul>
                      <button>
                        <a
                          href="https://github.com/zep1994/Internal_Audit_App"
                          target="_blank"
                        >
                          Learn More
                        </a>
                      </button>
                    </div>
                  </div>  

                </div>

              </div>
            </div>
          </div>

          {/* SECTION 4 */}
          <div id="work" className={styles.section4}>
            <div className={styles.content4}>
              <div className={styles.info4}>
                <div className={styles.txtHeads2}>
                  <p className={styles.sec1}>03.</p>
                  <p className={styles.about}>Areas of Expertise</p>
                </div>

                <div className={styles.cardsSection}>
                  <div className={styles.card}>
                    <div className={styles.card__inner}>
                      <div
                        className={`${styles.card__face} ${styles.card__face_front}`}
                      >
                        <h2>Data Analytics</h2>
                      </div>
                      <div
                        className={`${styles.card__face} ${styles.card__face_back}`}
                      >
                        <div className={styles.card__content}>
                          <div className={styles.card__header}>
                            <img
                              src="/images/images.jpg"
                              alt=""
                              className={styles.pp}
                            />
                            <h2>DATA ANALYTICS</h2>
                          </div>
                          <div className={styles.card__body}>
                            <h3>Python & Data Science</h3>
                            <p>
                              After I passed ISACA's CISA exam and became
                              certified, I have been fascinated by Analytics and
                              how to comb through data for very specific
                              information. I have gained experience using Python
                              and ACL to automate data analytics and create
                              processes that run and analyze data on their own.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.card}>
                    <div className={styles.card__inner}>
                      <div
                        className={`${styles.card__face} ${styles.card__face_front}`}
                      >
                        <h2>Web Development</h2>
                      </div>
                      <div
                        className={`${styles.card__face} ${styles.card__face_back}`}
                      >
                        <div className={styles.card__content}>
                          <div className={styles.card__header}>
                            <img
                              src="/images/dev.jpg"
                              alt=""
                              className={styles.pp}
                            />
                            <h2>FULL STACK DEVELOPMENT</h2>
                          </div>
                          <div className={styles.card__body}>
                            <h3>Front-end & Back-end</h3>
                            <p>
                              I have 4 years of software development experience,
                              most of which is using Javascript with Python or
                              Ruby. Building web applications is a passion of
                              mine and I will continue to press forward in my
                              development journey.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.card}>
                    <div className={styles.card__inner}>
                      <div
                        className={`${styles.card__face} ${styles.card__face_front}`}
                      >
                        <h2>Database Administration</h2>
                      </div>
                      <div
                        className={`${styles.card__face} ${styles.card__face_back}`}
                      >
                        <div className={styles.card__content}>
                          <div className={styles.card__header}>
                            <img
                              src="/images/db.jpg"
                              alt=""
                              className={styles.pp}
                            />
                            <h2>Database Management Systems</h2>
                          </div>
                          <div className={styles.card__body}>
                            <h3>SQL & NoSQL</h3>
                            <p>
                              With my career leading me down a path of software
                              development and data science combined, I have had
                              to become well-adept at getting data from
                              databases.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.card}>
                    <div className={styles.card__inner}>
                      <div
                        className={`${styles.card__face} ${styles.card__face_front}`}
                      >
                        <h2>Restful APIs</h2>
                      </div>
                      <div
                        className={`${styles.card__face} ${styles.card__face_back}`}
                      >
                        <div className={styles.card__content}>
                          <div className={styles.card__header}>
                            <img
                              src="/images/api.jpg"
                              q
                              className={styles.pp}
                            />
                            <h2>Application Programming Interface</h2>
                          </div>
                          <div className={styles.card__body}>
                            <h3>Tech Talks</h3>
                            <p>
                              Thank you for coming to my Tech Talk. I am an api,
                              ready to provide you with the information you need
                              to make the right decisions!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 5 */}
          <div id="contact" className={styles.section5}>
            <div className={styles.content5}>
              <div className={styles.info5}>
                <div className={styles.contactInfo}>
                  <div className={styles.txtHeads3}>
                    <p className={styles.sec1}>04.</p>
                    <p className={styles.about}>What's Next?</p>
                  </div>
                  <h1 className={styles.contactHeader}>GET IN TOUCH</h1>
                  <ul>
                    <li>Thomas Matlock</li>
                    <li>thomasmatlockbba@gmail.com</li>
                    <li>
                      Please reach out if you would like to learn anything more
                      about me <br />
                      or perhaps colaborate together.{" "}
                    </li>
                    <li>
                      <a href="/Thomas Matlock Resume 2023.pdf" download>
                        <i>
                          <u>DOWNLOAD RESUME HERE</u>
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
