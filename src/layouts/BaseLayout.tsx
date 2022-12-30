import { CSSObject, Stack } from '@mui/material'
import React from 'react'
import { blurredBlueGradientBG } from '../../styles/effects'

export interface BaseLayoutMeta {
  title: string
}

interface Props {
  meta: BaseLayoutMeta,
  children?: React.ReactNode
}

const pseudoBackgroundStyle: CSSObject = {
  borderRadius: '50%',
  content: '""',
  left: '50%',
  position: 'absolute',
  transform: 'translateZ(0)',
}

const BaseLayout: React.FC<Props> = ({ children }) => {
  return (
    <Stack minHeight='100vh'
      sx={{
        ['&:after']: {
          width: '50%',
          height: '35%',
          zIndex: -1,
          ...blurredBlueGradientBG,
          ...pseudoBackgroundStyle,
        },
        ['&:before']: {
          borderRadius: '50%',
          width: '80%',
          height: '25%',
          marginLeft: '-45vw',
          ...blurredBlueGradientBG,
          ...pseudoBackgroundStyle,
        },
      }}
    >
      {children}
    </Stack>
  )
}

export default BaseLayout