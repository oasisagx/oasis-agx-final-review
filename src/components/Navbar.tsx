import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'contact') {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    } else {
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
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'navbar-blur' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/images/logos/oasis-logo.svg" 
                alt="Oasis AGX" 
                className="h-14 md:h-16 w-auto transition-all duration-300"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex flex-grow items-center justify-center">
              <div className="flex items-center space-x-6 xl:space-x-8">
                <button
                  onClick={() => scrollToSection('agents')}
                  className="text-text-body hover:text-oasis-blue transition-colors font-medium font-body text-sm xl:text-base"
                >
                  Agentes de IA
                </button>
                <button
                  onClick={() => scrollToSection('consultancy')}
                  className="text-text-body hover:text-oasis-blue transition-colors font-medium font-body text-sm xl:text-base"
                >
                  Consultoria em IA
                </button>
                <button
                  onClick={() => scrollToSection('testimonial')}
                  className="text-text-body hover:text-oasis-blue transition-colors font-medium font-body text-sm xl:text-base"
                >
                  Clientes
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-text-body hover:text-oasis-blue transition-colors font-medium font-body text-sm xl:text-base"
                >
                  Quem Somos
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-text-body hover:text-oasis-blue transition-colors font-medium font-body text-sm xl:text-base"
                >
                  Contato
                </button>
              </div>
            </div>

            <div className="hidden lg:flex items-center">
              {/* Divider */}
              <div className="w-px h-6 bg-gray-200 mr-6 xl:mr-8"></div>
              
              {/* CTA Button */}
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-medium text-oasis-blue-med hover:text-white border-2 border-oasis-blue-med/30 hover:border-oasis-blue-med rounded-lg transition-all duration-200 font-body hover:bg-oasis-blue-med xl:text-base"
              >
                Oasis MED
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 ${isMobileMenuOpen ? 'mobile-menu-active' : ''}`}
                aria-label="Toggle mobile menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <span className="w-6 h-0.5 bg-text-body mobile-menu-line transition-all duration-300"></span>
                  <span className="w-6 h-0.5 bg-text-body mobile-menu-line transition-all duration-300"></span>
                  <span className="w-6 h-0.5 bg-text-body mobile-menu-line transition-all duration-300"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-20 left-0 right-0 bg-white shadow-strong animate-scale-in">
            <div className="px-4 py-6 space-y-1">
              <button
                onClick={() => scrollToSection('agents')}
                className="block w-full text-left py-4 text-lg font-medium text-text-body hover:text-oasis-blue transition-colors font-body border-b border-border-light"
              >
                Agentes de IA
              </button>
              <button
                onClick={() => scrollToSection('consultancy')}
                className="block w-full text-left py-4 text-lg font-medium text-text-body hover:text-oasis-blue transition-colors font-body border-b border-border-light"
              >
                Consultoria em IA
              </button>
              <button
                onClick={() => scrollToSection('testimonial')}
                className="block w-full text-left py-4 text-lg font-medium text-text-body hover:text-oasis-blue transition-colors font-body border-b border-border-light"
              >
                Clientes
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left py-4 text-lg font-medium text-text-body hover:text-oasis-blue transition-colors font-body border-b border-border-light"
              >
                Quem Somos
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left py-4 text-lg font-medium text-text-body hover:text-oasis-blue transition-colors font-body border-b border-border-light"
              >
                Contato
              </button>
              <Link
                to="/login"
                className="w-full block text-center px-4 py-3 text-sm font-medium text-oasis-blue-med hover:text-white border-2 border-oasis-blue-med hover:bg-oasis-blue-med rounded-lg transition-all duration-200 font-body mt-6"
              >
                Oasis MED
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
