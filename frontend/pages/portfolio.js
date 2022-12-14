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
                <h3><a href="https://stewpot-frontend-ushg7.ondigitalocean.app/">Stewpot</a></h3>
                <p>Nextjs, Strapi, SQL, Node, HTML/CSS</p>
            </div>
            <div className={styles.card}>
                <img src="/images/cline.png" className={styles.cline} />
                <br />
                <img src="/images/cline_form.png" className={styles.cline} />
                <br />
                <h3><a href="https://clinetours-rk734.ondigitalocean.app/">Cline Tours</a></h3>
                <p>Nextjs, Strapi, SQL, Node, HTML/CSS</p>
            </div>
            <div className={styles.card}>
                <img src="/images/mssm.png" className={styles.mssm} />
                <br />
                <img src="/images/mssmhome.png" className={styles.mssm} />
                <br />
                <h3><a href="https://www.mississippisportsmedicine.com/">Mississippi Sport Medicine</a></h3>
                <p>Laravel, jQuery, SQL, HTML/CSS</p>
            </div>
            <div className={styles.card}>
                <br />
                <img src="/images/nucor.png" className={styles.nucor} />
                <br />
                <h3><a href="https://generalrecyclingms.com/">Nucor General Recycling</a></h3>
                <p>Laravel, jQuery, SQL, HTML/CSS</p>
            </div>
            <div className={styles.card}>
                <img src="/images/electric works.png" className={styles.electric} />
                <br />
                <h3><a href=""></a>Electric Works</h3>
                <p>Nextjs, Strapi, SQL, Node, HTML/CSS</p>
            </div>
            <div className={styles.card}>
                <img src="/images/adcock.png" className={styles.adcock} />
                <br />
                <img src="/images/adcocknews.png" className={styles.adcocknews} />
                <br />
                <h3><a href="https://adcockivison.com/">Adcock & Ivinson</a></h3>
                <p>Nextjs, Strapi, SQL, Node, HTML/CSS</p>
            </div>
            <div className={styles.card}>
                <img src="/images/french.png" className={styles.french} />
                <br />
                <h3><a href="https://frenchcamp.org/">French Camp Academy</a></h3>
                <p>Nextjs, Strapi, SQL, Node, HTML/CSS</p>
            </div>
            <div className={styles.card}>
                <img src="/images/jea.png" className={styles.mssm} />
                <br />
                <h3><a href="https://jacksoneye.com/">Jackson Eye Associates</a></h3>
                <p>Laravel, jQuery, SQL, HTML/CSS</p>
            </div>
            <div className={styles.card}>
                <br />
                <img src="/images/martins.png" className={styles.martins} />
                <br />
                <h3><a href="https://www.martinsdowntownjxn.com/">Martins Downtown Jackson</a></h3>
                <p>Laravel, jQuery, SQL, HTML/CSS</p>
            </div>
        </div>
    </div>
    )
}

export default portfolio