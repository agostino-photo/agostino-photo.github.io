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
  zIndex: -1,
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
          height: '75%',
          ...blurredBlueGradientBG,
          ...pseudoBackgroundStyle,
        },
        ['&:before']: {
          borderRadius: '50%',
          width: '80%',
          height: '90%',
          marginLeft: '-45vw',
          ...blurredBlueGradientBG,
          ...pseudoBackgroundStyle,
        },
      }}
    >
      <Stack 
        width="100%" 
        height="100%" 
        maxWidth="1200px"
        marginX="auto" 
        flexGrow={1} 
        marginBottom="2.5rem"
        marginTop="1rem"
      >
        {children}
      </Stack>
    </Stack>
  )
}

export default BaseLayout