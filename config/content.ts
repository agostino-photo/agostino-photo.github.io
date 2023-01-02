
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
      photos: [
        {
          title: 'Fiore con mosca',
          caption: '',
          fileName: 'fiore_con_mosca.jpeg',
        },
      ],
    },
    natura: {
      title: 'Natura',
      subtitle: `Il fascino dell'incontaminato`,
      photos: [
        {
          title: 'Fiore con mosca',
          caption: '',
          fileName: 'fiore_con_mosca.jpeg',
        },
        {
          title: 'Fungo e foglie autunnali',
          caption: '',
          fileName: 'fungo_e_foglie.jpeg',
        },
        {
          title: 'Spiaggia con palme',
          caption: '',
          fileName: 'spiaggia_con_palme.jpeg',
        },

        
      ],
    },
    tramonti: {
      title: 'Tramonti',
      subtitle: `Un classico instancabile`,
      photos: [
        {
          title: 'Tramonto sul colle',
          caption: '',
          fileName: 'tramonto_sul_colle.jpeg',
        },
      ],
      
    },
    still_life: {
      title: 'Still Life',
      subtitle: `La cattura di un istante`,
      photos: [
        {
          title: 'Fiore con mosca',
          caption: '',
          fileName: 'fiore_con_mosca.jpeg',
        },
      ],
    },
    fiori_e_piante: {
      title: 'Fiori & Piante',
      subtitle: `Semplici ma sempre unici`,
      photos: [
        {
          title: 'Fiore con mosca',
          caption: '',
          fileName: 'fiore_con_mosca.jpeg',
        },
      ],
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
        {
          title: 'Arredo urbano con archi',
          caption: '',
          fileName: 'arredo_urbano_archi.jpeg',
        },
        {
          title: 'Costruzione sul colle',
          caption: '',
          fileName: 'costruzione_sul_colle.jpeg',
        },
        {
          title: `Monumento in fontana d'autunno`,
          caption: '',
          fileName: 'monumento_fontana_autunno.jpeg',
        },
        {
          title: `Monumento fontana equestre`,
          caption: '',
          fileName: 'monumento_fontana_equestre.jpeg',
        },
        {
          title: `Monumento`,
          caption: '',
          fileName: 'monumento.jpeg',
        },
        {
          title: `Porticciuolo`,
          caption: '',
          fileName: 'porticciuolo.jpeg',
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
        {
          title: 'Piazza Lamarmora ad Iglesias con le luminarie',
          caption: '',
          fileName: 'iglesias_piazza_lamarmora_luminarie.jpeg',
        },
        {
          title: 'Luminarie ad Iglesias',
          caption: '',
          fileName: 'luminarie_iglesias.jpeg',
        },
        {
          title: 'Luminarie a forma di note musicali',
          caption: '',
          fileName: 'note_musicali_luminarie.jpeg',
        },
        {
          title: 'Piazzale',
          caption: '',
          fileName: 'pazzale.jpeg',
        },
        {
          title: 'Tunnel di luminarie ad Iglesias',
          caption: '',
          fileName: 'tunnel_luminarie.jpeg',
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