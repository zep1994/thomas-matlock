import React from 'react'
import styles from '../styles/Portfolio.module.css'

const portfolio = () => {
    return (
    <div className={styles.container}>
        <main className={styles.main}>
        <h1 className={styles.title}>
            My Portfolio
        </h1>
            <br />
            <img src="/images/stewpot.png" className={styles.stewpot} />
            <br />
            <h3>Stewpot</h3>
            <img src="/images/cline.png" className={styles.cline} />
            <br />
            <img src="/images/cline_form.png" className={styles.cline} />
            <br />
            <h3>Cline Tours</h3>
            <img src="/images/mssm.png" className={styles.mssm} />
            <br />
            <img src="/images/mssmhome.png" className={styles.mssm} />
            <br />
            <h3>Mississippi Sport Medicine</h3>
            <br />
        </main>
    </div>
    )
}

export default portfolio