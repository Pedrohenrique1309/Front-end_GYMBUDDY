const API_BASE_URL = '/api/v1/gymbuddy'

// Interfaces
export interface Comment {
  id: number
  conteudo: string // Campo correto conforme SQL
  data_comentario: string
  id_user: number
  id_publicacao: number
  usuario?: {
    nome: string
    foto?: string
    username: string
  }
  curtidas_count?: number
  curtiu?: boolean
}

export interface Like {
  id: number
  id_user: number
  id_publicacao?: number
  id_comentario?: number
  data_curtida: string
}

export interface CommentLike {
  id: number
  id_user: number
  id_comentario: number
  data_curtida: string
}

export interface LikeUser {
  id: number
  nome: string
  username: string
  foto?: string
}

// Funções de Comentários
export const comentarioService = {
  // Criar comentário
  async criarComentario(dados: {
    texto: string
    id_user: number
    id_publicacao: number
  }): Promise<Comment> {
    console.log('💬 Criando comentário:', dados)
    
    // Estrutura de dados baseada na estrutura SQL real do backend
    const comentarioData = {
      conteudo: dados.texto.trim(), // Campo correto: 'conteudo'
      data_comentario: new Date().toISOString().split('T')[0], // YYYY-MM-DD
      id_publicacao: Number(dados.id_publicacao),
      id_user: Number(dados.id_user)
    }
    
    // Validações antes do envio
    if (!comentarioData.conteudo || comentarioData.conteudo.length === 0) {
      throw new Error('Conteúdo do comentário é obrigatório')
    }
    
    if (!comentarioData.id_user || !comentarioData.id_publicacao) {
      throw new Error('ID do usuário e da publicação são obrigatórios')
    }
    
    console.log('📤 Enviando dados para comentário:')
    console.log('- conteúdo:', comentarioData.conteudo)
    console.log('- data_comentario:', comentarioData.data_comentario)
    console.log('- id_publicacao:', comentarioData.id_publicacao)
    console.log('- id_user:', comentarioData.id_user)
    console.log('🔗 URL completa:', `${API_BASE_URL}/comentario`)
    console.log('📋 JSON a ser enviado:', JSON.stringify(comentarioData, null, 2))
    
    // Teste direto com fetch para debug
    try {
      const response = await fetch(`${API_BASE_URL}/comentario`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(comentarioData),
      })
      
      console.log('📊 Status da resposta:', response.status)
      console.log('📊 Headers da resposta:', Object.fromEntries(response.headers.entries()))

      if (!response.ok) {
        const errorText = await response.text()
        console.error('💥 Erro na resposta:', {
          status: response.status,
          statusText: response.statusText,
          url: response.url,
          error: errorText
        })
        throw new Error(`Erro ao criar comentário: ${response.status} - ${errorText}`)
      }

      const result = await response.json()
      console.log('✅ Comentário criado:', result)
      return result
      
    } catch (networkError: any) {
      console.error('💥 Erro de rede:', networkError)
      throw new Error(`Erro de conexão: ${networkError?.message || 'Erro desconhecido'}`)
    }
  },

  // Listar comentários de uma publicação
  async listarComentarios(id_publicacao: number): Promise<Comment[]> {
    console.log('📚 Buscando comentários da publicação:', id_publicacao)
    
    // Tentar primeiro endpoint específico para a publicação
    let response
    let urlUsada
    
    try {
      // Tenta endpoint específico primeiro
      urlUsada = `${API_BASE_URL}/comentario/publicacao/${id_publicacao}`
      console.log('🔗 Tentando URL específica:', urlUsada)
      response = await fetch(urlUsada, {
        cache: 'no-cache', // Forçar busca sem cache
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache'
        }
      })
      
      if (!response.ok) {
        console.log('⚠️ Endpoint específico não funcionou, tentando geral')
        // Se falhar, tenta endpoint geral
        urlUsada = `${API_BASE_URL}/comentario`
        console.log('🔗 Tentando URL geral:', urlUsada)
        response = await fetch(urlUsada, {
          cache: 'no-cache',
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache'
          }
        })
      }
    } catch (error) {
      // Se der erro de rede, tenta endpoint geral
      console.log('⚠️ Erro na requisição específica, tentando geral')
      urlUsada = `${API_BASE_URL}/comentario`
      console.log('🔗 URL geral:', urlUsada)
      response = await fetch(urlUsada, {
        cache: 'no-cache',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache'
        }
      })
    }
    
    try {
      console.log('📊 Status da resposta:', response.status)
      console.log('📊 URL final usada:', urlUsada)
      
      if (!response.ok) {
        const errorText = await response.text()
        console.error('💥 Erro ao buscar comentários:', errorText)
        throw new Error(`Erro ao buscar comentários: ${response.status} - ${errorText}`)
      }

      const result = await response.json()
      console.log('📥 Resposta completa do backend:', result)
      console.log('📥 Tipo da resposta:', typeof result)
      console.log('📥 É array?', Array.isArray(result))
      
      // Tentar diferentes estruturas de resposta
      let comentarios = []
      
      if (Array.isArray(result)) {
        comentarios = result
        console.log('✅ Resposta é array direto')
      } else if (result.comentarios && Array.isArray(result.comentarios)) {
        comentarios = result.comentarios
        console.log('✅ Resposta tem propriedade comentarios')
      } else if (result.data && Array.isArray(result.data)) {
        comentarios = result.data
        console.log('✅ Resposta tem propriedade data')
      } else if (result.view && Array.isArray(result.view)) {
        comentarios = result.view
        console.log('✅ Resposta tem propriedade view')
      } else {
        console.warn('⚠️ Estrutura de resposta não reconhecida')
        console.log('📋 Chaves disponíveis:', Object.keys(result))
      }
      
      console.log('📦 Todos os comentários encontrados:', comentarios.length)
      console.log('📦 Comentários detalhados:', comentarios)
      
      // Debug do objeto publicacao aninhado
      console.log('🕵️ DEBUGGING DO OBJETO PUBLICACAO:')
      comentarios.forEach((c: any, index: number) => {
        console.log(`
📋 COMENTÁRIO ${index + 1}:`)
        console.log('  ID do comentário:', c.id)
        console.log('  Conteúdo:', c.conteudo)
        console.log('  Objeto publicacao:', c.publicacao)
        
        if (c.publicacao && typeof c.publicacao === 'object') {
          console.log('  Propriedades da publicacao:')
          Object.keys(c.publicacao).forEach(key => {
            console.log(`    ${key}: ${c.publicacao[key]} (tipo: ${typeof c.publicacao[key]})`)
          })
        }
      })
      
      console.log(`
🎯 Buscando publicação ID: ${id_publicacao} (tipo: ${typeof id_publicacao})`)
      
      const comentariosFiltrados = comentarios.filter((c: any, index: number) => {
        if (typeof c !== 'object' || c === null) {
          console.log(`⚠️ Comentário ${index} não é um objeto válido`)
          return false
        }
        
        // Acessar o ID da publicação dentro do objeto publicacao
        let publicacaoId = null
        
        if (c.publicacao && typeof c.publicacao === 'object') {
          // Tentar diferentes nomes de campo dentro do objeto publicacao
          publicacaoId = c.publicacao.id || c.publicacao.id_publicacao || c.publicacao.publicacao_id
        }
        
        // Também tentar campos diretos (caso o backend mude)
        if (!publicacaoId) {
          publicacaoId = c.id_publicacao || c.publicacao_id || c.post_id
        }
        
        console.log(`🔍 Comentário ${c.id}:`)
        console.log(`  - publicacao.id: ${c.publicacao?.id}`)
        console.log(`  - publicacao.id_publicacao: ${c.publicacao?.id_publicacao}`)
        console.log(`  - id_publicacao direto: ${c.id_publicacao}`)
        console.log(`  - ID encontrado: ${publicacaoId}`)
        console.log(`  - Comparando ${publicacaoId} === ${id_publicacao}`)
        
        const match = Number(publicacaoId) === Number(id_publicacao)
        
        if (match) {
          console.log(`✅ MATCH! Comentário ${c.id} pertence à publicação ${id_publicacao}`)
        } else {
          console.log(`❌ Comentário ${c.id} NÃO pertence à publicação ${id_publicacao}`)
        }
        
        return match
      })
      
      console.log(`✅ Comentários filtrados para publicação ${id_publicacao}:`, comentariosFiltrados)
      
      return comentariosFiltrados
      
    } catch (error: any) {
      console.error('💥 Erro na requisição de comentários:', error)
      throw error
    }
  },

  // Deletar comentário
  async deletarComentario(id: number): Promise<void> {
    console.log('🗑️ Deletando comentário:', id)
    
    const response = await fetch(`${API_BASE_URL}/comentario/${id}`, {
      method: 'DELETE',
    })

    if (!response.ok) {
      throw new Error(`Erro ao deletar comentário: ${response.status}`)
    }
    
    console.log('✅ Comentário deletado')
  }
}

