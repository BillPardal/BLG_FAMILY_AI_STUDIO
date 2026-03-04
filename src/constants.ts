import { Member, HistoryEvent, GalleryItem, Meeting } from './types';

export const MEMBERS: Member[] = [
  {
    id: '1',
    name: 'Ângelo Colautto x Luigia Licchin',
    role: { PT: 'PATRIARCAS', EN: 'PATRIARCHS', ITA: 'PATRIARCHI' },
    photo: 'https://picsum.photos/seed/patriarcas/400/400',
    bio: { 
      PT: 'O casal pioneiro da família Colautto.', 
      EN: 'The pioneer couple of the Colautto family.', 
      ITA: 'La coppia pioniera della famiglia Colautto.' 
    },
    level: 'patriarcas',
    tags: { PT: ['Raízes'], EN: ['Roots'], ITA: ['Radici'] }
  },
  {
    id: '2',
    name: 'Antonio Colautto',
    role: { PT: 'FILHO', EN: 'SON', ITA: 'FIGLIO' },
    spouse: 'Virgilina',
    level: 'filho',
    tags: { PT: ['1950'], EN: ['1950'], ITA: ['1950'] }
  },
  {
    id: '3',
    name: 'Amabilie Colautto',
    role: { PT: 'FILHA', EN: 'DAUGHTER', ITA: 'FIGLIA' },
    spouse: 'Jose Romagnoli',
    photo: 'https://picsum.photos/seed/amabilie/400/400',
    level: 'filha',
    bio: { PT: '', EN: '', ITA: '' },
    tags: { PT: [], EN: [], ITA: [] }
  },
  {
    id: '4',
    name: 'Angelina Colautto',
    role: { PT: 'FILHA', EN: 'DAUGHTER', ITA: 'FIGLIA' },
    spouse: 'João Colautto (primo)',
    level: 'filha',
    bio: { PT: '', EN: '', ITA: '' },
    tags: { PT: [], EN: [], ITA: [] }
  },
  {
    id: '5',
    name: 'Josefina Colautto',
    role: { PT: 'FILHA', EN: 'DAUGHTER', ITA: 'FIGLIA' },
    spouse: 'Bortolomeu Caldardo',
    level: 'filha',
    bio: { PT: '', EN: '', ITA: '' },
    tags: { PT: [], EN: [], ITA: [] }
  },
  {
    id: '6',
    name: 'Ângelo Colautto Filho',
    role: { PT: 'FILHO', EN: 'SON', ITA: 'FIGLIO' },
    spouse: 'Angelina Caldardo',
    level: 'filho',
    bio: { PT: '', EN: '', ITA: '' },
    tags: { PT: [], EN: [], ITA: [] }
  },
  {
    id: '7',
    name: 'Jose Colautto',
    role: { PT: 'FILHO', EN: 'SON', ITA: 'FIGLIO' },
    spouse: 'Emma Bertassi',
    bio: { 
      PT: 'Ramo familiar de Jose e Emma.', 
      EN: 'Family branch of Jose and Emma.', 
      ITA: 'Ramo familiare di Jose ed Emma.' 
    },
    level: 'filho',
    tags: { PT: [], EN: [], ITA: [] }
  },
  {
    id: '8',
    name: 'Nelson Colautto',
    role: { PT: 'NETO', EN: 'GRANDSON', ITA: 'NIPOTE' },
    spouse: 'Lourdes Barros',
    level: 'neto',
    bio: { PT: '', EN: '', ITA: '' },
    tags: { PT: [], EN: [], ITA: [] }
  },
  {
    id: '9',
    name: 'Leonilda Colautto',
    role: { PT: 'NETA', EN: 'GRANDDAUGHTER', ITA: 'NIPOTE' },
    spouse: 'Victoriano Martins',
    level: 'neto',
    bio: { PT: '', EN: '', ITA: '' },
    tags: { PT: [], EN: [], ITA: [] }
  },
  {
    id: '10',
    name: 'Anaite Colautto',
    role: { PT: 'NETA', EN: 'GRANDDAUGHTER', ITA: 'NIPOTE' },
    spouse: 'Orlando de Souza Nogueira',
    level: 'neto',
    bio: { PT: '', EN: '', ITA: '' },
    tags: { PT: [], EN: [], ITA: [] }
  },
  {
    id: '11',
    name: 'Irma Colautto',
    role: { PT: 'NETA', EN: 'GRANDDAUGHTER', ITA: 'NIPOTE' },
    spouse: 'Dirceu de Almeida',
    level: 'neto',
    bio: { PT: '', EN: '', ITA: '' },
    tags: { PT: [], EN: [], ITA: [] }
  },
  {
    id: '12',
    name: 'Geraldo Colautto',
    role: { PT: 'NETO', EN: 'GRANDSON', ITA: 'NIPOTE' },
    spouse: 'Filomena Antunes',
    level: 'neto',
    bio: { PT: '', EN: '', ITA: '' },
    tags: { PT: [], EN: [], ITA: [] }
  },
  {
    id: '13',
    name: 'Angelino Colautto',
    role: { PT: 'NETO', EN: 'GRANDSON', ITA: 'NIPOTE' },
    spouse: 'Vera Lucia Pereira',
    photo: 'https://picsum.photos/seed/angelino/400/400',
    bio: { 
      PT: 'Pai de Débora, Luiz e Jonatas.', 
      EN: 'Father of Débora, Luiz, and Jonatas.', 
      ITA: 'Padre di Débora, Luiz e Jonatas.' 
    },
    level: 'neto',
    tags: { PT: [], EN: [], ITA: [] }
  },
  {
    id: '14',
    name: 'Maria Augusta Colautto',
    role: { PT: 'NETA', EN: 'GRANDDAUGHTER', ITA: 'NIPOTE' },
    spouse: 'Nelson de Souza Nogueira',
    level: 'neto',
    bio: { PT: '', EN: '', ITA: '' },
    tags: { PT: [], EN: [], ITA: [] }
  },
  {
    id: '15',
    name: 'Roberto Colautto',
    role: { PT: 'NETO', EN: 'GRANDSON', ITA: 'NIPOTE' },
    spouse: 'Nilce Martins',
    level: 'neto',
    bio: { PT: '', EN: '', ITA: '' },
    tags: { PT: [], EN: [], ITA: [] }
  },
  {
    id: '16',
    name: 'José Celio Colautto',
    role: { PT: 'NETO', EN: 'GRANDSON', ITA: 'NIPOTE' },
    spouse: 'Marlene Ricardi',
    level: 'neto',
    bio: { PT: '', EN: '', ITA: '' },
    tags: { PT: [], EN: [], ITA: [] }
  },
  {
    id: '17',
    name: 'Débora Colautto',
    role: { PT: 'BISNETA', EN: 'GREAT-GRANDDAUGHTER', ITA: 'BISNIPOTE' },
    spouse: 'Marcelo Antonio Aragão',
    level: 'bisneto',
    bio: { PT: '', EN: '', ITA: '' },
    tags: { PT: [], EN: [], ITA: [] }
  },
  {
    id: '18',
    name: 'Luiz Eduardo Colautto',
    role: { PT: 'BISNETO', EN: 'GREAT-GRANDSON', ITA: 'BISNIPOTE' },
    photo: 'https://picsum.photos/seed/luiz/400/400',
    level: 'bisneto',
    bio: { PT: '', EN: '', ITA: '' },
    tags: { PT: [], EN: [], ITA: [] }
  },
  {
    id: '19',
    name: 'Jonatas Jose Colautto',
    role: { PT: 'BISNETO', EN: 'GREAT-GRANDSON', ITA: 'BISNIPOTE' },
    spouse: 'Camila Rizzardi',
    level: 'bisneto',
    bio: { PT: '', EN: '', ITA: '' },
    tags: { PT: [], EN: [], ITA: [] }
  }
];

