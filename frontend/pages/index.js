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
                  <a href="Thomas Matlock Resume.pdf" target="_blank">
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
              .NET FULL STACK DEVELOPER | BUILDING HIGH-PERFORMANCE APPLICATIONS | AZURE
              </h1>
              <p className={styles.description}>
              Experienced Full Stack Developer with expertise in .NET, Razpr, React, and Azure. 
              Passionate about optimizing system performance, implementing CI/CD pipelines, 
              and architecting scalable cloud solutions. Dedicated to continuous learning, 
              driving innovation, and delivering high-impact technical solutions.
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
                   .NET, Blazor, Angular, and Azure. I am passionate about innovation and creativity, always seeking 
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
                              <li>Optimized full-stack applications with ASP.NET Core, C#, and Razor, improving performance by 30%.</li>
                              <li>Developed RESTful APIs and optimized SQL Server queries, reducing execution times by 25%.</li>
                              <li>Led Azure DevOps CI/CD automation with YAML and Docker, cutting deployment time by 40%.</li>
                              <li>Implemented OAuth2 and JWT authentication, enhancing security and compliance.</li>
                              <li>Developed scalable cloud solutions using Azure Functions, Logic Apps, and App Services.</li>
                              <li>Automated infrastructure provisioning with Terraform/Bicep, improving deployment efficiency.</li>
                              <li>Refactored legacy code, reducing technical debt and improving maintainability.</li>
                              <li>Integrated third-party APIs for payments, authentication, and data services.</li>
                              <li>Designed automated testing strategies with Selenium, reducing post-deployment bugs by 30%.</li>
                              <li>Collaborated in Agile teams, contributing to sprint planning, code reviews, and backlog refinement.</li>
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
                            <li>
                                Managed and maintained hosting for over 50 websites, ensuring optimal performance, security, and uptime.
                            </li>
                            <li>
                                Led the development and deployment of two client websites in a single month, significantly reducing project backlog and improving customer satisfaction.
                            </li>
                            <li>
                                Gained expertise in modern web development frameworks, including Next.js, Strapi, and Laravel, enhancing the scalability and maintainability of client projects.
                            </li>
                            <li>
                                Optimized server infrastructure and automated deployment processes, reducing manual intervention and improving system reliability.
                            </li>
                            <li>
                                Provided end-to-end client support, including onboarding, technical assistance, and training, ensuring seamless website management and functionality.
                            </li>
                            <li>
                                Implemented process improvements that streamlined client support workflows, reducing resolution times and improving feedback loops.
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
                        <p className={styles.coDates}>2021 - 2022</p>
                          <ul className={styles.coExp}>
                            <li>
                                Designed, implemented, and maintained an automated audit system that analyzed millions of journal entries, improving financial oversight and compliance.
                            </li>
                            <li>
                                Developed exception reporting processes that identified financial risks, duplicate payments, and vendor inconsistencies, saving the company thousands in potential losses.
                            </li>
                            <li>
                                Created real-time monitoring systems using SQL and Python, significantly enhancing the company's ability to detect and prevent fraudulent activity.
                            </li>
                            <li>
                                Automated risk assessment reports, reducing manual auditing time and improving the efficiency of internal control reviews.
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
                        <p className={styles.coDates}>2020 - 2021</p>
                          <ul className={styles.coExp}>
                            <li>
                                Developed and maintained custom enterprise applications that streamlined operations, improving efficiency across multiple departments.
                            </li>
                            <li>
                                Built a job and task tracking system that optimized resource allocation and reduced project delays.
                            </li>
                            <li>
                                Automated data entry and reporting workflows using SQL and Python, reducing processing times by 50%.
                            </li>
                            <li>
                                Modernized legacy applications, significantly improving performance and reducing ongoing support requests.
                            </li>
                            <li>
                                Acted as a system administrator, providing technical support, troubleshooting critical issues, and implementing security enhancements.
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
                      <img src="/images/gmail2.png" alt="Email Icon" Email Me />
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
                      <h3 className={styles.proName}></h3>
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
                        <li className={styles.listItem}>Git</li>
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
                      <h3 className={styles.proName}>Full Stack .NET Application</h3>
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
                        <li className={styles.listItem}>PostgreSQL</li>
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
                      <h3 className={styles.proName}>Internal Audit App</h3>
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
