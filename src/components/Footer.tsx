import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbar = document.querySelector('.navbar');
      const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 80;
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5511918688001', '_blank');
  };

  return (
    <footer className="relative z-50 bg-gray-900 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
          {/* Left side - Logo and Copyright */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 mb-3 sm:mb-4">
              <img 
                src="/images/logos/oasis-logo-white.svg" 
                alt="Oasis AGX" 
                className="h-6 sm:h-8 w-auto"
              />
              <span className="text-lg sm:text-xl font-bold font-heading">Oasis AGX</span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2 font-body">
              © 2024 Oasis AGX. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm font-medium font-body">
              Inteligência Artificial. Resultados Reais.
            </p>
          </div>

          {/* Center - Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            <button
              onClick={() => scrollToSection('agents')}
              className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm font-body"
            >
              Agentes de IA
            </button>
            <button
              onClick={() => scrollToSection('consultancy')}
              className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm font-body"
            >
              Consultoria em IA
            </button>
            <button
              onClick={() => scrollToSection('testimonial')}
              className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm font-body"
            >
              Clientes
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm font-body"
            >
              Quem Somos
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm font-body"
            >
              Contato
            </button>
          </div>

          {/* Right side - Social Links */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="https://br.linkedin.com/in/francisco-gregori"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 sm:w-5 h-4 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 sm:w-5 h-4 sm:h-5" />
            </a>
            <button
              onClick={openWhatsApp}
              className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              aria-label="WhatsApp"
            >
              <svg className="w-4 sm:w-5 h-4 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;