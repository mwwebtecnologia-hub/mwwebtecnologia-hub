
import React from 'react';
import { Star, Quote } from 'lucide-react';

const SocialProof: React.FC = () => {
  const reviews = [
    { name: "Maria Oliveira", text: "Dra. Vânia é uma profissional excelente. Explicou tudo com muita paciência e conseguiu minha aposentadoria antes do que eu imaginava." },
    { name: "José Santos", text: "Fui muito bem atendido. Clareza total nas informações. Recomendo para todos que buscam segurança jurídica." },
    { name: "Ana Paula Silva", text: "Atendimento nota mil! Humanizada e muito competente. Resolveu meu problema com o INSS que parecia não ter fim." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
            </div>
            <span className="text-2xl font-bold text-gray-900">5.0</span>
          </div>
          <h3 className="text-3xl font-bold text-center">O que nossos clientes dizem no Google</h3>
          <p className="text-gray-500 mt-2">Mais de 20 avaliações com satisfação máxima</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-beige-soft p-8 rounded-2xl border border-gray-100 relative">
              <Quote className="absolute top-4 right-4 text-gold-soft opacity-30" size={40} />
              <div className="flex text-yellow-500 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">"{review.text}"</p>
              <div className="font-bold text-gray-900 flex items-center space-x-2">
                <div className="w-8 h-1 bg-gold-dark rounded"></div>
                <span>{review.name}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="text-gold-dark font-bold hover:underline">Ver todas as avaliações no Google</a>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
