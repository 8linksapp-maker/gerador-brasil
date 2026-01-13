import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesGrid from '../components/ServicesGrid';
import { useSiteData } from '../hooks/useSiteData';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Home = () => {
  const { data: site } = useSiteData();
  const { about, services, contact } = site.pages.home;
  const { title, description } = site.seo.pages.home;

  return (
    <div className="flex flex-col min-h-screen pt-12 md:pt-0">
      <SEO title={title} description={description} />
      <HeroSection />

      {/* About Teaser */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-primary font-bold tracking-wide uppercase">Diferenciais</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl">
              {about.title}
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              {about.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {about.highlights.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl font-bold text-primary mb-4">{item.value}</div>
                <div className="text-gray-600 font-medium text-lg uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">{services.title}</h2>
            <p className="mt-4 text-xl text-gray-500">{services.subtitle}</p>
          </div>
          <ServicesGrid limit={3} />
          <div className="mt-16 text-center">
            <Link to="/servicos" className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all transform hover:scale-105">
              Ver Todos os Modelos
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-extrabold text-white sm:text-5xl mb-6">
            {contact.title}
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
            {contact.subtitle}
          </p>
          <Link to="/contato" className="inline-block bg-white text-primary font-bold py-4 px-10 rounded-lg shadow-xl hover:bg-gray-50 transition transform hover:scale-105 hover:-translate-y-1">
            {contact.formTitle}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;