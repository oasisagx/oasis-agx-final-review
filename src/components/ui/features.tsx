import { MessageCircle, BarChart3, Target, Calendar, GraduationCap, MessageSquare, Send, Bot } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { useChat, ChatMessage } from '@/lib/useChat';

export function Features() {
    const messagesContainerRef = useRef<HTMLDivElement | null>(null);
    const [inputValue, setInputValue] = useState('');

    const initialMessages: ChatMessage[] = [
        {
            id: '1',
            content: 'Sou a Cleo, representante virtual da Oasis. Estou aqui para te ajudar!',
            role: 'assistant',
            timestamp: new Date()
        }
    ];

    const { messages, isLoading, sendMessage, setMessages } = useChat(initialMessages);

    const scrollToBottom = () => {
        if (messagesContainerRef.current) {
            const { scrollHeight, clientHeight } = messagesContainerRef.current;
            messagesContainerRef.current.scrollTop = scrollHeight - clientHeight;
        }
    };

    useEffect(() => {
        if (messages.length > 1) {
            scrollToBottom();
        }
    }, [messages, isLoading]);

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            sendMessage(inputValue);
            setInputValue('');
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
                        <div className="h-full lg:col-span-5 bg-card-background border-r border-gray-200 lg:border-r flex flex-col min-h-0">
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
                            <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                                {messages.map((message) => (
                                    <div
                                        key={message.id}
                                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div
                                            className={`max-w-sm px-5 py-3 rounded-2xl ${
                                                message.role === 'user'
                                                    ? 'bg-oasis-blue text-white shadow-md'
                                                    : 'bg-card-background text-gray-900 shadow-sm border border-gray-100'
                                            }`}
                                        >
                                            <p className="text-sm font-body leading-relaxed">{message.content}</p>
                                            <p className={`text-xs mt-1 font-body ${
                                                message.role === 'user' ? 'text-blue-100' : 'text-gray-500'
                                            }`}>
                                                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                                
                                {isLoading && (
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
                                        disabled={!inputValue.trim() || isLoading}
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
