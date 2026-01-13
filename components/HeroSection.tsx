import React from 'react';
import { Link } from 'react-router-dom';
import { useSiteData } from '../hooks/useSiteData';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const { data: site } = useSiteData();
  const { hero } = site.pages.home;
  
  return (
    <div className="relative bg-foreground overflow-hidden">
      {hero.backgroundImage && (
        <div className="absolute inset-0">
          <img 
            className="w-full h-full object-cover opacity-30 animate-fade-in" 
            src={hero.backgroundImage} 
            alt="Gerador de Energia" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>
      )}
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 flex flex-col justify-center min-h-[650px] mt-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl mb-8 max-w-3xl drop-shadow-md">
          {hero.title}
        </h1>
        <p className="mt-4 text-xl text-gray-200 max-w-2xl leading-relaxed drop-shadow-sm">
          {hero.subtitle}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            to={hero.ctaLink}
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-primary hover:bg-primary-dark transition-all transform hover:scale-105 shadow-xl hover:shadow-primary/30"
          >
            {hero.ctaText}
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            to="/servicos"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 backdrop-blur-sm text-lg font-medium rounded-lg text-white hover:bg-white/10 transition-all transform hover:scale-105"
          >
            Ver Modelos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;