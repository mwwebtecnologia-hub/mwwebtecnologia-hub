
import React from 'react';
import { UserCheck, Shield, Heart, FileText } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-beige-accent rounded-3xl transform rotate-3 group-hover:rotate-1 transition-transform"></div>
            <img 
              src="https://picsum.photos/seed/lawyer_profile/800/1000" 
              alt="Dra. Vânia Ribeiro" 
              className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
            />
            <div className="absolute bottom-6 right-6 bg-white p-6 rounded-xl shadow-lg border-l-4 border-gold-deep max-w-xs hidden sm:block">
              <p className="italic text-gray-700 text-sm">
                "Minha missão é garantir que você receba o que é seu por direito, com dignidade e transparência."
              </p>
              <p className="mt-3 font-bold text-gold-dark">— Vânia Ribeiro</p>
            </div>
          </div>

          <div className="space-y-8">
            <header>
              <h2 className="text-sm uppercase tracking-widest text-gold-dark font-bold mb-3">Conheça sua Advogada</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Advogada Especialista em Direito Previdenciário e Aposentadoria
              </h3>
            </header>

            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                Dra. Vânia Ribeiro lidera uma advocacia focada no ser humano. Entendemos que atrás de cada processo existe uma história de vida e anos de trabalho árduo.
              </p>
              <p>
                Com atuação especializada em benefícios do INSS, nosso escritório prioriza a orientação correta e personalizada, evitando termos técnicos excessivos para que você se sinta seguro em cada decisão.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: UserCheck, title: "Atendimento Próximo", text: "Você fala direto com quem resolve." },
                { icon: Shield, title: "Ética e Transparência", text: "Clareza absoluta em cada etapa." },
                { icon: Heart, title: "Linguagem Humana", text: "Sem 'juridiquês' complicado." },
                { icon: FileText, title: "Análise Individual", text: "Seu caso é único para nós." },
              ].map((item, idx) => (
                <div key={idx} className="flex space-x-4 items-start">
                  <div className="bg-beige-accent p-2 rounded-lg text-gold-dark">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
