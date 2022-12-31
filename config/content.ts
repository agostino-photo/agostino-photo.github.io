
export interface PageData {
  title: string
}

export interface GalleryPageData extends PageData {
  subtitle?: string,
  photos: {
    title?: string,
    caption?: string,
    fileName: string,
  }[]
}

export interface ContentType {
  home: PageData,
  galleries: Record<string, GalleryPageData>
}


export const content: Readonly<ContentType> = {
  home: { 
    title: 'Agostino Photo Studio',
  },
  galleries: {
    primipiani: {
      title: 'Primipiani',
      subtitle: 'Le emozioni dei particolari',
      photos: [],
    },
    spettacoli: {
      title: 'Spettacoli',
      subtitle: 'La magia delle emozioni',
      photos: [
        {
          title: 'Ombrellini di Natale ad Iglesias',
          caption: 'Piccole lucine che ricordano i caratteristici ombrellini di Via Nuova.',
          fileName: 'ombrelli_iglesias.jpeg',
        },
        {
          title: 'Albero di Natale decorato',
          caption: '',
          fileName: 'albero_natale_decorato_2022.jpeg',
        },
      ],
    },
    natura: {
      title: 'Natura',
      subtitle: `Il fascino dell'incontaminato`,
      photos: [],
    },
  },
}

export const subPaths: Readonly<Record<string, string>> = {
  galleries: '/galleria',
}