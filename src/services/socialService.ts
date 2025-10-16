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
  // Campo user como array (conforme retorno real do backend)
  user?: Array<{
    id: number
    nome: string
    foto?: string
    usuario: string // nickname/username
    email?: string
  }>
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
        
        // Debug do objeto user
        console.log('  Objeto user:', c.user)
        if (c.user && Array.isArray(c.user) && c.user.length > 0) {
          console.log('  Propriedades do user[0]:')
          Object.keys(c.user[0]).forEach(key => {
            console.log(`    ${key}: ${c.user[0][key]} (tipo: ${typeof c.user[0][key]})`)
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
        
        // Acessar o ID da publicação dentro do objeto/array publicacao
        let publicacaoId: any = null
        let publicacaoObj: any = null
        
        if (c.publicacao) {
          // Verificar se publicacao é um array
          if (Array.isArray(c.publicacao) && c.publicacao.length > 0) {
            publicacaoObj = c.publicacao[0] // Pegar o primeiro item do array
            console.log(`  - publicacao é um array, objeto[0]:`, publicacaoObj)
          } else if (typeof c.publicacao === 'object') {
            publicacaoObj = c.publicacao // É um objeto direto
            console.log(`  - publicacao é um objeto direto:`, publicacaoObj)
          }
          
          // Agora tentar diferentes nomes de campo no objeto da publicação
          if (publicacaoObj && typeof publicacaoObj === 'object') {
            publicacaoId = publicacaoObj.id || publicacaoObj.id_publicacao || publicacaoObj.publicacao_id
            console.log(`  - Chaves disponíveis no objeto publicacao:`, Object.keys(publicacaoObj))
            Object.keys(publicacaoObj).forEach(key => {
              console.log(`    ${key}: ${publicacaoObj[key]} (tipo: ${typeof publicacaoObj[key]})`)
            })
          }
        }
        
        // Também tentar campos diretos (caso o backend mude)
        if (!publicacaoId) {
          publicacaoId = c.id_publicacao || c.publicacao_id || c.post_id
        }
        
        console.log(`🔍 Comentário ${c.id}:`)
        if (Array.isArray(c.publicacao)) {
          console.log(`  - publicacao[0].id: ${c.publicacao[0]?.id}`)
          console.log(`  - publicacao[0].id_publicacao: ${c.publicacao[0]?.id_publicacao}`)
        } else {
          console.log(`  - publicacao.id: ${c.publicacao?.id}`)
          console.log(`  - publicacao.id_publicacao: ${c.publicacao?.id_publicacao}`)
        }
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
      
      // Enriquecer comentários com dados dos usuários
      const comentariosEnriquecidos = await Promise.all(
        comentariosFiltrados.map(async (comentario: any) => {
          try {
            // Se já tem dados do usuário completos, não precisa buscar
            if (comentario.user && Array.isArray(comentario.user) && comentario.user[0]?.nome) {
              return comentario
            }
            
            // Buscar dados do usuário
            const userResponse = await fetch(`${API_BASE_URL}/usuario/${comentario.id_user}`)
            if (userResponse.ok) {
              const userData = await userResponse.json()
              return {
                ...comentario,
                usuario: {
                  nome: userData.nome || userData.usuario?.nome || `Usuário ${comentario.id_user}`,
                  foto: userData.foto || userData.usuario?.foto,
                  username: userData.nickname || userData.usuario?.nickname || `user${comentario.id_user}`
                }
              }
            }
            
            return comentario
          } catch (error) {
            console.warn('Erro ao buscar dados do usuário para comentário:', comentario.id, error)
            return comentario
          }
        })
      )
      
      console.log(`✅ Comentários enriquecidos:`, comentariosEnriquecidos)
      return comentariosEnriquecidos
      
    } catch (error: any) {
      console.error('💥 Erro na requisição de comentários:', error)
      throw error
    }
  },

  // Editar comentário - Dados baseados no SQL do backend
  async editarComentario(id: number, novoConteudo: string, originalComment?: Comment, postId?: number): Promise<Comment> {
    console.log('✏️ Editando comentário:', id, 'Novo conteúdo:', novoConteudo)
    console.log('🔗 URL PUT:', `${API_BASE_URL}/comentario/${id}`)
    console.log('📋 Comentário original:', originalComment)
    console.log('🔍 Debug campos do comentário:')
    console.log('  - originalComment.id_publicacao:', originalComment?.id_publicacao)
    console.log('  - postId (fallback):', postId)
    console.log('  - Todas as chaves:', originalComment ? Object.keys(originalComment) : 'N/A')
    
    if (!originalComment) {
      throw new Error('Comentário original não encontrado para edição')
    }
    
    // Dados exatos que o backend SQL espera:
    // conteudo, data_comentario, id_publicacao, id_user (+ id no WHERE)
    const comentarioData = {
      id: id, // ID para o WHERE
      conteudo: novoConteudo.trim(),
      data_comentario: new Date().toISOString().split('T')[0],
      // FALLBACK: usar postId se id_publicacao não existir no comment
      id_publicacao: originalComment.id_publicacao || postId,
      id_user: originalComment.user?.[0]?.id || originalComment.id_user
    }
    
    console.log('📦 Dados para edição:', JSON.stringify(comentarioData, null, 2))
    
    try {
      const response = await fetch(`${API_BASE_URL}/comentario/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(comentarioData)
      })
      
      console.log('📊 Status PUT:', response.status)
      
      if (!response.ok) {
        const errorText = await response.text()
        console.error('💥 Erro ao editar comentário:', errorText)
        console.error('💥 Response headers:', response.headers)
        throw new Error(`Erro ao editar comentário: ${response.status} - ${errorText}`)
      }
      
      const result = await response.json()
      console.log('✅ Comentário editado:', result)
      
      return result
    } catch (error: any) {
      console.error('💥 Erro na requisição PUT:', error)
      throw error
    }
  },

  // Deletar comentário
  async deletarComentario(id: number): Promise<void> {
    console.log('🗑️ INICIANDO DELETE - Comentário ID:', id)
    console.log('🔗 URL DELETE:', `${API_BASE_URL}/comentario/${id}`)
    console.log('📌 Timestamp:', new Date().toISOString())
    
    try {
      console.log('🚀 Fazendo requisição DELETE...')
      
      const response = await fetch(`${API_BASE_URL}/comentario/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      
      console.log('📊 Status DELETE recebido:', response.status)
      console.log('📊 Response OK:', response.ok)
      
      if (!response.ok) {
        const errorText = await response.text()
        console.error('💥 Erro ao deletar - Status:', response.status)
        console.error('💥 Erro ao deletar - Texto:', errorText)
        console.error('💥 Response headers:', response.headers)
        throw new Error(`Erro ao deletar comentário: ${response.status} - ${errorText}`)
      }
      
      // Tentar ler response mesmo que seja vazio
      try {
        const responseData = await response.text()
        console.log('📝 Response body:', responseData)
      } catch (e) {
        console.log('📝 Response body vazio ou inválido')
      }
      
      console.log('✅ DELETE CONCLUÍDO COM SUCESSO!')
    } catch (error: any) {
      console.error('💥 ERRO GERAL na requisição DELETE:')
      console.error('💥 Tipo do erro:', typeof error)
      console.error('💥 Mensagem:', error.message)
      console.error('💥 Stack:', error.stack)
      throw error
    }
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
        // Já curtiu, então descurtir usando endpoint DELETE
        const deleteResponse = await fetch(`${API_BASE_URL}/curtida/${existingLike.id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        
        if (!deleteResponse.ok) {
          throw new Error(`Erro ao descurtir: ${deleteResponse.status}`)
        }
        
        // Buscar novo total
        const updatedResponse = await fetch(`${API_BASE_URL}/curtida`)
        const updatedData = updatedResponse.ok ? await updatedResponse.json() : { data: [] }
        const updatedLikes = updatedData.curtidas || updatedData.data || updatedData
        const newTotal = Array.isArray(updatedLikes) 
          ? updatedLikes.filter((l: Like) => l.id_publicacao === dados.id_publicacao).length
          : 0
        
        console.log('💔 Post descurtido')
        return { curtiu: false, total: newTotal }
      } else {
        // Não curtiu ainda, então curtir usando endpoint POST
        const postResponse = await fetch(`${API_BASE_URL}/curtida`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...dados,
            data_curtida: new Date().toISOString().split('T')[0]
          }),
        })
        
        if (!postResponse.ok) {
          throw new Error(`Erro ao curtir: ${postResponse.status}`)
        }
        
        // Buscar novo total
        const updatedResponse = await fetch(`${API_BASE_URL}/curtida`)
        const updatedData = updatedResponse.ok ? await updatedResponse.json() : { data: [] }
        const updatedLikes = updatedData.curtidas || updatedData.data || updatedData
        const newTotal = Array.isArray(updatedLikes) 
          ? updatedLikes.filter((l: Like) => l.id_publicacao === dados.id_publicacao).length
          : 1
        
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
      
      // Filtrar curtidas do post específico
      const likesDaPublicacao = Array.isArray(likes) 
        ? likes.filter((like: Like) => like.id_publicacao === id_publicacao)
        : []
      
      // Buscar dados dos usuários que curtiram
      const usuarios: LikeUser[] = []
      
      for (const like of likesDaPublicacao) {
        try {
          // Tentar buscar dados do usuário
          const userResponse = await fetch(`${API_BASE_URL}/usuario/${like.id_user}`)
          if (userResponse.ok) {
            const userData = await userResponse.json()
            usuarios.push({
              id: like.id_user,
              nome: userData.nome || userData.usuario?.nome || `Usuário ${like.id_user}`,
              username: userData.nickname || userData.usuario?.nickname || `user${like.id_user}`,
              foto: userData.foto || userData.usuario?.foto
            })
          } else {
            // Fallback se não conseguir buscar dados do usuário
            usuarios.push({
              id: like.id_user,
              nome: `Usuário ${like.id_user}`,
              username: `user${like.id_user}`,
              foto: undefined
            })
          }
        } catch (userError) {
          console.warn('Erro ao buscar dados do usuário:', like.id_user, userError)
          usuarios.push({
            id: like.id_user,
            nome: `Usuário ${like.id_user}`,
            username: `user${like.id_user}`,
            foto: undefined
          })
        }
      }
      
      console.log('✅ Usuários que curtiram:', usuarios)
      return usuarios
    } catch (error) {
      console.error('💥 Erro ao buscar usuários:', error)
      return []
    }
  },

  // Verificar se usuário curtiu um post
  async verificarCurtidaPost(id_user: number, id_publicacao: number): Promise<boolean> {
    try {
      const response = await fetch(`${API_BASE_URL}/curtida`)
      if (!response.ok) return false
      
      const result = await response.json()
      const likes = result.curtidas || result.data || result
      
      return Array.isArray(likes) 
        ? likes.some((like: Like) => 
            like.id_user === id_user && like.id_publicacao === id_publicacao
          )
        : false
    } catch (error) {
      console.error('Erro ao verificar curtida:', error)
      return false
    }
  },

  // Contar curtidas de um post
  async contarCurtidasPost(id_publicacao: number): Promise<number> {
    try {
      const response = await fetch(`${API_BASE_URL}/curtida`)
      if (!response.ok) return 0
      
      const result = await response.json()
      const likes = result.curtidas || result.data || result
      
      return Array.isArray(likes) 
        ? likes.filter((like: Like) => like.id_publicacao === id_publicacao).length
        : 0
    } catch (error) {
      console.error('Erro ao contar curtidas:', error)
      return 0
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
      // Primeiro verificar se já curtiu usando o endpoint correto
      const checkResponse = await fetch(`${API_BASE_URL}/curtida`)
      const existingLikes = checkResponse.ok ? await checkResponse.json() : { data: [] }
      const likes = existingLikes.curtidas || existingLikes.data || existingLikes
      
      const existingLike = Array.isArray(likes) 
        ? likes.find((like: any) => 
            like.id_user === dados.id_user && 
            like.id_comentario === dados.id_comentario
          )
        : null

      if (existingLike) {
        // Descurtir usando endpoint DELETE
        const deleteResponse = await fetch(`${API_BASE_URL}/curtida/${existingLike.id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        
        if (!deleteResponse.ok) {
          throw new Error(`Erro ao descurtir comentário: ${deleteResponse.status}`)
        }
        
        // Buscar novo total
        const updatedResponse = await fetch(`${API_BASE_URL}/curtida`)
        const updatedData = updatedResponse.ok ? await updatedResponse.json() : { data: [] }
        const updatedLikes = updatedData.curtidas || updatedData.data || updatedData
        const newTotal = Array.isArray(updatedLikes) 
          ? updatedLikes.filter((l: any) => l.id_comentario === dados.id_comentario).length
          : 0
        
        console.log('💔 Comentário descurtido')
        return { curtiu: false, total: newTotal }
      } else {
        // Curtir usando endpoint POST
        const postResponse = await fetch(`${API_BASE_URL}/curtida`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...dados,
            data_curtida: new Date().toISOString().split('T')[0]
          }),
        })
        
        if (!postResponse.ok) {
          throw new Error(`Erro ao curtir comentário: ${postResponse.status}`)
        }
        
        // Buscar novo total
        const updatedResponse = await fetch(`${API_BASE_URL}/curtida`)
        const updatedData = updatedResponse.ok ? await updatedResponse.json() : { data: [] }
        const updatedLikes = updatedData.curtidas || updatedData.data || updatedData
        const newTotal = Array.isArray(updatedLikes) 
          ? updatedLikes.filter((l: any) => l.id_comentario === dados.id_comentario).length
          : 1
        
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
      const response = await fetch(`${API_BASE_URL}/curtida`)
      
      if (!response.ok) {
        throw new Error(`Erro ao buscar curtidas: ${response.status}`)
      }

      const result = await response.json()
      const likes = result.curtidas || result.data || result
      
      // Filtrar curtidas do comentário específico
      const likesDoComentario = Array.isArray(likes) 
        ? likes.filter((like: any) => like.id_comentario === id_comentario)
        : []
      
      // Buscar dados dos usuários que curtiram
      const usuarios: LikeUser[] = []
      
      for (const like of likesDoComentario) {
        try {
          // Tentar buscar dados do usuário
          const userResponse = await fetch(`${API_BASE_URL}/usuario/${like.id_user}`)
          if (userResponse.ok) {
            const userData = await userResponse.json()
            usuarios.push({
              id: like.id_user,
              nome: userData.nome || userData.usuario?.nome || `Usuário ${like.id_user}`,
              username: userData.nickname || userData.usuario?.nickname || `user${like.id_user}`,
              foto: userData.foto || userData.usuario?.foto
            })
          } else {
            // Fallback se não conseguir buscar dados do usuário
            usuarios.push({
              id: like.id_user,
              nome: `Usuário ${like.id_user}`,
              username: `user${like.id_user}`,
              foto: undefined
            })
          }
        } catch (userError) {
          console.warn('Erro ao buscar dados do usuário:', like.id_user, userError)
          usuarios.push({
            id: like.id_user,
            nome: `Usuário ${like.id_user}`,
            username: `user${like.id_user}`,
            foto: undefined
          })
        }
      }
      
      console.log('✅ Usuários que curtiram comentário:', usuarios)
      return usuarios
    } catch (error) {
      console.error('💥 Erro ao buscar usuários:', error)
      return []
    }
  },

  // Verificar se usuário curtiu um comentário
  async verificarCurtidaComentario(id_user: number, id_comentario: number): Promise<boolean> {
    try {
      const response = await fetch(`${API_BASE_URL}/curtida`)
      if (!response.ok) return false
      
      const result = await response.json()
      const likes = result.curtidas || result.data || result
      
      return Array.isArray(likes) 
        ? likes.some((like: any) => 
            like.id_user === id_user && like.id_comentario === id_comentario
          )
        : false
    } catch (error) {
      console.error('Erro ao verificar curtida do comentário:', error)
      return false
    }
  },

  // Contar curtidas de um comentário
  async contarCurtidasComentario(id_comentario: number): Promise<number> {
    try {
      const response = await fetch(`${API_BASE_URL}/curtida`)
      if (!response.ok) return 0
      
      const result = await response.json()
      const likes = result.curtidas || result.data || result
      
      return Array.isArray(likes) 
        ? likes.filter((like: any) => like.id_comentario === id_comentario).length
        : 0
    } catch (error) {
      console.error('Erro ao contar curtidas do comentário:', error)
      return 0
    }
  }
}

