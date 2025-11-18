import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiImage, FiSend, FiHash, FiEdit3, FiMapPin, FiMusic, FiSearch, FiPlay, FiPause } from 'react-icons/fi'
import { useUser } from '../../Contexts/UserContext'
import DefaultAvatar from '../../Recursos/avatarpadrao'
import ImageEditor from '../EditorImagem'
import MusicPicker from '../MusicPicker'
import { usePublicationActions } from '../../Hooks/usePublicationActions'
import { formatarDuracao, temPreview } from '../../Services/deezerService'

// Configuração do Azure Storage 
const AZURE_STORAGE_ACCOUNT = 'gymbuddystorage'
const AZURE_STORAGE_URL = `https://${AZURE_STORAGE_ACCOUNT}.blob.core.windows.net`
const AZURE_CONTAINER = 'fotos'
const AZURE_SAS_TOKEN = 'sp=acwl&st=2025-11-06T11:47:26Z&se=2025-11-06T21:02:26Z&sv=2024-11-04&sr=c&sig=J5vSWiU%2B3nMAcN5NecxDaHUKJ5RwdAKiDI9WDgXBPR4%3D'

interface FerramentasPopUpCriarPost {
  isOpen: boolean
  onClose: () => void
  onPostCreated?: () => void // Callback para recarregar posts
}

