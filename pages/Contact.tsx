import React from 'react';
import { useSiteData } from '../hooks/useSiteData';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
  const { data: site } = useSiteData();
  const { contact, openingHours } = site.settings;
  const { title, description } = site.seo.pages.contato;

  return (
    <div className="bg-gray-50 min-h-screen py-20 pt-28 md:pt-20">
      <SEO title={title} description={description} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-16">Fale Conosco</h1>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-xl p-10 h-fit border border-gray-100">
            <h2 className="text-2xl font-bold text-foreground mb-8">Informações de Contato</h2>
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="bg-primary/10 p-3 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">Telefone & WhatsApp</h3>
                  <p className="text-gray-600 font-medium mt-1">{contact.phone}</p>
                  <p className="text-gray-600 font-medium">{contact.whatsapp}</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="bg-primary/10 p-3 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                   <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">E-mail</h3>
                  <p className="text-gray-600 font-medium mt-1">{contact.email}</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-primary/10 p-3 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">Endereço</h3>
                  <p className="text-gray-600 font-medium mt-1">
                    {contact.address.street}, {contact.address.neighborhood}<br />
                    {contact.address.city} - {contact.address.state}<br />
                    CEP: {contact.address.zipCode}
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-primary/10 p-3 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">Horário de Atendimento</h3>
                  <p className="text-gray-600 font-medium mt-1">{openingHours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
            <h2 className="text-2xl font-bold text-foreground mb-6">Solicite seu Orçamento</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Nome Completo</label>
                <input type="text" className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow bg-gray-50 focus:bg-white" placeholder="Seu nome" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Telefone</label>
                  <input type="tel" className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow bg-gray-50 focus:bg-white" placeholder="(21) 99999-9999" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">E-mail</label>
                  <input type="email" className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow bg-gray-50 focus:bg-white" placeholder="seu@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Tipo de Serviço</label>
                <select className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow bg-gray-50 focus:bg-white">
                  <option>Selecione uma opção</option>
                  <option>Aluguel Diário</option>
                  <option>Aluguel Mensal</option>
                  <option>Manutenção</option>
                  <option>Emergência</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Mensagem</label>
                <textarea rows={4} className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow bg-gray-50 focus:bg-white" placeholder="Descreva sua necessidade (potência, local, data)..."></textarea>
              </div>
              <button type="button" className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1">
                Enviar Solicitação
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;