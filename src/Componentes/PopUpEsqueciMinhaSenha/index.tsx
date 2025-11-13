import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiCheck, FiMail, FiArrowLeft, FiKey, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'
import styled from 'styled-components'
import { enviarCodigoRecuperacao, buscarUsuarioPorToken, alterarSenhaComId } from '../../Config/api'

interface PropsPopupEsqueciSenha {
  estaAberto: boolean
  aoFechar: () => void
  aoVoltarParaLogin?: () => void
}

type Etapa = 'email' | 'codigo' | 'novaSenha' | 'sucesso'

const PopupEsqueciSenha = ({ estaAberto, aoFechar, aoVoltarParaLogin }: PropsPopupEsqueciSenha) => {
  const [etapaAtual, setEtapaAtual] = useState<Etapa>('email')
  const [estaCarregando, setEstaCarregando] = useState(false)
  const [erro, setErro] = useState<string | null>(null)
  const [sucesso, setSucesso] = useState<string | null>(null)
  const [email, setEmail] = useState('')
  const [codigo, setCodigo] = useState('')
  const [digitosCodigo, setDigitosCodigo] = useState(['', '', '', '', '', ''])
  const [novaSenha, setNovaSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [mostrarSenha, setMostrarSenha] = useState(false)
  const [idUsuario, setIdUsuario] = useState<number | null>(null)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  // Detectar tema atual
  useEffect(() => {
    const theme = document.documentElement.getAttribute('data-theme')
    setIsDarkMode(theme !== 'light')
    
    const observer = new MutationObserver(() => {
      const currentTheme = document.documentElement.getAttribute('data-theme')
      setIsDarkMode(currentTheme !== 'light')
    })
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    })
    
    return () => observer.disconnect()
  }, [])

  const limparFormulario = () => {
    setEmail('')
    setCodigo('')
    setDigitosCodigo(['', '', '', '', '', ''])
    setNovaSenha('')
    setConfirmarSenha('')
    setMostrarSenha(false)
    setErro(null)
    setSucesso(null)
    setEstaCarregando(false)
    setEtapaAtual('email')
    setIdUsuario(null)
  }

  const aoFecharPopup = () => {
    limparFormulario()
    aoFechar()
  }
  
  const aoVoltarLogin = () => {
    limparFormulario()
    if (aoVoltarParaLogin) {
      aoVoltarParaLogin()
    }
  }


  const aoEnviarEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    setEstaCarregando(true)
    setErro(null)

    try {
      const resposta = await enviarCodigoRecuperacao(email)

      if (resposta && (resposta.status === true || resposta.status_code === 200)) {
        setSucesso('Código enviado para seu email!')
        setTimeout(() => {
          setSucesso(null)
          setEtapaAtual('codigo')
        }, 1500)
      } else {
        setErro(resposta?.message || 'Erro ao enviar código de recuperação. Verifique o email.')
      }
    } catch (erro) {
      console.error('Erro ao enviar email:', erro)
      setErro('Erro ao enviar código de recuperação. Tente novamente.')
    } finally {
      setEstaCarregando(false)
    }
  }

  // Função para lidar com mudanças nos dígitos do código
  const aoMudarDigito = (indice: number, valor: string) => {
    // Permite apenas números
    const novoValor = valor.replace(/\D/g, '')
    
    if (novoValor.length <= 1) {
      const novosDigitos = [...digitosCodigo]
      novosDigitos[indice] = novoValor
      setDigitosCodigo(novosDigitos)
      
      // Atualizar o código completo
      const codigoCompleto = novosDigitos.join('')
      setCodigo(codigoCompleto)
      
      // Mover para o próximo input se um dígito foi inserido
      if (novoValor && indice < 5) {
        inputRefs.current[indice + 1]?.focus()
      }
    }
  }
  
  // Função para lidar com teclas especiais
  const aoTeclarDigito = (indice: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !digitosCodigo[indice] && indice > 0) {
      // Se backspace e campo vazio, mover para o anterior
      inputRefs.current[indice - 1]?.focus()
    } else if (e.key === 'ArrowLeft' && indice > 0) {
      inputRefs.current[indice - 1]?.focus()
    } else if (e.key === 'ArrowRight' && indice < 5) {
      inputRefs.current[indice + 1]?.focus()
    }
  }
  
  // Efeito para focar no primeiro input quando a etapa muda para código
  useEffect(() => {
    if (etapaAtual === 'codigo') {
      setTimeout(() => {
        inputRefs.current[0]?.focus()
      }, 100)
    }
  }, [etapaAtual])

  const aoValidarCodigo = async (e: React.FormEvent) => {
    e.preventDefault()
    setEstaCarregando(true)
    setErro(null)

    try {
      const resposta = await buscarUsuarioPorToken(codigo)
      
      if (resposta && resposta.recupercoes_senha && resposta.recupercoes_senha[0]) {
        const usuario = resposta.recupercoes_senha[0].user?.[0]
        if (usuario && usuario.id) {
          setIdUsuario(usuario.id)
          setSucesso('Código válido!')
          setTimeout(() => {
            setSucesso(null)
            setEtapaAtual('novaSenha')
          }, 1500)
        }
      } else {
        setErro('Código inválido. Verifique o código enviado ao seu email.')
      }
    } catch (erro) {
      console.error('Erro ao validar código:', erro)
      setErro('Erro ao validar código. Tente novamente.')
    } finally {
      setEstaCarregando(false)
    }
  }
  
  const aoAlterarSenha = async (e: React.FormEvent) => {
    e.preventDefault()
    setEstaCarregando(true)
    setErro(null)

    if (novaSenha !== confirmarSenha) {
      setErro('As senhas não coincidem.')
      setEstaCarregando(false)
      return
    }

    if (novaSenha.length < 6) {
      setErro('A senha deve ter pelo menos 6 caracteres.')
      setEstaCarregando(false)
      return
    }

    try {
      const resposta = await alterarSenhaComId(idUsuario!, novaSenha)

      if (resposta && resposta.status === true) {
        setEtapaAtual('sucesso')
        setTimeout(() => {
          aoFecharPopup()
          if (aoVoltarParaLogin) {
            aoVoltarParaLogin()
          }
        }, 2000)
      } else {
        setErro(resposta?.message || 'Erro ao alterar senha. Tente novamente.')
      }
    } catch (erro) {
      console.error('Erro ao alterar senha:', erro)
      setErro('Erro ao alterar senha. Tente novamente.')
    } finally {
      setEstaCarregando(false)
    }
  }


  const renderizarEtapa = () => {
    switch (etapaAtual) {
      case 'email':
        return (
          <FormularioEtapa
            as={motion.form}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onSubmit={aoEnviarEmail}
          >
            <IconeEtapa>
              <FiMail />
            </IconeEtapa>
            <TituloEtapa>Recuperar Senha</TituloEtapa>
            <DescricaoEtapa>
              Digite seu email para receber o código de recuperação
            </DescricaoEtapa>

            <GrupoCampo>
              <Campo
                type="email"
                placeholder="Seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </GrupoCampo>

            {erro && (
              <MensagemErro
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {erro}
              </MensagemErro>
            )}

            {sucesso && (
              <MensagemSucesso
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {sucesso}
              </MensagemSucesso>
            )}

            <BotaoEnviar
              type="submit"
              disabled={estaCarregando}
              whileHover={!estaCarregando ? { scale: 1.02 } : {}}
              whileTap={!estaCarregando ? { scale: 0.98 } : {}}
            >
              {estaCarregando ? 'Enviando...' : 'Enviar Código'}
            </BotaoEnviar>
            
            {aoVoltarParaLogin && (
              <LinkVoltar
                onClick={aoVoltarLogin}
                style={{ marginTop: '1.5rem', display: 'block', textAlign: 'center' }}
              >
                Voltar para login
              </LinkVoltar>
            )}
          </FormularioEtapa>
        )
        
      case 'codigo':
        return (
          <FormularioEtapa
            as={motion.form}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onSubmit={aoValidarCodigo}
          >
            <IconeEtapa>
              <FiKey />
            </IconeEtapa>
            <TituloEtapa>Digite o Código</TituloEtapa>
            <DescricaoEtapa>
              Enviamos um código de 6 dígitos para <strong>{email}</strong>
            </DescricaoEtapa>

            <ContainerCodigo>
              {digitosCodigo.map((digito, indice) => (
                <InputCodigo
                  key={indice}
                  ref={(el) => (inputRefs.current[indice] = el)}
                  type="text"
                  value={digito}
                  onChange={(e) => aoMudarDigito(indice, e.target.value)}
                  onKeyDown={(e) => aoTeclarDigito(indice, e)}
                  maxLength={1}
                  inputMode="numeric"
                  pattern="[0-9]*"
                />
              ))}
            </ContainerCodigo>

            {erro && (
              <MensagemErro
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {erro}
              </MensagemErro>
            )}
            
            {sucesso && (
              <MensagemSucesso
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {sucesso}
              </MensagemSucesso>
            )}

            <BotaoEnviar
              type="submit"
              disabled={estaCarregando || codigo.length !== 6}
              whileHover={!estaCarregando ? { scale: 1.02 } : {}}
              whileTap={!estaCarregando ? { scale: 0.98 } : {}}
            >
              {estaCarregando ? 'Validando...' : 'Validar Código'}
            </BotaoEnviar>
            
            <LinkVoltar
              onClick={() => {
                setEtapaAtual('email')
                setCodigo('')
                setDigitosCodigo(['', '', '', '', '', ''])
                setErro(null)
              }}
              style={{ marginTop: '1.5rem', display: 'block', textAlign: 'center' }}
            >
              Voltar
            </LinkVoltar>
          </FormularioEtapa>
        )
        
      case 'novaSenha':
        return (
          <FormularioEtapa
            as={motion.form}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onSubmit={aoAlterarSenha}
          >
            <IconeEtapa>
              <FiLock />
            </IconeEtapa>
            <TituloEtapa>Nova Senha</TituloEtapa>
            <DescricaoEtapa>
              Crie uma nova senha para sua conta
            </DescricaoEtapa>

            <GrupoCampo>
              <Campo
                type={mostrarSenha ? 'text' : 'password'}
                placeholder="Nova senha"
                value={novaSenha}
                onChange={(e) => setNovaSenha(e.target.value)}
                required
              />
              <BotaoMostrarSenha
                type="button"
                onClick={() => setMostrarSenha(!mostrarSenha)}
              >
                {mostrarSenha ? <FiEyeOff /> : <FiEye />}
              </BotaoMostrarSenha>
            </GrupoCampo>
            
            <GrupoCampo>
              <Campo
                type={mostrarSenha ? 'text' : 'password'}
                placeholder="Confirmar nova senha"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                required
              />
            </GrupoCampo>

            {erro && (
              <MensagemErro
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {erro}
              </MensagemErro>
            )}

            <BotaoEnviar
              type="submit"
              disabled={estaCarregando}
              whileHover={!estaCarregando ? { scale: 1.02 } : {}}
              whileTap={!estaCarregando ? { scale: 0.98 } : {}}
            >
              {estaCarregando ? 'Alterando...' : 'Alterar Senha'}
            </BotaoEnviar>
          </FormularioEtapa>
        )

      case 'sucesso':
        return (
          <FormularioEtapa
            as={motion.div}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <IconeEtapa style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', borderColor: '#10B981' }}>
              <FiCheck style={{ color: '#10B981' }} />
            </IconeEtapa>
            <TituloEtapa>Senha Alterada!</TituloEtapa>
            <DescricaoEtapa>
              Sua senha foi alterada com sucesso!
            </DescricaoEtapa>
            <DescricaoEtapa style={{ marginTop: '1rem' }}>
              Você já pode fazer login com sua nova senha.
            </DescricaoEtapa>

            <BotaoEnviar
              as={motion.button}
              type="button"
              onClick={aoFecharPopup}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ marginTop: '2rem' }}
            >
              Fechar
            </BotaoEnviar>
          </FormularioEtapa>
        )
    }
  }

  return (
    <AnimatePresence>
      {estaAberto && (
        <FundoEscuro
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={aoFecharPopup}
        >
          <ContainerPopup
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <ConteudoPopup>
              {etapaAtual === 'email' && aoVoltarParaLogin && (
                <BotaoVoltar onClick={aoVoltarLogin}>
                  <FiArrowLeft />
                </BotaoVoltar>
              )}

              <SecaoLogo>
                <img src={isDarkMode ? "/gym-buddy-logo.png" : "/logoclaro.png"} alt="GYM BUDDY" className="logo-imagem" />
              </SecaoLogo>

              <AnimatePresence mode="wait">
                {renderizarEtapa()}
              </AnimatePresence>
            </ConteudoPopup>
          </ContainerPopup>
        </FundoEscuro>
      )}
    </AnimatePresence>
  )
}

