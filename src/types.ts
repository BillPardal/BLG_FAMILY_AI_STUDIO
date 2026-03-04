export type Language = 'PT' | 'EN' | 'ITA';

export type Localized<T> = {
  [key in Language]: T;
};

export interface Member {
  id: string;
  name: string;
  role: Localized<string>;
  spouse?: string;
  photo?: string;
  bio?: Localized<string>;
  level: 'patriarcas' | 'filho' | 'filha' | 'neto' | 'neta' | 'bisneto' | 'bisneta';
  tags?: Localized<string[]>;
}

export interface HistoryEvent {
  year: number;
  title: Localized<string>;
  location: Localized<string>;
  description: Localized<string>;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: Localized<string>;
  year: string;
  category: 'local' | 'pessoas' | 'eventos' | 'documentos';
  image: string;
}

export interface Meeting {
  id: string;
  title: Localized<string>;
  date: string;
  description: Localized<string>;
  image: string;
  author?: Localized<string>;
}

export type Section = 'inicio' | 'tempo' | 'historia' | 'arvore' | 'membros' | 'galeria' | 'biografias' | 'contato';
