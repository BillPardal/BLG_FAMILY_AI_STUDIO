/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Image as ImageIcon, 
  Calendar, 
  MapPin, 
  Mail, 
  Globe, 
  ChevronRight, 
  ChevronLeft,
  Search, 
  Maximize2,
  Users,
  History,
  Clock,
  Menu,
  X,
  Heart
} from 'lucide-react';
import { Section, Member, HistoryEvent, GalleryItem, Meeting, Language } from './types';
import { MEMBERS, HISTORY, GALLERY, MEETINGS } from './constants';
import { UI_TRANSLATIONS } from './translations';

const Navbar = ({ activeSection, setSection, language, setLanguage }: { activeSection: Section, setSection: (s: Section) => void, language: Language, setLanguage: (l: Language) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: Section; label: string }[] = [
    { id: 'inicio', label: UI_TRANSLATIONS.inicio[language] },
    { id: 'tempo', label: UI_TRANSLATIONS.tempo[language] },
    { id: 'historia', label: UI_TRANSLATIONS.historia[language] },
    { id: 'arvore', label: UI_TRANSLATIONS.arvore[language] },
    { id: 'membros', label: UI_TRANSLATIONS.membros[language] },
    { id: 'galeria', label: UI_TRANSLATIONS.galeria[language] },
    { id: 'biografias', label: UI_TRANSLATIONS.biografias[language] },
    { id: 'contato', label: UI_TRANSLATIONS.contato[language] },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || activeSection !== 'inicio' ? 'bg-white shadow-sm py-[13px]' : 'bg-transparent py-[25px]'}`}>
      <div className="absolute top-0 left-0 w-full h-1 flex">
        <div className="h-full flex-1 bg-brand-green"></div>
        <div className="h-full flex-1 bg-brand-red"></div>
        <div className="h-full flex-1 bg-brand-green"></div>
        <div className="h-full flex-1 bg-brand-yellow"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setSection('inicio')}>
          <div className="w-12 h-12 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
              <path d="M50 5L15 20V50C15 70 50 95 50 95C50 95 85 70 85 50V20L50 5Z" fill="#FDFCF0" stroke="#E5E1D8" strokeWidth="1"/>
              <text x="22" y="62" fill="#008C45" fontFamily="serif" fontWeight="bold" fontSize="38">C</text>
              <text x="52" y="62" fill="#CD212A" fontFamily="serif" fontWeight="bold" fontSize="38">L</text>
            </svg>
          </div>
          <div>
            <h1 className="font-serif font-bold text-[20px] leading-tight">{UI_TRANSLATIONS.family_name[language]}</h1>
            <div className="flex items-center gap-2 text-[11px] text-gray-400 font-bold tracking-widest">
              <span>1860</span>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setSection(item.id)}
                className={`text-[12px] font-bold uppercase tracking-wider transition-colors relative py-1 ${activeSection === item.id ? 'text-brand-dark' : 'text-gray-400 hover:text-brand-dark'}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-dark" />
                )}
              </button>
            ))}
          </div>
          <div className="flex items-center bg-brand-dark rounded p-0.5 ml-4">
            {(['PT', 'EN', 'ITA'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-2 py-1 text-[10px] font-bold rounded-sm transition-colors ${language === lang ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white'}`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl py-[18px] flex flex-col items-center gap-4"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setSection(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-[20px] font-medium ${activeSection === item.id ? 'text-brand-green' : 'text-gray-600'}`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center bg-brand-dark rounded p-1 mt-4">
              {(['PT', 'EN', 'ITA'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setLanguage(lang);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2 text-[14px] font-bold rounded-sm transition-colors ${language === lang ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white'}`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ language }: { language: Language }) => (
  <footer className="bg-brand-dark text-white py-8">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-80">
                <path d="M50 5L15 20V50C15 70 50 95 50 95C50 95 85 70 85 50V20L50 5Z" fill="#FDFCF0" stroke="#E5E1D8" strokeWidth="1"/>
                <text x="22" y="62" fill="#008C45" fontFamily="serif" fontWeight="bold" fontSize="38">C</text>
                <text x="52" y="62" fill="#CD212A" fontFamily="serif" fontWeight="bold" fontSize="38">L</text>
              </svg>
            </div>
            <h2 className="font-serif font-bold text-xl">{UI_TRANSLATIONS.family_name[language]}</h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md">
            {UI_TRANSLATIONS.footer_tagline[language]}
          </p>
          <div className="flex flex-col md:flex-row justify-between w-full items-center gap-4 text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-4">
            <span>© 2026 {UI_TRANSLATIONS.family_name[language]}.</span>
            <button className="hover:text-white transition-colors">ADMIN</button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <a 
            href="https://produto.mercadolivre.com.br/MLB-6311123284-livro-impossivel-entre-sonhos-e-realizacoes-lutti-colautto-_JM"
            target="_blank"
            rel="noopener noreferrer"
            className="block group cursor-pointer transition-transform hover:scale-105"
          >
            <img 
              src="https://lh3.googleusercontent.com/d/1XXaYwJkGxZwImuGKEvVCwQcnXVd88_Le" 
              alt="Book Seal" 
              className="h-48 w-auto object-contain bg-transparent mix-blend-screen"
              referrerPolicy="no-referrer"
            />
          </a>
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 text-center">
            {UI_TRANSLATIONS.meet_author[language]}
          </span>
        </div>
      </div>
    </div>
  </footer>
);

const SectionHeader = ({ title, subtitle, badge }: { title: string, subtitle?: string, badge?: string }) => (
  <div className="text-center mb-16">
    {badge && (
      <div className="inline-flex items-center gap-2 mb-4">
        <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">{badge}</span>
        <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></div>
      </div>
    )}
    <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6">{title}</h2>
    {subtitle && <p className="text-gray-500 italic max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const Inicio = ({ setSection, language }: { setSection: (s: Section) => void, language: Language }) => (
  <div className="pt-20">
    {/* Hero Section */}
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/d/1WyVxRRV-G6MHpyIMeNXG6DDaOxy1QHTv" 
          alt={UI_TRANSLATIONS.family_name[language]} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="inline-flex items-center gap-3 px-5 py-2 bg-brand-dark/90 backdrop-blur-md text-white rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-10 border border-white/10 shadow-lg">
          <div className="w-2 h-2 rounded-full bg-brand-green shadow-[0_0_8px_rgba(0,140,69,0.6)]"></div>
          <span className="font-serif">{UI_TRANSLATIONS.italy[language]}</span>
          <span className="opacity-40 mx-1">—</span>
          <span className="font-serif">{UI_TRANSLATIONS.brazil[language]}</span>
          <div className="w-2 h-2 rounded-full bg-brand-yellow shadow-[0_0_8px_rgba(255,204,0,0.6)]"></div>
        </div>
        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-8 leading-tight text-white drop-shadow-lg">
          {UI_TRANSLATIONS.welcome_title[language]}
        </h1>
        <p className="text-[22px] text-white mb-10 italic font-bold drop-shadow-md">
          {UI_TRANSLATIONS.welcome_subtitle[language]}
        </p>
        <button 
          onClick={() => setSection('tempo')}
          className="px-[56px] py-[18px] bg-white text-brand-dark rounded-full font-bold text-[11px] uppercase tracking-[0.3em] hover:bg-brand-dark hover:text-white transition-all flex items-center gap-3 mx-auto shadow-xl"
        >
          {UI_TRANSLATIONS.explore_history[language]} <span className="text-lg">→</span>
        </button>
      </div>
    </section>

    {/* Quick Links */}
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { id: 'arvore', label: UI_TRANSLATIONS.arvore[language], icon: <History size={32} />, color: 'bg-white' },
          { id: 'galeria', label: UI_TRANSLATIONS.galeria[language], icon: <ImageIcon size={32} />, color: 'bg-white' },
          { id: 'biografias', label: UI_TRANSLATIONS.biografias[language], icon: <BookOpen size={32} />, color: 'bg-white' },
        ].map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -10 }}
            onClick={() => setSection(item.id as Section)}
            className={`${item.color} p-12 rounded-3xl shadow-xl flex flex-col items-center text-center cursor-pointer group`}
          >
            <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-brand-dark group-hover:text-white transition-colors">
              {item.icon}
            </div>
            <h3 className="font-serif text-2xl font-bold">{item.label}</h3>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Next Biographies */}
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <BookOpen size={20} className="text-gray-400" />
          <h2 className="font-serif text-3xl font-bold">{UI_TRANSLATIONS.featured_biographies[language]}</h2>
        </div>
        <div className="w-1/2 h-px bg-gray-100 mx-auto mb-12"></div>
        <p className="text-gray-400 italic">{UI_TRANSLATIONS.no_featured_biographies[language]}</p>
      </div>
    </section>
  </div>
);

const Tempo = ({ language }: { language: Language }) => (
  <div className="pb-24">
    {/* Dark Header Section */}
    <div className="bg-brand-dark pt-24 pb-20 text-center text-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">{UI_TRANSLATIONS.origins_legacy[language]}</span>
          <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></div>
        </div>
        <h2 className="font-serif text-6xl md:text-7xl font-normal mb-6">{UI_TRANSLATIONS.tempo[language]}</h2>
        <p className="text-white/60 italic text-lg">{UI_TRANSLATIONS.journey_generations[language]}</p>
      </div>
    </div>
    
    <div className="max-w-4xl mx-auto px-4 -mt-[61px] relative z-10">
      <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-2xl mb-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1.5 h-8 bg-brand-green rounded-full"></div>
          <h3 className="font-serif text-3xl font-bold">{UI_TRANSLATIONS.origins_veneto[language]}</h3>
        </div>
        <p className="text-gray-600 mb-12 leading-relaxed">
          {UI_TRANSLATIONS.origins_veneto_desc[language]}
        </p>
        <div className="relative mb-12">
          <img 
            src="https://lh3.googleusercontent.com/d/1ohahC06Un6ol5zqkCpQkE_pD2HY1eMDZ" 
            alt={UI_TRANSLATIONS.origins_veneto[language]} 
            className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer rounded-xl"
            referrerPolicy="no-referrer"
          />
        </div>
        <blockquote className="border-l-4 border-gray-200 pl-8 py-4 italic text-2xl text-gray-500 font-serif relative">
          <span className="absolute -left-4 -top-4 text-6xl text-gray-100 opacity-50">“</span>
          {UI_TRANSLATIONS.honoring_past_quote[language]}
        </blockquote>
      </div>

      <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-xl">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-8 bg-brand-yellow rounded-full"></div>
          <h3 className="font-serif text-3xl font-bold">{UI_TRANSLATIONS.arrival_brazil[language]}</h3>
        </div>
        <p className="text-gray-600 mb-12 leading-relaxed">
          {UI_TRANSLATIONS.arrival_brazil_desc[language]}
        </p>
        <div className="relative mb-16 flex justify-center">
          <img 
            src="https://lh3.googleusercontent.com/d/1EBg5PcidfwaGcPlFxjKCMfm8yf9anstM" 
            alt={UI_TRANSLATIONS.arrival_brazil[language]} 
            className="w-4/5 h-auto grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer rounded-xl"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Timeline dots */}
        <div className="space-y-12 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100">
          {[
            { year: '1895', title: language === 'PT' ? 'Partida de Gênova' : language === 'EN' ? 'Departure from Genoa' : 'Partenza da Genova', color: 'bg-brand-green' },
            { year: '1895', title: language === 'PT' ? 'Chegada ao Porto de Santos' : language === 'EN' ? 'Arrival at the Port of Santos' : 'Arrivo al Porto di Santos', color: 'bg-brand-yellow', badge: UI_TRANSLATIONS.arrival_brazil[language] },
            { year: '1920', title: language === 'PT' ? 'Estabelecimento no Interior (Botucatu - SP)' : language === 'EN' ? 'Establishment in the Interior (Botucatu - SP)' : 'Insediamento nell\'Interno (Botucatu - SP)', color: 'bg-brand-green' },
            { year: '1932', title: language === 'PT' ? 'A vida na Roça - adaptação ao país (Sítio Boa Vista - Botucatu - SP)' : language === 'EN' ? 'Farm life - adaptation to the country (Boa Vista Farm - Botucatu - SP)' : 'Vita in fattoria - adattamento al paese (Fattoria Boa Vista - Botucatu - SP)', color: 'bg-brand-dark' },
            { year: '1931 - 1950', title: language === 'PT' ? 'Criação da Família - Filhos - (Sítio Bela Vista - Botucatu - SP)' : language === 'EN' ? 'Family Building - Children - (Bela Vista Farm - Botucatu - SP)' : 'Creazione della Famiglia - Figli - (Fattoria Bela Vista - Botucatu - SP)', color: 'bg-brand-dark' },
            { year: '1960', title: language === 'PT' ? 'Novos Rumos - continuidade da família (São Paulo - Capital)' : language === 'EN' ? 'New Directions - family continuity (São Paulo - Capital)' : 'Nuove Direzioni - continuità familiare (San Paolo - Capitale)', color: 'bg-brand-red' },
            { year: '2007', title: language === 'PT' ? 'Retorno às Origens (Visita à Itália - Porto Gruaro)' : language === 'EN' ? 'Return to Origins (Visit to Italy - Portogruaro)' : 'Ritorno alle Origini (Visita in Italia - Portogruaro)', color: 'bg-gray-400' },
            { year: '2024', title: language === 'PT' ? 'Preservação do Legado Digital (Documentos e digitalização de nossa história)' : language === 'EN' ? 'Digital Legacy Preservation (Documents and digitization of our history)' : 'Preservazione dell\'Eredità Digitale (Documenti e digitalizzazione della nostra storia)', color: 'bg-brand-green' },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-6 relative">
              <div className={`w-4 h-4 rounded-full ${item.color} z-10 mt-1.5 timeline-dot relative`}></div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-bold text-gray-400">{item.year}</span>
                  {item.badge && (
                    <span className="px-2 py-0.5 bg-brand-dark text-white text-[8px] font-bold rounded uppercase tracking-widest">{item.badge}</span>
                  )}
                </div>
                <h4 className="font-bold text-sm">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Historia = ({ language }: { language: Language }) => {
  const [selectedEventIndex, setSelectedEventIndex] = useState<number | null>(null);

  const nextEvent = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedEventIndex !== null) {
      setSelectedEventIndex((selectedEventIndex + 1) % HISTORY.length);
    }
  };

  const prevEvent = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedEventIndex !== null) {
      setSelectedEventIndex((selectedEventIndex - 1 + HISTORY.length) % HISTORY.length);
    }
  };

  return (
    <div className="pb-24">
      {/* Dark Header Section */}
      <div className="bg-brand-dark pt-24 pb-20 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">{UI_TRANSLATIONS.historia[language]}</span>
            <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></div>
          </div>
          <h2 className="font-serif text-6xl md:text-7xl font-normal mb-6">{UI_TRANSLATIONS.historia[language]}</h2>
          <p className="text-white/80 italic text-lg max-w-3xl mx-auto leading-relaxed">
            {language === 'PT' ? 'A história da família Colautto é um testemunho de coragem, resiliência e a busca incessante por um futuro melhor. Tudo começou nas terras férteis do norte da Itália.' : language === 'EN' ? 'The history of the Colautto family is a testament to courage, resilience, and the relentless search for a better future. It all began in the fertile lands of northern Italy.' : 'La storia della famiglia Colautto è una testimonianza di coraggio, resilienza e della incessante ricerca di un futuro migliore. Tutto ebbe inizio nelle fertili terre del nord Italia.'}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 -mt-12 relative z-10">
        <div className="space-y-20">
          {HISTORY.map((event, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setSelectedEventIndex(idx)}
              className="bg-white rounded-[40px] p-6 md:p-12 shadow-2xl flex flex-col md:flex-row gap-12 items-start border border-gray-50/50 cursor-pointer group"
            >
              <div className="w-full md:w-[42%] relative shrink-0 overflow-hidden rounded-[24px]">
                <img 
                  src={event.image} 
                  alt={event.title[language]} 
                  className="w-full aspect-[4/3] object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-black/20">
                  <div className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">
                    <Maximize2 size={32} className="text-brand-dark" />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[58%] pt-4">
                <div className="flex items-center gap-2 text-gray-400 text-xs font-bold mb-6 tracking-[0.2em] uppercase">
                  <Calendar size={14} className="opacity-70" />
                  <span>{event.year}</span>
                </div>
                <h3 className="font-serif text-3xl md:text-[42px] font-bold mb-8 text-brand-dark leading-[1.1] group-hover:text-brand-green transition-colors">{event.title[language]}</h3>
                <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-serif line-clamp-4">{event.description[language]}</p>
                <div className="mt-8 flex items-center gap-2 text-brand-green font-bold text-xs uppercase tracking-widest">
                  <span>{language === 'PT' ? 'Ver História Completa' : language === 'EN' ? 'View Full Story' : 'Vedi Storia Completa'}</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Carousel Modal */}
      <AnimatePresence>
        {selectedEventIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-dark/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedEventIndex(null)}
          >
            <button 
              className="absolute top-10 right-10 text-white/70 hover:text-white transition-colors z-[110]"
              onClick={() => setSelectedEventIndex(null)}
            >
              <X size={40} />
            </button>

            <button 
              className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all z-[110]"
              onClick={prevEvent}
            >
              <ChevronLeft size={32} />
            </button>

            <button 
              className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all z-[110]"
              onClick={nextEvent}
            >
              <ChevronRight size={32} />
            </button>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row w-full max-h-[85vh]">
                <div className="w-full md:w-1/2 bg-gray-100 overflow-hidden">
                  <img 
                    src={HISTORY[selectedEventIndex].image} 
                    alt={HISTORY[selectedEventIndex].title[language]}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto bg-white scrollbar-thin scrollbar-thumb-gray-200">
                  <div className="flex items-center gap-2 text-gray-400 text-xs font-bold mb-6 tracking-[0.2em] uppercase">
                    <Calendar size={14} className="opacity-70" />
                    <span>{HISTORY[selectedEventIndex].year}</span>
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-brand-dark leading-[1.1]">
                    {HISTORY[selectedEventIndex].title[language]}
                  </h3>
                  <div className="w-12 h-1 bg-brand-green mb-8 rounded-full"></div>
                  <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-serif">
                    {HISTORY[selectedEventIndex].description[language]}
                  </p>
                </div>
              </div>
              
              <div className="mt-6 text-white/50 text-xs font-bold tracking-widest">
                {selectedEventIndex + 1} / {HISTORY.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Arvore = ({ language }: { language: Language }) => (
  <div className="pt-32 pb-24 min-h-screen">
    <SectionHeader 
      title={UI_TRANSLATIONS.arvore[language]}
    />
    <div className="max-w-7xl mx-auto px-4">
      <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden relative min-h-[800px] flex flex-col">
        <div className="p-8 border-b border-gray-100 flex justify-center">
          <div className="px-6 py-2 bg-gray-50 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
            {UI_TRANSLATIONS.select_member_tree[language]}
          </div>
        </div>
        
        {/* Mock Tree Visualization */}
        <div className="flex-1 relative p-12 overflow-auto bg-gray-50/30">
          <div className="flex flex-col items-center gap-16 min-w-[1200px]">
            {/* Root */}
            <div className="relative">
              <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center w-48 text-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mb-2 border-2 border-brand-green">
                  <img src="https://picsum.photos/seed/p1/100/100?grayscale" alt="Patriarcas" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-[10px] font-bold leading-tight">Ângelo Colautto x Luigia Licchin</h4>
                <p className="text-[8px] text-gray-400 uppercase font-bold mt-1">{UI_TRANSLATIONS.patriarchs[language]}</p>
              </div>
              <div className="absolute top-full left-1/2 w-px h-16 bg-gray-200 -translate-x-1/2"></div>
            </div>

            {/* Level 1 */}
            <div className="flex gap-12 relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-gray-200 -translate-y-8"></div>
              {[
                { name: 'Antonio Colautto', role: language === 'PT' ? 'FILHO' : language === 'EN' ? 'SON' : 'FIGLIO' },
                { name: 'Amabilie Colautto', role: language === 'PT' ? 'FILHA' : language === 'EN' ? 'DAUGHTER' : 'FIGLIA' },
                { name: 'Angelina Colautto', role: language === 'PT' ? 'FILHA' : language === 'EN' ? 'DAUGHTER' : 'FIGLIA' },
                { name: 'Josefina Colautto', role: language === 'PT' ? 'FILHA' : language === 'EN' ? 'DAUGHTER' : 'FIGLIA' },
                { name: 'Ângelo Colautto Filho', role: language === 'PT' ? 'FILHO' : language === 'EN' ? 'SON' : 'FIGLIO' },
                { name: 'Jose Colautto', role: language === 'PT' ? 'FILHO' : language === 'EN' ? 'SON' : 'FIGLIO' },
              ].map((m, i) => (
                <div key={i} className="relative flex flex-col items-center">
                  <div className="absolute top-0 left-1/2 w-px h-8 bg-gray-200 -translate-x-1/2 -translate-y-8"></div>
                  <div className="bg-white p-3 rounded-xl shadow-md border border-gray-100 flex flex-col items-center w-32 text-center">
                    <div className="w-10 h-10 rounded-full bg-gray-200 mb-2 flex items-center justify-center text-gray-400">
                      <Users size={16} />
                    </div>
                    <h4 className="text-[9px] font-bold leading-tight">{m.name}</h4>
                    <p className="text-[7px] text-gray-400 uppercase font-bold mt-1">{m.role}</p>
                  </div>
                  {m.name === 'Jose Colautto' && (
                    <div className="absolute top-full left-1/2 w-px h-16 bg-gray-200 -translate-x-1/2"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Level 2 (Sub-branch of Jose) */}
            <div className="flex gap-8 relative ml-[600px]">
               <div className="absolute top-0 left-0 right-0 h-px bg-gray-200 -translate-y-8"></div>
               {[
                { name: 'Nelson Colautto', role: language === 'PT' ? 'NETO' : language === 'EN' ? 'GRANDSON' : 'NIPOTE' },
                { name: 'Leonilda Colautto', role: language === 'PT' ? 'NETA' : language === 'EN' ? 'GRANDDAUGHTER' : 'NIPOTE' },
                { name: 'Anaite Colautto', role: language === 'PT' ? 'NETA' : language === 'EN' ? 'GRANDDAUGHTER' : 'NIPOTE' },
                { name: 'Irma Colautto', role: language === 'PT' ? 'NETA' : language === 'EN' ? 'GRANDDAUGHTER' : 'NIPOTE' },
                { name: 'Geraldo Colautto', role: language === 'PT' ? 'NETO' : language === 'EN' ? 'GRANDSON' : 'NIPOTE' },
                { name: 'Angelino Colautto', role: language === 'PT' ? 'NETO' : language === 'EN' ? 'GRANDSON' : 'NIPOTE' },
                { name: 'Maria Augusta Colautto', role: language === 'PT' ? 'NETA' : language === 'EN' ? 'GRANDDAUGHTER' : 'NIPOTE' },
                { name: 'Roberto Colautto', role: language === 'PT' ? 'NETO' : language === 'EN' ? 'GRANDSON' : 'NIPOTE' },
                { name: 'José Celio Colautto', role: language === 'PT' ? 'NETO' : language === 'EN' ? 'GRANDSON' : 'NIPOTE' },
              ].map((m, i) => (
                <div key={i} className="relative flex flex-col items-center">
                  <div className="absolute top-0 left-1/2 w-px h-8 bg-gray-200 -translate-x-1/2 -translate-y-8"></div>
                  <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center w-24 text-center">
                    <div className="w-8 h-8 rounded-full bg-gray-100 mb-1 flex items-center justify-center text-gray-400">
                      <Users size={12} />
                    </div>
                    <h4 className="text-[8px] font-bold leading-tight">{m.name}</h4>
                    <p className="text-[6px] text-gray-400 uppercase font-bold">{m.role}</p>
                  </div>
                  {m.name === 'Angelino Colautto' && (
                    <div className="absolute top-full left-1/2 w-px h-16 bg-gray-200 -translate-x-1/2"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Level 3 (Sub-branch of Angelino) */}
            <div className="flex gap-8 relative ml-[850px]">
               <div className="absolute top-0 left-0 right-0 h-px bg-gray-200 -translate-y-8"></div>
               {[
                { name: 'Débora Colautto', role: language === 'PT' ? 'BISNETA' : language === 'EN' ? 'GREAT-GRANDDAUGHTER' : 'BISNIPOTE' },
                { name: 'Luiz Eduardo Colautto', role: language === 'PT' ? 'BISNETO' : language === 'EN' ? 'GREAT-GRANDSON' : 'BISNIPOTE' },
                { name: 'Jonatas Jose Colautto', role: language === 'PT' ? 'BISNETO' : language === 'EN' ? 'GREAT-GRANDSON' : 'BISNIPOTE' },
              ].map((m, i) => (
                <div key={i} className="relative flex flex-col items-center">
                  <div className="absolute top-0 left-1/2 w-px h-8 bg-gray-200 -translate-x-1/2 -translate-y-8"></div>
                  <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center w-24 text-center">
                    <div className="w-8 h-8 rounded-full bg-gray-100 mb-1 flex items-center justify-center text-gray-400">
                      <Users size={12} />
                    </div>
                    <h4 className="text-[8px] font-bold leading-tight">{m.name}</h4>
                    <p className="text-[6px] text-gray-400 uppercase font-bold">{m.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
          {[
            { icon: <Globe size={18} /> },
            { icon: <Maximize2 size={18} /> },
            { icon: <Clock size={18} /> },
            { icon: <ChevronRight size={18} className="rotate-90" /> },
            { icon: <ChevronRight size={18} className="-rotate-90" /> },
          ].map((btn, i) => (
            <button key={i} className="w-10 h-10 rounded-xl bg-white shadow-lg flex items-center justify-center text-gray-400 hover:text-brand-dark hover:bg-gray-50 transition-colors">
              {btn.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Membros = ({ language }: { language: Language }) => (
  <div className="pt-32 pb-24">
    <SectionHeader 
      title={UI_TRANSLATIONS.family_members_title[language]}
      subtitle={UI_TRANSLATIONS.family_members_subtitle[language]}
    />
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {MEMBERS.map((member) => (
        <motion.div 
          key={member.id}
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-3xl p-6 shadow-lg flex flex-col h-full border border-gray-50"
        >
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 mb-6">
            {member.photo ? (
              <img 
                src={member.photo} 
                alt={member.name} 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-300">
                <Users size={64} />
              </div>
            )}
            <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-gray-400 border-2 border-white"></div>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-sm leading-tight">{member.name}</h3>
              {member.tags?.[language]?.includes(UI_TRANSLATIONS.roots[language]) && (
                <span className="px-2 py-0.5 bg-gray-100 text-[8px] font-bold rounded uppercase tracking-widest text-gray-500">{UI_TRANSLATIONS.roots[language]}</span>
              )}
            </div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">{member.role[language]}</p>
            {member.spouse && (
              <div className="flex items-center gap-2 px-3 py-2 bg-red-50/50 rounded-xl mb-4">
                <Heart size={12} className="text-brand-red fill-brand-red" />
                <span className="text-[10px] font-medium text-brand-red">{UI_TRANSLATIONS.spouse[language]}: {member.spouse}</span>
              </div>
            )}
            {member.bio?.[language] && <p className="text-[10px] text-gray-500 italic leading-relaxed">{member.bio[language]}</p>}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const Galeria = ({ language }: { language: Language }) => {
  const [filter, setFilter] = useState<string>('TODOS');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const categories = [
    { id: 'TODOS', label: UI_TRANSLATIONS.all[language] },
    { id: 'LOCAL', label: UI_TRANSLATIONS.local[language] },
    { id: 'PESSOAS', label: UI_TRANSLATIONS.people[language] },
    { id: 'EVENTOS', label: UI_TRANSLATIONS.events[language] },
    { id: 'DOCUMENTOS', label: UI_TRANSLATIONS.documents[language] }
  ];

  const filteredItems = filter === 'TODOS' 
    ? GALLERY 
    : GALLERY.filter(item => item.category.toUpperCase() === filter);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="pt-32 pb-24">
      <SectionHeader 
        title={UI_TRANSLATIONS.gallery_title[language]}
        subtitle={UI_TRANSLATIONS.gallery_subtitle[language]}
      />
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setFilter(cat.id);
                setSelectedImageIndex(null);
              }}
              className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${filter === cat.id ? 'bg-brand-dark text-white shadow-lg' : 'bg-white text-gray-400 hover:bg-gray-50 border border-gray-100'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div 
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md group cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title[language]} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-xl">
                    <Maximize2 size={20} className="text-brand-dark" />
                  </div>
                </div>
              </div>
              <div className="p-4 text-center">
                <h4 className="font-bold text-xs mb-1 line-clamp-2 h-8 flex items-center justify-center">{item.title[language]}</h4>
                <p className="text-[10px] text-gray-400 font-medium">{item.year}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button className="px-10 py-4 bg-brand-dark text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-brand-dark/90 transition-colors shadow-xl">
            {UI_TRANSLATIONS.load_more[language]}
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-dark/95 flex items-center justify-center p-4 md:p-10"
            onClick={closeModal}
          >
            <button 
              className="absolute top-10 right-10 text-white/70 hover:text-white transition-colors z-[110]"
              onClick={closeModal}
            >
              <X size={40} />
            </button>

            <button 
              className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all z-[110]"
              onClick={prevImage}
            >
              <ChevronLeft size={32} />
            </button>

            <button 
              className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all z-[110]"
              onClick={nextImage}
            >
              <ChevronRight size={32} />
            </button>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white p-2 rounded-2xl shadow-2xl flex flex-col max-h-full overflow-hidden">
                <div className="flex-1 overflow-hidden flex items-center justify-center bg-gray-50 rounded-xl">
                  <img 
                    src={filteredItems[selectedImageIndex].image} 
                    alt={filteredItems[selectedImageIndex].title[language]}
                    className="max-h-full w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4 md:p-6 text-center shrink-0">
                  <span className="inline-block px-3 py-1 bg-gray-100 rounded-lg text-[10px] font-bold text-gray-500 mb-2 uppercase tracking-widest">
                    {filteredItems[selectedImageIndex].category}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-brand-dark mb-1 leading-tight">
                    {filteredItems[selectedImageIndex].title[language]}
                  </h3>
                  <p className="text-gray-400 font-medium text-sm">{filteredItems[selectedImageIndex].year}</p>
                </div>
              </div>
              
              <div className="mt-6 text-white/50 text-xs font-bold tracking-widest">
                {selectedImageIndex + 1} / {filteredItems.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Biografias = ({ language }: { language: Language }) => {
  const [selectedBiographyIndex, setSelectedBiographyIndex] = useState<number | null>(null);

  return (
    <div className="pb-24">
      {/* Dark Header Section */}
      <div className="bg-brand-dark pt-24 pb-20 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">{UI_TRANSLATIONS.biografias[language]}</span>
            <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></div>
          </div>
          <h2 className="font-serif text-6xl md:text-7xl font-bold mb-6">{UI_TRANSLATIONS.biografias[language]}</h2>
          <p className="text-white/60 italic text-lg">{UI_TRANSLATIONS.biographies_desc[language]}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-14 relative z-10">
        <div className="space-y-12">
          {MEETINGS.map((meeting, idx) => (
          <motion.div 
            key={meeting.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row items-center p-8 md:p-10 gap-8 cursor-pointer group"
            onClick={() => setSelectedBiographyIndex(idx)}
          >
            <div className="w-full md:w-[35%] shrink-0 relative overflow-hidden rounded-2xl">
              <img 
                src={meeting.image} 
                alt={meeting.title[language]} 
                className="w-full aspect-[4/3] object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 shadow-md"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-xl">
                  <Maximize2 size={24} className="text-brand-dark" />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg text-[11px] font-bold text-gray-400 mb-6 border border-gray-100">
                <Calendar size={14} className="opacity-70" />
                <span>{meeting.date}</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6 text-brand-dark leading-tight group-hover:text-brand-green transition-colors">{meeting.title[language]}</h3>
              <p className="text-gray-500 text-[14px] leading-relaxed mb-8 font-serif line-clamp-3">
                {meeting.description[language]}
              </p>
              <div className="flex items-center justify-between">
                {meeting.author && (
                  <div className="flex items-center gap-2 text-[11px] text-gray-400 font-medium italic">
                    <Users size={14} className="opacity-70" />
                    <span>Por : {meeting.author[language]}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-brand-green font-bold text-[10px] uppercase tracking-widest">
                  <span>{language === 'PT' ? 'Ler Relato Completo' : language === 'EN' ? 'Read Full Story' : 'Leggi Storia Completa'}</span>
                  <ChevronRight size={14} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        </div>
      </div>

      {/* Biography Modal */}
      <AnimatePresence>
        {selectedBiographyIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-dark/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedBiographyIndex(null)}
          >
            <button 
              className="absolute top-10 right-10 text-white/70 hover:text-white transition-colors z-[110]"
              onClick={() => setSelectedBiographyIndex(null)}
            >
              <X size={40} />
            </button>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row w-full max-h-[85vh]">
                <div className="w-full md:w-1/2 bg-gray-100 overflow-hidden">
                  <img 
                    src={MEETINGS[selectedBiographyIndex].image} 
                    alt={MEETINGS[selectedBiographyIndex].title[language]}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto bg-white scrollbar-thin scrollbar-thumb-gray-200">
                  <div className="flex items-center gap-2 text-gray-400 text-xs font-bold mb-6 tracking-[0.2em] uppercase">
                    <Calendar size={14} className="opacity-70" />
                    <span>{MEETINGS[selectedBiographyIndex].date}</span>
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-brand-dark leading-[1.1]">
                    {MEETINGS[selectedBiographyIndex].title[language]}
                  </h3>
                  <div className="w-12 h-1 bg-brand-green mb-8 rounded-full"></div>
                  <div className="text-gray-600 text-lg leading-relaxed font-serif whitespace-pre-line">
                    {MEETINGS[selectedBiographyIndex].description[language]}
                  </div>
                  {MEETINGS[selectedBiographyIndex].author && (
                    <div className="mt-12 pt-8 border-t border-gray-100 flex items-center gap-3 text-gray-400 italic">
                      <Users size={18} className="opacity-70" />
                      <span className="text-sm">Relato de: {MEETINGS[selectedBiographyIndex].author[language]}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Contato = ({ language }: { language: Language }) => (
  <div className="pt-32 pb-24">
    <SectionHeader 
      title={UI_TRANSLATIONS.contact_title[language]}
      subtitle={UI_TRANSLATIONS.contact_subtitle[language]}
    />
    <div className="max-w-7xl mx-auto px-4">
      {/* Hero-like contact background */}
      <div className="relative h-[400px] rounded-[40px] overflow-hidden mb-24">
        <div className="absolute inset-0 flex">
          <div className="w-1/4 bg-[#0F1A15]"></div>
          <div className="w-1/4 bg-[#1A1010]"></div>
          <div className="w-1/4 bg-[#0F1A15]"></div>
          <div className="w-1/4 bg-[#1A1A10]"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="font-serif text-6xl font-bold text-white mb-6">{UI_TRANSLATIONS.contact_title[language]}</h2>
          <p className="text-gray-400 italic max-w-2xl">{UI_TRANSLATIONS.contact_subtitle[language]}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-12">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 shadow-sm">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">{UI_TRANSLATIONS.location[language]}</p>
              <h4 className="font-bold text-xl">Botucatu, São Paulo - SP</h4>
              <p className="text-gray-400 text-sm">{UI_TRANSLATIONS.brazil[language]}</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 shadow-sm">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">{UI_TRANSLATIONS.official_email[language]}</p>
              <h4 className="font-bold text-xl underline decoration-brand-green decoration-2 underline-offset-4">familia@colautto.com</h4>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 shadow-sm">
              <Globe size={24} />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">{UI_TRANSLATIONS.origins[language]}</p>
              <h4 className="font-bold text-xl">Portogruaro, Veneto - {UI_TRANSLATIONS.italy[language]}</h4>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-50/50 rounded-full -mr-16 -mt-16 border border-red-100 flex items-center justify-center p-8">
             <Heart size={48} className="text-red-100 fill-red-50" />
          </div>
          <h3 className="font-serif text-3xl font-bold mb-8">{UI_TRANSLATIONS.our_legacy[language]}</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            {UI_TRANSLATIONS.legacy_desc[language]}
          </p>
          <div className="flex gap-1">
            <div className="w-8 h-1 bg-brand-green rounded-full"></div>
            <div className="w-8 h-1 bg-brand-red rounded-full"></div>
            <div className="w-8 h-1 bg-brand-yellow rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function App() {
  const [section, setSection] = useState<Section>('inicio');
  const [language, setLanguage] = useState<Language>('PT');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [section]);

  const renderSection = () => {
    switch (section) {
      case 'inicio': return <Inicio setSection={setSection} language={language} />;
      case 'tempo': return <Tempo language={language} />;
      case 'historia': return <Historia language={language} />;
      case 'arvore': return <Arvore language={language} />;
      case 'membros': return <Membros language={language} />;
      case 'galeria': return <Galeria language={language} />;
      case 'biografias': return <Biografias language={language} />;
      case 'contato': return <Contato language={language} />;
      default: return <Inicio setSection={setSection} language={language} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Color Bar */}
      <div className="fixed top-0 left-0 w-full h-1.5 z-[60] flex">
        <div className="flex-1 bg-brand-green"></div>
        <div className="flex-1 bg-brand-red"></div>
        <div className="flex-1 bg-brand-yellow"></div>
      </div>

      <Navbar activeSection={section} setSection={setSection} language={language} setLanguage={setLanguage} />
      
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={section}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Color Bar */}
      <div className="w-full h-1.5 flex">
        <div className="flex-1 bg-brand-green"></div>
        <div className="flex-1 bg-brand-red"></div>
        <div className="flex-1 bg-brand-yellow"></div>
      </div>
      
      <Footer language={language} />
    </div>
  );
}
