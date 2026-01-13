import React from 'react';
import { Link } from 'react-router-dom';
import { useSiteData } from '../hooks/useSiteData';
import { ArrowRight, Zap } from 'lucide-react';

const ServicesGrid = ({ limit }: { limit?: number }) => {
  const { data: site } = useSiteData();
  const services = limit ? site.services.slice(0, limit) : site.services;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <div key={service.id} className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col group hover:-translate-y-2">
          <div className="h-56 bg-gray-200 overflow-hidden relative">
            {service.image ? (
               <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-50">
                <Zap className="h-12 w-12 text-primary/40" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity"></div>
            <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold tracking-wide">{service.name}</h3>
            <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              Ver Detalhes
            </div>
          </div>
          
          <div className="p-6 flex-1 flex flex-col">
            <p className="text-gray-600 mb-6 flex-1 leading-relaxed">
              {service.shortDescription}
            </p>
            
            <div className="mt-auto border-t border-gray-100 pt-4">
              <Link 
                to={`/servicos/${service.slug}`}
                className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition group-hover:gap-2"
              >
                Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesGrid;