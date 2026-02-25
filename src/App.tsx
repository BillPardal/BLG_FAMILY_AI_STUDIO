/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Image as ImageIcon, 
  Calendar, 
  MapPin, 
  Mail, 
  Globe, 
  ChevronRight, 
  Search, 
  Maximize2,
  Users,
  History,
  Clock,
  Menu,
  X,
  Heart
} from 'lucide-react';
import { Section, Member, HistoryEvent, GalleryItem, Meeting } from './types';
import { MEMBERS, HISTORY, GALLERY, MEETINGS } from './constants';

const Navbar = ({ activeSection, setSection }: { activeSection: Section, setSection: (s: Section) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: Section; label: string }[] = [
    { id: 'inicio', label: 'Início' },
    { id: 'tempo', label: 'Tempo' },
    { id: 'historia', label: 'História' },
    { id: 'arvore', label: 'Árvore' },
    { id: 'membros', label: 'Membros' },
    { id: 'galeria', label: 'Galeria' },
    { id: 'encontros', label: 'Encontros' },
    { id: 'contato', label: 'Contato' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
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
            <h1 className="font-serif font-bold text-lg leading-tight">Família Colautto</h1>
            <div className="flex items-center gap-1 text-[10px] text-gray-500 font-medium">
              <span>1860</span>
              <div className="flex gap-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSection(item.id)}
              className={`text-sm font-medium transition-colors relative py-1 ${activeSection === item.id ? 'text-brand-dark' : 'text-gray-500 hover:text-brand-dark'}`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-dark" />
              )}
            </button>
          ))}
          <div className="flex items-center gap-2 ml-4">
            <button className="px-2 py-1 bg-brand-dark text-white text-[10px] font-bold rounded">PT</button>
            <button className="px-2 py-1 text-gray-500 text-[10px] font-bold hover:text-brand-dark">EN</button>
            <button className="px-2 py-1 text-gray-500 text-[10px] font-bold hover:text-brand-dark">ITA</button>
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
            className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col items-center gap-4"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setSection(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-lg font-medium ${activeSection === item.id ? 'text-brand-green' : 'text-gray-600'}`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-brand-dark text-white py-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col items-center text-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full opacity-80">
              <path d="M50 5L15 20V50C15 70 50 95 50 95C50 95 85 70 85 50V20L50 5Z" fill="#FDFCF0" stroke="#E5E1D8" strokeWidth="1"/>
              <text x="22" y="62" fill="#008C45" fontFamily="serif" fontWeight="bold" fontSize="38">C</text>
              <text x="52" y="62" fill="#CD212A" fontFamily="serif" fontWeight="bold" fontSize="38">L</text>
            </svg>
          </div>
          <h2 className="font-serif font-bold text-xl">Família Colautto</h2>
        </div>
        <p className="text-gray-400 text-sm max-w-md">
          Preservando a história, honrando o passado.
        </p>
        <div className="w-full h-px bg-white/10 my-4"></div>
        <div className="flex flex-col md:flex-row justify-between w-full items-center gap-4 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
          <span>© 2026 Família Colautto.</span>
          <button className="hover:text-white transition-colors">ADMIN</button>
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