const PopupCriarPost = ({ isOpen, onClose, onPostCreated }: FerramentasPopUpCriarPost) => {
  const { user } = useUser()
  const { createPublication, loading: publicationLoading } = usePublicationActions()
  
  // Função para formatar data por extenso em português
  const formatarDataPorExtenso = () => {
    const agora = new Date()
    const meses = [
      'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
      'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ]
    const dias = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']
    
    const diaSemana = dias[agora.getDay()]
    const dia = agora.getDate()
    const mes = meses[agora.getMonth()]
    const ano = agora.getFullYear()
    
    return `${diaSemana}, ${dia} de ${mes} de ${ano}`
  }
  const [conteudo, setConteudo] = useState('')
  const [imagem, setImagem] = useState<string>('')
  const [arquivoSelecionado, setArquivoSelecionado] = useState<File | null>(null)
  const [tipoArquivo, setTipoArquivo] = useState<'imagem' | 'video' | null>(null)
  const [entradaHashtag, setEntradaHashtag] = useState<string>('')
  const [chipsHashtag, setChipsHashtag] = useState<string[]>([])
  const [localizacao, setLocalizacao] = useState('Academia Iron Gym - São Paulo')
  const [enviando, setEnviando] = useState(false)
  const [progressoUpload, setProgressoUpload] = useState(0)
  const [mostrarEditorImagem, setMostrarEditorImagem] = useState(false)
  
  // Estados para música do Deezer
  const [musicaSelecionada, setMusicaSelecionada] = useState<any>(null)
  const [mostrarMusicPicker, setMostrarMusicPicker] = useState(false)
  const [reproducaoMusicaId, setReproducaoMusicaId] = useState<number | null>(null)
  const audioPreviewRef = useRef<HTMLAudioElement>(null)

  // Função de configuração do upload 
  const getUploadParams = (file: File) => {
    // Obter extensão do arquivo
    const fileExtension = file.name.split('.').pop() || 'jpg'
    return {
      file,
      storageAccount: AZURE_STORAGE_ACCOUNT,
      sasToken: AZURE_SAS_TOKEN,
      containerName: AZURE_CONTAINER,
      fileName: `post_${user?.id}_${new Date().getTime()}.${fileExtension}`
    }
  }

  // dx dar scroll quando popup estiver aberto 

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Verificar tipo de arquivo
      const allowedImageTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/jfif']
      const allowedVideoTypes = ['video/mp4', 'video/quicktime', 'video/x-msvideo', 'video/webm', 'video/x-matroska', 'video/x-flv']
      
      const isImage = allowedImageTypes.includes(file.type)
      const isVideo = allowedVideoTypes.includes(file.type)
      
      console.log('📎 Arquivo selecionado:', {
        name: file.name,
        type: file.type,
        size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
        isImage,
        isVideo
      })
      
      if (!isImage && !isVideo) {
        alert('Tipo de arquivo não suportado! Use JPG, PNG, WebP para imagens ou MP4, MOV, AVI, WebM para vídeos.')
        return
      }
      
      // Verificar tamanho do arquivo (máx 50MB para vídeos, 5MB para imagens)
      const maxSize = isVideo ? 50 * 1024 * 1024 : 5 * 1024 * 1024
      if (file.size > maxSize) {
        alert(`Arquivo muito grande! Máximo ${isVideo ? '50MB' : '5MB'} permitido.`)
        return
      }
      
      // Definir tipo do arquivo
      setTipoArquivo(isVideo ? 'video' : 'imagem')
      
      // Armazenar arquivo original para upload
      setArquivoSelecionado(file)
      
      // Criar preview
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagem(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  // Função para fazer upload de mídia (imagem ou vídeo) para Azure
  const uploadMediaToAzure = async (file: File): Promise<string> => {
    const uploadParams = getUploadParams(file)
    const blobUrl = `${AZURE_STORAGE_URL}/${uploadParams.containerName}/${uploadParams.fileName}?${uploadParams.sasToken}`
    
    try {
      const mediaType = file.type.startsWith('video/') ? 'vídeo' : 'imagem'
      console.log(`Enviando ${mediaType} para Azure Storage`)
      console.log('Configurações:', {
        storageAccount: uploadParams.storageAccount,
        container: uploadParams.containerName,
        fileName: uploadParams.fileName,
        fileType: file.type,
        fileSize: `${(file.size / 1024 / 1024).toFixed(2)} MB`
      })
      
      const response = await fetch(blobUrl, {
        method: 'PUT',
        headers: {
          'x-ms-blob-type': 'BlockBlob',
          'Content-Type': file.type,
        },
        body: file,
      })
      
      if (!response.ok) {
        const errorText = await response.text()
        console.error('Erro detalhado:', errorText)
        throw new Error(`Erro ao fazer upload: ${response.status} - ${errorText}`)
      }
      
      // Retornar URL pública da mídia (sem o SAS token)
      const publicUrl = `${AZURE_STORAGE_URL}/${uploadParams.containerName}/${uploadParams.fileName}`
      console.log(`${mediaType} enviado para Azure:`, publicUrl)
      return publicUrl
      
    } catch (error) {
      console.error('Erro no upload para Azure:', error)
      throw error
    }
  }

  const handleHashtagKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      adicionarChipHashtag()
    }
  }

  const adicionarChipHashtag = () => {
    if (entradaHashtag.trim()) {
      let hashtag = entradaHashtag.trim()
      
      // Adicionar # se não tiver
      if (!hashtag.startsWith('#')) {
        hashtag = `#${hashtag}`
      }
      
      // Verificar se não é duplicata e se é válida
      if (!chipsHashtag.includes(hashtag) && hashtag.length > 1) {
        setChipsHashtag(prev => [...prev, hashtag])
      }
      
      setEntradaHashtag('')
    }
  }

  const removerChipHashtag = (tagParaRemover: string) => {
    setChipsHashtag(prev => prev.filter(tag => tag !== tagParaRemover))
  }

  // Função para tocar/parar a prévia da música selecionada
  const handleTogglePreviewMusica = () => {
    if (!musicaSelecionada || !temPreview(musicaSelecionada)) {
      console.warn('🎵 Música não tem prévia disponível')
      return
    }

    if (reproducaoMusicaId === musicaSelecionada.id && audioPreviewRef.current) {
      // Parar
      audioPreviewRef.current.pause()
      setReproducaoMusicaId(null)
    } else {
      // Iniciar
      if (audioPreviewRef.current) {
        audioPreviewRef.current.src = musicaSelecionada.preview
        audioPreviewRef.current.play().catch(error => {
          console.error('❌ Erro ao reproduzir prévia:', error)
        })
        setReproducaoMusicaId(musicaSelecionada.id)
      }
    }
  }

  const removerMusica = () => {
    if (audioPreviewRef.current) {
      audioPreviewRef.current.pause()
    }
    setMusicaSelecionada(null)
    setReproducaoMusicaId(null)
  }

  const handleSelecionarMusica = (musica: any) => {
    setMusicaSelecionada(musica)
    setMostrarMusicPicker(false)
    setReproducaoMusicaId(null)
    console.log('✅ Música selecionada:', musica.title, '-', musica.artist.name)
  }

  // Parar reprodução quando a música terminar
  const handleAudioEnded = () => {
    setReproducaoMusicaId(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!conteudo.trim()) {
      alert('Por favor, adicione um conteúdo ao seu post!')
      return
    }

    if (!user?.id) {
      alert('Usuário não autenticado!')
      return
    }

    // Validar ID do usuário com verificação robusta
    let userId: number = 0
    if (typeof user.id === 'number') {
      userId = user.id
    } else if (typeof user.id === 'string') {
      userId = parseInt(user.id, 10)
    } else if (user.id) {
      userId = parseInt(String(user.id), 10)
    }
    
    if (!userId || userId === 0 || isNaN(userId)) {
      alert('ID do usuário inválido!')
      return
    }

    setEnviando(true)
    setProgressoUpload(0)
    
    try {
      console.log('🚀 Iniciando criação do post...')
      
      let imageUrl: string = ''
      
      // Se há uma imagem/vídeo selecionado, fazer upload para o Azure
      if (arquivoSelecionado) {
        const mediaType = tipoArquivo === 'video' ? 'vídeo' : 'imagem'
        console.log(`🇺️ Fazendo upload ${mediaType} para Azure...`)
        setProgressoUpload(50)
        
        try {
          imageUrl = await uploadMediaToAzure(arquivoSelecionado)
          setProgressoUpload(100)
          console.log(`✅ ${mediaType} enviado para Azure:`, imageUrl)
        } catch (error) {
          console.error(`❌ Erro ao enviar ${mediaType} para Azure:`, error)
          // Continuar sem mídia em caso de erro no Azure
          console.log(`⚠️ Continuando sem ${mediaType}...`)
          imageUrl = ''
        }
      }
      
      // Preparar conteúdo com hashtags
      const conteudoCompleto = conteudo.trim() + (chipsHashtag.length > 0 ? ' ' + chipsHashtag.join(' ') : '')
      
      // Preparar dados mínimos (igual ao PostFeed que funciona)
      const publicacaoData: any = {
        id_usuario: Number(userId), // Garantir que é número
        conteudo: conteudoCompleto.trim() // Garantir que não tem espaços extras
      }
      
      // Adicionar foto apenas se existir (opcional)
      if (imageUrl && imageUrl.trim() !== '') {
        publicacaoData.foto = imageUrl
      }
      
      // Validar dados antes do envio
      if (!publicacaoData.conteudo || publicacaoData.conteudo.trim() === '') {
        throw new Error('Conteúdo não pode estar vazio')
      }
      
      if (publicacaoData.conteudo.length > 500) {
        throw new Error('Conteúdo muito longo (máximo 500 caracteres)')
      }
      
      if (!publicacaoData.id_usuario || publicacaoData.id_usuario === 0 || isNaN(publicacaoData.id_usuario)) {
        throw new Error(`ID do usuário inválido: ${publicacaoData.id_usuario}`)
      }
      
      console.log('📝 Dados da publicação (formato correto):', {
        id_usuario: publicacaoData.id_usuario,
        id_usuario_type: typeof publicacaoData.id_usuario,
        conteudo: publicacaoData.conteudo,
        conteudo_length: publicacaoData.conteudo.length,
        foto: publicacaoData.foto ? 'presente' : 'ausente',
        data_publicacao: publicacaoData.data_publicacao,
        dados_completos: publicacaoData
      })
      
      // Enviar dados no formato exato que o backend espera (baseado no SQL)
      console.log('📮 Enviando com estrutura correta do backend...')
      
      // CORRIGIDO: imagem é NOT NULL no banco!
      console.log('🎯 Enviando com TODOS os campos obrigatórios')
      
      // CORRIGIDO: Incluir todos os campos necessários
      console.log('✅ Enviando TODOS os campos necessários')
      console.log('👤 ID do usuário logado:', user?.id, 'Tipo:', typeof user?.id)
      console.log('🔑 user object completo:', user)
      
      const agora = new Date()
      
      // ✅ DADOS REAIS DO USUÁRIO (agora que funciona!)
      const backendPayload: any = {
        imagem: imageUrl || "https://via.placeholder.com/400x300.png?text=GymBuddy", 
        descricao: conteudoCompleto.trim() || "Novo post no GymBuddy",
        data: agora.toISOString().split('T')[0], // Data atual
        localizacao: localizacao.trim() || "Academia GymBuddy",
        id_user: Number(user?.id || userId) // ID real do usuário logado
      }
      
      // Adicionar música se selecionada
      if (musicaSelecionada) {
        backendPayload.musica = JSON.stringify({
          id: musicaSelecionada.id,
          titulo: musicaSelecionada.title,
          artista: musicaSelecionada.artist.name,
          album: musicaSelecionada.album.title,
          capa: musicaSelecionada.album.cover_medium,
          preview: musicaSelecionada.preview,
          duracao: musicaSelecionada.duration
        })
        console.log('🎵 Música adicionada ao post:', musicaSelecionada.title)
      }
      
      console.log('✅ Enviando dados reais do usuário!')
      
      console.log('🎯 Payload detalhado:')
      console.log('- imagem:', backendPayload.imagem)
      console.log('- descricao:', backendPayload.descricao) 
      console.log('- data:', backendPayload.data)
      console.log('- localizacao:', backendPayload.localizacao)
      console.log('- id_user:', backendPayload.id_user, 'tipo:', typeof backendPayload.id_user)
      console.log('- JSON completo:', JSON.stringify(backendPayload, null, 2))
      
      const response = await fetch('/api/v1/gymbuddy/publicacao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(backendPayload)
      })
      
      console.log('📎 Resposta fetch direto:', response.status, response.statusText)
      
      if (!response.ok) {
        const errorData = await response.text()
        console.error('❌ Erro fetch direto:', errorData)
        throw new Error(`Erro ${response.status}: ${errorData}`)
      }
      
      const resultado = await response.json()
      
      console.log('✅ Post criado com sucesso!', resultado)
      alert('Post publicado com sucesso!')
      
      // Limpar formulário
      setConteudo('')
      setImagem('')
      setArquivoSelecionado(null)
      setTipoArquivo(null)
      setEntradaHashtag('')
      setChipsHashtag([])
      setProgressoUpload(0)
      setMusicaSelecionada(null)
      setMostrarMusicPicker(false)
      setReproducaoMusicaId(null)
      if (audioPreviewRef.current) {
        audioPreviewRef.current.pause()
      }
      
      // Chamar callback para recarregar posts
      if (onPostCreated) {
        onPostCreated()
      }
      
      // Fechar popup
      onClose()
      
    } catch (error) {
      console.error('❌ Erro ao criar post:', error)
      alert(`Erro ao criar post: ${error instanceof Error ? error.message : 'Erro desconhecido'}`)
    } finally {
      setEnviando(false)
      setProgressoUpload(0)
    }
  }

  const lidarComFechamento = () => {
    if (enviando) return
    setConteudo('')
    setImagem('')
    setArquivoSelecionado(null)
    setTipoArquivo(null)
    setEntradaHashtag('')
    setChipsHashtag([])
    setProgressoUpload(0)
    setMusicaSelecionada(null)
    setMostrarMusicPicker(false)
    setReproducaoMusicaId(null)
    if (audioPreviewRef.current) {
      audioPreviewRef.current.pause()
    }
    onClose()
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <PopupOverlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={lidarComFechamento}
      >
        <PopupContainer
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
        >
          <PopupHeader>
            <HeaderTitle>Criar novo post</HeaderTitle>
            <BotaoFechar onClick={lidarComFechamento}>
              <FiX />
            </BotaoFechar>
          </PopupHeader>

          <UserInfo>
            <UserAvatar>
              {user?.foto ? (
                <img src={user.foto} alt={user.nome} />
              ) : (
                <DefaultAvatar size={40} />
              )}
            </UserAvatar>
            <UserDetails>
              <UserName>{user?.nome || 'Usuário'}</UserName>
              <UserNickname>@{user?.nickname || user?.email?.split('@')[0] || 'usuario'}</UserNickname>
            </UserDetails>
          </UserInfo>
          
          {/* Data da publicação */}
          <DateDisplay>
            📅 {formatarDataPorExtenso()}
          </DateDisplay>

          <PostForm onSubmit={handleSubmit}>
            <ContentSection>
              <ContentInput
                value={conteudo}
                onChange={(e) => setConteudo(e.target.value)}
                placeholder="O que você está fazendo na academia hoje? Compartilhe sua experiência..."
                maxLength={500}
                disabled={enviando}
              />
              <CharacterCount $isNearLimit={conteudo.length > 400}>
                {conteudo.length}/500
              </CharacterCount>
            </ContentSection>
            
            {/* Campo de localização */}
            <LocationSection>
              <LocationIcon>
                <FiMapPin />
              </LocationIcon>
              <LocationInput
                value={localizacao}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLocalizacao(e.target.value)}
                placeholder="Adicione sua localização..."
                maxLength={100}
                disabled={enviando}
              />
            </LocationSection>

            {imagem && (
              <ImagePreview>
                {tipoArquivo === 'video' ? (
                  <video 
                    src={imagem} 
                    controls 
                    loop
                    playsInline
                    preload="auto"
                    onError={(e) => console.error('Erro ao carregar preview do vídeo:', e)}
                    onLoadStart={() => console.log('Carregando preview do vídeo')}
                    onCanPlay={() => console.log('Preview do vídeo pronto')}
                    style={{ 
                      width: '100%', 
                      maxHeight: '30rem', 
                      minHeight: '20rem',
                      borderRadius: '1rem', 
                      background: '#000',
                      objectFit: 'contain'
                    }} 
                  />
                ) : (
                  <img src={imagem} alt="Preview do post" />
                )}
                {progressoUpload > 0 && progressoUpload < 100 && (
                  <UploadProgress>
                    {progressoUpload}%
                  </UploadProgress>
                )}
                <ImageActions>
                  {tipoArquivo === 'imagem' && (
                    <EditImageButton
                      type="button"
                      onClick={() => setMostrarEditorImagem(true)}
                      disabled={enviando}
                      title="Editar imagem"
                    >
                      <FiEdit3 />
                    </EditImageButton>
                  )}
                  <RemoveImageButton
                    type="button"
                    onClick={() => {
                      setImagem('')
                      setArquivoSelecionado(null)
                      setTipoArquivo(null)
                      setProgressoUpload(0)
                    }}
                    disabled={enviando}
                    title={tipoArquivo === 'video' ? 'Remover vídeo' : 'Remover imagem'}
                  >
                    <FiX />
                  </RemoveImageButton>
                </ImageActions>
              </ImagePreview>
            )}

            <HashtagSection>
              {/* Chips de hashtags */}
              {chipsHashtag.length > 0 && (
                <HashtagChipsContainer>
                  {chipsHashtag.map((tag, index) => (
                    <HashtagChip key={index}>
                      <span>{tag}</span>
                      <RemoveHashtagButton
                        type="button"
                        onClick={() => removerChipHashtag(tag)}
                        disabled={enviando}
                      >
                        <FiX />
                      </RemoveHashtagButton>
                    </HashtagChip>
                  ))}
                </HashtagChipsContainer>
              )}
              
              {/* Input para adicionar hashtags */}
              <HashtagInputContainer>
                <HashtagInput
                  value={entradaHashtag}
                  onChange={(e) => setEntradaHashtag(e.target.value)}
                  onKeyPress={handleHashtagKeyPress}
                  placeholder={chipsHashtag.length === 0 ? "#treino #academia #fitness" : "Adicionar hashtag..."}
                  disabled={enviando}
                />
                <HashtagIcon>
                  <FiHash />
                </HashtagIcon>
              </HashtagInputContainer>
            </HashtagSection>

            {/* Seção de Música */}
            <MusicSection>
              {musicaSelecionada ? (
                <SelectedMusicCard>
                  <MusicCardContent>
                    <MusicCover 
                      src={musicaSelecionada.album?.cover_medium || musicaSelecionada.album?.cover_small} 
                      alt={musicaSelecionada.album?.title} 
                    />
                    <MusicInfoDetailed>
                      <MusicTitleDetailed>{musicaSelecionada.title}</MusicTitleDetailed>
                      <MusicArtistDetailed>{musicaSelecionada.artist?.name}</MusicArtistDetailed>
                      <MusicAlbumDetailed>{musicaSelecionada.album?.title}</MusicAlbumDetailed>
                      <MusicDurationDetailed>
                        {formatarDuracao(musicaSelecionada.duration)}
                      </MusicDurationDetailed>
                    </MusicInfoDetailed>
                  </MusicCardContent>
                  
                  <MusicActionsDetailed>
                    {temPreview(musicaSelecionada) && (
                      <PreviewPlayButton
                        type="button"
                        onClick={handleTogglePreviewMusica}
                        isPlaying={reproducaoMusicaId === musicaSelecionada.id}
                        title={reproducaoMusicaId === musicaSelecionada.id ? 'Parar prévia' : 'Ouvir prévia'}
                      >
                        {reproducaoMusicaId === musicaSelecionada.id ? (
                          <FiPause />
                        ) : (
                          <FiPlay />
                        )}
                      </PreviewPlayButton>
                    )}
                    <RemoveMusicButton
                      type="button"
                      onClick={removerMusica}
                      disabled={enviando}
                    >
                      <FiX />
                    </RemoveMusicButton>
                  </MusicActionsDetailed>
                </SelectedMusicCard>
              ) : (
                <MusicSearchButton
                  type="button"
                  onClick={() => setMostrarMusicPicker(!mostrarMusicPicker)}
                  disabled={enviando}
                >
                  <FiMusic />
                  {mostrarMusicPicker ? 'Fechar busca' : 'Adicionar música'}
                </MusicSearchButton>
              )}
            </MusicSection>

            <ActionButtons>
              <ImageUploadButton type="button" disabled={enviando}>
                <input
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleImageUpload}
                  style={{ display: 'none' }}
                  id="image-upload"
                  disabled={enviando}
                />
                <label htmlFor="image-upload">
                  <FiImage />
                  Adicionar foto/vídeo
                </label>
              </ImageUploadButton>

              <SubmitButton
                type="submit"
                disabled={enviando || publicationLoading || !conteudo.trim()}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {enviando ? (
                  <>
                    <Spinner />
                    Publicando...
                  </>
                ) : (
                  <>
                    <FiSend />
                    Publicar
                  </>
                )}
              </SubmitButton>
            </ActionButtons>
          </PostForm>
        </PopupContainer>
      </PopupOverlay>
      
      {/* Editor de Imagem */}
      {mostrarEditorImagem && imagem && (
        <ImageEditor
          isOpen={mostrarEditorImagem}
          imageUrl={imagem}
          onClose={() => setMostrarEditorImagem(false)}
          onSave={(editedImageUrl) => {
            setImagem(editedImageUrl)
            // Converter base64 para File se necessário
            fetch(editedImageUrl)
              .then(res => res.blob())
              .then(blob => {
                const file = new File([blob], "edited-image.jpg", { type: "image/jpeg" })
                setArquivoSelecionado(file)
              })
            setMostrarEditorImagem(false)
          }}
        />
      )}

      {/* Music Picker Modal */}
      <MusicPicker
        isOpen={mostrarMusicPicker}
        onSelect={handleSelecionarMusica}
        onClose={() => setMostrarMusicPicker(false)}
      />

      {/* Audio player oculto para preview */}
      <audio
        ref={audioPreviewRef}
        onEnded={handleAudioEnded}
        crossOrigin="anonymous"
      />
    </AnimatePresence>
  )
}

