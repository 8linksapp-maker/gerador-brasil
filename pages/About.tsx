import React from 'react';
import { useSiteData } from '../hooks/useSiteData';
import SEO from '../components/SEO';

const About = () => {
  const { data: site } = useSiteData();
  const { about } = site.pages.home;
  const { title, description } = site.seo.pages.sobre;

  return (
    <div className="bg-white min-h-screen py-16">
      <SEO title={title} description={description} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">{about.title}</h1>
        <div className="prose prose-blue prose-lg mx-auto text-gray-600">
          <p className="lead text-xl mb-6">{about.description}</p>
          <p>
            Desde a nossa fundação, a <strong>{site.settings.companyName}</strong> tem se dedicado a fornecer energia segura e confiável.
            Nosso compromisso vai além da simples locação; oferecemos uma consultoria completa para garantir que você tenha exatamente a potência necessária para seu projeto, sem desperdícios.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Nossa Missão</h3>
          <p>
            Garantir a continuidade das operações de nossos clientes através de soluções energéticas eficientes e sustentáveis.
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
           {about.highlights.map((h, i) => (
             <div key={i} className="text-center p-6 bg-blue-50 rounded-xl">
               <span className="block text-3xl font-bold text-blue-600 mb-2">{h.value}</span>
               <span className="text-gray-700 font-medium">{h.label}</span>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default About;