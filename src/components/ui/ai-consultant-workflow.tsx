"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Target, 
  Rocket, 
  GraduationCap, 
  RefreshCw,
  ArrowRight,
  CheckCircle,
  Award,
  Quote
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface WorkflowStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
}

const AIConsultantWorkflow = () => {

  const steps: WorkflowStep[] = [
    {
      id: 1,
      title: "Diagnóstico",
      description: "Momento de ouvir suas dores, analisar de forma colaborativa e montar um diagnóstico completo dos gargalos, necessidades e pontos críticos da sua operação.",
      icon: <Search className="w-6 h-6" />,
      color: "from-oasis-blue to-oasis-blue-dark",
      gradient: "bg-gradient-to-br from-oasis-blue/5 to-oasis-blue-dark/5"
    },
    {
      id: 2,
      title: "Planejamento e Priorizações",
      description: "Definir com clareza as soluções que devemos priorizar, de forma planejada, estruturada e com definição de prazos e metas objetivas.",
      icon: <Target className="w-6 h-6" />,
      color: "from-oasis-blue to-oasis-blue-light",
      gradient: "bg-gradient-to-br from-oasis-blue/5 to-oasis-blue-light/10"
    },
    {
      id: 3,
      title: "Execução das Soluções",
      description: "Início das aplicações, utilizando as ferramentas cabíveis para otimizar processos com base no diagnóstico e no planejamento. Aqui você já começa a se surpreender!",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-oasis-blue-dark to-oasis-blue",
      gradient: "bg-gradient-to-br from-oasis-blue-dark/5 to-oasis-blue/5"
    },
    {
      id: 4,
      title: "Treinamento e Capacitação",
      description: "Treinamento e capacitação de todas as partes, líderes e colaboradores responsáveis por aferir e supervisionar a entrega das nossas soluções.",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-oasis-blue to-oasis-blue-light",
      gradient: "bg-gradient-to-br from-oasis-blue/5 to-oasis-blue-light/10"
    },
    {
      id: 5,
      title: "Feedback e Aprimoramentos",
      description: "Nossa relação com você não acaba na entrega. Manteremos uma monitoração contínua para que os seus resultados sejam mantidos ou até melhorados!",
      icon: <RefreshCw className="w-6 h-6" />,
      color: "from-oasis-blue-dark to-oasis-blue",
      gradient: "bg-gradient-to-br from-oasis-blue-dark/5 to-oasis-blue/5"
    },
    {
      id: 6,
      title: "Citação do Fundador",
      description: "O papel da consultoria: analisar a sua esteira produtiva e suas respectivas oportunidades, com foco em tecnologia para complementar sua operação com eficiência, eficácia e efetividade.",
      icon: <Quote className="w-6 h-6" />,
      color: "from-oasis-blue to-oasis-blue-dark",
      gradient: "bg-gradient-to-br from-oasis-blue/10 to-oasis-blue-dark/10"
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
    <section id="consultancy" className="relative py-16 md:py-24 section-with-opacity transition-colors duration-500 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Padronizado com outras seções */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 scroll-animate"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-oasis-blue-light dark:bg-oasis-blue/20 border border-oasis-blue/20 mb-6"
          >
            <Award className="w-4 h-4 text-oasis-blue dark:text-oasis-blue" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300 font-body">Metodologia Certificada</span>
          </motion.div>
          
          {/* Título principal - mesmo tamanho das outras seções */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
            Consultoria Especializada<br />em IA para Negócios
          </h2>
          
          {/* Subtítulo - mesmo estilo das outras seções */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-body">
            Para resolver com eficiência e inteligência os desafios diários da sua empresa.
          </p>
        </motion.div>


        {/* Workflow Cards - Design harmonizado com altura aumentada */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50, rotateX: 15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.8 + index * 0.15,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="group relative scroll-animate"
            >
              {step.id === 6 ? (
                // Card especial para citação
                <motion.div
                  className={cn(
                    "relative rounded-2xl border-2 border-oasis-blue/30 backdrop-blur-sm transition-all duration-300 bg-gradient-to-br from-oasis-blue/5 to-oasis-blue-dark/5 dark:from-oasis-blue/10 dark:to-oasis-blue-dark/10 consultancy-card shadow-medium overflow-hidden w-full",
                    "hover:border-oasis-blue/50 hover:shadow-strong hover:scale-102"
                  )}
                  whileHover={{ y: -4 }}
                >
                  {/* Quote Icon - Large */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-oasis-blue/20 text-oasis-blue">
                      <Quote className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-8 h-[420px] flex flex-col relative z-10">
                    {/* Quote Icon Small */}
                    <motion.div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 shadow-sm flex-shrink-0 bg-oasis-blue/20 text-oasis-blue"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <Quote className="w-6 h-6" />
                    </motion.div>

                    {/* Quote Content */}
                    <div className="flex-1 flex flex-col">
                      <blockquote className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed font-body italic mb-6 flex-1">
                        "{step.description}"
                      </blockquote>
                      
                      {/* Author */}
                      <div className="mb-6">
                        <p className="font-semibold text-gray-900 dark:text-white font-heading">Chico Gregori</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 font-body">Fundador da Oasis</p>
                      </div>
                      
                      {/* CTA Button */}
                      <motion.button
                        onClick={scrollToContact}
                        className="w-full cta-standard cta-primary font-body"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Vamos transformar o seu negócio
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ) : (
                // Cards normais
                <motion.div
                  className={cn(
                    "relative rounded-2xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm transition-all duration-300 bg-white dark:bg-gray-800 consultancy-card shadow-soft overflow-hidden w-full",
                    "hover:border-oasis-blue/30 dark:hover:border-oasis-blue/30 hover:shadow-medium hover:scale-102"
                  )}
                  whileHover={{ y: -4 }}
                >
                  {/* Step Number */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 font-heading shadow-sm bg-oasis-blue text-white"
                    )}>
                      0{step.id}
                    </div>
                  </div>

                  {/* Content Container com altura aumentada */}
                  <div className="p-8 h-[420px] flex flex-col relative z-10">
                    {/* Icon */}
                    <motion.div
                      className={cn(
                        "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 shadow-sm flex-shrink-0 bg-oasis-blue-light dark:bg-oasis-blue/20 text-oasis-blue dark:text-oasis-blue group-hover:bg-oasis-blue group-hover:text-white"
                      )}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      {step.icon}
                    </motion.div>

                    {/* Content - Tipografia padronizada */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors font-heading consultancy-card-title leading-tight">
                        {step.title}
                      </h3>
                      
                      <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed font-body flex-1 line-height-loose">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Certification Section - Design harmonizado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mb-12 scroll-animate"
        >
          <div className="bg-white dark:bg-gray-800 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-soft transition-colors duration-500">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Certificação Info */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-oasis-blue-light dark:bg-oasis-blue/20 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-oasis-blue dark:text-oasis-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-heading">Certificados pelo Siberia Institute</h3>
                    <p className="text-gray-600 dark:text-gray-300 font-body">em IA Aplicada</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-body">
                  Parceria oficial com o instituto de referência em inteligência artificial, 
                  garantindo as melhores práticas e metodologias mais avançadas do mercado.
                </p>
              </div>
              
              {/* Logo Siberia */}
              <div className="flex-shrink-0">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 transition-colors duration-500">
                  <img 
                    src="https://www.oasisagx.com/images/siberia.png" 
                    alt="Siberia Institute" 
                    className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 dark:hidden"
                  />
                  <img 
                    src="https://www.oasisagx.com/images/siberia-white.png" 
                    alt="Siberia Institute" 
                    className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 hidden dark:block"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA - Design harmonizado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="text-center scroll-animate"
        >
          <div className="bg-white dark:bg-gray-800 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-soft max-w-5xl mx-auto transition-colors duration-500">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white font-heading">
              Vamos Transformar o seu Negócio?
            </h3>
            <div className="mb-8 space-y-4">
              <p className="text-lg text-gray-600 dark:text-gray-300 font-body leading-relaxed">
                De nada adianta se investir em tecnologia se não houver entendimento profundo e extensivo de toda a esteira produtiva de um negócio.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 font-body leading-relaxed">
                Nossa equipe passará um Raio-X em toda sua operação para diagnosticar, direcionar e implementar devidamente soluções em IA.
              </p>
            </div>
            <motion.button
              onClick={scrollToContact}
              className="cta-standard cta-primary font-body group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Solicitar Diagnóstico Gratuito
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-gray-500 dark:text-gray-400 font-body">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Diagnóstico 100% gratuito</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Sem compromisso</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Resposta em 24h</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIConsultantWorkflow;