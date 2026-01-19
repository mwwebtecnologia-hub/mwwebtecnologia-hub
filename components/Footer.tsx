
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12 border-b border-white/10 pb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight text-white">Vânia Ribeiro <span className="text-gold-soft font-normal block text-sm tracking-[0.2em] uppercase">Advocacia Previdenciária</span></h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Especialista em garantir direitos previdenciários com humanização, clareza e transparência.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://instagram.com/vaniaribeiroadv" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gold-soft transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold-soft transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold-soft transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gold-soft uppercase tracking-wider text-sm">Links Úteis</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre a Dra. Vânia</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Áreas de Atuação</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gold-soft uppercase tracking-wider text-sm">Localização</h4>
            <p className="text-gray-400 text-sm mb-2">{CONTACT_INFO.address}</p>
            <p className="text-gray-400 text-sm mb-2">Aparecida de Goiânia – GO</p>
            <p className="text-gray-200 font-bold mt-4">{CONTACT_INFO.phone}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-center space-y-4 md:space-y-0 text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Vânia Ribeiro Advocacia. Todos os direitos reservados.</p>
          <p className="px-4 py-1 border border-white/10 rounded-full">{CONTACT_INFO.oabDisclaimer}</p>
          <p>Desenvolvido com foco em resultados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
