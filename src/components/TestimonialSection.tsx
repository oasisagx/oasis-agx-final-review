import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const TestimonialSection = () => {
  return (
    <section id="testimonial" className="py-12 md:py-20 section-with-opacity transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 scroll-animate"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-4">
            Case de Sucesso
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-body max-w-3xl mx-auto">
            Conheça os resultados transformadores alcançados com nossa solução de IA
          </p>
        </motion.div>

        {/* Testimonial Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="scroll-animate"
        >
          <div className="bg-card-background rounded-3xl p-8 border border-gray-200 shadow-soft text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-2 border-oasis-blue/20 shadow-medium">
              <img 
                src="/images/logos/segredos-da-carne-logo.png" 
                alt="Os Segredos Da Carne" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed font-body mb-8 space-y-4">
              <p>
                "O Agente Autônomo da Oasis nos permite atender com <strong>imediatismo e fluidez</strong> centenas de 
                solicitações todos os dias, estreitando nossa relação com o cliente e <strong>otimizando a gestão de reservas</strong>."
              </p>
              
              <p>
                "Os dados demográficos e comportamentais <strong>coletados e enriquecidos</strong> pelo Agente são muito 
                valiosos, pois viabilizam ações estratégicas como, por exemplo, o marketing direcionado."
              </p>
              
              <p>
                "Sua responsividade 24h aumentou o <strong>alcance do restaurante</strong> com trabalho manual reduzido."
              </p>
              
              <p>
                "O Agente atende com muita <strong>naturalidade</strong>. Algumas pessoas chegaram até a confundi-lo com um humano."
              </p>
            </blockquote>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900 font-heading mb-2">
                Os Segredos Da Carne
              </h4>
              <p className="text-gray-600 font-body">
                Maior churrascaria do Panamá
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;