import { Stack } from '@mui/material'
import { Inter } from '@next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import BaseLayout from './BaseLayout'

const inter = Inter({ subsets: ['latin'] })

interface Props {
  meta: {
    title: string,
    links: {
      title: string,
      subtitle: string,
      href: string,
    }[]
  },
  children: React.ReactNode
}

const HomeLayout: React.FC<Props> = ({ meta }) => (
  <BaseLayout>
    <Stack sx={{
      minHeight: "100vh",
    }}>
      <p>Test</p>
    </Stack>
    <main className={styles.main}>
      <div className={styles.center}>
        <h1 className={inter.className}>{meta.title}</h1>
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
        {meta.links.map(({ title, subtitle, href }, index) => (
          <Link
            key={index}
            href={href}
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              {title} <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              {subtitle}
            </p>
          </Link>
        ))}
      </div>
    </main>
  </BaseLayout>
)

export default HomeLayout