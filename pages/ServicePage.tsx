import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useSiteData } from '../hooks/useSiteData';
import { Check, ChevronRight, HelpCircle } from 'lucide-react';
import SEO from '../components/SEO';

const ServicePage = () => {
  const { slug } = useParams();
  const { data: site } = useSiteData();
  const service = site.services.find(s => s.slug === slug);

  if (!service) return <Navigate to="/404" replace />;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: site.settings.companyName,
    },
    areaServed: { '@type': 'City', name: site.settings.contact.address.city },
  };

  const faqSchema = service.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  } : null;

  return (
    <div className="bg-background min-h-screen pb-20 pt-16 md:pt-0">
      <SEO 
        title={service.name} 
        description={service.shortDescription}
        image={service.image}
        schema={[serviceSchema, faqSchema].filter(Boolean) as object[]}
      />
      {/* Service Hero */}
      <div className="bg-foreground text-white py-24 relative overflow-hidden">
        {service.image && (
          <div className="absolute inset-0 z-0">
             <img src={service.image} alt={service.name} className="w-full h-full object-cover opacity-30" />
             <div className="absolute inset-0 bg-gradient-to-t from-foreground to-transparent"></div>
          </div>
        )}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-10">
          <div className="flex items-center text-sm text-gray-400 mb-6">
             <Link to="/" className="hover:text-primary transition-colors">Home</Link>
             <ChevronRight size={14} className="mx-2" />
             <Link to="/servicos" className="hover:text-primary transition-colors">Serviços</Link>
             <ChevronRight size={14} className="mx-2" />
             <span className="text-primary font-semibold">{service.name}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">{service.headline}</h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">{service.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2">
          
          {/* Benefits */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-foreground mb-6">Por que escolher este modelo?</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mr-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  </div>
                  <span className="text-gray-700 font-medium pt-1">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          {service.howItWorks.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-8">Como funciona a locação</h3>
              <div className="space-y-8">
                {service.howItWorks.map((step) => (
                  <div key={step.number} className="flex relative">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 relative">
                      {step.number}
                    </div>
                    {/* Connector Line (visual only) */}
                    <div className="ml-6">
                      <h4 className="text-lg font-bold text-foreground">{step.title}</h4>
                      <p className="mt-2 text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQs */}
          {service.faqs.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Perguntas Frequentes</h3>
              <div className="space-y-4">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:border-primary/50 transition-colors">
                    <h5 className="flex items-center font-bold text-foreground mb-2">
                      <HelpCircle size={18} className="mr-2 text-primary" />
                      {faq.question}
                    </h5>
                    <p className="text-gray-600 ml-7">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 sticky top-28">
            <h3 className="text-xl font-bold text-foreground mb-4">Interessado neste Gerador?</h3>
            <p className="text-gray-600 mb-6 text-sm">Preencha o formulário ou entre em contato direto pelo WhatsApp para um orçamento rápido.</p>
            
            <a 
              href={`https://wa.me/${site.settings.contact.whatsapp.replace(/\D/g,'')}`} 
              target="_blank"
              rel="noreferrer"
              className="w-full bg-green-500 text-white font-bold py-4 px-4 rounded-lg flex items-center justify-center mb-4 hover:bg-green-600 transition shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-0.5"
            >
              Falar no WhatsApp
            </a>
            
            <Link 
              to="/contato" 
              className="w-full bg-primary text-white font-bold py-4 px-4 rounded-lg flex items-center justify-center hover:bg-primary-dark transition shadow-lg hover:shadow-primary/30 transform hover:-translate-y-0.5"
            >
              Solicitar Orçamento
            </Link>

            <div className="mt-8 pt-6 border-t border-gray-100">
               <p className="text-sm font-semibold text-gray-500 mb-4">Outros Modelos:</p>
               <ul className="space-y-3">
                 {site.services.filter(s => s.id !== service.id).slice(0, 4).map(s => (
                   <li key={s.id}>
                     <Link to={`/servicos/${s.slug}`} className="text-primary hover:text-primary-dark hover:underline text-sm font-medium flex items-center">
                       <ChevronRight size={12} className="mr-1" />
                       {s.name}
                     </Link>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;