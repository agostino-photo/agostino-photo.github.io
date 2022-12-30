import GalleryLayout from '../../src/layouts/GalleryLayout'

export const meta = {
  title: 'Spettacoli',
  subtitle: 'La magia delle emozioni',
  photos: [
    {
      title: 'Ombrellini di Natale ad Iglesias',
      caption: 'Piccole lucine che ricordano i caratteristici ombrellini di Via Nuova.',
      fileName: 'ombrelli_iglesias.jpeg',
    },
    {
      title: 'Ombrellini di Natale ad Iglesias',
      caption: '',
      fileName: 'albero_natale_decorato_2022.jpeg',
    },
  ],
}

const SpettacoliPage = () => <GalleryLayout meta={meta} />

export default SpettacoliPage