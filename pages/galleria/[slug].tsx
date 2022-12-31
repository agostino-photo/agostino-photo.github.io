import { useRouter } from 'next/router'
import { content } from '../../config/content'
import GalleryLayout from '../../src/layouts/GalleryLayout'

export 

const SpettacoliPage = () => {
  const router = useRouter()
  const { slug } = router.query
  
  if (!slug) {
    return null
  }

  const meta = content.galleries[slug as string]

  return <GalleryLayout meta={meta} />
}

export default SpettacoliPage