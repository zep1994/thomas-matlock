import React from "react";
import styles from "../styles/About.module.css";

const about = () => {
  return (
    <div className={styles.main}>
      <p className={styles.content}>
  My name is Thomas Matlock, and I am a results-driven full-stack developer specializing in creating scalable, high-performance applications using .NET, C#, JavaScript, React, Angular, and SQL. After venturing into entrepreneurship during my studies at Ole Miss, I deepened my technical skills through a scholarship at Flatiron School, subsequently working professionally in both New York City and at Ergon in Mississippi.

  <br /><br />

  At Ergon, I developed enterprise-wide applications that streamlined critical business operations, improved user experience, and significantly reduced manual workloads by automating processes. I spearheaded the development of a Python-based analytics system to audit and analyze millions of SAP records, effectively identifying discrepancies and recovering substantial revenue annually. Additionally, I implemented workflow automation tools that increased processing speeds and reduced daily manual tasks, directly enhancing operational efficiency.

  <br /><br />

  My ability to combine technical acumen in software development with meticulous system auditing practices (as a Certified Information Systems Auditor - CISA) has consistently allowed me to deliver impactful solutions, foster productive relationships across teams, and drive meaningful improvements across organizational processes.
</p>

    </div>
  );
};

export default about;
