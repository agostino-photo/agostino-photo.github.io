import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Agostino Photo Studio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1 className={inter.className}>Agostino Photo Studio</h1>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <Link
            href="/"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Primipiani <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Le emozioni dei particolari
            </p>
          </Link>
          <Link
            href="/"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Paesaggi <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Tutto intorno a noi
            </p>
          </Link>
          <Link
            href="/"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Natura <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              {`Il fascino dell'incontaminato`}
            </p>
          </Link>
        </div>
      </main>
    </>
  )
}
