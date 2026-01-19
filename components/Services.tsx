
import React from 'react';
import { SERVICES } from '../constants';
import { BookOpen, Scale, History, Award, CheckCircle, HelpCircle } from 'lucide-react';

const icons = [Scale, History, Award, CheckCircle, BookOpen, HelpCircle];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-beige-soft">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-widest text-gold-dark font-bold mb-4">Áreas de Atuação</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Como Podemos Auxiliar Você</h3>
          <p className="text-lg text-gray-600">
            Oferecemos soluções jurídicas completas no âmbito previdenciário, sempre com foco na melhor estratégia para o seu futuro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1 group">
                <div className="w-14 h-14 bg-beige-accent rounded-xl flex items-center justify-center text-gold-dark mb-6 group-hover:bg-gold-deep group-hover:text-white transition-colors">
                  <Icon size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 pt-6 border-t border-gray-50 flex items-center text-gold-dark font-semibold text-sm cursor-pointer group-hover:translate-x-1 transition-transform">
                  Saiba mais sobre este serviço
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
