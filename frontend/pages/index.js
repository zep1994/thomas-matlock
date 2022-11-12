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
          <br />
          <hr />
          Contact me for Software or Audit needs
          <br />
          <hr />
          CISA Certified and Full Stack Develeper
          <hr />
          <br />
          thomasmatlockbba@gmail.com
        </h1>
      </main>

      <footer className={styles.footer}>
    
      </footer>
    </div>
  )
}
