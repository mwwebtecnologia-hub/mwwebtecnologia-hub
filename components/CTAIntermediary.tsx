
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { MessageCircle } from 'lucide-react';

const CTAIntermediary: React.FC = () => {
  return (
    <section className="py-16 bg-beige-accent border-y border-beige-soft">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Não fique com dúvidas sobre sua aposentadoria.</h3>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Uma consulta inicial pode ser o diferencial entre uma aposentadoria negada e a segurança financeira que você merece.
        </p>
        <a 
          href={CONTACT_INFO.whatsappUrl}
          className="inline-flex items-center space-x-3 bg-green-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-green-700 transition-all shadow-xl hover:shadow-green-900/20 transform hover:-translate-y-1"
        >
          <MessageCircle size={28} />
          <span>Falar com Advogada Agora</span>
        </a>
      </div>
    </section>
  );
};

export default CTAIntermediary;
