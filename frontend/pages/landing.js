import React from "react";
import styles from "../styles/Landing.module.css";

const landing = () => {
    return (
        <div className={styles.mainContent}>
            <div className={styles.content}>
                {/* SECTION 1 */}
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

                {/* SECTION 2 */}
                <div className={styles.section2}>
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
                                <div className={styles.description}>
                                    hello
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.card} ${styles.darth}`}>
                            <div className={`${styles.face} ${styles.front}`}>
                                <h2>
                                <small>Analytics</small>
                                <br />
                                & Data Mining
                                </h2>
                            </div>
                            <div className={`${styles.face} ${styles.back}`}>
                                <div className={styles.description}>
                                    hello
                                </div>
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
                                <div className={styles.description}>
                                    helloo
                                </div>
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
                                <div className={styles.description}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default landing;
