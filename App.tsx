import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import LocationPage from './pages/LocationPage';
import About from './pages/About';
import Contact from './pages/Contact';
import ServicesGrid from './components/ServicesGrid';
import { useDynamicColors } from './hooks/useDynamicColors';

// Simple wrapper for the Services Catalog page
const ServicesCatalog = () => (
  <div className="bg-background min-h-screen py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-foreground mb-4 text-center">Nossos Geradores</h1>
      <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
        Confira nossa frota completa de geradores de energia. Equipamentos revisados e prontos para atender sua demanda com eficiência.
      </p>
      <ServicesGrid />
    </div>
  </div>
);

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center flex-col bg-background">
    <h1 className="text-6xl font-bold text-foreground">404</h1>
    <p className="text-xl text-gray-600 mt-4">Página não encontrada</p>
    <a href="/" className="mt-8 text-primary hover:underline">Voltar para Home</a>
  </div>
);

function App() {
  useDynamicColors();

  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-foreground bg-background transition-colors duration-300">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            
            {/* Services Routes */}
            <Route path="/servicos" element={<ServicesCatalog />} />
            <Route path="/servicos/:slug" element={<ServicePage />} />
            
            {/* Location / SEO Routes */}
            <Route path="/atuacao/:slug" element={<LocationPage />} />
            
            {/* Fallback */}
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;