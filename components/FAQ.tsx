
import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-gold-dark font-bold mb-4">Dúvidas Frequentes</h2>
          <h3 className="text-4xl font-bold text-gray-900">Perguntas Comuns do Público Previdenciário</h3>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-300 ${openIndex === index ? 'border-gold-soft bg-beige-soft shadow-sm' : 'border-gray-100 bg-white hover:border-gray-200'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 flex items-center justify-between group"
              >
                <div className="flex items-center space-x-4">
                  <HelpCircle className={`transition-colors ${openIndex === index ? 'text-gold-dark' : 'text-gray-400 group-hover:text-gold-dark'}`} size={20} />
                  <span className="text-lg font-bold text-gray-900">{item.question}</span>
                </div>
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gold-soft/20 pt-4 ml-9">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
