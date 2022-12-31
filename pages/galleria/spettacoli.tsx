import { content } from '../../config/content'
import GalleryLayout from '../../src/layouts/GalleryLayout'

export const meta = content.galleries['spettacoli']

const SpettacoliPage = () => <GalleryLayout meta={meta} />

export default SpettacoliPage