import React, { useState, useEffect } from 'react';
import { Play, ArrowRight } from 'lucide-react';

interface PremiumHeroProps {
  headline?: string;
  subheadline?: string;
  ctaPrimaryText?: string;
  ctaSecondaryText?: string;
  onCtaPrimaryClick?: () => void;
  onCtaSecondaryClick?: () => void;
}

const PremiumHero: React.FC<PremiumHeroProps> = ({
  headline = "Tudo o que você precisa para beber água limpa na era da IA",
  subheadline = "Soluções autônomas e inteligentes que trazem eficiência e produtividade para suas operações.",
  ctaPrimaryText = "Ver Demonstração",
  ctaSecondaryText = "Agendar Consultoria",
  onCtaPrimaryClick = () => console.log("Primary CTA clicked"),
  onCtaSecondaryClick = () => console.log("Secondary CTA clicked"),
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-32 pb-4 sm:pb-6 bg-background">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* WorkOS-style Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center min-h-[400px]">
          
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8">
            
            {/* Headline - Font weights corretos e tamanho menor */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl tracking-tight leading-[1.1] text-left font-heading">
                {/* Mobile - Quebra natural */}
                <div className="lg:hidden">
                  <span className="font-semibold block text-black">
                    Tudo o que você precisa para
                  </span>
                  <span className="font-bold block text-oasis-blue">
                    beber água limpa na era da IA
                  </span>
                </div>
                
                {/* Desktop - Quebra natural */}
                <div className="hidden lg:block">
                  <span className="font-semibold block text-black">
                    Tudo o que você precisa para
                  </span>
                  <span className="font-bold block text-oasis-blue">
                    beber água limpa na era da IA
                  </span>
                </div>
              </h1>
            </div>

            {/* Description */}
            <div>
              <p className="text-base md:text-lg lg:text-xl text-text-body font-body leading-relaxed max-w-2xl text-left">
                {subheadline}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              {/* Primary Button */}
              <button
                onClick={onCtaPrimaryClick}
                className="inline-flex items-center justify-center px-6 py-3 bg-oasis-blue hover:bg-oasis-blue-dark text-white font-semibold rounded-lg transition-all duration-200 font-body text-base shadow-medium hover:shadow-strong"
              >
                Quero beber água limpa
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

          {/* Right Visual - 5 columns - GRANDE */}
          <div className="lg:col-span-5 flex items-center justify-center">
            {/* Oasis Visual Content - Completely Clean */}
            <img 
              src="/images/hero-illustration.svg" 
              alt="Oasis AGX" 
              className="w-full h-auto object-contain max-w-md lg:max-w-lg xl:max-w-xl"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default PremiumHero;