// Styled Components
const PopupOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(20px);
  z-index: 15000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow-y: auto;
  
  /* Garantir que o popup seja sempre visível */
  min-height: 100vh;
  
  /* Animação do fundo */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at center,
      rgba(229, 57, 53, 0.05) 0%,
      transparent 70%
    );
    pointer-events: none;
  }

  /* Ajuste do overlay para modo claro: fosco e mais suave */
  [data-theme="light"] & {
    background: rgba(15, 23, 42, 0.45);
  }

  [data-theme="light"] &::before {
    background: radial-gradient(
      circle at center,
      rgba(227, 6, 19, 0.12) 0%,
      transparent 70%
    );
  }
`

const PopupContainer = styled(motion.div)`
  background: rgba(26, 26, 26, 0.98);
  backdrop-filter: blur(25px);
  border: 1px solid var(--border-color, rgba(255, 255, 255, 0.15));
  border-radius: 2rem;
  width: 100%;
  max-width: 60rem;
  max-height: 85vh;
  overflow-y: auto;
  margin: auto;
  box-shadow: 
    0 30px 60px rgba(0, 0, 0, 0.6),
    0 10px 30px rgba(229, 57, 53, 0.1),
    inset 0 0 40px rgba(229, 57, 53, 0.05);
  position: relative;
  
  /* Garantir centralização em telas menores */
  @media (max-width: 768px) {
    max-width: 95vw;
    max-height: 95vh;
    margin: 1rem auto;
  }
  
  /* Scrollbar personalizada */
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #E53935, #FF5722);
    border-radius: 4px;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(229, 57, 53, 0.5),
      transparent
    );
  }

  /* Versão fosca para modo claro */
  [data-theme="light"] & {
    background: rgba(255, 255, 255, 0.96);
    border-color: var(--border-color, rgba(0, 0, 0, 0.06));
    box-shadow:
      0 24px 60px rgba(15, 23, 42, 0.18),
      0 0 0 1px rgba(148, 163, 184, 0.15);
  }

  [data-theme="light"] &::-webkit-scrollbar-track {
    background: rgba(15, 23, 42, 0.04);
  }
