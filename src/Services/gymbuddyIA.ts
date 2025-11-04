import { api } from './api'

// Interfaces para tipagem
interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
  timestamp?: string
}

interface ChatRequest {
  user_id: string
  message: string
  context?: {
    conversation_history?: ChatMessage[]
  }
}

interface ChatResponse {
  status_code: number
  data?: {
    response: string
    suggestions?: string[]
    conversation_id?: string
  }
  message?: string
}

interface PerfilAnalise {
  user_id: string
  peso?: number
  altura?: number
  idade?: number
  sexo?: string
  objetivo?: string
  nivel_experiencia?: string
}

interface PlanoTreino {
  user_id: string
  preferences?: {
    objetivo: string
    nivel_experiencia: string
    disponibilidade_semanal: number
    equipamentos_disponiveis?: string[]
    limitacoes_fisicas?: string[]
  }
}

interface PlanoNutricional {
  user_id: string
  objective: string
  peso?: number
  altura?: number
  idade?: number
  sexo?: string
  nivel_atividade?: string
  restricoes_alimentares?: string[]
}

class GymBuddyIA {
  private conversationHistory: ChatMessage[] = []
  
  // Chat com IA
  async enviarMensagem(userId: string, message: string): Promise<{
    mensagem: string
    sugestoes?: string[]
  }> {
    try {
      console.log('🤖 [GymBuddy IA] Enviando mensagem:', { userId, message: message.substring(0, 50) + '...' })
      console.log('🔍 [GymBuddy IA] VERIFICANDO USER_ID:', { 
        userId, 
        tipo: typeof userId, 
        valido: !isNaN(Number(userId)),
        convertido: Number(userId)
      })
      
      const chatData: ChatRequest = {
        user_id: userId,
        message,
        context: {
          conversation_history: this.conversationHistory
        }
      }

      console.log('📤 [GymBuddy IA] Dados enviados:', chatData)
      const response = await api.post<ChatResponse>('/v1/gymbuddy/ia/chat', chatData)
      console.log('📥 [GymBuddy IA] Resposta recebida:', response.data)
      
      if (response.data.status_code === 200 && response.data.data) {
        // Adicionar ao histórico da conversa
        this.conversationHistory.push(
          { role: 'user', content: message, timestamp: new Date().toISOString() },
          { role: 'assistant', content: response.data.data.response, timestamp: new Date().toISOString() }
        )

        // Manter apenas as últimas 10 mensagens para não sobrecarregar
        if (this.conversationHistory.length > 20) {
          this.conversationHistory = this.conversationHistory.slice(-20)
        }

          return {
          mensagem: response.data.data.response,
          sugestoes: response.data.data.suggestions || []
        }
      } else {
        console.warn('⚠️ [GymBuddy IA] Resposta inválida:', response.data)
        throw new Error(response.data.message || 'Erro na resposta da IA')
      }
    } catch (error) {
      console.error('❌ [GymBuddy IA] Erro ao enviar mensagem:', error)
      
      // Verificar se é erro de rede ou da API
      if (error instanceof Error && 'response' in error) {
        const axiosError = error as any
        console.error('🚫 [GymBuddy IA] Erro da API:', axiosError.response?.status, axiosError.response?.data)
      } else if (error instanceof Error && 'request' in error) {
        console.error('🌐 [GymBuddy IA] Erro de rede - backend pode estar offline')
      }
      
      return this.gerarFallbackResponse(message)
    }
  }

  // Analisar perfil do usuário
  async analisarPerfil(dadosPerfil: PerfilAnalise): Promise<{
    analise: string
    recomendacoes: string[]
    metricas?: any
  }> {
    try {
      console.log('📈 [GymBuddy IA] Analisando perfil:', dadosPerfil.user_id)
      const response = await api.post('/v1/gymbuddy/ia/analisar-perfil', dadosPerfil)
      console.log('📈 [GymBuddy IA] Análise recebida:', response.data)
      
      if (response.data.status_code === 200) {
        return response.data.data
      } else {
        throw new Error(response.data.message || 'Erro na análise do perfil')
      }
    } catch (error) {
      console.error('Erro ao analisar perfil:', error)
      throw error
    }
  }

