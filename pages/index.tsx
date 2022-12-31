import React from 'react'
import { content, subPaths } from '../config/content'
import HomeLayout, { HomeLayoutMeta } from '../src/layouts/HomeLayout'

export const meta: HomeLayoutMeta = {
  title: content.home.title,
  links: Object.keys(content.galleries).map((key) => ({
    title: content.galleries[key].title ?? '',
    subtitle: content.galleries[key].subtitle ?? '',
    href: `${subPaths.galleries}/${key}`,
  })),
}

const Index: React.FC<{children: React.ReactNode}> = ({ children }) => <HomeLayout meta={meta}>{children}</HomeLayout>
export default Index