import { Stack, Typography } from '@mui/material'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import BaseLayout, { BaseLayoutMeta } from './BaseLayout'

export interface HomeLayoutMeta extends BaseLayoutMeta {
  links: {
    title: string,
    subtitle: string,
    href: string,
  }[]
}

interface Props {
  meta: HomeLayoutMeta
  children: React.ReactNode
}

const HomeLayout: React.FC<Props> = ({ meta }) => (
  <BaseLayout meta={meta}>
    <Stack paddingY={2}>
      <Typography variant='h1' textAlign="center">
        {meta.title}
      </Typography>
    </Stack>
    <Stack 
      flex={1}
      // sx={{
      //   background: `conic-gradient(
      //     from 180deg at 50% 50%,
      //     #16abff33 0deg,
      //     #0885ff33 55deg,
      //     #54d6ff33 120deg,
      //     #0071ff33 160deg,
      //     transparent 360deg
      //   );`,
      //   filter: 'blur(45px)',
      // }}
    ></Stack>
    <Stack>
      {meta.links.map(({ title, subtitle, href }, index) => (
        <Link
          key={index}
          href={href}
          className={styles.card}
          rel="noopener noreferrer"
        >
          <Typography variant='h5'>
            {title} <span>-&gt;</span>
          </Typography>
          <Typography variant='subtitle2'>
            {subtitle}
          </Typography>
        </Link>
      ))}
    </Stack>
  </BaseLayout>
)

export default HomeLayout