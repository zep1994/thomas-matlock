import React from 'react'
import styles from '../styles/Landing.module.css'

const landing = () => {
  return (
    <div className={styles.mainContent}>
        <div className={styles.contentLeft}>
            <div className={styles.img}>
                
            </div>
        </div>
        <div className={styles.contentRight}>
            <div className={styles.rightInfo}>
                <p>Thomas</p>
                <p>Matlock</p>
                <p>Full</p>
                <p>Stack</p>
                <p><strong>DEVELOPER</strong></p>
            </div>
            <svg className={styles.arrows}>
                <path class="a1" d="M0 0 L30 32 L60 0"></path>
                <path class="a2" d="M0 20 L30 52 L60 20"></path>
                <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
        </div>
    </div>
  )
}

export default landing