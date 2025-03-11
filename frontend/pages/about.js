import React from "react";
import Head from "next/head";
import styles from "../styles/About.module.css"; // using Home.module.css for consistent styling

const About = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About – Thomas Matlock</title>
        <meta name="description" content="About Thomas Matlock" />
      </Head>
      <div className={styles.mainContent}>
        <div className={styles.content}>
          <h1 className={styles.introHeader}>About Me</h1>
          <p className={styles.description}>
            My name is Thomas Matlock, and I am a results-driven full-stack developer specializing in creating scalable, high-performance applications using .NET, C#, JavaScript, React, Angular, and SQL. After venturing into entrepreneurship during my studies at Ole Miss, I deepened my technical skills through a scholarship at Flatiron School, and later worked professionally in both New York City and at Ergon in Mississippi.
            <br /><br />
            At Ergon, I developed enterprise-wide applications that streamlined critical business operations, improved user experience, and significantly reduced manual workloads by automating processes. I spearheaded the development of a Python-based analytics system to audit and analyze millions of SAP records, effectively identifying discrepancies and recovering substantial revenue annually. Additionally, I implemented workflow automation tools that increased processing speeds and reduced daily manual tasks.
            <br /><br />
            My combination of technical acumen and strong auditing practices (as a Certified Information Systems Auditor - CISA) enables me to deliver impactful solutions and foster productive team relationships.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
