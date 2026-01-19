
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Star, MapPin, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background with optimized overlay for text legibility */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop" 
          alt="Escritório de Advocacia" 
          className="w-full h-full object-cover object-center"
        />
        {/* Stronger overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        <div className="absolute inset-0 bg-white/20"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 mb-6 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gold-soft/30 shadow-sm">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">Avaliação 5,0 no Google</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-8">
            Sua Aposentadoria com <br className="hidden md:block" />
            <span className="text-gold-dark italic">Segurança e Clareza</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed max-w-2xl font-light">
            Atendimento jurídico especializado em <span className="font-semibold text-slate-900">Direito Previdenciário</span>. Orientação humana para garantir o benefício que você construiu durante toda a vida.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href={CONTACT_INFO.whatsappUrl}
              className="bg-[#826952] text-white px-10 py-5 rounded-full font-bold text-center hover:bg-[#6d5844] transition-all shadow-xl hover:shadow-[#826952]/30 flex items-center justify-center space-x-2 group text-lg"
            >
              <span>Falar com Especialista</span>
              <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#servicos"
              className="bg-white/80 backdrop-blur-sm border-2 border-gold-soft/50 text-gold-dark px-10 py-5 rounded-full font-bold text-center hover:bg-white transition-all flex items-center justify-center text-lg shadow-sm"
            >
              Conhecer Serviços
            </a>
          </div>

          <div className="mt-16 flex items-center space-x-6 text-slate-700">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-beige-accent flex items-center justify-center text-gold-dark">
                <MapPin size={20} />
              </div>
              <span className="text-sm font-bold uppercase tracking-wide">Aparecida de Goiânia – GO</span>
            </div>
            <div className="h-10 w-px bg-gold-soft/30 hidden md:block"></div>
            <div className="hidden md:block">
              <span className="text-xs font-medium text-gray-500 block uppercase mb-1">Especialidade</span>
              <span className="text-sm font-bold text-slate-900 uppercase">Aposentadoria e Benefícios INSS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
