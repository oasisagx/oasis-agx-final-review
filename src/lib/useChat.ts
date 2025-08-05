import { useState } from 'react';

const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;
console.log("Variáveis de ambiente disponíveis:", import.meta.env);

if (!webhookUrl) {
  console.error("ERRO CRÍTICO: VITE_WEBHOOK_URL não está definida nas variáveis de ambiente do build.");
  throw new Error("VITE_WEBHOOK_URL não está definida. O deploy não pode continuar.");
}

export interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export const useChat = (initialMessages: ChatMessage[] = []) => {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: content,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    console.log("Iniciando envio para o webhook...");

    try {
      const payload = {
        message: content,
        userId: 'website-visitor',
      };
      console.log("Payload enviado:", JSON.stringify(payload, null, 2));

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      console.log("Resposta do Webhook recebida:", response);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: data.output || "Não recebi uma resposta do assistente.",
        role: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, assistantMessage]);

    } catch (e) {
        console.error("Erro completo do fetch:", e);
        let friendlyMessage = 'Ocorreu um erro ao conectar ao servidor. Por favor, tente novamente mais tarde.';
        if (e instanceof Error) {
            if (e.message.includes('Failed to fetch')) {
                friendlyMessage = 'Não foi possível conectar ao servidor. Verifique se o webhook n8n está com o CORS configurado corretamente.';
            } else {
                friendlyMessage = `Erro: ${e.message}`;
            }
        }
      setError(friendlyMessage);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: friendlyMessage,
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, isLoading, error, sendMessage, setMessages };
};
