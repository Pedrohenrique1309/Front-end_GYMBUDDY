/**
 * Serviço de integração com a IA criada no Python
 * 
 */

// Configuração da API 
const AGENT_API_URL = import.meta.env.VITE_AGENT_API_URL || 'http://localhost:8000'
const API_KEY = import.meta.env.VITE_AGENT_API_KEY || ''

interface ChatMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp?: string
}

interface AgentResponse {
  response: string
  context?: any
  confidence?: number
  metadata?: {
    model?: string
    tokens?: number
    processing_time?: number
  }
}

class AgentService {
  private conversationHistory: ChatMessage[] = []
  private maxHistoryLength = 10

  constructor() {
    // Prompt de começo pra IA
    this.conversationHistory.push({
      role: 'system',
      content: `Você é o assistente virtual do GymBuddy, uma plataforma de fitness e rede social para entusiastas de academia.
      Sua função é ajudar os usuários com:
      - Dicas de treino e exercícios
      - Nutrição e dieta
      - Motivação e acompanhamento de progresso
      - Informações sobre a plataforma GymBuddy
      - Sugestões personalizadas baseadas nos objetivos e dados do usuário (IMC, etc)
      
      Seja amigável, motivador e profissional. Use emojis apenas quando apropriado`
    })
  }

  /**
   * Envia mensagem para o AgentPyLing e recebe resposta
   */
  async sendMessage(message: string): Promise<AgentResponse> {
    try {
      // Adicionar mensagem do usuário ao histórico
      this.addToHistory({ role: 'user', content: message })

      // preparar payload para API
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
      }

      // Fazer requisição para o AgentPyLing
      const response = await fetch(`${AGENT_API_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(API_KEY && { 'Authorization': `Bearer ${API_KEY}` })
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        // Fallback para respostas locais se API falhar
        return this.getFallbackResponse(message)
      }

      const data = await response.json();
      
      // Adicionar resposta ao histórico
      this.addToHistory({ 
        role: 'assistant', 
        content: data.response || data.message || data.text 
      })

      return {
        response: data.response || data.message || data.text,
        context: data.context,
        confidence: data.confidence,
        metadata: {
          model: data.model,
          tokens: data.tokens_used,
          processing_time: data.processing_time
        }
      }

    } catch (error) {
      console.error('Erro ao comunicar com AgentPyLing:', error)
      // Retornar resposta fallback em caso de erro
      return this.getFallbackResponse(message)
    }
  }

  /**
   * Adiciona mensagem ao histórico mantendo limite
   */
  private addToHistory(message: ChatMessage): void {
    message.timestamp = new Date().toISOString()
    this.conversationHistory.push(message)
    
    // Manter apenas as últimas N mensagens (exceto system)
    const systemMessages = this.conversationHistory.filter(m => m.role === 'system')
    const otherMessages = this.conversationHistory.filter(m => m.role !== 'system')
    
    if (otherMessages.length > this.maxHistoryLength * 2) {
      this.conversationHistory = [
        ...systemMessages,
        ...otherMessages.slice(-this.maxHistoryLength * 2)
      ]
    }
  }

  /**
   * Respostas fallback para quando API não estiver disponível
   */
  private getFallbackResponse(message: string): AgentResponse {
    const lowerMessage = message.toLowerCase()
    let response = ''


    this.addToHistory({ role: 'assistant', content: response });

    return {
      response,
      confidence: 0.7,
      metadata: {
        model: 'fallback',
        processing_time: 0
      }
    }
  }

  /**
   * Limpa histórico de conversação
   */
  clearHistory(): void {
    this.conversationHistory = this.conversationHistory.filter(m => m.role === 'system')
  }

  /**
   * Obtém histórico de conversação por user
   */
  getHistory(): ChatMessage[] {
    return [...this.conversationHistory]
  }
}

// Exportar instância singleton
const agentService = new AgentService()
export default agentService;
export type { ChatMessage, AgentResponse }
