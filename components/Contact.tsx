
import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';
import { MapPin, Phone, MessageSquare, Send, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', whatsapp: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend or redirect to WhatsApp
    const message = `Olá Dra. Vânia, meu nome é ${formData.name}. Gostaria de orientações: ${formData.message}`;
    window.open(`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-beige-soft">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Agende sua Orientação Previdenciária</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Estamos prontos para analisar seu caso com o cuidado e a dedicação que você merece. Entre em contato pelos canais abaixo ou envie uma mensagem direta.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gold-deep p-3 rounded-lg text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Endereço</h4>
                  <p className="text-gray-600">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gold-deep p-3 rounded-lg text-white">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">WhatsApp</h4>
                  <p className="text-gray-600">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gold-deep p-3 rounded-lg text-white">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email</h4>
                  <p className="text-gray-600">contato@vaniaribeiroadv.com.br</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white h-64 w-full">
               <iframe 
                src={CONTACT_INFO.googleMapsUrl} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Localização Vânia Ribeiro Advocacia"
               ></iframe>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center space-x-2">
              <MessageSquare className="text-gold-dark" />
              <span>Envie sua Mensagem</span>
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Seu Nome Completo</label>
                <input 
                  type="text" 
                  required
                  placeholder="Ex: Maria da Silva"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-deep focus:ring-2 focus:ring-gold-soft outline-none transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">WhatsApp com DDD</label>
                <input 
                  type="tel" 
                  required
                  placeholder="(62) 99999-9999"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-deep focus:ring-2 focus:ring-gold-soft outline-none transition-all"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Como podemos ajudar?</label>
                <textarea 
                  rows={4} 
                  required
                  placeholder="Conte um pouco sobre seu caso..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-deep focus:ring-2 focus:ring-gold-soft outline-none transition-all resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gold-deep text-white py-4 rounded-xl font-bold text-lg hover-gold-deep transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-gold-deep/20"
              >
                <Send size={20} />
                <span>Solicitar Orientação Previdenciária</span>
              </button>

              <p className="text-[11px] text-gray-400 text-center leading-tight mt-4">
                Seus dados estão seguros e serão utilizados exclusivamente para o contato inicial sobre o seu caso previdenciário.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
