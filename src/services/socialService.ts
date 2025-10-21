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
    console.log('🔍 ID da publicação (tipo):', typeof id_publicacao)
    
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
            // Se já tem dados do usuário completos no array user
            if (comentario.user && Array.isArray(comentario.user) && comentario.user[0]?.nome) {
              console.log(`✅ Comentário ${comentario.id} já tem dados do usuário:`, comentario.user[0].nome)
              return {
                ...comentario,
                usuario: {
                  nome: comentario.user[0].nome,
                  foto: comentario.user[0].foto,
                  username: comentario.user[0].usuario || comentario.user[0].nickname || `user${comentario.user[0].id}`
                }
              }
            }
            
            // Buscar dados do usuário se não tiver
            const userId = comentario.id_user || comentario.user_id
            console.log(`🔍 Buscando dados do usuário ${userId} para comentário ${comentario.id}`)
            
            const userResponse = await fetch(`${API_BASE_URL}/usuario/${userId}`)
            if (userResponse.ok) {
              const userData = await userResponse.json()
              const dadosUsuario = userData.usuario || userData
              
              return {
                ...comentario,
                usuario: {
                  nome: dadosUsuario.nome || `Usuário ${userId}`,
                  foto: dadosUsuario.foto || '',
                  username: dadosUsuario.nickname || dadosUsuario.usuario || `user${userId}`
                }
              }
            }
            
            // Fallback se não conseguir buscar dados
            return {
              ...comentario,
              usuario: {
                nome: `Usuário ${userId}`,
                foto: '',
                username: `user${userId}`
              }
            }
          } catch (error) {
            console.warn('Erro ao buscar dados do usuário para comentário:', comentario.id, error)
            const userId = comentario.id_user || comentario.user_id || 'desconhecido'
            return {
              ...comentario,
              usuario: {
                nome: `Usuário ${userId}`,
                foto: '',
                username: `user${userId}`
              }
            }
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

// Função auxiliar para buscar curtida específica do usuário/publicação
const buscarCurtidaEspecifica = async (id_user: number, id_publicacao: number) => {
  try {
    const response = await fetch(`${API_BASE_URL}/curtida`, {
      cache: 'no-cache',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache'
      }
    })
    
    if (response.ok) {
      const data = await response.json()
      const likes = data.curtidas || data.data || data
      
      if (Array.isArray(likes)) {
        // Tentar diferentes estruturas que o backend pode retornar
        const curtidaEncontrada = likes.find((curtida: any) => {
          // Estrutura 1: user[] e publicacao[] arrays
          if (curtida.user && Array.isArray(curtida.user) && curtida.publicacao && Array.isArray(curtida.publicacao)) {
            const userMatch = Number(curtida.user[0]?.id) === Number(id_user)
            const pubMatch = Number(curtida.publicacao[0]?.id) === Number(id_publicacao)
            return userMatch && pubMatch
          }
          
          // Estrutura 2: id_user e id_publicacao diretos
          if (curtida.id_user !== undefined && curtida.id_publicacao !== undefined) {
            const userMatch = Number(curtida.id_user) === Number(id_user)
            const pubMatch = Number(curtida.id_publicacao) === Number(id_publicacao)
            return userMatch && pubMatch
          }
          
          return false
        })
        
        return curtidaEncontrada || null
      }
    }
  } catch (error) {
    console.error('Erro na busca:', error)
  }
  
  return null
}

