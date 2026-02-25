export interface Member {
  id: string;
  name: string;
  role: string;
  spouse?: string;
  photo?: string;
  bio?: string;
  level: 'patriarcas' | 'filho' | 'filha' | 'neto' | 'neta' | 'bisneto' | 'bisneta';
  tags?: string[];
}

export interface HistoryEvent {
  year: number;
  title: string;
  location: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  year: string;
  category: 'local' | 'pessoas' | 'eventos' | 'documentos';
  image: string;
}

export interface Meeting {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

export type Section = 'inicio' | 'tempo' | 'historia' | 'arvore' | 'membros' | 'galeria' | 'encontros' | 'contato';