export const HISTORY: HistoryEvent[] = [
  {
    year: 1860,
    title: { PT: 'Porto Gruaro - Itália', EN: 'Porto Gruaro - Italy', ITA: 'Portogruaro - Italia' },
    location: { PT: 'Itália', EN: 'Italy', ITA: 'Italia' },
    description: { 
      PT: 'Tudo começou com meus avós paternos, Angelo Colautto e Luiza Lucchini. Ambos nasceram em Porto Gruaro, na Itália — ele em 12/12/1860 e ela em 07/09/1864. Casaram-se em 1886 e, em 1895, decidiram deixar a vida precária que levavam para buscar prosperidade no Brasil.',
      EN: 'It all began with my paternal grandparents, Angelo Colautto and Luiza Lucchini. Both were born in Portogruaro, Italy — he on 12/12/1860 and she on 07/09/1864. They married in 1886 and, in 1895, decided to leave the precarious life they led to seek prosperity in Brazil.',
      ITA: 'Tutto ebbe inizio con i miei nonni paterni, Angelo Colautto e Luiza Lucchini. Entrambi nati a Portogruaro, in Italia — lui il 12/12/1860 e lei il 07/09/1864. Si sposarono nel 1886 e, nel 1895, decisero di lasciare la vita precaria che conducevano per cercare prosperità in Brasile.'
    },
    image: 'https://lh3.googleusercontent.com/d/1oB3WBAwygo7dYQUe33ASqQEWhy4zLJrL'
  },
  {
    year: 1895,
    title: { PT: 'Viagem para o Brasil (chegada em Santos)', EN: 'Voyage to Brazil (Arrival in Santos)', ITA: 'Viaggio in Brasile (Arrivo a Santos)' },
    location: { PT: 'Santos, Brasil', EN: 'Santos, Brazil', ITA: 'Santos, Brasile' },
    description: { 
      PT: 'A viagem foi longa e difícil. Em 24 de fevereiro de 1895, desembarcaram no Porto de Santos trazendo dois filhos pequenos: Antônio, de 5 anos, e Ambile, de 2 anos.',
      EN: 'The journey was long and difficult. On February 24, 1895, they disembarked at the Port of Santos bringing two young children: Antônio, aged 5, and Ambile, aged 2.',
      ITA: 'Il viaggio è stato lungo e difficile. Il 24 febbraio 1895, sbarcarono al Porto di Santos portando due figli piccoli: Antônio, di 5 anni, e Ambile, di 2 anni.'
    },
    image: 'https://lh3.googleusercontent.com/d/1EBg5PcidfwaGcPlFxjKCMfm8yf9anstM'
  },
  {
    year: 1895,
    title: { PT: 'Hospedaria dos Imigrantes - (Brás - São Paulo)', EN: 'Immigrant Hostel - (Brás - São Paulo)', ITA: 'Ostello degli Immigrati - (Brás - San Paolo)' },
    location: { PT: 'São Paulo, Brasil', EN: 'São Paulo, Brazil', ITA: 'San Paolo, Brasile' },
    description: { 
      PT: 'O prédio, que funcionou durante 91 anos como a antiga Hospedaria de Imigrantes da Capital, foi construído entre 1886 e 1888, para receber pessoas de mais de 70 nacionalidades – na maioria europeus e asiáticos - que chegavam em navios a Santos para tentar a vida em um novo país. Sem dinheiro para custear a travessia dos oceanos, muitos enfrentavam até 60 dias na terceira classe dos navios, em porões, única condição em que o Governo do Estado de São Paulo concedia as passagens gratuitamente. Após o desembarque, os imigrantes eram colocados em um trem no próprio porto com destino à Hospedaria, que possuía uma estação ferroviária construída especialmente para esse fim. Caso o horário do trem não coincidisse com a chegada dos estrangeiros, estes podiam ficar apenas por uma noite na Hospedaria de Santos, providencialmente desconfortável, para que os recém-chegados não se acomodassem.',
      EN: 'The building, which operated for 91 years as the former Immigrant Hostel of the Capital, was built between 1886 and 1888 to receive people of more than 70 nationalities – mostly Europeans and Asians - who arrived in ships at Santos to try their luck in a new country. Without money to pay for the ocean crossing, many faced up to 60 days in the third class of the ships, in holds, the only condition in which the Government of the State of São Paulo granted free passages. After disembarking, the immigrants were placed on a train at the port itself destined for the Hostel, which had a railway station built especially for this purpose. If the train schedule did not coincide with the arrival of the foreigners, they could stay for only one night at the Santos Hostel, providentially uncomfortable, so that the newcomers would not settle in.',
      ITA: 'L\'edificio, che ha funzionato per 91 anni come l\'ex Ostello degli Immigrati della Capitale, è stato costruito tra il 1886 e il 1888 per accogliere persone di oltre 70 nazionalità – per lo più europei e asiatici - che arrivavano su navi a Santos per tentare la fortuna in un nuovo paese. Senza soldi per pagare la traversata oceanica, molti affrontavano fino a 60 giorni nella terza classe delle navi, nelle stive, l\'unica condizione in cui il Governo dello Stato di San Paolo concedeva i passaggi gratuitamente. Dopo lo sbarco, gli immigrati venivano messi su un treno nel porto stesso diretto all\'Ostello, che aveva una stazione ferroviaria costruita appositamente per questo scopo. Se l\'orario del treno non coincideva con l\'arrivo degli stranieri, questi potevano rimanere solo per una notte nell\'Ostello di Santos, provvidenzialmente scomodo, affinché i nuovi arrivati non si sistemassero.'
    },
    image: 'https://lh3.googleusercontent.com/d/1Xl6oqUKdInZhN0wdnOGX9Wp4QAcdwFZI'
  },
  {
    year: 1896,
    title: { PT: 'Botucatu - (Ida para o interior de São Paulo)', EN: 'Botucatu - (Journey to the Interior of São Paulo)', ITA: 'Botucatu - (Viaggio nell\'Interno di San Paolo)' },
    location: { PT: 'Botucatu, Brasil', EN: 'Botucatu, Brazil', ITA: 'Botucatu, Brasile' },
    description: { 
      PT: 'Após os cuidados na Hospedaria, o destino foi o município de Botucatu. Fomos recebidos por representantes da Fazenda Boa Vista. A jornada final de 20 quilômetros foi feita com mulheres e crianças em carroças e os homens a pé. Naquela época, o tratamento dado aos imigrantes não era muito diferente do que recebiam os escravos recém-libertados.',
      EN: 'After the care at the Hostel, the destination was the municipality of Botucatu. We were received by representatives of Fazenda Boa Vista. The final 20-kilometer journey was made with women and children in wagons and the men on foot. At that time, the treatment given to immigrants was not much different from what newly freed slaves received.',
      ITA: 'Dopo le cure all\'Ostello, la destinazione è stata il comune di Botucatu. Siamo stati ricevuti dai rappresentanti della Fazenda Boa Vista. L\'ultimo viaggio di 20 chilometri è stato fatto con donne e bambini in carri e gli uomini a piedi. A quel tempo, il trattamento riservato agli immigrati non era molto diverso da quello che ricevevano gli schiavi appena liberati.'
    },
    image: 'https://lh3.googleusercontent.com/d/1T6N4xzcvgEjMNwRdgMsNRxzZpBj_Ng1M'
  },
  {
    year: 1900,
    title: { PT: 'Fazenda Boa vista - Botucatu', EN: 'Boa Vista Farm - Botucatu', ITA: 'Fattoria Boa Vista - Botucatu' },
    location: { PT: 'Botucatu, Brasil', EN: 'Botucatu, Brazil', ITA: 'Botucatu, Brasile' },
    description: { 
      PT: 'A vida na fazenda (Filhos e Trabalho). Começaram a se adaptar à vida da fazenda onde nasceram os demais filhos. Com o tempo e muito trabalho árduo, nasceram os outros filhos no Brasil: Angelina, Josefina, Ângelo Filho (Joanim) e José (Bepinho), meu pai, que nasceu em 28/11/1907.',
      EN: 'Life on the farm (Children and Work). They began to adapt to farm life where the other children were born. Over time and with much hard work, the other children were born in Brazil: Angelina, Josefina, Ângelo Filho (Joanim), and José (Bepinho), my father, who was born on 11/28/1907.',
      ITA: 'La vita in fattoria (Figli e Lavoro). Cominciarono ad adattarsi alla vita di fattoria dove nacquero gli altri figli. Con il tempo e molto duro lavoro, nacquero gli altri figli in Brasile: Angelina, Josefina, Ângelo Filho (Joanim) e José (Bepinho), mio padre, nato il 28/11/1907.'
    },
    image: 'https://lh3.googleusercontent.com/d/1Mvb34eAOZnc5TcwMzV10U6-3jL2G1QWv'
  },
  {
    year: 1931,
    title: { PT: 'Sítio Bela Vista e a Criação da Família - Botucatu', EN: 'Bela Vista Farm and Family Building - Botucatu', ITA: 'Fattoria Bela Vista e Creazione della Famiglia - Botucatu' },
    location: { PT: 'Botucatu, Brasil', EN: 'Botucatu, Brazil', ITA: 'Botucatu, Brasile' },
    description: { 
      PT: 'Com as economias de anos de suor, meu avô comprou uma gleba de terra que desmatou para plantar café, fundando o Sítio Bela Vista. Meu pai, Bepinho, casou-se com Emma Bertassi em 12/12/1931 e foram morar no sítio com os pais dele. Foi um choque cultural para minha mãe, pois a família só falava italiano e só plantava café; ela foi quem introduziu hortaliças, galinhas e alimentos como mandioca e batata-doce na rotina da casa.\nNós éramos nove irmãos: Nelson, Leonilda, Anaite, Irma, Geraldo, eu (Angelino), Maria Augusta, Roberto e José Célio. Nasci em 13/08/1942, apenas 24 horas após a morte do meu avô Angelo. Minha avó Luiza, a "Nona", foi a parteira de todos nós e de muitos vizinhos da região.',
      EN: 'With the savings from years of sweat, my grandfather bought a plot of land that he cleared to plant coffee, founding Sítio Bela Vista. My father, Bepinho, married Emma Bertassi on 12/12/1931 and they went to live on the farm with his parents. It was a cultural shock for my mother, as the family only spoke Italian and only planted coffee; she was the one who introduced vegetables, chickens, and foods like cassava and sweet potatoes into the household routine.\nWe were nine siblings: Nelson, Leonilda, Anaite, Irma, Geraldo, me (Angelino), Maria Augusta, Roberto, and José Célio. I was born on 08/13/1942, just 24 hours after the death of my grandfather Angelo. My grandmother Luiza, the "Nona," was the midwife for all of us and for many neighbors in the region.',
      ITA: 'Con i risparmi di anni di sudore, mio nonno comprò un appezzamento di terra che disboscò per piantare caffè, fondando il Sítio Bela Vista. Mio padre, Bepinho, sposò Emma Bertassi il 12/12/1931 e andarono a vivere nella fattoria con i suoi genitori. Fu uno shock culturale per mia madre, poiché la famiglia parlava solo italiano e piantava solo caffè; fu lei a introdurre ortaggi, galline e alimenti come manioca e patate dolci nella routine domestica.\nEravamo nove fratelli: Nelson, Leonilda, Anaite, Irma, Geraldo, io (Angelino), Maria Augusta, Roberto e José Célio. Sono nato il 13/08/1942, appena 24 ore dopo la morte di mio nonno Angelo. Mia nonna Luiza, la "Nona", è stata la levatrice di tutti noi e di molti vicini della regione.'
    },
    image: 'https://lh3.googleusercontent.com/d/1GXJ0sFgJdT9zmCkN2Nzjz4XSzK3EpkJh'
  },
  {
    year: 1940,
    title: { PT: 'Infância, Escola e o Trabalho na Roça (Anos 40 e 50) - Botucatu', EN: 'Childhood, School, and Farm Work (40s and 50s) - Botucatu', ITA: 'Infanzia, Scuola e Lavoro in Fattoria (Anni \'40 e \'50) - Botucatu' },
    location: { PT: 'Botucatu, Brasil', EN: 'Botucatu, Brazil', ITA: 'Botucatu, Brasile' },
    description: { 
      PT: 'A vida no sítio era isolada, a 24 quilômetros de Botucatu. Lembro-me das manhãs frias de colheita, onde nós, crianças, ajudávamos a recolher os grãos de café do chão enquanto os pés e mãos congelavam no orvalho. O transporte do café era feito por nossas mulas, Amazonas e Gateada, em subidas íngremes que exigiam todo o esforço dos animais e o nosso, empurrando a carroça.',
      EN: 'Life on the farm was isolated, 24 kilometers from Botucatu. I remember the cold harvest mornings, where we children helped collect coffee beans from the ground while our feet and hands froze in the dew. The coffee was transported by our mules, Amazonas and Gateada, on steep climbs that required all the animals\' effort and ours, pushing the wagon.',
      ITA: 'La vita in fattoria era isolata, a 24 chilometri da Botucatu. Ricordo le fredde mattine del raccolto, dove noi bambini aiutavamo a raccogliere i chicchi di caffè da terra mentre i piedi e le mani gelavano nella rugiada. Il trasporto del caffè veniva effettuato dai nostri muli, Amazonas e Gateada, su ripide salite che richiedevano tutto lo sforzo degli animali e il nostro, spingendo il carro.'
    },
    image: 'https://lh3.googleusercontent.com/d/1rAxMwIXRbLOnHdggFnKkDb_763JKjeEb'
  },
  {
    year: 1960,
    title: { PT: 'Novos Rumos (mudança para capital - São Paulo)', EN: 'New Directions (Moving to the Capital - São Paulo)', ITA: 'Nuove Direzioni (Trasferimento nella Capitale - San Paolo)' },
    location: { PT: 'São Paulo, Brasil', EN: 'São Paulo, Brazil', ITA: 'San Paolo, Brasile' },
    description: { 
      PT: 'A vida nos levou para a cidade. Meus pais acabaram se convertendo e professando sua fé anos depois, já em São Paulo. Eu segui carreira no banco Bradesco, onde trabalhei por décadas para sustentar minha família, passando por cidades como Vera Cruz e Osasco.',
      EN: 'Life took us to the city. My parents eventually converted and professed their faith years later, already in São Paulo. I pursued a career at Bradesco bank, where I worked for decades to support my family, passing through cities like Vera Cruz and Osasco.',
      ITA: 'La vita ci ha portato in città. I miei genitori alla fine si sono convertiti e hanno professato la loro fede anni dopo, già a San Paolo. Ho intrapreso la carriera presso la banca Bradesco, dove ho lavorato per decenni per sostenere la mia famiglia, passando per città come Vera Cruz e Osasco.'
    },
    image: 'https://lh3.googleusercontent.com/d/1x-qapY6Hr9VBD--zJDFIH6Sv9c4WDiNG'
  },
  {
    year: 2007,
    title: { PT: 'Retorno às origens', EN: 'Return to Origins', ITA: 'Ritorno alle Origini' },
    location: { PT: 'Porto Gruaro, Itália', EN: 'Portogruaro, Italy', ITA: 'Portogruaro, Italia' },
    description: { 
      PT: 'Muitos anos depois, a saga dos Colautto fechou um ciclo emocionante. Meu filho, Luiz Eduardo, foi o primeiro da família a retornar à Itália. Ele resgatou os documentos originais, corrigiu a grafia do nosso sobrenome e obteve a cidadania italiana. Ao mostrar as fotos da nossa terra de origem para meus pais, eles choraram ao reconhecer as descrições que tinham ouvido de seus próprios bisavós. Hoje, somos cidadãos do mundo, mas carregamos em nós o sangue e a coragem daqueles que deixaram tudo em Porto Gruaro em busca de um futuro melhor.',
      EN: 'Many years later, the Colautto saga closed an emotional cycle. My son, Luiz Eduardo, was the first in the family to return to Italy. He rescued the original documents, corrected the spelling of our surname, and obtained Italian citizenship. When showing photos of our land of origin to my parents, they cried as they recognized the descriptions they had heard from their own great-grandparents. Today, we are citizens of the world, but we carry within us the blood and courage of those who left everything in Portogruaro in search of a better future.',
      ITA: 'Molti anni dopo, la saga dei Colautto ha chiuso un ciclo emozionante. Mio figlio, Luiz Eduardo, è stato il primo della famiglia a tornare in Italia. Ha recuperato i documenti originali, ha corretto la grafia del nostro cognome e ha ottenuto la cittadinanza italiana. Mostrando ai miei genitori le foto della nostra terra d\'origine, hanno pianto riconoscendo le descrizioni che avevano sentito dai loro stessi bisnonni. Oggi siamo cittadini del mondo, ma portiamo in noi il sangue e il coraggio di chi ha lasciato tutto a Portogruaro in cerca di un futuro migliore.'
    },
    image: 'https://lh3.googleusercontent.com/d/1u3nbKBlpgsDMx8LqEoheIdr1Wt3Q5Hgs'
  }
];