const FundoEscuro = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: var(--bg-primary, rgba(10, 9, 9, 0.7));
  backdrop-filter: blur(6px);
  z-index: 10100;
  display: flex;
  align-items: center;
  justify-content: center;
  
  [data-theme="light"] & {
    background: rgba(0, 0, 0, 0.5);
  }
`

const ContainerPopup = styled(motion.div)`
  position: relative;
  z-index: 10101;
  pointer-events: auto;
`

const ConteudoPopup = styled.div`
  position: relative;
  background: var(--bg-primary, #0A0A0A);
  border: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
  border-radius: 1.6rem;
  padding: 3rem;
  width: 90vw;
  max-width: 42rem;
  margin: 0 auto;
  box-shadow: var(--shadow-color, 0 20px 60px rgba(0, 0, 0, 0.5));
  
  [data-theme="light"] & {
    background: var(--md-sys-color-surface-container-highest);
    border: 1px solid var(--md-sys-color-outline-variant);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  }
`

const SecaoLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  
  .logo-imagem {
    width: 16rem;
    height: auto;
    margin-bottom: 1.2rem;
    filter: drop-shadow(0 4px 12px rgba(227, 6, 19, 0.3));
  }
  
  .divisor {
    display: none;
  }
`

const FormularioEtapa = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const IconeEtapa = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 6rem;
  margin: 0 auto;
  background: rgba(227, 6, 19, 0.1);
  border: 2px solid var(--primary);
  border-radius: 50%;
  color: var(--primary);
  font-size: 2.5rem;
`

const TituloEtapa = styled.h1`
  color: var(--text-primary, var(--white));
  font-size: 2.4rem;
  font-weight: 800;
  text-align: center;
  letter-spacing: 0.05em;
  
  [data-theme="light"] & {
    color: var(--md-sys-color-on-surface);
  }
`

const DescricaoEtapa = styled.p`
  color: var(--text-secondary, rgba(255, 255, 255, 0.7));
  font-size: 1.4rem;
  text-align: center;
  margin-top: -1rem;
  
  strong {
    color: var(--primary);
    font-weight: 600;
  }
  
  [data-theme="light"] & {
    color: var(--md-sys-color-on-surface-variant);
  }
`

const GrupoCampo = styled.div`
  position: relative;
`

const Campo = styled.input`
  width: 100%;
  background: transparent;
  border: 1px solid var(--border-color, rgba(255, 255, 255, 0.2));
  border-radius: 0.8rem;
  padding: 1.4rem 1.6rem;
  color: var(--text-primary, var(--white));
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: var(--text-secondary, rgba(255, 255, 255, 0.5));
  }
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(227, 6, 19, 0.2);
  }
  
  [data-theme="light"] & {
    background: var(--md-sys-color-surface-container-low);
    border: 1px solid var(--md-sys-color-outline-variant);
    color: var(--md-sys-color-on-surface);
    
    &::placeholder {
      color: var(--md-sys-color-on-surface-variant);
    }
    
    &:focus {
      border-color: var(--md-sys-color-secondary);
      box-shadow: 0 0 0 2px rgba(152, 0, 15, 0.2);
    }
  }