const Inicio = ({ setSection }: { setSection: (s: Section) => void }) => (
  <div className="pt-20">
    {/* Hero Section */}
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/d/1GXJ0sFgJdT9zmCkN2Nzjz4XSzK3EpkJh" 
          alt="Família Colautto" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-dark/80 backdrop-blur-sm text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-8">
          <span className="text-brand-green">ITÁLIA</span>
          <span className="opacity-30">—</span>
          <span className="text-brand-yellow">BRASIL</span>
          <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow ml-1"></div>
        </div>
        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-8 leading-tight text-white drop-shadow-lg">
          Bem-vindo ao Arquivo da Família Colautto
        </h1>
        <p className="text-xl text-white mb-10 italic font-bold drop-shadow-md">
          Um espaço dedicado a preservar e compartilhar a herança, as memórias e a jornada da nossa família.
        </p>
        <button 
          onClick={() => setSection('tempo')}
          className="px-12 py-4 bg-white text-brand-dark rounded-full font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-brand-dark hover:text-white transition-all flex items-center gap-3 mx-auto shadow-xl"
        >
          Explorar Nossa História <span className="text-lg">→</span>
        </button>
      </div>
    </section>

    {/* Quick Links */}
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { id: 'arvore', label: 'Árvore', icon: <BookOpen size={32} />, color: 'bg-white' },
          { id: 'galeria', label: 'Galeria', icon: <ImageIcon size={32} />, color: 'bg-white' },
          { id: 'encontros', label: 'Encontros', icon: <Calendar size={32} />, color: 'bg-white' },
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

    {/* Next Meetings */}
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Calendar size={20} className="text-gray-400" />
          <h2 className="font-serif text-3xl font-bold">Próximos Encontros</h2>
        </div>
        <div className="w-1/2 h-px bg-gray-100 mx-auto mb-12"></div>
        <p className="text-gray-400 italic">Nenhum encontro agendado.</p>
      </div>
    </section>
  </div>
);