// Funções de Curtidas em Posts
export const curtidaService = {
  // Curtir/Descurtir post
  async toggleCurtidaPost(dados: {
    id_user: number
    id_publicacao: number
  }): Promise<{ curtiu: boolean, total: number }> {
    // Validar dados antes de prosseguir
    if (!dados.id_user || !dados.id_publicacao) {
      throw new Error('ID do usuário e da publicação são obrigatórios para curtir')
    }
    
    try {
      // Buscar curtida existente
      const existingLike = await buscarCurtidaEspecifica(dados.id_user, dados.id_publicacao)

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
        
        // Buscar novo total usando a estrutura correta
        const updatedResponse = await fetch(`${API_BASE_URL}/curtida`)
        const updatedData = updatedResponse.ok ? await updatedResponse.json() : { data: [] }
        const updatedLikes = updatedData.curtidas || updatedData.data || updatedData
        
        console.log('🔍 DEBUG - Estrutura das curtidas após DELETE:', {
          total: Array.isArray(updatedLikes) ? updatedLikes.length : 0,
          amostra: updatedLikes[0]
        })
        
        const newTotal = Array.isArray(updatedLikes) 
          ? updatedLikes.filter((l: any) => {
              // Tentar ambas as estruturas
              let match = false
              
              // Estrutura 1: publicacao[] array
              if (l.publicacao && Array.isArray(l.publicacao) && l.publicacao.length > 0) {
                match = Number(l.publicacao[0].id) === Number(dados.id_publicacao)
              }
              // Estrutura 2: id_publicacao direto
              else if (l.id_publicacao !== undefined) {
                match = Number(l.id_publicacao) === Number(dados.id_publicacao)
              }
              
              return match
            }).length
          : 0
        
        console.log(`💔 Descurtiu - Total para post ${dados.id_publicacao}: ${newTotal}`)
        return { curtiu: false, total: newTotal }
      } else {
        // Não curtiu ainda, então curtir usando endpoint POST
        const curtidaData = {
          id_user: Number(dados.id_user),
          id_publicacao: Number(dados.id_publicacao),
          data_curtida: new Date().toISOString().split('T')[0]
        }
        
        console.log('📤 Enviando POST para:', `${API_BASE_URL}/curtida`)
        console.log('📤 Dados:', curtidaData)
        
        const postResponse = await fetch(`${API_BASE_URL}/curtida`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(curtidaData)
        })
        
        console.log('📥 Resposta do POST:', {
          status: postResponse.status,
          statusText: postResponse.statusText,
          ok: postResponse.ok,
          url: postResponse.url
        })
        
        if (!postResponse.ok) {
          let errorMessage = 'Erro desconhecido'
          let errorData = null
          try {
            errorData = await postResponse.json()
            errorMessage = errorData.message || errorData.error || `Status ${postResponse.status}`
            console.log('❌ Erro JSON do servidor:', errorData)
          } catch {
            const errorText = await postResponse.text()
            errorMessage = errorText || `Status ${postResponse.status}`
            console.log('❌ Erro texto do servidor:', errorText)
          }
          
          // Tratamento específico por tipo de erro
          if (postResponse.status === 404 && !errorMessage.includes('já cadastrado')) {
            // Erro 404 sem ser "já cadastrado" = endpoint não encontrado
            console.error('❌ ERRO 404: Endpoint não encontrado!')
            console.error('URL tentada:', `${API_BASE_URL}/curtida`)
            console.error('Verifique se o backend está rodando e o endpoint está correto')
            throw new Error('Endpoint de curtidas não encontrado (404). Verifique o backend.')
          } else if (postResponse.status === 500) {
            throw new Error('Problema temporário no servidor. Tente novamente em alguns segundos.')
          } else if (postResponse.status === 404 && errorMessage.includes('já cadastrado')) {
            // Backend diz que já existe - buscar e tentar remover
            
            // Tentar encontrar todas as curtidas do usuário neste post
            const response = await fetch(`${API_BASE_URL}/curtida`)
            const data = response.ok ? await response.json() : { data: [] }
            const likes = data.curtidas || data.data || data
            
            // Buscar TODAS as curtidas deste usuário neste post (pode haver duplicatas)
            const userLikes = Array.isArray(likes) ? likes.filter((curtida: any) => {
              // Verificar ambas estruturas
              if (curtida.id_user !== undefined && curtida.id_publicacao !== undefined) {
                return Number(curtida.id_user) === Number(dados.id_user) && 
                       Number(curtida.id_publicacao) === Number(dados.id_publicacao)
              }
              if (curtida.user && Array.isArray(curtida.user) && curtida.publicacao && Array.isArray(curtida.publicacao)) {
                return Number(curtida.user[0]?.id) === Number(dados.id_user) && 
                       Number(curtida.publicacao[0]?.id) === Number(dados.id_publicacao)
              }
              return false
            }) : []
            
            // Se encontrou curtidas duplicadas, deletar todas
            if (userLikes.length > 0) {
              for (const like of userLikes) {
                try {
                  await fetch(`${API_BASE_URL}/curtida/${like.id}`, {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' }
                  })
                } catch (e) {
                  // Erro silencioso ao deletar duplicata
                }
              }
            }
            
            // Retornar estado não curtido
            const currentTotal = await curtidaService.contarCurtidasPost(dados.id_publicacao)
            return { curtiu: false, total: currentTotal }
          }
          
          throw new Error(`Erro ao curtir: ${errorMessage}`)
        }
        
        // Buscar novo total usando a estrutura correta
        const updatedResponse = await fetch(`${API_BASE_URL}/curtida`)
        const updatedData = updatedResponse.ok ? await updatedResponse.json() : { data: [] }
        const updatedLikes = updatedData.curtidas || updatedData.data || updatedData
        
        console.log('🔍 DEBUG - Estrutura COMPLETA das curtidas após POST:')
        console.log('Total de curtidas retornadas:', Array.isArray(updatedLikes) ? updatedLikes.length : 0)
        console.log('Tipo de dados:', typeof updatedLikes, Array.isArray(updatedLikes) ? 'É Array' : 'NÃO é Array')
        if (Array.isArray(updatedLikes) && updatedLikes.length > 0) {
          console.log('Amostra da primeira curtida:', JSON.stringify(updatedLikes[0], null, 2))
          console.log('Campos disponíveis:', Object.keys(updatedLikes[0]))
        } else {
          console.log('Array vazio ou não é array:', updatedLikes)
        }
        console.log('Procurando por id_publicacao:', dados.id_publicacao, 'tipo:', typeof dados.id_publicacao)
        
        const newTotal = Array.isArray(updatedLikes) 
          ? updatedLikes.filter((l: any) => {
              // Tentar ambas as estruturas
              let match = false
              
              console.log(`   Analisando curtida ID ${l.id}:`, {
                tem_publicacao_array: !!(l.publicacao && Array.isArray(l.publicacao)),
                publicacao_id: l.publicacao?.[0]?.id,
                tem_id_publicacao: l.id_publicacao !== undefined,
                id_publicacao_valor: l.id_publicacao,
                procurando: dados.id_publicacao
              })
              
              // Estrutura 1: publicacao[] array
              if (l.publicacao && Array.isArray(l.publicacao) && l.publicacao.length > 0) {
                match = Number(l.publicacao[0].id) === Number(dados.id_publicacao)
                console.log(`     ✓ Estrutura 1 (publicacao[]): ${l.publicacao[0].id} === ${dados.id_publicacao} ? ${match}`)
              }
              // Estrutura 2: id_publicacao direto
              else if (l.id_publicacao !== undefined) {
                match = Number(l.id_publicacao) === Number(dados.id_publicacao)
                console.log(`     ✓ Estrutura 2 (id_publicacao): ${l.id_publicacao} === ${dados.id_publicacao} ? ${match}`)
              }
              
              return match
            }).length
          : 1
        
        console.log(`❤️ Curtiu - Total para post ${dados.id_publicacao}: ${newTotal}`)
        return { curtiu: true, total: newTotal }
      }
    } catch (error: any) {
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
      const curtida = await buscarCurtidaEspecifica(id_user, id_publicacao)
      return curtida !== null
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
        ? likes.filter((curtida: any) => {
            // Tentar ambas as estruturas
            // Estrutura 1: publicacao[] array
            if (curtida.publicacao && Array.isArray(curtida.publicacao) && curtida.publicacao.length > 0) {
              return Number(curtida.publicacao[0].id) === Number(id_publicacao)
            }
            // Estrutura 2: id_publicacao direto
            if (curtida.id_publicacao !== undefined) {
              return Number(curtida.id_publicacao) === Number(id_publicacao)
            }
            return false
          }).length
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
