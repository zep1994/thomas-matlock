import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css"; // using Home.module.css for uniform styling

const Skills = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Skills – Thomas Matlock</title>
        <meta name="description" content="Skills of Thomas Matlock" />
      </Head>
      <div className={styles.mainContent}>
        <div className={styles.content}>
          <h1 className={styles.introHeader}>Skills</h1>
          <p className={styles.description}>
            React, Next.js, .NET (ASP.NET Core, Razor), Azure, C#, JavaScript (ES6+), Node.js, SQL (PostgreSQL, SQL Server, MySQL), Entity Framework, Docker, CI/CD Pipelines, RESTful APIs, Cloud Computing, Automated Testing (Selenium)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
