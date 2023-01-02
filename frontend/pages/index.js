import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thomas Matlock's Site</title>
        <meta name="description" content="Thomas Matlocks Personal Site" />
        <link rel="icon" href="/favicon.ico" />
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
            </div>
            <div className={styles.contentRight}>
              <div className={styles.rightInfo}>
                <p>Thomas</p>
                <p>Matlock</p>
                <p>Full</p>
                <p>Stack</p>
                <div className={styles.dev}>
                  <h2>DEVELOPER</h2>
                  <h2>DEVELOPER</h2>
                </div>
                {/* <p><strong>DEVELOPER</strong></p> */}
              </div>
              <svg className={styles.arrows}>
                <path className={styles.a1} d="M0 0 L30 32 L60 0"></path>
                <path className={styles.a2} d="M0 20 L30 52 L60 20"></path>
                <path className={styles.a3} d="M0 40 L30 72 L60 40"></path>
              </svg>
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
            </h1>
            <div className={styles.cardsSection}>
              <div className={`${styles.card} ${styles.darth}`}>
                <div className={`${styles.face} ${styles.front}`}>
                  <h2>
                    <small>Web</small>
                    <br />
                    Development
                  </h2>
                </div>
                <div className={`${styles.face} ${styles.back}`}>
                  <div className={styles.description}>hello</div>
                </div>
              </div>
              <div className={`${styles.card} ${styles.darth}`}>
                <div className={`${styles.face} ${styles.front}`}>
                  <h2>
                    <small>Analytics</small>
                    <br />& Data Mining
                  </h2>
                </div>
                <div className={`${styles.face} ${styles.back}`}>
                  <div className={styles.description}>hello</div>
                </div>
              </div>
              <div className={`${styles.card} ${styles.darth}`}>
                <div className={`${styles.face} ${styles.front}`}>
                  <h2>
                    <small>Database</small>
                    <br />
                    Administration
                  </h2>
                </div>
                <div className={`${styles.face} ${styles.back}`}>
                  <div className={styles.description}>helloo</div>
                </div>
              </div>
              <div className={`${styles.card} ${styles.darth}`}>
                <div className={`${styles.face} ${styles.front}`}>
                  <h2>
                    <small>User Interface</small>
                    <br />
                    RESTFUL APIs
                  </h2>
                </div>
                <div className={`${styles.face} ${styles.back}`}>
                  <div className={styles.description}></div>
                </div>
              </div>
            </div>
          </div>
          {/* SECTION 3 */}
          <div className={styles.section3}>
            <div className={styles.content3}>
              <div className={styles.left3}>
                <div className={styles.jsBox}>
                  <p>
                    Highly-analytical Full Stack Developer proficient with a
                    range of programming languages and tools. Collaborative
                    team player with exceptional technical skills and four years
                    of expertise in the field. Expert at deciphering and
                    resolving intricate problems with a focused and analytical
                    approach. 
                  </p>
                </div>
                <div className={styles.dbBox}>
                  <p>I have passed my CISA exam and have worked in audit with duties such as querying databases, running shell scripts with 
                    Windows Task Scheduer and manually triggering.  </p>
                </div>
                <div className={styles.hexagon}></div>
              </div>
              <div className={styles.right3}>
                <div className={styles.triangle}></div>
                <div className={styles.analyticBox}>
                  <p>Committed to meeting rigorous development goals
                    under tight deadlines while creating impeccable code. Adept
                    at developing solid, practical, and user-friendly
                    applications that fulfill client and employer demands.
                    Proficiency in both the backend and front end of software
                    development. Hands-on with JavaScript while thriving in data
                    analytics.</p>
                </div>
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
                  <a href="/thomas-matlock-resume.docx" download>
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
