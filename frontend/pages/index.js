import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thomas Matlock's Site</title>
        <meta name="description" content="Thomas Matlocks Personal Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          My name is Thomas Matlock
        </h1>
        <ul className={styles.navigation}>
          <li className={styles.navLi}><a href="/portfolio">Portfolio</a></li>
          <li className={styles.navLi}><a href="/https://github.com/zep1994">Github</a></li>
          <li className={styles.navLi}><a href="/about">About</a></li>
          <li className={styles.navLi}><a href="/contact">Contact</a></li>
        </ul>
      </main>
    </div>
  )
}
