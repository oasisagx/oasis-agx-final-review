import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
      setSubmitStatus('idle');
    }, 3000);
  };

  const startChat = () => {
    // This would typically open a chat widget
    console.log('Starting chat with Cleo...');
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 section-with-opacity transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-4 px-2 sm:px-0">
            Vamos Transformar Seu Negócio?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-body max-w-3xl mx-auto px-2 sm:px-0">
            Fale com nossos especialistas e descubra como a IA pode revolucionar sua empresa
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="scroll-animate">
            <form onSubmit={handleSubmit} className="bg-card-background p-6 sm:p-8 rounded-2xl shadow-soft">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 font-body">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-oasis-blue focus:border-transparent transition-all form-input-focus font-body text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 font-body">
                    Email corporativo *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-oasis-blue focus:border-transparent transition-all form-input-focus font-body text-sm sm:text-base"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2 font-body">
                    Telefone/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-oasis-blue focus:border-transparent transition-all form-input-focus font-body text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2 font-body">
                    Nome da empresa *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-oasis-blue focus:border-transparent transition-all form-input-focus font-body text-sm sm:text-base"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 font-body">
                  Mensagem (opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Conte um pouco sobre seus desafios..."
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-oasis-blue focus:border-transparent transition-all form-input-focus resize-vertical font-body text-sm sm:text-base"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitStatus === 'success'}
                className={`w-full cta-standard font-body ${
                  submitStatus === 'success'
                    ? 'bg-green-500 text-white border-green-500'
                    : 'cta-primary'
                } ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Mensagem Enviada!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="mt-4 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-success text-xs sm:text-sm font-body">
                    ✓ Mensagem enviada com sucesso! Responderemos em até 2 horas.
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="scroll-animate">
            <div className="space-y-6 sm:space-y-8">
              {/* Contact Items */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-whatsapp" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 font-heading">WhatsApp</h3>
                  <p className="text-sm sm:text-base text-gray-900 font-medium font-body">+55 11 91868-8001</p>
                  <p className="text-xs sm:text-sm text-gray-600 font-body">Resposta em até 2 horas</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-oasis-blue-light rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-oasis-blue" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 font-heading">Email</h3>
                  <p className="text-sm sm:text-base text-gray-900 font-medium font-body">hello@oasis.com</p>
                  <p className="text-xs sm:text-sm text-gray-600 font-body">Para propostas e parcerias</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 font-heading">LinkedIn</h3>
                  <a href="https://www.linkedin.com/company/oasisagx/" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-gray-900 font-medium font-body hover:text-oasis-blue transition-colors">
                    Oasis
                  </a>
                  <p className="text-xs sm:text-sm text-gray-600 font-body">Siga nossas atualizações</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-pink-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 sm:w-6 h-5 sm:h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 font-heading">Instagram</h3>
                  <a href="https://www.instagram.com/oasis.agx/" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-gray-900 font-medium font-body hover:text-oasis-blue transition-colors">
                    @oasis.agx
                  </a>
                  <p className="text-xs sm:text-sm text-gray-600 font-body">Acompanhe os bastidores</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 font-heading">Localização</h3>
                  <p className="text-sm sm:text-base text-gray-900 font-medium font-body">São Paulo, SP</p>
                  <p className="text-xs sm:text-sm text-gray-600 font-body">Atendemos todo Brasil</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 sm:w-6 h-5 sm:h-6 text-success" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 font-heading">Chat Online</h3>
                  <button
                    onClick={startChat}
                    className="text-oasis-blue font-medium hover:text-oasis-blue-dark transition-colors font-body"
                  >
                    Fale com a Cleo agora
                  </button>
                  <p className="text-xs sm:text-sm text-gray-600 font-body">Assistente virtual online</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-6 sm:mt-8 rounded-2xl overflow-hidden shadow-soft">
              <div className="bg-gray-100 h-48 sm:h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-10 sm:w-12 h-10 sm:h-12 text-gray-500 mx-auto mb-2" />
                  <h3 className="text-base sm:text-lg font-semibold text-gray-600 mb-1 font-heading">Oasis</h3>
                  <p className="text-sm sm:text-base text-gray-500 font-body">São Paulo - SP, Brasil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
