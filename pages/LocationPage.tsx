import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useSiteData } from '../hooks/useSiteData';
import { MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import ServicesGrid from '../components/ServicesGrid';
import SEO from '../components/SEO';

const LocationPage = () => {
  const { slug } = useParams();
  const { data: site } = useSiteData();
  const location = site.locations.find(l => l.slug === slug);

  if (!location) return <Navigate to="/404" replace />;

  return (
    <div className="min-h-screen bg-background pt-16 md:pt-0">
      <SEO 
        title={`${location.neighborhood} - ${location.city}`} 
        description={location.description}
      />
      {/* Location Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center mt-10">
           <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-8">
              <MapPin className="h-10 w-10 text-primary" />
           </div>
           <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">{location.headline}</h1>
           <p className="text-xl text-gray-600 max-w-2xl mx-auto">{location.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Why choose us in this location */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Atendimento Especializado em {location.neighborhood}
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              A <strong className="text-primary">{site.settings.companyName}</strong> possui equipes técnicas posicionadas estrategicamente para atender {location.city} e especificamente a região de {location.neighborhood} com agilidade. 
              Entendemos as necessidades locais e oferecemos soluções de energia temporária para obras, eventos e comércios.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700 font-medium">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                Entrega rápida na região
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                Instalação inclusa
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                Plantão técnico 24h
              </li>
            </ul>
            <div className="mt-10">
               <Link to="/contato" className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-dark transition-all inline-flex items-center shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1">
                 Pedir Orçamento para {location.neighborhood} <ArrowRight className="ml-2 h-5 w-5" />
               </Link>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 rotate-1 hover:rotate-0 transition-transform duration-500">
             <div className="h-80 bg-gray-100 rounded-xl flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-300">
                <MapPin size={64} className="text-primary mb-4" />
                <span className="text-xl font-medium text-gray-500">Mapa de Atuação</span>
                <span className="text-2xl font-bold text-foreground mt-2">{location.neighborhood}</span>
             </div>
          </div>
        </div>

        {/* Available Equipment */}
        <div className="mb-12">
           <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Geradores Disponíveis para {location.neighborhood}</h2>
           <ServicesGrid limit={3} />
        </div>

      </div>
    </div>
  );
};

export default LocationPage;