import React from 'react';
import { Link } from 'react-router-dom';
import { useSiteData } from '../hooks/useSiteData';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const { data: site } = useSiteData();
  const { companyName, slogan, contact, socialMedia } = site.settings;

  return (
    <footer className="bg-foreground text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-4">{companyName}</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {slogan}
            </p>
            <div className="flex space-x-4">
              {socialMedia.instagram && (
                <a href={socialMedia.instagram} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110">
                  <Instagram size={24} />
                </a>
              )}
              {socialMedia.facebook && (
                <a href={socialMedia.facebook} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110">
                  <Facebook size={24} />
                </a>
              )}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Fale Conosco</h4>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <Phone className="h-5 w-5 mr-3 text-primary mt-0.5 group-hover:text-primary-light transition-colors" />
                <span className="group-hover:text-white transition-colors">{contact.phone}</span>
              </li>
              <li className="flex items-start group">
                <Mail className="h-5 w-5 mr-3 text-primary mt-0.5 group-hover:text-primary-light transition-colors" />
                <span className="group-hover:text-white transition-colors">{contact.email}</span>
              </li>
              <li className="flex items-start group">
                <MapPin className="h-5 w-5 mr-3 text-primary mt-0.5 group-hover:text-primary-light transition-colors" />
                <span className="group-hover:text-white transition-colors">
                  {contact.address.city} - {contact.address.state}
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Início</Link></li>
              <li><Link to="/servicos" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Nossos Geradores</Link></li>
              <li><Link to="/sobre" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Quem Somos</Link></li>
              <li><Link to="/contato" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Solicitar Orçamento</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Regiões Atendidas</h4>
            <ul className="space-y-2">
              {site.locations.map(location => (
                <li key={location.id}>
                  <Link to={`/atuacao/${location.slug}`} className="text-sm hover:text-primary transition-colors flex items-center group">
                    <MapPin size={12} className="mr-2 text-gray-500 group-hover:text-primary transition-colors" />
                    {location.neighborhood}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {companyName}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;