import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiImage, FiSend, FiHash, FiEdit3, FiMapPin } from 'react-icons/fi'
import { useUser } from '../../contexts/UserContext'
import DefaultAvatar from '../../assets/avatarpadrao'
import ImageEditor from '../ImageEditor'
import { usePublicationActions } from '../../hooks/usePublicationActions'

// Configuração do Azure Storage 
const AZURE_STORAGE_ACCOUNT = 'gymbuddystorage'
const AZURE_STORAGE_URL = `https://${AZURE_STORAGE_ACCOUNT}.blob.core.windows.net`
const AZURE_CONTAINER = 'fotos'
const AZURE_SAS_TOKEN = 'sp=cwl&st=2025-10-16T11:40:47Z&se=2025-10-16T20:55:47Z&sv=2024-11-04&sr=c&sig=4n9LQS%2Ferr4FfSIvE0woIQyCXBUMvNQpyntZT8kjOWY%3D'

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
  const [entradaHashtag, setEntradaHashtag] = useState<string>('')
  const [chipsHashtag, setChipsHashtag] = useState<string[]>([])
  const [localizacao, setLocalizacao] = useState('Academia Iron Gym - São Paulo')
  const [enviando, setEnviando] = useState(false)
  const [progressoUpload, setProgressoUpload] = useState(0)
  const [mostrarEditorImagem, setMostrarEditorImagem] = useState(false)

  // Função de configuração do upload 
  const getUploadParams = (file: File) => {
    return {
      file,
      storageAccount: AZURE_STORAGE_ACCOUNT,
      sasToken: AZURE_SAS_TOKEN,
      containerName: AZURE_CONTAINER,
      fileName: `post_${user?.id}_${new Date().getTime()}.jpg`
    }
  }

  // dx dar scroll quando popup estiver aberto 

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // verificar tamanho do arquivo (máx 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Imagem muito grande! Máximo 5MB permitido.')
        return
      }
      
      // Verificar tipo de arquivo
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/jfif']
      if (!allowedTypes.includes(file.type)) {
        alert('Tipo de arquivo não suportado! Use JPG, PNG, JFIF ou WebP.')
        return
      }
      
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

  // Função para fazer upload da imagem para Azure (usando configurações corretas)
  const uploadImageToAzure = async (file: File): Promise<string> => {
    const uploadParams = getUploadParams(file)
    const blobUrl = `${AZURE_STORAGE_URL}/${uploadParams.containerName}/${uploadParams.fileName}?${uploadParams.sasToken}`
    
    try {
      console.log('Enviando imagem para Azure Storage')
      console.log('Configurações:', {
        storageAccount: uploadParams.storageAccount,
        container: uploadParams.containerName,
        fileName: uploadParams.fileName
      })
      
      const response = await fetch(blobUrl, {
        method: 'PUT',
        headers: {
          'x-ms-blob-type': 'BlockBlob',
          'Content-Type': file.type || 'image/jpeg',
        },
        body: file,
      })
      
      if (!response.ok) {
        const errorText = await response.text()
        console.error('Erro detalhado:', errorText)
        throw new Error(`Erro ao fazer upload: ${response.status} - ${errorText}`)
      }
      
      // Retornar URL pública da imagem (sem o SAS token)
      const publicUrl = `${AZURE_STORAGE_URL}/${uploadParams.containerName}/${uploadParams.fileName}`
      console.log('Imagem enviada para Azure:', publicUrl)
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
      
      // Se há uma imagem selecionada, fazer upload para o Azure
      if (arquivoSelecionado) {
        console.log('🇺️ Fazendo upload da imagem para Azure...')
        setProgressoUpload(50)
        
        try {
          imageUrl = await uploadImageToAzure(arquivoSelecionado)
          setProgressoUpload(100)
          console.log('✅ Imagem enviada para Azure:', imageUrl)
        } catch (error) {
          console.error('❌ Erro ao enviar imagem para Azure:', error)
          // Continuar sem imagem em caso de erro no Azure
          console.log('⚠️ Continuando sem imagem...')
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
      setEntradaHashtag('')
      setChipsHashtag([])
      setProgressoUpload(0)
      
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
    setEntradaHashtag('')
    setChipsHashtag([])
    setProgressoUpload(0)
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
                <img src={imagem} alt="Preview do post" />
                {progressoUpload > 0 && progressoUpload < 100 && (
                  <UploadProgress>
                    {progressoUpload}%
                  </UploadProgress>
                )}
                <ImageActions>
                  <EditImageButton
                    type="button"
                    onClick={() => setMostrarEditorImagem(true)}
                    disabled={enviando}
                    title="Editar imagem"
                  >
                    <FiEdit3 />
                  </EditImageButton>
                  <RemoveImageButton
                    type="button"
                    onClick={() => {
                      setImagem('')
                      setArquivoSelecionado(null)
                      setProgressoUpload(0)
                    }}
                    disabled={enviando}
                    title="Remover imagem"
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

            <ActionButtons>
              <ImageUploadButton type="button" disabled={enviando}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: 'none' }}
                  id="image-upload"
                  disabled={enviando}
                />
                <label htmlFor="image-upload">
                  <FiImage />
                  Adicionar foto
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
`

const PopupContainer = styled(motion.div)`
  background: rgba(26, 26, 26, 0.98);
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.15);
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
`

const PopupHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

const HeaderTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--white);
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
  color: var(--white);
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
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
  color: var(--white);
`

const UserNickname = styled.span`
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.6);
`

const DateDisplay = styled.div`
  padding: 1.5rem 3rem 0;
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.7);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 2rem;
  font-size: 1.6rem;
  line-height: 1.6;
  color: var(--white);
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
    color: rgba(255, 255, 255, 0.4);
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
  color: ${props => props.$isNearLimit ? '#FF5722' : 'rgba(255, 255, 255, 0.5)'};
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
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.2rem;
  padding: 1.5rem 1.8rem 1.5rem 5rem;
  font-size: 1.4rem;
  color: var(--white);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: rgba(229, 57, 53, 0.5);
    background: rgba(255, 255, 255, 0.05);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
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
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 1.5rem 2rem 1.5rem 5.5rem;
  font-size: 1.4rem;
  color: var(--white);
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
  color: rgba(255, 255, 255, 0.8);
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
    color: var(--white);
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

export default PopupCriarPost
