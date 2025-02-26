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
              FULL STACK DEVELOPER | CLOUD SOLUTIONS ARCHITECT
              </h1>
              <p className={styles.description}>
              Experienced Full Stack Developer with expertise in .NET, Blazor, Angular, and Azure. 
              Passionate about optimizing system performance, implementing CI/CD pipelines, 
              and architecting scalable cloud solutions. Dedicated to continuous learning, 
              driving innovation, and delivering high-impact technical solutions.
              </p>
              <button type="button" className={styles.btn}>
                <a href="Thomas Matlock Resume 2023.pdf" target="_blank">
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
                                <li>
                                    Developed and optimized full-stack applications using ASP.NET Core, C#, and Blazor, enhancing system performance by 30%.
                                </li>
                                <li>
                                    Designed and implemented RESTful APIs with ASP.NET Core and GraphQL, improving data retrieval efficiency and front-end integrations.
                                </li>
                                <li>
                                    Led Azure DevOps CI/CD pipeline implementation, reducing deployment time by 40% through automation with YAML pipelines, Docker, and Kubernetes.
                                </li>
                                <li>
                                    Optimized SQL Server performance, improving query execution times by 25% via indexing and stored procedures.
                                </li>
                                <li>
                                    Enhanced system security by implementing OAuth2 and JWT authentication, ensuring user access control and compliance.
                                </li>
                                <li>
                                    Developed and maintained cloud-based solutions leveraging Azure Functions, Logic Apps, and App Services, increasing system scalability and fault tolerance.
                                </li>
                                <li>
                                    Automated infrastructure provisioning using Terraform/Bicep, reducing manual setup times and enhancing deployment reliability.
                                </li>
                                <li>
                                    Developed microservices-based architectures, breaking down monolithic applications into scalable, modular services using .NET and Docker.
                                </li>
                                <li>
                                    Refactored legacy codebases, improving maintainability, reducing technical debt, and ensuring better performance with SOLID principles and Clean Architecture.
                                </li>
                                <li>
                                    Designed and implemented automated testing strategies using Selenium, xUnit, and NUnit, reducing post-deployment bugs by 30% and improving release stability.
                                </li>
                                <li>
                                    Integrated third-party APIs to streamline payment processing, user authentication, and external data services, enhancing application functionality.
                                </li>
                                <li>
                                    Collaborated with cross-functional teams in Agile/Scrum environments, participating in sprint planning, code reviews, and backlog refinement to ensure high-quality deliverables.
                                </li>
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
                              href="https://morganstanley.com/"
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
                              Experienced in cloud computing and infrastructure automation using Azure, Terraform, 
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
                              Skilled in building scalable applications with ASP.NET Core, Blazor, Angular, 
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