`

const PopupHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 3rem;
  border-bottom: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
`

const HeaderTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--text-primary, var(--white));
  margin: 0;
  background: linear-gradient(135deg, #E53935, #FF5722);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const BotaoFechar = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  border: none;
  color: var(--text-primary, var(--white));
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.2s ease;
  z-index: 10;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.1);
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 3rem;
  border-bottom: 1px solid var(--border-color, rgba(255, 255, 255, 0.05));
`

const UserAvatar = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(229, 57, 53, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`

const UserName = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--text-primary, var(--white));
`

const UserNickname = styled.span`
  font-size: 1.4rem;
  color: var(--text-secondary, rgba(255, 255, 255, 0.6));
`

const DateDisplay = styled.div`
  padding: 1.5rem 3rem 0;
  font-size: 1.4rem;
  color: var(--text-secondary, rgba(255, 255, 255, 0.7));
  border-bottom: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  
  &::before {
    content: '';
    width: 3rem;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(229, 57, 53, 0.5));
  }
  
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, rgba(229, 57, 53, 0.5), transparent);
  }
`

const PostForm = styled.form`
  padding: 2.5rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

const ContentSection = styled.div`
  position: relative;
`

const ContentInput = styled.textarea`
  width: 100%;
  min-height: 12rem;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 2px solid var(--border-color, rgba(255, 255, 255, 0.1));
  border-radius: 1.5rem;
  padding: 2rem;
  font-size: 1.6rem;
  line-height: 1.6;
  color: var(--text-primary, var(--white));
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: rgba(229, 57, 53, 0.5);
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 30px rgba(229, 57, 53, 0.1);
  }
  
  &::placeholder {
    color: var(--text-secondary, rgba(255, 255, 255, 0.4));
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const CharacterCount = styled.div<{ $isNearLimit: boolean }>`
  position: absolute;
  bottom: 1rem;
  right: 1.5rem;
  font-size: 1.2rem;
  color: ${props => props.$isNearLimit ? '#FF5722' : 'var(--text-secondary, rgba(255, 255, 255, 0.5))'};
  font-weight: 500;
