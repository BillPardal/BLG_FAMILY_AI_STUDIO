import { Member, HistoryEvent, GalleryItem, Meeting } from './types';

export const MEMBERS: Member[] = [
  {
    id: '1',
    name: 'Ângelo Colautto x Luigia Licchin',
    role: 'PATRIARCAS',
    photo: 'https://picsum.photos/seed/patriarcas/400/400',
    bio: 'O casal pioneiro da família Colautto.',
    level: 'patriarcas',
    tags: ['Raízes']
  },
  {
    id: '2',
    name: 'Antonio Colautto',
    role: 'FILHO',
    spouse: 'Virgilina',
    level: 'filho',
    tags: ['1950']
  },
  {
    id: '3',
    name: 'Amabilie Colautto',
    role: 'FILHA',
    spouse: 'Jose Romagnoli',
    photo: 'https://picsum.photos/seed/amabilie/400/400',
    level: 'filha'
  },
  {
    id: '4',
    name: 'Angelina Colautto',
    role: 'FILHA',
    spouse: 'João Colautto (primo)',
    level: 'filha'
  },
  {
    id: '5',
    name: 'Josefina Colautto',
    role: 'FILHA',
    spouse: 'Bortolomeu Caldardo',
    level: 'filha'
  },
  {
    id: '6',
    name: 'Ângelo Colautto Filho',
    role: 'FILHO',
    spouse: 'Angelina Caldardo',
    level: 'filho'
  },
  {
    id: '7',
    name: 'Jose Colautto',
    role: 'FILHO',
    spouse: 'Emma Bertassi',
    bio: 'Ramo familiar de Jose e Emma.',
    level: 'filho'
  },
  {
    id: '8',
    name: 'Nelson Colautto',
    role: 'NETO',
    spouse: 'Lourdes Barros',
    level: 'neto'
  },
  {
    id: '9',
    name: 'Leonilda Colautto',
    role: 'NETA',
    spouse: 'Victoriano Martins',
    level: 'neto'
  },
  {
    id: '10',
    name: 'Anaite Colautto',
    role: 'NETA',
    spouse: 'Orlando de Souza Nogueira',
    level: 'neto'
  },
  {
    id: '11',
    name: 'Irma Colautto',
    role: 'NETA',
    spouse: 'Dirceu de Almeida',
    level: 'neto'
  },
  {
    id: '12',
    name: 'Geraldo Colautto',
    role: 'NETO',
    spouse: 'Filomena Antunes',
    level: 'neto'
  },
  {
    id: '13',
    name: 'Angelino Colautto',
    role: 'NETO',
    spouse: 'Vera Lucia Pereira',
    photo: 'https://picsum.photos/seed/angelino/400/400',
    bio: 'Pai de Débora, Luiz e Jonatas.',
    level: 'neto'
  },
  {
    id: '14',
    name: 'Maria Augusta Colautto',
    role: 'NETA',
    spouse: 'Nelson de Souza Nogueira',
    level: 'neto'
  },
  {
    id: '15',
    name: 'Roberto Colautto',
    role: 'NETO',
    spouse: 'Nilce Martins',
    level: 'neto'
  },
  {
    id: '16',
    name: 'José Celio Colautto',
    role: 'NETO',
    spouse: 'Marlene Ricardi',
    level: 'neto'
  },
  {
    id: '17',
    name: 'Débora Colautto',
    role: 'BISNETA',
    spouse: 'Marcelo Antonio Aragão',
    level: 'bisneto'
  },
  {
    id: '18',
    name: 'Luiz Eduardo Colautto',
    role: 'BISNETO',
    photo: 'https://picsum.photos/seed/luiz/400/400',
    level: 'bisneto'
  },
  {
    id: '19',
    name: 'Jonatas Jose Colautto',
    role: 'BISNETO',
    spouse: 'Camila Rizzardi',
    level: 'bisneto'
  }
];

