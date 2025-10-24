/**
 * Serviço de integração com AgentPyLing
 * Gerencia comunicação com o modelo de IA para respostas personalizadas
 */

// Configuração da API do AgentPyLing
const AGENT_API_URL = process.env.VITE_AGENT_API_URL || 'http://localhost:8000';
const API_KEY = process.env.VITE_AGENT_API_KEY || '';

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp?: string;
}

interface AgentResponse {
  response: string;
  context?: any;
  confidence?: number;
  metadata?: {
    model?: string;
    tokens?: number;
    processing_time?: number;
  };
}

class AgentService {
  private conversationHistory: ChatMessage[] = [];
  private maxHistoryLength = 10;

  constructor() {
    // Inicializar com contexto do sistema sobre o GymBuddy
    this.conversationHistory.push({
      role: 'system',
      content: `Você é o assistente virtual do GymBuddy, uma plataforma de fitness e rede social para entusiastas de academia.
      Sua função é ajudar os usuários com:
      - Dicas de treino e exercícios
      - Nutrição e dieta
      - Motivação e acompanhamento de progresso
      - Informações sobre a plataforma GymBuddy
      - Sugestões personalizadas baseadas nos objetivos do usuário
      
      Seja amigável, motivador e profissional. Use emojis quando apropriado 💪`
    });
  }

  /**
   * Envia mensagem para o AgentPyLing e recebe resposta
   */
  async sendMessage(message: string): Promise<AgentResponse> {
    try {
      // Adicionar mensagem do usuário ao histórico
      this.addToHistory({ role: 'user', content: message });

      // Preparar payload para API
      const payload = {
        message: message,
        history: this.conversationHistory,
        context: {
          platform: 'GymBuddy',
          domain: 'fitness',
          language: 'pt-BR'
        },
        config: {
          temperature: 0.7,
          max_tokens: 500,
          stream: false
        }
      };

      // Fazer requisição para o AgentPyLing
      const response = await fetch(`${AGENT_API_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(API_KEY && { 'Authorization': `Bearer ${API_KEY}` })
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        // Fallback para respostas locais se API falhar
        return this.getFallbackResponse(message);
      }

      const data = await response.json();
      
      // Adicionar resposta ao histórico
      this.addToHistory({ 
        role: 'assistant', 
        content: data.response || data.message || data.text 
      });

      return {
        response: data.response || data.message || data.text,
        context: data.context,
        confidence: data.confidence,
        metadata: {
          model: data.model,
          tokens: data.tokens_used,
          processing_time: data.processing_time
        }
      };

    } catch (error) {
      console.error('Erro ao comunicar com AgentPyLing:', error);
      // Retornar resposta fallback em caso de erro
      return this.getFallbackResponse(message);
    }
  }

  /**
   * Adiciona mensagem ao histórico mantendo limite
   */
  private addToHistory(message: ChatMessage): void {
    message.timestamp = new Date().toISOString();
    this.conversationHistory.push(message);
    
    // Manter apenas as últimas N mensagens (exceto system)
    const systemMessages = this.conversationHistory.filter(m => m.role === 'system');
    const otherMessages = this.conversationHistory.filter(m => m.role !== 'system');
    
    if (otherMessages.length > this.maxHistoryLength * 2) {
      this.conversationHistory = [
        ...systemMessages,
        ...otherMessages.slice(-this.maxHistoryLength * 2)
      ];
    }
  }

  /**
   * Respostas fallback para quando API não estiver disponível
   */
  private getFallbackResponse(message: string): AgentResponse {
    const lowerMessage = message.toLowerCase();
    let response = '';

    // Respostas baseadas em palavras-chave
    if (lowerMessage.includes('treino') || lowerMessage.includes('exercício')) {
      response = '💪 Para um treino eficaz, lembre-se de sempre aquecer antes e alongar depois! Que tipo de treino você está buscando hoje?';
    } else if (lowerMessage.includes('dieta') || lowerMessage.includes('nutrição')) {
      response = '🥗 Uma alimentação balanceada é fundamental! Recomendo consultar um nutricionista, mas lembre-se: proteínas, carboidratos complexos e gorduras boas são essenciais!';
    } else if (lowerMessage.includes('motivação')) {
      response = '🔥 Cada dia é uma nova oportunidade de ser melhor! Lembre-se: progresso, não perfeição. Continue firme!';
    } else if (lowerMessage.includes('gymbuddy')) {
      response = '📱 O GymBuddy é sua rede social fitness! Aqui você pode compartilhar seus treinos, conectar com outros atletas e acompanhar seu progresso!';
    } else {
      response = '💬 Interessante! Me conte mais sobre seus objetivos no GymBuddy. Como posso ajudar você hoje?';
    }

    this.addToHistory({ role: 'assistant', content: response });

    return {
      response,
      confidence: 0.7,
      metadata: {
        model: 'fallback',
        processing_time: 0
      }
    };
  }

  /**
   * Limpa histórico de conversação
   */
  clearHistory(): void {
    this.conversationHistory = this.conversationHistory.filter(m => m.role === 'system');
  }

  /**
   * Obtém histórico de conversação
   */
  getHistory(): ChatMessage[] {
    return [...this.conversationHistory];
  }
}

// Exportar instância singleton
const agentService = new AgentService();
export default agentService;
export type { ChatMessage, AgentResponse };
