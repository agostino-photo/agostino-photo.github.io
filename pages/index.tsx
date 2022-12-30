import React from 'react'
import HomeLayout, { HomeLayoutMeta } from '../src/layouts/HomeLayout'

export const meta: HomeLayoutMeta = {
  title: 'Agostino Photo Studio',
  links: [
    {
      title: 'Primipiani',
      subtitle: 'Le emozioni dei particolari',
      href: '/',
    },
    {
      title: 'Spettacoli',
      subtitle: 'La magia delle emozioni',
      href: '/spettacoli',
    },
    {
      title: 'Natura',
      subtitle: `Il fascino dell'incontaminato`,
      href: '/',
    },
  ],
}

const Index: React.FC<{children: React.ReactNode}> = ({ children }) => <HomeLayout meta={meta}>{children}</HomeLayout>
export default Index