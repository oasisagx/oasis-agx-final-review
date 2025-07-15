import { MessageCircle, BarChart3, Target, Calendar, GraduationCap, MessageSquare, Play, Send, Bot } from 'lucide-react'
import { useState, useEffect } from 'react'

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'cleo';
  timestamp: Date;
}

export function Features() {
    const [showVideo, setShowVideo] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: 'Olá, Eu sou a Cleo, representante virtual da Oasis. Estou aqui para te ajudar a entender e aplicar inteligência artificial de forma simples, prática, e acessível!',
            sender: 'cleo',
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    
    // Load Vimeo player script
    useEffect(() => {
        if (showVideo) {
            const script = document.createElement('script');
            script.src = 'https://player.vimeo.com/api/player.js';
            script.async = true;
            document.head.appendChild(script);
            
            return () => {
                const existingScript = document.querySelector('script[src="https://player.vimeo.com/api/player.js"]');
                if (existingScript) {
                    document.head.removeChild(existingScript);
                }
            };
        }
    }, [showVideo]);

    const sendToWebhook = async (userMessage: string) => {
        try {
            // Simulate API call with timeout for better UX
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout
            
            // For demo purposes, return simulated responses
            clearTimeout(timeoutId);
            
            // Simulate different responses based on message content
            const lowerMessage = userMessage.toLowerCase();
            if (lowerMessage.includes('preço') || lowerMessage.includes('custo')) {
                return 'Nossos planos são personalizados para cada empresa. Que tal agendar uma conversa para entender melhor suas necessidades?';
            } else if (lowerMessage.includes('agente') || lowerMessage.includes('ia')) {
                return 'Nossos agentes de IA podem automatizar atendimento, análise de dados, qualificação de leads e muito mais! Gostaria de ver uma demonstração?';
            } else if (lowerMessage.includes('contato') || lowerMessage.includes('falar')) {
                return 'Você pode falar diretamente com nossa equipe pelo WhatsApp: +55 11 91868-8001 ou email: hello@oasisagx.com';
            } else {
                return 'Entendi! Nossa equipe especializada pode te ajudar melhor. Que tal agendar uma conversa rápida para entender como posso te auxiliar?';
            }
        } catch (error) {
            console.error('Webhook error:', error);
            return 'Nossa equipe entrará em contato em breve! Enquanto isso, pode me chamar no WhatsApp: +55 11 91868-8001';
        }
    };

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        const currentInput = inputValue;
        setInputValue('');
        setIsTyping(true);

        // Send to N8N webhook
        try {
            const response = await sendToWebhook(currentInput);
            
            setTimeout(() => {
                const cleoResponse: Message = {
                    id: (Date.now() + 1).toString(),
                    text: response,
                    sender: 'cleo',
                    timestamp: new Date()
                };
                setMessages(prev => [...prev, cleoResponse]);
                setIsTyping(false);
            }, 1500);
        } catch (error) {
            setTimeout(() => {
                const errorResponse: Message = {
                    id: (Date.now() + 1).toString(),
                    text: 'Desculpe, tive um problema técnico. Nossa equipe entrará em contato em breve!',
                    sender: 'cleo',
                    timestamp: new Date()
                };
                setMessages(prev => [...prev, errorResponse]);
                setIsTyping(false);
            }, 1500);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };
    
    return (
        <section id="agents" className="py-4 sm:py-6 md:py-12 section-with-opacity transition-colors duration-500">
            {/* Container Expandido - Margens Reduzidas */}
            <div className="mx-auto max-w-6xl space-y-8 sm:space-y-12 px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="relative z-10 mx-auto max-w-4xl space-y-4 sm:space-y-6 text-center md:space-y-8 scroll-animate">
                    <h2 className="text-3xl md:text-4xl font-bold text-black font-heading mb-4 px-2 sm:px-0">
                        Agentes Autônomos Inteligentes
                    </h2>
                    <p className="text-lg md:text-xl text-text-body font-body max-w-3xl mx-auto px-2 sm:px-0">
                        A implementação de agentes é a materialização do trabalho acessível, ininterrupto e escalável.
                    </p>
                </div>

                {/* Grid de Features Expandido */}
                <div className="relative mx-auto grid max-w-none grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-gray-200 dark:border-gray-700 rounded-2xl sm:rounded-3xl overflow-hidden scroll-animate shadow-soft">
                    {/* Feature 1 */}
                    <div className="h-64 sm:h-72 flex flex-col p-6 sm:p-8 lg:p-10 bg-white border-r border-b border-gray-200 sm:border-r-0 lg:border-r">
                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <div className="w-12 sm:w-14 h-12 sm:h-14 bg-gray-50 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                                <MessageCircle className="w-6 sm:w-7 h-6 sm:h-7 text-oasis-blue" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-black font-heading">Atendimento ao cliente</h3>
                        </div>
                        <p className="text-sm sm:text-base text-text-body leading-relaxed font-body flex-1">
                            Resposta inteligente e personalizada em todos os canais. WhatsApp, email, chat - sempre disponível para seus clientes.
                        </p>
                    </div>
                    
                    {/* Feature 2 */}
                    <div className="h-64 sm:h-72 flex flex-col p-6 sm:p-8 lg:p-10 bg-white border-r border-b border-gray-200 lg:border-r">
                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <div className="w-12 sm:w-14 h-12 sm:h-14 bg-gray-50 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                                <BarChart3 className="w-6 sm:w-7 h-6 sm:h-7 text-oasis-blue" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-black font-heading">Análise de dados</h3>
                        </div>
                        <p className="text-sm sm:text-base text-text-body leading-relaxed font-body flex-1">
                            Processamento inteligente de grandes volumes de dados, transformando informações complexas em insights valiosos.
                        </p>
                    </div>
                    
                    {/* Feature 3 */}
                    <div className="h-64 sm:h-72 flex flex-col p-6 sm:p-8 lg:p-10 bg-white border-b border-gray-200 sm:border-r lg:border-r-0">
                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <div className="w-12 sm:w-14 h-12 sm:h-14 bg-gray-50 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                                <Target className="w-6 sm:w-7 h-6 sm:h-7 text-oasis-blue" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-black font-heading">Qualificação de leads</h3>
                        </div>
                        <p className="text-sm sm:text-base text-text-body leading-relaxed font-body flex-1">
                            Identificação automática de oportunidades quentes, priorizando leads com maior potencial de conversão.
                        </p>
                    </div>
                    
                    {/* Feature 4 */}
                    <div className="h-64 sm:h-72 flex flex-col p-6 sm:p-8 lg:p-10 bg-white border-r border-b border-gray-200 sm:border-r-0 sm:border-b-0 lg:border-r lg:border-b">
                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <div className="w-12 sm:w-14 h-12 sm:h-14 bg-gray-50 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                                <GraduationCap className="w-6 sm:w-7 h-6 sm:h-7 text-oasis-blue" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-black font-heading">Aprendizado constante</h3>
                        </div>
                        <p className="text-sm sm:text-base text-text-body leading-relaxed font-body flex-1">
                            Agentes que evoluem continuamente através de machine learning, melhorando desempenho e precisão.
                        </p>
                    </div>
                    
                    {/* Feature 5 */}
                    <div className="h-64 sm:h-72 flex flex-col p-6 sm:p-8 lg:p-10 bg-white border-r border-b border-gray-200 lg:border-r lg:border-b-0">
                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <div className="w-12 sm:w-14 h-12 sm:h-14 bg-gray-50 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                                <Calendar className="w-6 sm:w-7 h-6 sm:h-7 text-oasis-blue" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-black font-heading">Agendamentos</h3>
                        </div>
                        <p className="text-sm sm:text-base text-text-body leading-relaxed font-body flex-1">
                            Gestão completa de agenda com agendamentos automáticos, confirmações inteligentes e lembretes.
                        </p>
                    </div>
                    
                    {/* Feature 6 */}
                    <div className="h-64 sm:h-72 flex flex-col p-6 sm:p-8 lg:p-10 bg-white">
                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <div className="w-12 sm:w-14 h-12 sm:h-14 bg-gray-50 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                                <MessageSquare className="w-6 sm:w-7 h-6 sm:h-7 text-oasis-blue" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-black font-heading">Linguagem natural</h3>
                        </div>
                        <p className="text-sm sm:text-base text-text-body leading-relaxed font-body flex-1">
                            Comunicação fluida e humanizada com processamento avançado de linguagem natural, entendendo contexto.
                        </p>
                    </div>
                </div>

                {/* Chat e Vídeo - Mesma Proporção da Grid Acima */}
                <div className="relative mx-auto max-w-none scroll-animate">
                    <div className="grid grid-cols-1 lg:grid-cols-7 gap-0 border border-gray-200 rounded-2xl sm:rounded-3xl overflow-hidden shadow-soft h-[540px]">
                        {/* Chat da Cleo - Metade da Largura Total */}
                        <div className="h-full lg:col-span-5 bg-card-background border-r border-gray-200 lg:border-r flex flex-col">
                            {/* Header do Chat - Apple Style */}
                            <div className="bg-oasis-blue text-white px-4 py-3 flex items-center gap-3 border-b border-oasis-blue-dark flex-shrink-0">
                                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-white/20 rounded-xl flex items-center justify-center">
                                    <Bot className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-sm font-heading text-white">Cleo</h3>
                                    <p className="text-xs text-white/80 font-body">Representante Virtual da Oasis</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                    <span className="text-xs font-medium font-body text-white/80">Online</span>
                                </div>
                            </div>

                            {/* Messages Container - Apple Style */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                                {messages.map((message) => (
                                    <div
                                        key={message.id}
                                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div
                                            className={`max-w-sm px-5 py-3 rounded-2xl ${
                                                message.sender === 'user'
                                                    ? 'bg-oasis-blue text-white shadow-md'
                                                    : 'bg-card-background text-gray-900 shadow-sm border border-gray-100'
                                            }`}
                                        >
                                            <p className="text-sm font-body leading-relaxed">{message.text}</p>
                                            <p className={`text-xs mt-1 font-body ${
                                                message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                                            }`}>
                                                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                                
                                {isTyping && (
                                    <div className="flex justify-start">
                                        <div className="bg-card-background px-5 py-3 rounded-2xl shadow-sm border border-gray-100">
                                            <div className="flex space-x-1">
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Input Area - Apple Style */}
                            <div className="p-4 bg-card-background border-t border-gray-100 flex-shrink-0">
                                <div className="flex gap-3">
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        placeholder="Digite sua mensagem..."
                                        className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-oasis-blue focus:border-transparent font-body text-sm"
                                    />
                                    <button
                                        onClick={handleSendMessage}
                                        disabled={!inputValue.trim()}
                                        className="w-11 h-11 bg-oasis-blue text-white rounded-2xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed btn-hover-lift shadow-md hover:shadow-lg transition-all"
                                    >
                                        <Send className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Vídeo da Cleo - Metade da Largura Total */}
                        <div className="h-full lg:col-span-2 relative overflow-hidden">
                                <iframe 
                                    src="https://player.vimeo.com/video/1073799843?h=6409fbc068&badge=0&autopause=0&player_id=0&app_id=58479&background=0"
                                    frameBorder="0" 
                                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                    loading="lazy"
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%'
                                    }}
                                    title="Cleo"
                                    className="w-full h-full object-cover scale-102"
                                />
                        </div>
                    </div>
                </div>

                {/* Webhooks Configuration Info - Hidden comment for developers */}
                {/* 
                WEBHOOK N8N CONFIGURATION:
                
                1. Replace webhookUrl in sendToWebhook function with your N8N webhook URL
                2. Expected payload format:
                   {
                     "message": "user message text",
                     "userId": "website-visitor",
                     "timestamp": "2024-01-01T00:00:00.000Z",
                     "source": "website"
                   }
                
                3. Expected response format:
                   {
                     "response": "Cleo's response text"
                   }
                */}
            </div>
        </section>
    )
}