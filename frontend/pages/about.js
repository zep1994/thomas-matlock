import React from "react";
import styles from "../styles/About.module.css";

const about = () => {
  return (
    <div className={styles.mainContainer}>
      <p className={styles.content}>
        My name is Thomas Matlock and I am an innovation and passionate full stack developer. got into coding after a taking a stab in the Entrepreneur world. 
        I later found myself with scholarship to Flatiron School where I graduated shortly after graduating from Ole Miss. I went on to work in New York Cty and then moved back and took a job at Ergon.
        <br />
        <br />
        During my previous role at Ergon, I provided hands-on applications that allowed the users to track parts, jobs, tasks, statistics, and other job and employee data. These apps are used throughout the company daily as part of everyday duties for employees. As part of my duties, I provided enhancements to the program and also provided immediate solutions to unexpected problems.
        <br />
        <br />
        When I was brought to design, build, and automate an auditing process for all of the accounting departments. I successfully created and implemented a fully automated process that provided exception reports to various departments. Due to my ability to use SQL, python, and various tools,  I was able to consistently locate duplicate payments, vendors, and invoices as just a few examples.
  
 
      </p>
    </div>
  );
};

export default about;
