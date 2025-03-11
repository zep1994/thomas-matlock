import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css"; // using same styling

const Contact = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact – Thomas Matlock</title>
        <meta name="description" content="Contact Thomas Matlock" />
      </Head>
      <div className={styles.mainContent}>
        <div className={styles.content}>
          <h1 className={styles.introHeader}>Contact</h1>
          <p className={styles.description}>
            Thomas Matlock<br />
            Email: thomasmatlockbba@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