const Tempo = () => (
  <div className="pt-32 pb-24">
    <SectionHeader 
      badge="Origens & Legado"
      title="Tempo"
      subtitle="Uma jornada através das gerações"
    />
    
    <div className="max-w-4xl mx-auto px-4">
      <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-xl mb-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-8 bg-brand-green rounded-full"></div>
          <h3 className="font-serif text-3xl font-bold">As Origens no Veneto</h3>
        </div>
        <p className="text-gray-600 mb-12 leading-relaxed">
          Nossos antepassados partiram de "Portogruaro" da região do Veneto, na Itália, em um período de grandes transformações na Europa. Deixaram para trás suas vilas e tradições centenárias para enfrentar o desconhecido mar em busca de dignidade.
        </p>
        <div className="relative rounded-3xl overflow-hidden mb-12 shadow-inner">
          <img 
            src="https://picsum.photos/seed/map-veneto/1200/800?grayscale" 
            alt="Mapa Veneto" 
            className="w-full aspect-video object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 border-[20px] border-white/20 pointer-events-none"></div>
        </div>
        <blockquote className="border-l-4 border-gray-200 pl-8 py-4 italic text-2xl text-gray-500 font-serif relative">
          <span className="absolute -left-4 -top-4 text-6xl text-gray-100 opacity-50">“</span>
          “Honrar o passado é a fundação sobre a qual construímos o futuro da nossa linhagem.”
        </blockquote>
      </div>

      <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-xl">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-8 bg-brand-yellow rounded-full"></div>
          <h3 className="font-serif text-3xl font-bold">A Chegada ao Brasil</h3>
        </div>
        <p className="text-gray-600 mb-12 leading-relaxed">
          Em busca de novas oportunidades, a família desembarcou no Porto de Santos e estabeleceu raízes profundas no solo brasileiro. Do trabalho árduo nas lavouras ao crescimento nas cidades, cada geração Colautto contribuiu para o progresso desta nova pátria.
        </p>
        <div className="relative rounded-3xl overflow-hidden mb-16 shadow-lg">
          <img 
            src="https://picsum.photos/seed/arrival/800/1200?grayscale" 
            alt="Chegada ao Brasil" 
            className="w-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Timeline dots */}
        <div className="space-y-12 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100">
          {[
            { year: '1895', title: 'Partida de Gênova', color: 'bg-brand-green' },
            { year: '1895', title: 'Chegada ao Porto de Santos', color: 'bg-brand-yellow', badge: 'CHEGADA AO BRASIL' },
            { year: '1920', title: 'Estabelecimento no Interior (Botucatu - SP)', color: 'bg-brand-green' },
            { year: '1932', title: 'A vida na Roça - adaptação ao país (Sítio Boa Vista - Botucatu - SP)', color: 'bg-brand-dark' },
            { year: '1931 - 1950', title: 'Criação da Família - Filhos - (Sítio Bela Vista - Botucatu - SP)', color: 'bg-brand-dark' },
            { year: '1960', title: 'Novos Rumos - continuidade da família (São Paulo - Capital)', color: 'bg-brand-red' },
            { year: '2007', title: 'Retorno às Origens (Visita à Itália - Porto Gruaro)', color: 'bg-gray-400' },
            { year: '2024', title: 'Preservação do Legado Digital (Documentos e digitalização de nossa história)', color: 'bg-brand-green' },
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

const Historia = () => (
  <div className="pt-32 pb-24">
    <SectionHeader 
      badge="História"
      title="História"
    />
    <div className="max-w-4xl mx-auto px-4">
      <div className="flex gap-8 mb-16 items-start">
        <span className="font-serif text-8xl text-brand-dark leading-none mt-2">A</span>
        <p className="text-lg text-gray-600 leading-relaxed pt-4">
          história da família Colautto é um testemunho de coragem, resiliência e a busca incessante por um futuro melhor. Tudo começou nas terras férteis do norte da Itália.
        </p>
      </div>

      <div className="space-y-12">
        {HISTORY.map((event, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-lg flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="w-full md:w-1/3 relative group">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full aspect-[4/3] object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-lg">
                  <Search size={20} className="text-brand-dark" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <div className="flex items-center gap-2 text-gray-400 text-xs font-bold mb-4">
                <Clock size={14} />
                <span>{event.year}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">{event.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const Arvore = () => (
  <div className="pt-32 pb-24 min-h-screen">
    <SectionHeader 
      title="Árvore"
    />
    <div className="max-w-7xl mx-auto px-4">
      <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden relative min-h-[800px] flex flex-col">
        <div className="p-8 border-b border-gray-100 flex justify-center">
          <div className="px-6 py-2 bg-gray-50 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
            Selecione um membro na árvore.
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
                <p className="text-[8px] text-gray-400 uppercase font-bold mt-1">PATRIARCAS</p>
              </div>
              <div className="absolute top-full left-1/2 w-px h-16 bg-gray-200 -translate-x-1/2"></div>
            </div>

            {/* Level 1 */}
            <div className="flex gap-12 relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-gray-200 -translate-y-8"></div>
              {[
                { name: 'Antonio Colautto', role: 'FILHO' },
                { name: 'Amabilie Colautto', role: 'FILHA' },
                { name: 'Angelina Colautto', role: 'FILHA' },
                { name: 'Josefina Colautto', role: 'FILHA' },
                { name: 'Ângelo Colautto Filho', role: 'FILHO' },
                { name: 'Jose Colautto', role: 'FILHO' },
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
                { name: 'Nelson Colautto', role: 'NETO' },
                { name: 'Leonilda Colautto', role: 'NETA' },
                { name: 'Anaite Colautto', role: 'NETA' },
                { name: 'Irma Colautto', role: 'NETA' },
                { name: 'Geraldo Colautto', role: 'NETO' },
                { name: 'Angelino Colautto', role: 'NETO' },
                { name: 'Maria Augusta Colautto', role: 'NETA' },
                { name: 'Roberto Colautto', role: 'NETO' },
                { name: 'José Celio Colautto', role: 'NETO' },
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
                { name: 'Débora Colautto', role: 'BISNETA' },
                { name: 'Luiz Eduardo Colautto', role: 'BISNETO' },
                { name: 'Jonatas Jose Colautto', role: 'BISNETO' },
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

const Membros = () => (
  <div className="pt-32 pb-24">
    <SectionHeader 
      title="Membros da Família"
      subtitle="Conheça as pessoas que fazem parte da nossa história."
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
              {member.tags?.includes('Raízes') && (
                <span className="px-2 py-0.5 bg-gray-100 text-[8px] font-bold rounded uppercase tracking-widest text-gray-500">Raízes</span>
              )}
            </div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">{member.role}</p>
            {member.spouse && (
              <div className="flex items-center gap-2 px-3 py-2 bg-red-50/50 rounded-xl mb-4">
                <Heart size={12} className="text-brand-red fill-brand-red" />
                <span className="text-[10px] font-medium text-brand-red">Cônjuge: {member.spouse}</span>
              </div>
            )}
            {member.bio && <p className="text-[10px] text-gray-500 italic leading-relaxed">{member.bio}</p>}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const Galeria = () => {
  const [filter, setFilter] = useState<string>('TODOS');
  const categories = ['TODOS', 'LOCAL', 'PESSOAS', 'EVENTOS', 'DOCUMENTOS'];

  const filteredItems = filter === 'TODOS' 
    ? GALLERY 
    : GALLERY.filter(item => item.category.toUpperCase() === filter);

  return (
    <div className="pt-32 pb-24">
      <SectionHeader 
        title="Galeria de Fotos"
        subtitle="Momentos eternizados através das gerações da família Colautto."
      />
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${filter === cat ? 'bg-brand-dark text-white shadow-lg' : 'bg-white text-gray-400 hover:bg-gray-50 border border-gray-100'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {filteredItems.map((item) => (
            <motion.div 
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md group"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-xl">
                    <Search size={20} className="text-brand-dark" />
                  </div>
                </div>
              </div>
              <div className="p-4 text-center">
                <h4 className="font-bold text-xs mb-1 truncate">{item.title}</h4>
                <p className="text-[10px] text-gray-400 font-medium">{item.year}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button className="px-10 py-4 bg-brand-dark text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-brand-dark/90 transition-colors shadow-xl">
            Carregar Mais
          </button>
        </div>
      </div>
    </div>
  );
};

const Encontros = () => (
  <div className="pt-32 pb-24">
    <SectionHeader 
      badge="Encontros"
      title="Encontros da Família"
      subtitle="Momentos de união e celebração da nossa história."
    />
    <div className="max-w-4xl mx-auto px-4">
      {MEETINGS.map((meeting) => (
        <motion.div 
          key={meeting.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row"
        >
          <div className="p-12 md:w-1/2">
            <div className="inline-block px-3 py-1 bg-gray-100 rounded-lg text-[10px] font-bold text-gray-500 mb-6">{meeting.date}</div>
            <h3 className="font-serif text-3xl font-bold mb-6">{meeting.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">{meeting.description}</p>
          </div>
          <div className="md:w-1/2 p-8">
            <img 
              src={meeting.image} 
              alt={meeting.title} 
              className="w-full h-full object-cover rounded-3xl grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const Contato = () => (
  <div className="pt-32 pb-24">
    <SectionHeader 
      title="Entre em Contato"
      subtitle="Para dúvidas, sugestões ou compartilhamento de materiais históricos."
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
          <h2 className="font-serif text-6xl font-bold text-white mb-6">Entre em Contato</h2>
          <p className="text-gray-400 italic max-w-2xl">Para dúvidas, sugestões ou compartilhamento de materiais históricos.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-12">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 shadow-sm">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">Localização</p>
              <h4 className="font-bold text-xl">São Paulo - SP</h4>
              <p className="text-gray-400 text-sm">Brasil</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 shadow-sm">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">E-mail Oficial</p>
              <h4 className="font-bold text-xl underline decoration-brand-green decoration-2 underline-offset-4">familia@colautto.com</h4>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 shadow-sm">
              <Globe size={24} />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">Origens</p>
              <h4 className="font-bold text-xl">Veneto, Itália</h4>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-50/50 rounded-full -mr-16 -mt-16 border border-red-100 flex items-center justify-center p-8">
             <Heart size={48} className="text-red-100 fill-red-50" />
          </div>
          <h3 className="font-serif text-3xl font-bold mb-8">Nosso Legado</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            O arquivo da Família Colautto é mantido por voluntários dedicados à preservação da nossa história. Se você possui fotos antigas, documentos de imigração ou histórias que merecem ser contadas, por favor, entre em contato conosco.
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [section]);

  const renderSection = () => {
    switch (section) {
      case 'inicio': return <Inicio setSection={setSection} />;
      case 'tempo': return <Tempo />;
      case 'historia': return <Historia />;
      case 'arvore': return <Arvore />;
      case 'membros': return <Membros />;
      case 'galeria': return <Galeria />;
      case 'encontros': return <Encontros />;
      case 'contato': return <Contato />;
      default: return <Inicio setSection={setSection} />;
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

      <Navbar activeSection={section} setSection={setSection} />
      
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
      
      <Footer />
    </div>
  );
}
