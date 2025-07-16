import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, MessageCircle, Instagram } from 'lucide-react';
import { AnimatedTeam } from '@/components/ui/animated-team';

const AboutSection = () => {
  const teamMembers = [
    {
      quote: "Empreendedor no ramo da arte e da tecnologia. Sua trajetória profissional começou aos 17 anos com a engenharia, posteriormente transitando pelo mundo criativo. Há alguns anos iniciou-se no empreendedorismo, algo que não larga mais. Seu propósito é prover liberdade através da tecnologia e do conhecimento além de embelezar, através da arte, a vida liberta.\n\nAcadêmico: Engenharia Mecânica-Aeronáutica (ITA) + Produção e Engenharia de Áudio (DipBR)\nProfissional: Indústria (Cebrace), Mercado Financeiro (W1), Bioenergia (BNC/SA), Publicidade e Áudio (S de Samba)\nNegócios: fundador da MOOS Audio, cofundador da Ximex AI e fundador da Oasis\nEspecializações: Consultoria em Inteligência Artificial (Siberia Institute) e AI Business Architecture (Siberia Institute)",
      name: "Francisco Gregori",
      designation: "CEO",
      src: "/images/team/francisco-gregori.png",
    },
    {
      quote: "Doutor em Engenharia de Software pela Cesar School; Mestre em Engenharia de Software pelo Centro de Estudos e Sistemas Avançados do Recife; Especialista em Engenharia de Software com ênfase em Padrões de Projeto pela Faculdade de Juazeiro do Norte e graduado em Engenharia de Produção pela Universidade Regional do Cariri. Professor efetivo do IFPB-Cajazeiras. Foco: Sistemas Distribuídos e Machine Learning.\n\nAcadêmico: Engenharia de Produção (URCA), Mestrado em Engenharia de Software (CESAR) e Doutorado em Engenharia de Software (Cesar School)\nProfissional: Indústria (Grendene, Bopil), Software (UpMarketing, Femmium), Educação (FJN, IFP)\nNegócios: fundador da Touk, sócio da Oasis\nEspecializações: Engenharia de Software (FJN) e Machine Learning (Coursera)",
      name: "Ari Garcia",
      designation: "CTO",
      src: "/images/team/ari-garcia.png",
    },
    {
      quote: "Autodidata, apaixonada por desenvolvimento de negócios, tecnologia e filosofia. Acredita que a prosperidade vem das relações que construímos. Ajuda empresas e profissionais em fase de crescimento (ou reposicionamento) a transformarem seu posicionamento no LinkedIn em um sistema de aquisição inteligente, estratégico e conectado com sua identidade.\n\nAcadêmico: Psicologia (Universidade Positivo), Professional Self Coach e Ciências Humanas (IBC)\nProfissional: Gerência de Contas (Clinicarx), Growth Marketing (Neocoder), Consultoria Estratégica (B.[AI]) Ecossistema de Educação (Siberia Institute)\nNegócios: fundadora da inov[AI]\nEspecializações: Growth Hacking e CX (Escola Conquer) e Estrategista de Negócios com IA (Siberia Institute)",
      name: "Cecília Rizzi",
      designation: "CMO",
      src: "/images/team/cecilia-rizzi.png",
    },
  ];

  return (
    <section id="about" className="py-12 md:py-20 section-with-opacity transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            <Heart className="w-4 h-4 text-oasis-blue" />
            <span className="text-sm font-medium text-gray-600 font-body">Nossa História</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-4">
            Quem Somos
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-body max-w-3xl mx-auto">
            Nossa história, nossa missão e nosso compromisso com a inovação
          </p>
        </motion.div>

        {/* Equipe - Grid das imagens como estava */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16 scroll-animate relative z-10"
        >
          <AnimatedTeam 
            teamMembers={teamMembers} 
            autoplay={true}
            className="px-0"
          />
        </motion.div>

        {/* Texto embaixo da equipe */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16 scroll-animate"
        >
          <div className="bg-card-background rounded-3xl p-8 border border-gray-200 shadow-soft">
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-600 leading-relaxed font-body">
              <p>
                Nascemos da paixão por tecnologia e inovação, combinada com as demandas urgentes deste novo mundo. 
                Somos fascínio convertido em solução. Um refúgio digital onde a complexidade se transforma em simplicidade.
              </p>
              
              <p>
                Enquanto nos redescobrimos na revolução tecnológica, assumimos o compromisso de proporcionar uma experiência 
                fluida e descomplicada. Você foca no que realmente importa: seus objetivos e suas paixões. Nós cuidamos do resto.
              </p>
              
              <p>
                Oferecemos apenas aquilo que usamos, porque antes de sermos solução, já fomos problema. Nascemos da nossa 
                própria necessidade e crescemos através das demandas dos nossos clientes. Cada desafio? Um novo começo.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="scroll-animate"
        >
          <div className="bg-card-background rounded-3xl p-8 border border-gray-200 shadow-soft">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">Contato</h3>
              <p className="text-lg text-gray-600 font-body">
                Para conhecer mais sobre a Oasis, ou entender como a Inteligência Artificial pode alavancar o seu negócio, entre em contato:
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Email */}
              <div className="text-center">
                <div className="w-16 h-16 bg-oasis-blue-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-oasis-blue" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 font-heading">Email</h4>
                <a 
                  href="mailto:hello@oasis.com"
                  className="text-oasis-blue hover:text-oasis-blue-dark font-medium font-body transition-colors"
                >
                  hello@oasis.com
                </a>
              </div>
              
              {/* WhatsApp */}
              <div className="text-center">
                <div className="w-16 h-16 bg-oasis-blue-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-oasis-blue" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 font-heading">WhatsApp</h4>
                <a 
                  href="https://wa.me/5511918688001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-oasis-blue hover:text-oasis-blue-dark font-medium font-body transition-colors"
                >
                  +55 11 918688001
                </a>
              </div>
              
              {/* LinkedIn */}
              <div className="text-center">
                <div className="w-16 h-16 bg-oasis-blue-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-oasis-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 font-heading">LinkedIn</h4>
                <a 
                  href="https://www.linkedin.com/company/oasisagx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-oasis-blue hover:text-oasis-blue-dark font-medium font-body transition-colors"
                >
                  Oasis
                </a>
              </div>
              
              {/* Instagram */}
              <div className="text-center">
                <div className="w-16 h-16 bg-oasis-blue-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-oasis-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 font-heading">Instagram</h4>
                <a 
                  href="https://www.instagram.com/oasis.agx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-oasis-blue hover:text-oasis-blue-dark font-medium font-body transition-colors"
                >
                  @oasis.agx
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
