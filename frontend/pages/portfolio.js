import React from 'react'
import styles from '../styles/Portfolio.module.css'

const portfolio = () => {
    return (
    <div className={styles.container}>
        <h1 className={styles.title}>
            My Portfolio
        </h1>
        <div className={styles.sites}>
            <div className={styles.card}>
                <img src="/images/stewpot.png" className={styles.stewpot} />
                <br />
                <h3>Stewpot</h3>
                <p>Nextjs, Strapi, SQL, Node, HTML/CSS</p>
            </div>
            <div className={styles.card}>
                <img src="/images/cline.png" className={styles.cline} />
                <br />
                <img src="/images/cline_form.png" className={styles.cline} />
                <br />
                <h3>Cline Tours</h3>
                <p>Nextjs, Strapi, SQL, Node, HTML/CSS</p>
            </div>
            <div className={styles.card}>
                <img src="/images/mssm.png" className={styles.mssm} />
                <br />
                <img src="/images/mssmhome.png" className={styles.mssm} />
                <br />
                <h3>Mississippi Sport Medicine</h3>
                <p>Laravel, jQuery, SQL, HTML/CSS</p>
            </div>
            <div className={styles.card}>
                <br />
                <img src="/images/nucor.png" className={styles.nucor} />
                <br />
                <h3>Nucor General Recycling</h3>
                <p>Laravel, jQuery, SQL, HTML/CSS</p>

            </div>
        </div>
    </div>
    )
}

export default portfolio