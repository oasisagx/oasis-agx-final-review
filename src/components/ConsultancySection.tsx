import React from 'react';
import { Search, Lightbulb, Rocket, GraduationCap, RefreshCw, Award, Quote, ArrowRight } from 'lucide-react';

const ConsultancySection = () => {
  const processSteps = [
    {
      number: 1,
      icon: Search,
      title: 'Diagnóstico',
      description: 'Momento de ouvir suas dores, analisar de forma colaborativa e montar um diagnóstico completo dos gargalos, necessidades e pontos críticos da sua operação.'
    },
    {
      number: 2,
      icon: Lightbulb,
      title: 'Planejamento e Priorizações',
      description: 'Definir com clareza as soluções que devemos priorizar, de forma planejada, estruturada e com definição de prazos e metas objetivas.'
    },
    {
      number: 3,
      icon: Rocket,
      title: 'Execução das Soluções',
      description: 'Início das aplicações, utilizando as ferramentas cabíveis para otimizar processos com base no diagnóstico e no planejamento. Aqui você já começa a se surpreender!'
    },
    {
      number: 4,
      icon: GraduationCap,
      title: 'Treinamento e Capacitação',
      description: 'Treinamento e capacitação de todas as partes, líderes e colaboradores responsáveis por aferir e supervisionar a entrega das nossas soluções.'
    },
    {
      number: 5,
      icon: RefreshCw,
      title: 'Feedback e Aprimoramentos',
      description: 'Nossa relação com você não acaba na entrega. Manteremos uma monitoração contínua para que os seus resultados sejam mantidos ou até melhorados!'
    },
    {
      number: 6,
      icon: Award,
      title: "Certificados pelo Siberia Institute",
      subtitle: "em IA Aplicada",
      description: "Parceria oficial com o instituto de referência em inteligência artificial."
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
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

  return (
    <section id="consultancy" className="relative py-12 md:py-16 bg-gray-900">
      {/* Background Block - Divisão Visual Sólida */}
      <div className="absolute inset-0"></div>
      
      {/* Conteúdo */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          {/* Badge Metodologia Certificada - No topo */}
          <div className="text-center mb-8 scroll-animate">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
              <Award className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white/80 font-body">Metodologia Certificada</span>
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-4">
              Consultoria Especializada em IA para Negócios
            </h2>
            <p className="text-lg md:text-xl text-white/90 font-body max-w-3xl mx-auto">
              Para resolver com eficiência e inteligência<br />os desafios diários da sua empresa.
            </p>
          </div>

          {/* Process Cards Grid */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-animate">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                
                return (
                  <div 
                    key={index} 
                    className="relative bg-gray-800 rounded-2xl p-8 shadow-soft border border-gray-700 hover:bg-oasis-blue hover:border-oasis-blue transition-all duration-300 card-hover h-[380px] flex flex-col group"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Step Number */}
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 bg-oasis-blue rounded-full flex items-center justify-center text-white text-sm font-semibold font-heading group-hover:bg-white group-hover:text-oasis-blue transition-all duration-300">
                        0{step.number}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 bg-oasis-blue/20 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0 group-hover:bg-white group-hover:text-oasis-blue transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-oasis-blue group-hover:text-oasis-blue transition-all duration-300 icon-monochrome" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      {step.number === 6 ? (
                        <div className="flex-1 flex flex-col items-center">
                          {/* Título e Subtítulo */}
                          <div className="text-center mb-6">
                            <h3 className="text-xl font-semibold text-white mb-2 font-heading group-hover:text-white transition-all duration-300">
                              {step.title}
                            </h3>
                            <p className="text-white/70 font-body text-sm group-hover:text-white/80 transition-all duration-300">
                              {step.subtitle}
                            </p>
                          </div>
                          
                          {/* Logo - Maior e Invertido */}
                          <div className="flex-1 flex items-center justify-center">
                            <img 
                              src="/images/logos/siberia-white.png" 
                              alt="Siberia Institute" 
                              className="h-20 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
                            />
                          </div>
                          
                          {/* Descrição embaixo */}
                          <p className="text-white/80 leading-relaxed font-body text-center text-sm group-hover:text-white transition-all duration-300 mt-4">
                            {step.description}
                          </p>
                        </div>
                      ) : (
                        <>
                          <h3 className="text-xl font-semibold text-white mb-4 font-heading group-hover:text-white transition-all duration-300">
                            {step.title}
                          </h3>
                          <p className="text-white/80 leading-relaxed font-body flex-1 group-hover:text-white transition-all duration-300">
                            {step.description}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Citação do Chico Gregori */}
          <div className="max-w-4xl mx-auto mb-12 scroll-animate">
            <div className="text-center">
              {/* Quote Icon */}
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Quote className="w-8 h-8 text-white" />
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 relative font-body">
                <span className="relative z-10">
                  "O papel da consultoria é analisar a sua esteira produtiva e suas respectivas oportunidades, 
                  com foco em tecnologia para complementar sua operação com eficiência, eficácia e efetividade. 
                  De nada adianta se investir em tecnologia se não houver entendimento profundo e extensivo 
                  de toda a cadeia produtiva de um negócio."
                </span>
              </blockquote>

              {/* Author */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <img
                  src="/images/team/francisco-gregori.png"
                  alt="Francisco Gregori"
                  className="w-16 h-16 rounded-full object-cover shadow-medium"
                />
                <div className="text-center sm:text-left">
                  <h4 className="text-lg font-semibold text-white font-heading">
                    Francisco Gregori
                  </h4>
                  <p className="text-gray-300 font-body">
                    Fundador da Oasis AGX
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center scroll-animate">
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 shadow-soft max-w-5xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white font-heading">
                Vamos Transformar o seu Negócio?
              </h3>
              <div className="mb-8 space-y-4">
                <p className="text-lg text-white/90 font-body leading-relaxed">
                  Nossa equipe passará um Raio-X em toda sua operação para diagnosticar, direcionar e implementar devidamente soluções em IA.
                </p>
              </div>
              <button
                onClick={scrollToContact}
                className="cta-standard cta-primary font-body"
              >
                Solicitar Diagnóstico Gratuito
              </button>
              
              <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm font-body">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span className="text-white/70">Diagnóstico 100% gratuito</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span className="text-white/70">Sem compromisso</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span className="text-white/70">Resposta em 24h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultancySection;