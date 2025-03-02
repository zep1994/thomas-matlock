import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ThemeToggle from '../components/ToggleTheme'


export default function Home() {

  const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 }
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LL7G53VEYL"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);
          gtag('js', new Date());

          gtag('config', 'G-LL7G53VEYL');
        </script>
      </Head>

      <div className={styles.mainContent}>
        <div className={styles.content}>
          {/* SECTION 1 */}
          <div className={styles.section1}>
            <div className={styles.contentLeft}>
              <h1 className={styles.h1}>
                <span>always be</span>
                <div className={styles.message}>
                  <div className={styles.word1}>close</div>
                  <div className={styles.word2}>learning</div>
                  <div className={styles.word3}>creating</div>
                </div>
              </h1>
              <div className={styles.img}></div>
              <svg className={styles.arrows}>
                <path className={styles.a1} d="M0 0 L30 32 L60 0"></path>
                <path className={styles.a2} d="M0 20 L30 52 L60 20"></path>
                <path className={styles.a3} d="M0 40 L30 72 L60 40"></path>
              </svg>
            </div>
            <div className={styles.contentRight}>
              <h1 className={styles.date}>2023</h1>
              <div className={styles.rightInfo}>
                <p>Thomas</p>
                <p><strong>Matlock</strong></p>
                <p><strong>Full</strong></p>
                <p>Stack</p>
                <div className={styles.dev}>
                  <h2>DEVELOPER</h2>
                </div>
                {/* <p><strong>DEVELOPER</strong></p> */}
              </div>
            </div>
          </div>
          {/* SECTION 2 */}
          <div className={styles.section2}>
            <h1 className={styles.skillHeader}>
              <span className={styles.spanHeader}>There</span>
              <span className={styles.spanHeader}>are</span>
              <span className={styles.spanHeader}>no</span>
              <span className={styles.spanHeader}>limits</span>
              <span className={styles.spanHeader}>to</span>
              <span className={styles.spanHeader}>what</span>
              <span className={styles.spanHeader}>you</span>
              <span className={styles.spanHeader}>can</span>
              <span className={styles.spanHeader}>accomplish,</span>
              <span className={styles.spanHeader}>except</span>
              <span className={styles.spanHeader}>the</span>
              <span className={styles.spanHeader}>limits</span>
              <span className={styles.spanHeader}>you</span>
              <span className={styles.spanHeader}>place</span>
              <span className={styles.spanHeader}>on</span>
              <span className={styles.spanHeader}>your</span>
              <span className={styles.spanHeader}>own</span>
              <br />
              <br />
              <br />
              <br />
              <br />
              <span className={styles.hoverMe}>HOVER FOR MORE</span>
            </h1>
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
                          After I passed ISACA's CISA exam and became certified, I have been fascinated by Analytics and how to comb through data for very specific information.
                          I have gained experience using Python and ACL to automate data analytics and create processes that run and analyze data on their own. 
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
                          I have 4 years of software development experience, most of which is using Javascript with Python or Ruby. Building web applications is a passion of mine
                          and I will continue to press forward in my development journey.
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
                          With my career leading me down a path of software development and data science combined, 
                          I have had to become well-adept at getting data from databases.
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
                          src="/images/api.jpg" q
                          className={styles.pp}
                        />
                        <h2>Application Programming Interface</h2>
                      </div>
                      <div className={styles.card__body}>
                        <h3>Tech Talks</h3>
                        <p>
                          Thank you for coming to my Tech Talk. I am an api, ready to provide you with the information you need to make the right decisions!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* SECTION 3 */}
          <div className={styles.section3}>
            <div className={styles.content3}>
              <div className={styles.left3}>
                <motion.div 
                  ref={ref}
                  className={styles.jsBox}
                  animate={controls}
                  initial="hidden"
                  variants={squareVariants}
                >
                  <p>
                    Highly-analytical Full Stack Developer proficient with a
                    range of programming languages and tools. Collaborative team
                    player with exceptional technical skills and four years of
                    expertise in the field. Expert at deciphering and resolving
                    intricate problems with a focused and analytical approach.
                  </p>
                </motion.div>
                <motion.div 
                className={styles.dbBox}
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={squareVariants}
                >
                  <p>
                    I have passed my CISA exam and have worked in audit with
                    duties such as querying databases, running shell scripts
                    with Windows Task Scheduer and manually triggering.{" "}
                  </p>
                </motion.div>
                <div className={styles.hexagon}></div>
              </div>
              <div className={styles.right3}>
                <div className={styles.triangle}></div>
                <motion.div 
                className={styles.analyticBox}
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={squareVariants}
                >
                  <p>
                    Committed to meeting rigorous development goals under tight
                    deadlines while creating impeccable code. Adept at
                    developing solid, practical, and user-friendly applications
                    that fulfill client and employer demands. Proficiency in
                    both the backend and front end of software development.
                    Hands-on with JavaScript while thriving in data analytics.
                  </p>
                </motion.div>
                <div className={styles.chevron}></div>
              </div>
            </div>
          </div>
          {/* SECTION 4 */}
          <div className={styles.section4}>
            <div className={styles.contactInfo}>
              <h1 className={styles.contactHeader}>CONTACT ME</h1>
              <ul>
                <li>Name: Thomas Matlock</li>
                <li>Email: thomasmatlockbba@gmail.com</li>
                <li>
                  Please reach out if you would like to learn anything more
                  about me or perhaps colaborate together.{" "}
                </li>
                <li>
                  <a href="/Thomas Matlock Resume.pdf" download>
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
  );
}
