
import React, { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../constants';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-md border-b border-gray-100 py-4'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">
            Vânia Ribeiro
          </span>
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold text-gold-dark">
            Advocacia Previdenciária
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-sm font-semibold text-gray-700 hover:text-gold-dark transition-colors">Início</a>
          <a href="#sobre" className="text-sm font-semibold text-gray-700 hover:text-gold-dark transition-colors">Sobre</a>
          <a href="#servicos" className="text-sm font-semibold text-gray-700 hover:text-gold-dark transition-colors">Atuação</a>
          <a 
            href={CONTACT_INFO.whatsappUrl} 
            className="bg-[#826952] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#6d5844] transition-all transform hover:scale-105 shadow-md"
          >
            Falar com Especialista
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-900" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-2xl border-t border-gray-100 py-6 px-4 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-gray-800 font-bold text-lg border-b border-gray-50 pb-2">Início</a>
          <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-gray-800 font-bold text-lg border-b border-gray-50 pb-2">Sobre</a>
          <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="text-gray-800 font-bold text-lg border-b border-gray-50 pb-2">Atuação</a>
          <a href="#contato" onClick={() => setIsMenuOpen(false)} className="text-gray-800 font-bold text-lg border-b border-gray-50 pb-2">Contato</a>
          <a 
            href={CONTACT_INFO.whatsappUrl} 
            className="bg-[#826952] text-white text-center py-4 rounded-xl font-bold flex items-center justify-center space-x-2 shadow-lg"
          >
            <Phone size={18} />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
