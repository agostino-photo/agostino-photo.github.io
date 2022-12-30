import { Stack } from '@mui/material'
import React from 'react'

export interface BaseLayoutMeta {
  title: string
}

interface Props {
  meta: BaseLayoutMeta,
  children?: React.ReactNode
}

const BaseLayout: React.FC<Props> = ({ children }) => {
  return (
    <Stack sx={{
      minHeight: "100vh",
    }}>
      {children}
    </Stack>
  )
}

export default BaseLayout