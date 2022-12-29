import React from 'react'

const BaseLayout: React.FC<{children: React.ReactNode}> = ({children}) => (
  <div style={{backgroundColor: 'red'}}>
    {children}
  </div>
)

export default BaseLayout