export const GALLERY: GalleryItem[] = [
  { id: 'g1', title: { PT: 'Amabile Colautto e ...', EN: 'Amabile Colautto and ...', ITA: 'Amabile Colautto e ...' }, year: '1935', category: 'pessoas', image: 'https://picsum.photos/seed/g1/400/500' },
  { id: 'g2', title: { PT: 'Angelo Colautto Fil...', EN: 'Angelo Colautto Jr...', ITA: 'Angelo Colautto Fil...' }, year: '1935', category: 'pessoas', image: 'https://picsum.photos/seed/g2/400/500' },
  { id: 'g3', title: { PT: 'Mapa das estradas ...', EN: 'Road map ...', ITA: 'Mappa stradale ...' }, year: '1900', category: 'documentos', image: 'https://picsum.photos/seed/g3/400/500' },
  { id: 'g4', title: { PT: 'Casa do Imigrante - ...', EN: 'Immigrant House - ...', ITA: 'Casa dell\'Immigrato - ...' }, year: '2007', category: 'local', image: 'https://picsum.photos/seed/g4/400/500' },
  { id: 'g5', title: { PT: 'Casa do Imigrante - ...', EN: 'Immigrant House - ...', ITA: 'Casa dell\'Immigrato - ...' }, year: '2007', category: 'local', image: 'https://picsum.photos/seed/g5/400/500' },
  { id: 'g6', title: { PT: 'Certidão de registro...', EN: 'Registration certificate...', ITA: 'Certificato di registrazione...' }, year: '1938', category: 'documentos', image: 'https://picsum.photos/seed/g6/400/500' },
  { id: 'g7', title: { PT: 'Certidão de registro...', EN: 'Registration certificate...', ITA: 'Certificato di registrazione...' }, year: '1942', category: 'documentos', image: 'https://picsum.photos/seed/g7/400/500' },
  { id: 'g8', title: { PT: 'Passaporte Italiano', EN: 'Italian Passport', ITA: 'Passaporto Italiano' }, year: '1895', category: 'documentos', image: 'https://picsum.photos/seed/g8/400/500' },
  { id: 'g9', title: { PT: 'Certidão de casame...', EN: 'Marriage certificate...', ITA: 'Certificato di matrimonio...' }, year: '2026-02-23', category: 'documentos', image: 'https://picsum.photos/seed/g9/400/500' },
  { id: 'g10', title: { PT: 'Documento de Salv...', EN: 'Safe conduct document...', ITA: 'Documento di salvacondotto...' }, year: '1943', category: 'documentos', image: 'https://picsum.photos/seed/g10/400/500' },
  { id: 'g11', title: { PT: 'Jose Colautto e fam...', EN: 'Jose Colautto and family...', ITA: 'Jose Colautto e famiglia...' }, year: '1940', category: 'pessoas', image: 'https://picsum.photos/seed/g11/400/500' },
  { id: 'g12', title: { PT: 'Angelo Colautto e F...', EN: 'Angelo Colautto and F...', ITA: 'Angelo Colautto e F...' }, year: '1900', category: 'pessoas', image: 'https://picsum.photos/seed/g12/400/500' },
  { id: 'g13', title: { PT: 'Angelino Colautto ...', EN: 'Angelino Colautto ...', ITA: 'Angelino Colautto ...' }, year: '1960', category: 'pessoas', image: 'https://picsum.photos/seed/g13/400/500' },
  { id: 'g14', title: { PT: 'fazenda', EN: 'farm', ITA: 'fattoria' }, year: '1930', category: 'local', image: 'https://picsum.photos/seed/g14/400/500' },
  { id: 'g15', title: { PT: 'Replica Maria Fum...', EN: 'Steam Train Replica...', ITA: 'Replica Treno a Vapore...' }, year: '1900', category: 'eventos', image: 'https://picsum.photos/seed/g15/400/500' }
];