// Funções de Curtidas em Posts
export const curtidaService = {
  // Curtir/Descurtir post
  async toggleCurtidaPost(dados: {
    id_user: number
    id_publicacao: number
  }): Promise<{ curtiu: boolean, total: number }> {
    console.log('❤️ Alternando curtida do post:', dados)
    
    try {
      // Primeiro verificar se já curtiu
      const checkResponse = await fetch(`${API_BASE_URL}/curtida`)
      const existingLikes = checkResponse.ok ? await checkResponse.json() : { data: [] }
      const likes = existingLikes.curtidas || existingLikes.data || existingLikes
      
      const existingLike = Array.isArray(likes) 
        ? likes.find((like: Like) => 
            like.id_user === dados.id_user && 
            like.id_publicacao === dados.id_publicacao
          )
        : null

      if (existingLike) {
        // Já curtiu, então descurtir
        await fetch(`${API_BASE_URL}/curtida/${existingLike.id}`, {
          method: 'DELETE',
        })
        
        const newTotal = Math.max(0, likes.filter((l: Like) => 
          l.id_publicacao === dados.id_publicacao
        ).length - 1)
        
        console.log('💔 Post descurtido')
        return { curtiu: false, total: newTotal }
      } else {
        // Não curtiu ainda, então curtir
        await fetch(`${API_BASE_URL}/curtida`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...dados,
            data_curtida: new Date().toISOString().split('T')[0]
          }),
        })
        
        const newTotal = likes.filter((l: Like) => 
          l.id_publicacao === dados.id_publicacao
        ).length + 1
        
        console.log('❤️ Post curtido')
        return { curtiu: true, total: newTotal }
      }
    } catch (error) {
      console.error('💥 Erro ao alternar curtida:', error)
      throw error
    }
  },

  // Buscar usuários que curtiram um post
  async buscarUsuariosCurtiramPost(id_publicacao: number): Promise<LikeUser[]> {
    console.log('👥 Buscando usuários que curtiram post:', id_publicacao)
    
    try {
      const response = await fetch(`${API_BASE_URL}/curtida`)
      
      if (!response.ok) {
        throw new Error(`Erro ao buscar curtidas: ${response.status}`)
      }

      const result = await response.json()
      const likes = result.curtidas || result.data || result
      
      // Filtrar curtidas do post específico e buscar dados dos usuários
      const likesDaPublicacao = Array.isArray(likes) 
        ? likes.filter((like: Like) => like.id_publicacao === id_publicacao)
        : []
      
      // Aqui você pode fazer uma requisição adicional para buscar dados dos usuários
      // Por enquanto, retornando dados mock
      const usuarios = likesDaPublicacao.map((like: Like) => ({
        id: like.id_user,
        nome: `Usuário ${like.id_user}`,
        username: `user${like.id_user}`,
        foto: undefined
      }))
      
      console.log('✅ Usuários que curtiram:', usuarios)
      return usuarios
    } catch (error) {
      console.error('💥 Erro ao buscar usuários:', error)
      return []
    }
  }
}