export const HISTORY: HistoryEvent[] = [
  {
    year: 1860,
    title: 'Porto Gruaro - Itália',
    location: 'Itália',
    description: 'Tudo começou com meus avós paternos, Angelo Colautto e Luiza Lucchini. Ambos nasceram em Porto Gruaro, na Itália - ele em 12/12/1860 e ela em 07/09/1864. Casaram-se em 1886 e, em 1895, decidiram deixar a vida precária que levavam para buscar prosperidade...',
    image: 'https://picsum.photos/seed/italy/800/600'
  },
  {
    year: 1895,
    title: 'Viagem para o Brasil (chegada em Santos)',
    location: 'Santos, Brasil',
    description: 'Angelo e Luiza, casados em 24/11/1886, decidiram em 1895 vir morar na América do Sul, especialmente no Brasil onde havia perspectiva de uma vida futura promissora, uma vez que na Itália viviam em situações precárias e não viam futuro melhor pela frente...',
    image: 'https://picsum.photos/seed/ship/800/600'
  },
  {
    year: 1895,
    title: 'Hospedaria dos Imigrantes - (Brás - São Paulo)',
    location: 'São Paulo, Brasil',
    description: 'A Hospedaria dos Imigrantes, que funcionou durante 91 anos como a antiga Hospedaria de Imigrantes da Capital, foi construída entre 1886 e 1888, para receber pessoas de mais de 70 nacionalidades - na maioria europeus e asiáticos - que chegavam em navios a Santos...',
    image: 'https://picsum.photos/seed/hospedaria/800/600'
  },
  {
    year: 1896,
    title: 'Botucatu - (Ida para o interior de São Paulo)',
    location: 'Botucatu, Brasil',
    description: 'Da chegada em Santos foram enviados para o interior de São Paulo, pela ferrovia foram para o município de Botucatu e lá foram recebidos por representantes do proprietário da fazenda Boa Vista, para onde foram levados, as mulheres e crianças em carroças e os homens a pé...',
    image: 'https://picsum.photos/seed/botucatu/800/600'
  },
  {
    year: 1900,
    title: 'Fazenda Boa vista - Botucatu',
    location: 'Botucatu, Brasil',
    description: 'A vida na fazenda (Filhos e Trabalho). Começaram a se adaptar à vida da fazenda onde nasceram os demais filhos, sendo eles os seguintes, Antônio e Amábile que vieram da Itália, Angelina, Josefina, Ângelo Filho...',
    image: 'https://picsum.photos/seed/fazenda/800/600'
  }
];

export const GALLERY: GalleryItem[] = [
  { id: 'g1', title: 'Amabile Colautto e ...', year: '1935', category: 'pessoas', image: 'https://picsum.photos/seed/g1/400/500' },
  { id: 'g2', title: 'Angelo Colautto Fil...', year: '1935', category: 'pessoas', image: 'https://picsum.photos/seed/g2/400/500' },
  { id: 'g3', title: 'Mapa das estradas ...', year: '1900', category: 'documentos', image: 'https://picsum.photos/seed/g3/400/500' },
  { id: 'g4', title: 'Casa do Imigrante - ...', year: '2007', category: 'local', image: 'https://picsum.photos/seed/g4/400/500' },
  { id: 'g5', title: 'Casa do Imigrante - ...', year: '2007', category: 'local', image: 'https://picsum.photos/seed/g5/400/500' },
  { id: 'g6', title: 'Certidão de registro...', year: '1938', category: 'documentos', image: 'https://picsum.photos/seed/g6/400/500' },
  { id: 'g7', title: 'Certidão de registro...', year: '1942', category: 'documentos', image: 'https://picsum.photos/seed/g7/400/500' },
  { id: 'g8', title: 'Passaporte Italiano', year: '1895', category: 'documentos', image: 'https://picsum.photos/seed/g8/400/500' },
  { id: 'g9', title: 'Certidão de casame...', year: '2026-02-23', category: 'documentos', image: 'https://picsum.photos/seed/g9/400/500' },
  { id: 'g10', title: 'Documento de Salv...', year: '1943', category: 'documentos', image: 'https://picsum.photos/seed/g10/400/500' },
  { id: 'g11', title: 'Jose Colautto e fam...', year: '1940', category: 'pessoas', image: 'https://picsum.photos/seed/g11/400/500' },
  { id: 'g12', title: 'Angelo Colautto e F...', year: '1900', category: 'pessoas', image: 'https://picsum.photos/seed/g12/400/500' },
  { id: 'g13', title: 'Angelino Colautto ...', year: '1960', category: 'pessoas', image: 'https://picsum.photos/seed/g13/400/500' },
  { id: 'g14', title: 'fazenda', year: '1930', category: 'local', image: 'https://picsum.photos/seed/g14/400/500' },
  { id: 'g15', title: 'Replica Maria Fum...', year: '1900', category: 'eventos', image: 'https://picsum.photos/seed/g15/400/500' }
];

export const MEETINGS: Meeting[] = [
  {
    id: 'm1',
    title: 'Reunião Anual 2024',
    date: '14/07/2024',
    description: 'Encontro tradicional da família para celebrar nossa união e história.',
    image: 'https://picsum.photos/seed/meeting1/600/400'
  }
];