`

const ImagePreview = styled.div`
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.1);
  
  img {
    width: 100%;
    max-height: 30rem;
    object-fit: cover;
    display: block;
  }
`

const ImageActions = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  gap: 0.8rem;
`

const EditImageButton = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  svg {
    font-size: 1.8rem;
    color: white;
  }
  
  &:hover {
    background: rgba(29, 78, 216, 0.8);
    border-color: rgba(29, 78, 216, 0.5);
    transform: scale(1.1);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const RemoveImageButton = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  svg {
    font-size: 1.8rem;
    color: white;
  }
  
  &:hover {
    background: rgba(229, 57, 53, 0.8);
    border-color: rgba(229, 57, 53, 0.5);
    transform: scale(1.1);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const HashtagSection = styled.div`
  position: relative;
`

const HashtagInput = styled.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 2px solid var(--border-color, rgba(255, 255, 255, 0.1));
  border-radius: 1.2rem;
  padding: 1.5rem 1.8rem 1.5rem 5rem;
  font-size: 1.4rem;
  color: var(--text-primary, var(--white));
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: rgba(229, 57, 53, 0.5);
    background: rgba(255, 255, 255, 0.05);
  }
  
  &::placeholder {
    color: var(--text-secondary, rgba(255, 255, 255, 0.4));
  }
`

const HashtagIcon = styled.div`
  position: absolute;
  left: 1.8rem;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(229, 57, 53, 0.7);
  font-size: 1.8rem;
`

const LocationSection = styled.div`
  position: relative;
  margin-bottom: 2rem;
`

const LocationIcon = styled.div`
  position: absolute;
  left: 1.8rem;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(229, 57, 53, 0.7);
  font-size: 1.6rem;
`

const LocationInput = styled.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid var(--border-color, rgba(255, 255, 255, 0.1));
  border-radius: 1.5rem;
  padding: 1.5rem 2rem 1.5rem 5.5rem;
  font-size: 1.4rem;
  color: var(--text-primary, var(--white));
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: rgba(229, 57, 53, 0.5);
    background: rgba(255, 255, 255, 0.08);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-top: 1rem;
`

const ImageUploadButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.2rem;
  padding: 1.2rem 2rem;
  color: var(--text-secondary, rgba(255, 255, 255, 0.8));
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  label {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    cursor: pointer;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(229, 57, 53, 0.3);
    color: var(--text-primary, var(--white));
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    
    label {
      cursor: not-allowed;
    }
  }
`

const SubmitButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: linear-gradient(135deg, #E53935, #FF5722);
  border: none;
  border-radius: 1.2rem;
  padding: 1.4rem 3rem;
  color: white;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(229, 57, 53, 0.3);
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }
  
  &:not(:disabled):hover {
    box-shadow: 0 12px 35px rgba(229, 57, 53, 0.4);
  }
`

const Spinner = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

const HashtagChipsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 1.2rem;
`

const HashtagChip = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #E53935;
  border-radius: 2rem;
  padding: 0.6rem 1.2rem;
  color: white;
  font-size: 1.4rem;
  font-weight: 500;
  
  span {
    color: #E53935;
  }
`

const RemoveHashtagButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(229, 57, 53, 0.2);
  border: none;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  svg {
    font-size: 1.2rem;
    color: #E53935;
  }
  
  &:hover {
    background: rgba(229, 57, 53, 0.4);
    transform: scale(1.1);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`

const HashtagInputContainer = styled.div`
  position: relative;
`

const UploadProgress = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0 0 1.5rem 1.5rem;
`

const ProgressBar = styled.div<{ progress: number }>`
  flex: 1;
  height: 6px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  margin-right: 1rem;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.progress}%;
    background: linear-gradient(90deg, #E53935, #FF5722);
    border-radius: 3px;
    transition: width 0.3s ease;
  }
`

const ProgressText = styled.span`
  color: white;
  font-size: 1.4rem;
  font-weight: 600;
`

// Styled Components para Música do Deezer
const MusicSection = styled.div`
  position: relative;
  margin-bottom: 2rem;
`

const MusicSearchButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.2rem;
  padding: 1.2rem 2rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  svg {
    font-size: 1.8rem;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(229, 57, 53, 0.3);
    color: var(--white);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const SelectedMusic = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(229, 57, 53, 0.3);
  border-radius: 1.2rem;
  padding: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(229, 57, 53, 0.5);
  }
`

const MusicInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  flex: 1;
`

const MusicCover = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 0.8rem;
  object-fit: cover;
  border: 2px solid rgba(229, 57, 53, 0.3);
`

const MusicDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  flex: 1;
`

const MusicTitle = styled.strong`
  color: var(--text-primary, var(--white));
  font-size: 1.5rem;
  font-weight: 600;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const MusicArtist = styled.span`
  color: var(--text-secondary, rgba(255, 255, 255, 0.6));
  font-size: 1.3rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const RemoveMusicButton = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: rgba(229, 57, 53, 0.2);
  border: 2px solid rgba(229, 57, 53, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  svg {
    font-size: 1.8rem;
    color: #E53935;
  }
  
  &:hover {
    background: rgba(229, 57, 53, 0.4);
    border-color: rgba(229, 57, 53, 0.5);
    transform: scale(1.1);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`

const MusicSearchModal = styled.div`
  position: absolute;
  top: calc(100% + 1rem);
  left: 0;
  right: 0;
  background: rgba(26, 26, 26, 0.98);
  backdrop-filter: blur(25px);
  border: 2px solid var(--border-color, rgba(255, 255, 255, 0.1));
  border-radius: 1.5rem;
  padding: 1.5rem;
  max-height: 40rem;
  overflow-y: auto;
  z-index: 100;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.5),
    0 5px 15px rgba(229, 57, 53, 0.1);
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #E53935, #FF5722);
    border-radius: 3px;
  }
`

const MusicSearchInput = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1.2rem 1.5rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  
  svg {
    color: rgba(229, 57, 53, 0.7);
    font-size: 1.8rem;
  }
  
  input {
    flex: 1;
    background: transparent;
    border: none;
    color: var(--text-primary, var(--white));
    font-size: 1.4rem;
    outline: none;
    
    &::placeholder {
      color: var(--text-secondary, rgba(255, 255, 255, 0.4));
    }
  }
  
  &:focus-within {
    border-color: rgba(229, 57, 53, 0.5);
    background: rgba(255, 255, 255, 0.08);
  }
`

const LoadingMusic = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.4rem;
`

const MusicResults = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

const MusicResultItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border: 2px solid rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  img {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 0.6rem;
    object-fit: cover;
  }
  
  div {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    flex: 1;
    
    strong {
      color: var(--white);
      font-size: 1.4rem;
      font-weight: 600;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    
    span {
      color: rgba(255, 255, 255, 0.6);
      font-size: 1.2rem;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(229, 57, 53, 0.3);
    transform: translateX(0.5rem);
  }
`

const NoResults = styled.div`
  text-align: center;
  padding: 2rem;
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.4rem;
`

// Novos Styled Components para música melhorada
const SelectedMusicCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  background: linear-gradient(135deg, rgba(229, 57, 53, 0.15), rgba(255, 87, 34, 0.1));
  border: 2px solid rgba(229, 57, 53, 0.4);
  border-radius: 1.5rem;
  padding: 1.8rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, rgba(229, 57, 53, 0.25), rgba(255, 87, 34, 0.15));
    border-color: rgba(229, 57, 53, 0.6);
    box-shadow: 0 8px 25px rgba(229, 57, 53, 0.15);
  }

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1.2rem;
  }
