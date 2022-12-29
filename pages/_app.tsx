import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { ComponentProps } from 'react'
import Typography from '../src/components/Typography'
import theme from '../src/theming/theme'
import '../styles/globals.css'

type TypographyNoVariantProps = Omit<ComponentProps<typeof Typography>, 'variant'>

const components = {
  img: (props: JSX.IntrinsicElements['img']) => <img {...props} alt={props.alt}>{props.children}</img>,
  h1: (props: TypographyNoVariantProps) => <Typography variant="h1">{props.children}</Typography>,
  h2: (props: TypographyNoVariantProps) => <Typography variant="h2">{props.children}</Typography>,
  h3: (props: TypographyNoVariantProps) => <Typography variant="h3">{props.children}</Typography>,
  p: (props: TypographyNoVariantProps) => <Typography variant="p">{props.children}</Typography>,
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  )
}
