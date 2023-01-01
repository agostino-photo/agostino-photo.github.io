
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
      title: 'Primipiani & Ritratti',
      subtitle: 'Le emozioni dei particolari',
      photos: [],
    },
    natura: {
      title: 'Natura',
      subtitle: `Il fascino dell'incontaminato`,
      photos: [],
    },
    tramonti: {
      title: 'Tramonti',
      subtitle: `Un classico instancabile`,
      photos: [],
    },
    still_life: {
      title: 'Still Life',
      subtitle: `La cattura di un istante`,
      photos: [],
    },
    fiori_e_piante: {
      title: 'Fiori & Piante',
      subtitle: `Semplici ma sempre unici`,
      photos: [],
    },
    paesi_e_citta: {
      title: 'Paesi & Città',
      subtitle: `Angoli e scorci dei nostri luoghi`,
      photos: [
        {
          title: 'Momenti di convivialità',
          caption: '',
          fileName: 'momenti_di_convivialita.jpeg',
        },
        {
          title: 'Ufficio Turistico',
          caption: '',
          fileName: 'ufficio_turistico.jpeg',
        },
        {
          title: 'La piazza',
          caption: '',
          fileName: 'la_piazza.jpeg',
        },
      ],
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
    bianco_e_nero: {
      title: 'Bianco e Nero',
      subtitle: `Il chiaroscuro che esalta i dettagli`,
      photos: [],
    },
  },
}

export const subPaths: Readonly<Record<string, string>> = {
  galleries: '/galleria',
}