export const MEETINGS: Meeting[] = [
  {
    id: 'm1',
    title: { 
      PT: 'Relato - O começo de nossa história (nossa família)', 
      EN: 'Report - The beginning of our history (our family)', 
      ITA: 'Relazione - L\'inizio della nostra storia (la nostra famiglia)' 
    },
    date: '11/12/1860',
    description: { 
      PT: `O texto abaixo narra a história segundo o testemunho de Angelino Colautto, neto de Angelo Colautto.

Tudo começou quando meus avós paternos, Angelo Colautto nascido em Porto Gruaro (Itália) em 12/12/1860 e Luiza Lucchini nascida no mesmo local em 07/09/1864, casados em 24/11/1886, decidiram em 1.895 vir morar na América do Sul, especialmente no Brasil onde havia perspectiva de uma vida futura promissora, uma vez que na Itália viviam em situações precárias e não viam futuro melhor pela frente, se continuassem a viver naquele Pais, assim tomaram a iniciativa de mudarem-se para um país famoso pelas suas riquezas e promessa de prosperidade.

Foi assim que eles partiram para o Brasil, trazendo dois filhos Antônio e Amábile, após a longa viagem desembarcaram no porto de Santos de onde pela ferrovia foram enviados para o município de Botucatu e lá foram recebidos por representantes do proprietário da fazenda Boa Vista, para onde foram levados, as mulheres e crianças em carroças e os homens a pé, viajaram cerca de 20 quilômetros. O tratamento dado aos imigrantes não era muito diferenciado dos escravos que ha pouco haviam sido libertados; Como motivação para a viagem lhes foi dado cachaça (aguardente de cana, uma bebida muito forte de elevado grau alcoólico, muito consumida no Brasil, usada para fazer a tradicional caipirinha - batida de limão), e meu avô que estava acostumado a tomar vinho, ingeriu a cachaça como se fosse vinho o que lhe causou um coma alcoólico, e como não havia lugar para ele nas carroças ele foi jogado em cima de um barranco, já próximo da fazendo e posteriormente vieram buscá-lo, entretanto quando ele foi jogado no barranco ficou deitado de mau jeito e teve deslocamento de uma das pernas o que lhe impossibilitou a andar por vários meses, então a minha avó teve que ficar responsável por todos os afazeres na roça de café que lhes foi confiada para cuidar e também tinha que cuidar da família.

Para complicar ainda mais a situação, minha avó também se acidentou, na casa onde morava havia um cômodo que não tinha assoalho, e precisando levantar-se, a noite no escuro, esqueceu-se do buraco vindo a cair no porão da casa sofrendo lesões que a impossibilitou de trabalhar por um bom tempo. Minha avó contava que no início foi muito difícil a adaptação a nova vida. Os italianos não tinham o conhecimento em lidar com a agricultura e dizia que o Angelo - que na Itália trabalhava como classificador em uma industria - sentiu muita dificuldade com a nova vida. Os relatos são de que todos os dias ele voltava pra casa e despencava a chorar perguntando a esposa o que seria da vida deles.

Passado esses reveses, começaram a se adaptar à vida da fazenda onde nasceram os demais filhos, sendo eles os seguintes, Antônio e Amábile que vieram da Itália, Angelina, Josefina, Ângelo Filho (Joanim) e José (Bepinho) o nosso pai em 28/11/1907. Passaram vários anos, com o trabalho árduo executado com a ajuda dos filhos pode guardar algumas economias, foi então que o proprietário da fazendo lhe ofereceu uma gleba de terra que deveria desmatá-la plantar café e com o lucro da lavoura pagar ao fazendeiro, após muito relutar meu avô incentivado pela esposa e filhos resolveu fazer o negócio e comprou o sitio o qual passou a chamar Sitio Bela Vista.

Lá os filhos se tornaram adultos e contraíram matrimônio O Tio Antonio casou-se com Virgilina, a Tia Amábile com José Romagnoli, a Tia Angelina com João Colautto que era parente e cujo casamento meus avós não aceitavam, então eles fugiram e casaram na polícia segundo o costume da época e foram morar em Rancharia, o paradeiro deles só foi descoberto bem mais tarde, a Tia Josefina casou-se com Bortolomeu Caldardo o Tio Joanim ou Angelo Colautto, casou-se com Angelina e foi assim que o Bepinho (o caçula), já um homem feito, conheceu uma jovem na fazenda Matão onde iam jogar bola e também participar de bailes, essa jovem era filha de Atílio Bertassi (Italiano) e Augusta Miraglia (espanhola), e seu nome era Emma Bertassi.

Após alguns anos de namoro em 12/12/1931, casaram-se e foram morar na casa dos pais do noivo no sítio Bela Vista, essa propriedade situava-se num platô, e possuía uma vista maravilhosa e o clima era excelente. Assim teve inicio a nossa família, morando com os pais e tendo como vizinhos os dois irmãos mais velhos, Ângelo mais conhecido como Joanim, o Antônio, primogênito, meus pais criaram a sua família, o Primeiro chamou-se Nelson nascido em 04/10/1932 a segunda Leonilda nascida em 31/01/1935 a terceira Anaite nascida em 21/08/1936 a quarta a Irma nascida em 17/08/1938 o quinto Geraldo nascido em 07/09/1940 o sexto Angelino nascido em l3/08/1942 o sétima Maria Augusta nascida em 30/07/1945 o oitavo Roberto nascido em 01/07/1950 e o nono e ultimo José Célio nascido em 06/04/1953.

Nossa mãe contava que quando ela foi morar no sítio, após o casamento, ficou muito espantada, com os hábitos da família, além de falar somente em italiano, se dedicavam apenas à lavoura do café e não se preocupavam em fazer lavouras alternativas, foi quando minha mãe muito a contra gosto de todos, começou introduzir a plantação de hortaliças e especialmente a batata doce e a mandioca que não eram conhecidas e tinham medo de consumi-las, pois achavam que eram venenosas. Paralelamente minha mãe trouxe algumas galinhas da casa de seus pais, e começou a fazer criação e em conseqüência a colher ovos que serviam como alternativa de mistura o que foi muito bem aceito. Toda a família vivia isolada a uma distancia de 24 quilômetros da cidade de Botucatu, e só uma ou duas pessoas da família ia a cidade para fazer compras o que era feito em lombo de animais.

Foi nesse contexto que foi instituída uma escola municipal no sítio, onde estudavam meus primos e os poucos vizinhos que vinham de lugares distantes para freqüentar a escola, que era dirigida pela professora Jesusmina, ela morava em uma das casas das famílias e em contato com minha mãe ficou sabendo que o seu filho mais velho, Nelson com seis anos de idade, tinha grande fascinação pela escolha, então instruiu minha mãe a mandá-lo ás aulas mesmo sem compromisso e passou a lhe ensinar normalmente, para surpresa de todos ele era muito inteligente e acabou sendo matriculado e completou o ciclo que era a terceira série, limite máximo lecionado nas escolas rurais; Aconselhados pela professora, pois se tratava de aluno muito aplicado e interessado, seria uma pena deixá-lo parar agora, então meu irmão mais velhofoi morar com os avós maternos em Botucatu e passou a cursar o quarto ano.

Entretanto, lamentavelmente ele foi acometido de uma doença na visão e teve que paralisar os estudos tendo completado apenas o quarto ano. Na tentativa de encontrar a cura para a doença, meus pais utilizaram-se de todos os recursos que possuíam, não só financeiro, como também da medicina e até cura pela fé o que levou o nosso pai a fazer muitas peregrinações por varias cidades procurando cura para o filho que ha cada dia apresentava piora na sua visão, tendo buscado solução em vários locais, entre eles, no padre Donizete na cidade de Pirapóra, entretanto a doença foi diagnosticada na cidade de Campinas, que na época já era um centro oftalmológico muito avançado. Como o tratamento foi muito prolongado, foi obrigado a paralisar os estudos, e passou a ajudar nossos pais na lavoura de café em conseqüência os estudos foram abandonados definitivamente.

Para poder fazer o tratamento no sítio, minha Mãe especializou-se em aplicar injeções, evitando ter que levá-lo à cidade o que era muito difícil. Nesse meio de tempo a escola local foi fechada e com isso a partir da irmã mais velha Leonilda todos os demais passaram a estudar na escola da Fazenda Boa Vista que ficava cinco léguas de distancia do sitio onde morávamos. E é nesse período que quando julgo ter mais ou menos seis anos, que tenho as primeiras lembranças de nossa vida no sitio.

Eu não tive o privilégio de conhecer meu avô paterno ANGELO com vida, pois nasci 24 horas após a sua morte, conta a minha mãe que me esperava para nascer quando meu avô adoeceu e ela se manteve fazendo todos os serviços da casa pois a minha avó, estava atarefada com a doença do meu avô. Contava minha mãe que após a saída do féretro de meu avô, ela se recolheu no quarto e pouco tempo depois o menino nasceu, assistida por minha avó Luiza (a Nona), que foi também a que amparou o nascimento de todos os meus irmãos sem exceção, e a muitos outros primos e vizinhos, que nasceram por suas mãos.

As lembranças de minha infância começam com detalhes, a partir do momento que comecei ir para escola, quando comecei, iam comigo meus irmãos, Irma e Geraldo, meu primo José e Odila, filhos do tio Antônio e vários meninos e meninas dos Cerantos, que faziam o mesmo caminho que nós. Minha primeira professora foi a Dna Neíze, que pôr sinal era muito indolente, não se preocupava em ensinar ninguém, haja vista que nos exames finais, quando vinha um inspetor de Botucatu, para avaliar os alunos, eu não consegui escrever a letra (A) maiúscula, lembro-me a aflição que passei e o medo do examinador, pois era ele que diria quem passaria ou não. Não deu outra fui reprovado, mas o que me lembro com mais surpresa era a despreocupação da professora, pois ela chegava na classe, dava algumas lições para Segunda e Terceira série e algumas tarefas para a Primeira, e depois se retirava e ia conversar com mulheres vizinhas da escola, principalmente com as lavadeiras que se reuniam em um local aproximadamente uns 200 metros da escola.`,
      EN: 'The text below narrates the story according to the testimony of Angelino Colautto, grandson of Angelo Colautto...',
      ITA: 'Il testo seguente narra la storia secondo la testimonianza di Angelino Colautto, nipote di Angelo Colautto...'
    },
    image: 'https://lh3.googleusercontent.com/d/1WyVxRRV-G6MHpyIMeNXG6DDaOxy1QHTv',
    author: {
      PT: 'Angelino Colautto',
      EN: 'Angelino Colautto',
      ITA: 'Angelino Colautto'
    }
  }
];
