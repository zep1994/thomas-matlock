import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
        <title>T.M. | Full Stack Developer</title>
        <meta name="description" content="Thomas Matlocks Personal Site" />
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
                  href="https://www.linkedin.com/in/twmatlockcisa/"
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

          {/* SECTION 1 */}
          <div className={styles.section1}>
            <div className={styles.introContent}>
              <p className={styles.hi}>Hi, my name is </p>
              <h1 className={styles.introHeader}>Thomas Matlock.</h1>
              <h1 className={styles.secondaryHeader}>
              .NET FULL STACK DEVELOPER | BUILDING HIGH-PERFORMANCE APPLICATIONS
              </h1>
              <p className={styles.description}>
              Experienced Full Stack Developer with expertise in NET Core, .NET Framework, React.js, and Azure, specializing in building and optimizing scalable web applications,
              API development, and automation. Skilled in backend development, database optimization, and CI/CD pipeline integration, with hands-on experience deploying and managing cloud-enabled applications.
              </p>
              <button type="button" className={styles.btn}>
                <a href="Thomas Matlock Resume.pdf" target="_blank">
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
                    Hello! My name is Thomas Matlock, and I am a highly skilled Full Stack Developer with expertise in
                   .NET, Blazor, React.js, and Azure. I am passionate about innovation and creativity, always seeking 
                    opportunities to optimize system performance, implement CI/CD pipelines, and architect scalable cloud solutions. 
                    My background spans software development, data analytics, and enterprise application architecture, enabling me to 
                    build efficient, high-impact solutions.
                    <br />
                    <br />
                    Leveraging my expertise in software development and data analytics, I have built and optimized applications
                    that improve business operations and streamline workflows. My ability to design and implement automated reporting 
                    solutions has saved significant time and resources, enhancing efficiency across teams. I am passionate about 
                    building scalable, high-performance applications and would love to bring my skills to a forward-thinking company. 
                    Please reach out if you’re interested in collaborating. I am currently working with technologies such as:
                  </p>
                  <ul>
                    <li>.NET (ASP.NET Core, Blazor)</li>
                    <li>JavaScript (ES6+)</li>
                    <li>Azure</li>
                    <li>C#</li>
                    <li>API Development</li>
                    <li>PostgreSQL</li>
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
                        Tyler Technologies
                      </li>
                      <li
                        className={styles.coLi}
                        onClick={() => displayDropdown(2)}
                      >
                        Liquid Creative
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
                          .NET Full Stack Developer{" "}
                          <a target="_blank" href="https://www.tylertechnologies.com">
                              @Tyler Technologies
                          </a>
                            </h3>
                            <p className={styles.coDates}>2023 - 2025</p>
                            <ul className={styles.coExp}>
                              <li>Boosted system performance by 30% by optimizing .NET Core and .NET Framework applications for efficiency and scalability</li>
                              <li>Led Azure DevOps CI/CD pipeline implementation, reducing deployment time by 40% through automation with YAML pipelines</li>
                              <li>Developed and maintained cloud-based solutions leveraging Azure Functions, Logic Apps, and App Services, increasing system scalability and fault tolerance</li>
                              <li>Optimized SQL Server performance, improving query execution times by 25% via indexing and stored procedures</li>
                              <li>Enhanced system security by implementing OAuth2 and JWT authentication, ensuring user access control and compliance</li>
                              <li>Refactored legacy codebases, improving maintainability, reducing technical debt, and ensuring better performance with SOLID principles and Clean Architecture.</li>
                              <li>Designed and implemented automated testing strategies using Selenium, reducing post-deployment bugs by 30% and improving release stability.</li>
                              <li>Optimized and maintained 20+ State of Mississippi agency applications, enhancing reliability and security, and improving uptime and security compliance</li>
                              <li>Enhanced user experience and performance by leveraging Blazor for dynamic, responsive UI development, reducing page load times and improving accessibility across web applications.</li>
                              <li>Integrated third-party APIs to streamline payment processing, user authentication, and external data services, enhancing application functionality</li>
                          </ul>
                        </div>
                      </>
                    )}
                    {drop == 2 && (
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
                          <p className={styles.coDates}>2022 - 2023</p>
                          <ul className={styles.coExp}>
                            <li>Coordinated and managed hosting for 50+ websites, utilizing a whole stack of web technologies including Next.js, Laravel, SendGrid, and PostgreSQL to ensure high performance and scalability</li>
                            <li>Developed and maintained full-stack web applications, focusing on enhancing user experience, accessibility, and performance. Iterative improvements based on user feedback led to a 30% increase in customer satisfaction ratings</li>
                            <li>Led a cross-functional team in optimizing the software lifecycle process, resulting in a 25% increase in deployment frequency and a 15% reduction in post-release defects.</li>
                            <li>Optimized server infrastructure and automated deployments, implementing containerization and load-balancing strategies to improve reliability and ensure smooth scaling for growing traffic.</li>
                            <li>Designed and implemented process improvements for client support workflows, refining escalation procedures and automation strategies, which significantly reduced response times and improved feedback loops between technical teams and clients</li>
                          </ul>
                        </div>
                      </>
                    )}
                    {drop == 3 && (
                      <>
                        <div className={styles.coItem}>
                        <h3 className={styles.coTitle}>
                            Systems Auditor / Application Developer{" "}
                            <a target="_blank" href="https://ergon.com/">
                                @Ergon, Inc.
                            </a>
                        </h3>
                        <p className={styles.coDates}>2021 - 2022</p>
                          <ul className={styles.coExp}>
                            <li>Managed OnBase for the entire company, ensuring secure document storage, retrieval, and workflow automation. Designed and deployed automated processes that eliminated an hour of daily manual work and improved processing speed by 40%</li>
                            <li>Developed a Python-based automation script to analyze and process millions of SAP records, identifying discrepancies in data resulting in saving over 10% revenue a year</li>
                            <li>Led full-stack LAMP stack development and maintenance to support business applications. Configured Apache, MySQL, and PHP environments, optimizing for performance and scalability, resulting in improved system reliability and reduced downtime</li>
                            <li>Developed and maintained enterprise-wide applications to streamline business operations, taking ownership of system performance and uptime, ensuring robust and scalable software solutions that reduced manual workload by 10+ hours weekly also improved the Software Development Life Cycle (SDLC).</li>
                            <li>Oversaw company-wide IT processes, identifying inefficiencies and proposing critical improvements based on severity and risk assessments; successfully implemented solutions that streamlined operations, reduced costs, and enhanced system efficiency.</li>
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
                              href="https://mthree.com/"
                            >
                              @MThree
                            </a>
                          </h3>
                          <p className={styles.coDates}>2019 - 2019</p>
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
                  <span className={styles.contactMe}>
                    Due to a couple apps going on the app stores, to the main repos, please email me
                    <a href="mailto:thomasmatlockbba@gmail.com" className={styles.emailLink}>
                      <img src="/images/gmail2.png" alt="Email Icon" />
                    </a>
                  </span>                 
                </div>
                <div className={styles.workList}>
                  <div className={styles.project1}>
                    <div className={styles.imgGradient}>
                      <div className={styles.projectImg}></div>
                    </div>
                    <div className={styles.pro1Info}>
                      <span className={styles.feat}>Featured Project</span>
                      <h3 className={styles.proName}>Roll On Jiujitsu Coaches School Management App</h3>
                      <p className={styles.description}>
                      The RollOnThePath project is a .NET MAUI-based mobile application designed to help users track and 
                      manage jiujitsu training sessions, log progress, and analyze performance over time. This project
                      involves full-stack .NET development, using C# and .NET Core to build RESTful APIs, manage data 
                      persistence with Entity Framework and SQL Server, and integrate authentication and cloud-based features.
                      </p>
                      <ul className={styles.stackUl}>
                        <li className={styles.listItem}>VisualStudio</li>
                        <li className={styles.listItem}>.NET Core</li>
                        <li className={styles.listItem}>API</li>
                        <li className={styles.listItem}>PostgreSQL</li>
                      </ul>
                      <button>
                        <a
                          href="https://github.com/zep1994/RollOnThePath"
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
                      <h3 className={styles.proName}>Featured .NET Tracking Food and Water MAUI App</h3>
                      <p className={styles.description}>
                      Flushed is a .NET MAUI-based application designed to help users track their diet, digestive health, 
                      and IBS symptoms in real time. The app enables users to log meals, monitor symptom, and analyze 
                      potential triggers based on dietary intake. Built with full .NET stack, it utilizes C# and .NET 
                      Core for backend logic, Entity Framework and SQL Server for data management, and RESTful APIs for seamless 
                      communication between the frontend and backend. 
                      </p>
                      <ul className={styles.stackUl2}>
                        <li className={styles.listItem}>MultiPlaform</li>
                        <li className={styles.listItem}>MAUI</li>
                        <li className={styles.listItem}>MVVM</li>
                        <li className={styles.listItem}>XAML</li>
                      </ul>
                      <button>
                        <a
                          href="https://github.com/zep1994/Flushed"
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
                      <h3 className={styles.proName}>IT Internal Audit Management App</h3>
                      <p className={styles.description}>
                        The Internal Audit App is a Node.js and Python-based application designed to streamline workflow management and 
                        data analytics for internal auditing. This project enables users to create, label, and store workflows with associated 
                        files while leveraging Python scripts to generate customized reports based on the stored data. The backend is built with 
                        Node.js, utilizing Express.js for routing and MongoDB for data storage, while the frontend is implemented using 
                        EJS (Embedded JavaScript Templates). This project provides hands-on experience in backend development, REST API creation, 
                        data processing with Python, and workflow automation, making it an excellent learning opportunity for building scalable 
                        web applications and audit automation tools.                      
                      </p>
                      <ul className={styles.stackUl2}>
                        <li className={styles.listItem}>Express.js</li>
                        <li className={styles.listItem}>Node.js</li>
                        <li className={styles.listItem}>Python</li>
                        <li className={styles.listItem}>EJS</li>
                        <li className={styles.listItem}>MongoDB</li>
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
                      <div className={`${styles.card__face} ${styles.card__face_front}`}>
                        <h2>Cloud & DevOps</h2>
                      </div>
                      <div className={`${styles.card__face} ${styles.card__face_back}`}>
                        <div className={styles.card__content}>
                          <div className={styles.card__header}>
                            <img src="/images/dev.jpg" alt="" className={styles.pp} />
                            <h2>CLOUD & DEVOPS</h2>
                          </div>
                          <div className={styles.card__body}>
                            <h3>Azure & CI/CD</h3>
                            <p>
                              Experienced in cloud computing and infrastructure automation using Azure, 
                              Kubernetes, and Docker. Proficient in setting up CI/CD pipelines with Azure DevOps 
                              and GitHub Actions to enhance deployment efficiency.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.card}>
                    <div className={styles.card__inner}>
                      <div className={`${styles.card__face} ${styles.card__face_front}`}>
                        <h2>Full Stack Development</h2>
                      </div>
                      <div className={`${styles.card__face} ${styles.card__face_back}`}>
                        <div className={styles.card__content}>
                          <div className={styles.card__header}>
                            <img src="/images/db.jpg" alt="" className={styles.pp} />
                            <h2>FULL STACK DEVELOPMENT</h2>
                          </div>
                          <div className={styles.card__body}>
                            <h3>.NET & JavaScript</h3>
                            <p>
                              Skilled in building scalable applications with ASP.NET Core, Razor, React, 
                              and Next.js. Experienced in developing RESTful APIs and microservices 
                              architectures for modern web applications.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.card}>
                    <div className={styles.card__inner}>
                      <div className={`${styles.card__face} ${styles.card__face_front}`}>
                        <h2>Database Management</h2>
                      </div>
                      <div className={`${styles.card__face} ${styles.card__face_back}`}>
                        <div className={styles.card__content}>
                          <div className={styles.card__header}>
                            <img src="/images/dev.jpg" alt="" className={styles.pp} />
                            <h2>DATABASE MANAGEMENT</h2>
                          </div>
                          <div className={styles.card__body}>
                            <h3>SQL & NoSQL</h3>
                            <p>
                              Expertise in managing databases using SQL Server, PostgreSQL, and MySQL.
                              Optimizing performance with indexing, stored procedures, and query tuning.
                              Proficient in data modeling and API integrations.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.card}>
                    <div className={styles.card__inner}>
                      <div className={`${styles.card__face} ${styles.card__face_front}`}>
                        <h2>Security & Testing</h2>
                      </div>
                      <div className={`${styles.card__face} ${styles.card__face_back}`}>
                        <div className={styles.card__content}>
                          <div className={styles.card__header}>
                            <img src="/images/dev.jpg" alt="" className={styles.pp} />
                            <h2>SECURITY & TESTING</h2>
                          </div>
                          <div className={styles.card__body}>
                            <h3>Authentication & Automation</h3>
                            <p>
                              Implementing secure authentication with OAuth2, JWT, and role-based access control (RBAC). 
                              Experience in automated testing using xUnit, NUnit, Selenium, and Postman.
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
      </div>
    </div>
  );
}
