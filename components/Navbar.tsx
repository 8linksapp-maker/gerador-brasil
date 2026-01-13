import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSiteData } from '../hooks/useSiteData';
import { Menu, X, Phone, Zap } from 'lucide-react';

const Navbar = () => {
  const { data: site } = useSiteData();
  const { companyName, contact } = site.settings;
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? 'text-primary font-bold' : 'text-gray-600 hover:text-primary';

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-white/90 border-b border-gray-100/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
              <Zap className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              <span className="font-bold text-xl text-foreground tracking-tight">{companyName}</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`font-medium transition ${isActive('/')}`}>Home</Link>
            <Link to="/servicos" className={`font-medium transition ${isActive('/servicos')}`}>Serviços</Link>
            <Link to="/sobre" className={`font-medium transition ${isActive('/sobre')}`}>Quem Somos</Link>
            <Link to="/contato" className={`font-medium transition ${isActive('/contato')}`}>Contato</Link>
            
            <a 
              href={`https://wa.me/${contact.whatsapp.replace(/\D/g,'')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-primary-dark transition shadow-md hover:shadow-lg hover:-translate-y-0.5 transform duration-200 font-semibold"
            >
              <Phone size={18} />
              <span>{contact.phone}</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-primary focus:outline-none transition-colors">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Home</Link>
            <Link to="/servicos" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Serviços</Link>
            <Link to="/sobre" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Quem Somos</Link>
            <Link to="/contato" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Contato</Link>
            <a href={`tel:${contact.phone}`} className="block w-full text-center mt-4 bg-primary text-white px-4 py-3 rounded-lg font-bold hover:bg-primary-dark transition">
              Ligar Agora: {contact.phone}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;