import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import Image from 'next/image'
import Typography from '../src/components/Tipography'
import React, {ComponentProps} from 'react'

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
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
