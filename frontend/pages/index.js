import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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
          Welcome to Thomas Matlock's Site!
          <br />
          Coming Soon
        </h1>
      </main>

      <footer className={styles.footer}>
    
      </footer>
    </div>
  )
}