// Serviço para contar comentários de um post
export const comentarioCountService = {
  async contarComentarios(id_publicacao: number): Promise<number> {
    try {
      const response = await fetch(`${API_BASE_URL}/comentario`)
      if (!response.ok) return 0
      
      const result = await response.json()
      let comentarios = []
      
      if (Array.isArray(result)) {
        comentarios = result
      } else if (result.comentarios && Array.isArray(result.comentarios)) {
        comentarios = result.comentarios
      } else if (result.data && Array.isArray(result.data)) {
        comentarios = result.data
      }
      
      // Filtrar comentários da publicação específica
      const comentariosDaPublicacao = comentarios.filter((c: any) => {
        // Tentar diferentes formas de acessar o ID da publicação
        let publicacaoId = null
        
        if (c.publicacao) {
          if (Array.isArray(c.publicacao) && c.publicacao.length > 0) {
            publicacaoId = c.publicacao[0].id || c.publicacao[0].id_publicacao
          } else if (typeof c.publicacao === 'object') {
            publicacaoId = c.publicacao.id || c.publicacao.id_publicacao
          }
        }
        
        if (!publicacaoId) {
          publicacaoId = c.id_publicacao || c.publicacao_id
        }
        
        return Number(publicacaoId) === Number(id_publicacao)
      })
      
      return comentariosDaPublicacao.length
    } catch (error) {
      console.error('Erro ao contar comentários:', error)
      return 0
    }
  }
}