  // Gerar plano de treino
  async gerarPlanoTreino(dadosPlano: PlanoTreino): Promise<{
    plano: any
    observacoes: string[]
  }> {
    try {
      console.log('🏋️ [GymBuddy IA] Gerando plano de treino:', dadosPlano.user_id)
      const response = await api.post('/v1/gymbuddy/ia/plano-treino', dadosPlano)
      console.log('🏋️ [GymBuddy IA] Plano recebido:', response.data)
      
      if (response.data.status_code === 200) {
        return response.data.data
      } else {
        throw new Error(response.data.message || 'Erro ao gerar plano de treino')
      }
    } catch (error) {
      console.error('Erro ao gerar plano de treino:', error)
      throw error
    }
  }

  // Gerar plano nutricional
  async gerarPlanoNutricional(dadosNutricao: PlanoNutricional): Promise<{
    plano: any
    observacoes: string[]
  }> {
    try {
      console.log('🥗 [GymBuddy IA] Gerando plano nutricional:', dadosNutricao.user_id)
      const response = await api.post('/v1/gymbuddy/ia/plano-nutricional', dadosNutricao)
      console.log('🥗 [GymBuddy IA] Plano nutricional recebido:', response.data)
      
      if (response.data.status_code === 200) {
        return response.data.data
      } else {
        throw new Error(response.data.message || 'Erro ao gerar plano nutricional')
      }
    } catch (error) {
      console.error('Erro ao gerar plano nutricional:', error)
      throw error
    }
  }

  // Verificar status da IA
  async verificarStatus(): Promise<boolean> {
    try {
      console.log('🔍 [GymBuddy IA] Verificando status...')
      const response = await api.get('/v1/gymbuddy/ia/status')
      console.log('🔍 [GymBuddy IA] Status recebido:', response.data)
      return response.data.status_code === 200
    } catch (error) {
      console.error('❌ [GymBuddy IA] Erro ao verificar status:', error)
      return false
    }
  }

  // Limpar histórico da conversa
  limparHistorico(): void {
    this.conversationHistory = []
  }

  // Resposta de fallback caso a API falhe
  private gerarFallbackResponse(message: string): {
    mensagem: string
    sugestoes?: string[]
  } {
    const messageLower = message.toLowerCase()
    
    if (messageLower.includes('treino')) {
      return {
        mensagem: `Desculpe, estou com dificuldades para acessar minha base de conhecimento no momento. 🤖\n\nMas posso te dar uma dica rápida: para um bom treino, foque nos exercícios compostos como agachamento, supino e puxada. Eles trabalham múltiplos grupos musculares!\n\nTente novamente em alguns instantes, estarei de volta em breve! 💪`,
        sugestoes: ['Tentar novamente', 'Status da IA', 'Dicas básicas']
      }
    } else if (messageLower.includes('dieta') || messageLower.includes('nutrição')) {
      return {
        mensagem: `Ops! Parece que meu sistema de IA está temporariamente indisponível. 🤖\n\nEnquanto isso, lembre-se: uma boa alimentação inclui proteínas magras, carboidratos complexos e gorduras saudáveis. Hidrate-se bem!\n\nVou voltar logo com respostas mais detalhadas! 💧`,
        sugestoes: ['Tentar novamente', 'Status da IA', 'Dicas básicas']
      }
    }

    return {
      mensagem: `Oi! Sou o GymBuddy AI, mas estou com alguns problemas técnicos no momento. 🤖⚙️\n\nMeus sistemas de IA estão sendo atualizados para te oferecer as melhores respostas sobre fitness!\n\nTente novamente em alguns instantes. Prometo que voltarei mais inteligente! 🚀`,
      sugestoes: ['Tentar novamente', 'Verificar status', 'Voltar depois']
    }
  }
}

// Exportar instância única
export const gymbuddyIA = new GymBuddyIA()
export default gymbuddyIA