`


const MensagemErro = styled(motion.div)`
  background: rgba(220, 38, 38, 0.1);
  border: 1px solid rgba(220, 38, 38, 0.3);
  border-radius: 0.8rem;
  padding: 1rem 1.5rem;
  color: #ef4444;
  font-size: 1.4rem;
  text-align: center;
`

const MensagemSucesso = styled(motion.div)`
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 0.8rem;
  padding: 1rem 1.5rem;
  color: #10B981;
  font-size: 1.4rem;
  text-align: center;
`

const BotaoEnviar = styled(motion.button)<{ disabled?: boolean }>`
  background: ${props => props.disabled ? 'rgba(227, 6, 19, 0.5)' : 'var(--primary)'};
  color: var(--white);
  border: none;
  border-radius: 2.5rem;
  padding: 1.4rem 2rem;
  font-size: 1.6rem;
  font-weight: 700;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  opacity: ${props => props.disabled ? 0.7 : 1};
  
  &:hover {
    background: ${props => props.disabled ? 'rgba(227, 6, 19, 0.5)' : 'var(--primary-dark)'};
    box-shadow: ${props => props.disabled ? 'none' : '0 8px 24px rgba(227, 6, 19, 0.4)'};
  }
`


const BotaoVoltar = styled.button`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  background: transparent;
  border: none;
  color: var(--white);
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.1);
  }
`

const LinkVoltar = styled.button`
  background: transparent;
  border: none;
  color: var(--primary);
  font-size: 1.3rem;
  cursor: pointer;
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--primary-dark);
    text-decoration: underline;
  }
`

const BotaoMostrarSenha = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.8rem;
  cursor: pointer;
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--white);
  }
`

const ContainerCodigo = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
`

const InputCodigo = styled.input`
  width: 5rem;
  height: 5rem;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  color: var(--white);
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(227, 6, 19, 0.2);
    transform: scale(1.05);
  }
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.4);
  }
  
  /* Remove spinner de número em alguns browsers */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  /* Firefox */
  &[type=number] {
    -moz-appearance: textfield;
  }
`

export default PopupEsqueciSenha