// Funções de Curtidas em Comentários
export const curtidaComentarioService = {
  // Curtir/Descurtir comentário
  async toggleCurtidaComentario(dados: {
    id_user: number
    id_comentario: number
  }): Promise<{ curtiu: boolean, total: number }> {
    console.log('❤️ Alternando curtida do comentário:', dados)
    
    try {
      // Verificar se já curtiu
      const checkResponse = await fetch(`${API_BASE_URL}/curtida_comentario`)
      const existingLikes = checkResponse.ok ? await checkResponse.json() : { data: [] }
      const likes = existingLikes.curtidas || existingLikes.data || existingLikes
      
      const existingLike = Array.isArray(likes) 
        ? likes.find((like: CommentLike) => 
            like.id_user === dados.id_user && 
            like.id_comentario === dados.id_comentario
          )
        : null

      if (existingLike) {
        // Descurtir
        await fetch(`${API_BASE_URL}/curtida_comentario/${existingLike.id}`, {
          method: 'DELETE',
        })
        
        const newTotal = Math.max(0, likes.filter((l: CommentLike) => 
          l.id_comentario === dados.id_comentario
        ).length - 1)
        
        console.log('💔 Comentário descurtido')
        return { curtiu: false, total: newTotal }
      } else {
        // Curtir
        await fetch(`${API_BASE_URL}/curtida_comentario`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...dados,
            data_curtida: new Date().toISOString().split('T')[0]
          }),
        })
        
        const newTotal = likes.filter((l: CommentLike) => 
          l.id_comentario === dados.id_comentario
        ).length + 1
        
        console.log('❤️ Comentário curtido')
        return { curtiu: true, total: newTotal }
      }
    } catch (error) {
      console.error('💥 Erro ao alternar curtida do comentário:', error)
      throw error
    }
  },

  // Buscar usuários que curtiram um comentário
  async buscarUsuariosCurtiramComentario(id_comentario: number): Promise<LikeUser[]> {
    console.log('👥 Buscando usuários que curtiram comentário:', id_comentario)
    
    try {
      const response = await fetch(`${API_BASE_URL}/curtida_comentario`)
      
      if (!response.ok) {
        throw new Error(`Erro ao buscar curtidas: ${response.status}`)
      }

      const result = await response.json()
      const likes = result.curtidas || result.data || result
      
      // Filtrar curtidas do comentário específico
      const likesDoComentario = Array.isArray(likes) 
        ? likes.filter((like: CommentLike) => like.id_comentario === id_comentario)
        : []
      
      // Dados mock dos usuários (pode ser melhorado com requisição real)
      const usuarios = likesDoComentario.map((like: CommentLike) => ({
        id: like.id_user,
        nome: `Usuário ${like.id_user}`,
        username: `user${like.id_user}`,
        foto: undefined
      }))
      
      console.log('✅ Usuários que curtiram comentário:', usuarios)
      return usuarios
    } catch (error) {
      console.error('💥 Erro ao buscar usuários:', error)
      return []
    }
  }
}