`

const MusicCardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex: 1;
  min-width: 0;

  @media (max-width: 640px) {
    width: 100%;
  }
`

const MusicInfoDetailed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex: 1;
  min-width: 0;
`

const MusicTitleDetailed = styled.strong`
  color: white;
  font-size: 1.6rem;
  font-weight: 700;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  background: linear-gradient(135deg, #E53935, #FF5722);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const MusicArtistDetailed = styled.span`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.4rem;
  font-weight: 500;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

const MusicAlbumDetailed = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.3rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-style: italic;
`

const MusicDurationDetailed = styled.div`
  display: inline-block;
  background: rgba(229, 57, 53, 0.2);
  border: 1px solid rgba(229, 57, 53, 0.4);
  color: rgba(229, 57, 53, 0.8);
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0.4rem 0.8rem;
  border-radius: 0.6rem;
  margin-top: 0.4rem;
  width: fit-content;
`

const MusicActionsDetailed = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;

  @media (max-width: 640px) {
    width: 100%;
    justify-content: flex-end;
  }
`

const PreviewPlayButton = styled.button<{ isPlaying: boolean }>`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: ${props => props.isPlaying
    ? 'rgba(229, 57, 53, 0.6)'
    : 'rgba(76, 175, 80, 0.2)'};
  border: 2px solid ${props => props.isPlaying
    ? 'rgba(229, 57, 53, 0.5)'
    : 'rgba(76, 175, 80, 0.4)'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${props => props.isPlaying ? '#FF5722' : '#4CAF50'};
  font-size: 1.8rem;
  padding: 0;

  &:hover {
    background: ${props => props.isPlaying
      ? 'rgba(229, 57, 53, 0.8)'
      : 'rgba(76, 175, 80, 0.4)'};
    border-color: ${props => props.isPlaying
      ? 'rgba(229, 57, 53, 0.7)'
      : 'rgba(76, 175, 80, 0.6)'};
    transform: scale(1.1);
    box-shadow: 0 4px 15px ${props => props.isPlaying
      ? 'rgba(229, 57, 53, 0.3)'
      : 'rgba(76, 175, 80, 0.2)'};
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 640px) {
    width: 3.5rem;
    height: 3.5rem;
  }
`

export default PopupCriarPost
