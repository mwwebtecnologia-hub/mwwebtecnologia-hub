
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Differentials: React.FC = () => {
  const diffs = [
    "Atendimento humanizado e focado na sua história",
    "Linguagem clara, direta e acessível para todos",
    "Atuação pautada na ética e responsabilidade da OAB",
    "Análise técnica individualizada de cada documento",
    "Acompanhamento em todas as etapas administrativas e judiciais",
    "Foco absoluto em resultados sustentáveis e seguros"
  ];

  return (
    <section className="py-20 bg-gold-deep text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Por que escolher Vânia Ribeiro Advocacia?</h2>
            <div className="space-y-4">
              {diffs.map((diff, i) => (
                <div key={i} className="flex items-center space-x-3 group">
                  <div className="bg-white/10 p-1 rounded-full group-hover:bg-white/20 transition-colors">
                    <CheckCircle2 size={24} className="text-beige-accent" />
                  </div>
                  <span className="text-lg md:text-xl font-medium">{diff}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <h4 className="text-2xl font-bold mb-6 italic">"A segurança do seu futuro começa com uma orientação clara hoje."</h4>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gold-dark border-2 border-white/20"></div>
                <div>
                  <p className="font-bold">Vânia Ribeiro</p>
                  <p className="text-sm text-white/70">OAB/GO 12.345 (Exemplo)</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-white/20 rounded-tr-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-white/20 rounded-bl-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
