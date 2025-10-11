import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiEye, FiEyeOff, FiX, FiCheck, FiMail, FiKey, FiLock, FiArrowLeft } from 'react-icons/fi'
import styled from 'styled-components'
import { enviarCodigoRecuperacao, validarCodigoRecuperacao, alterarSenha } from '../../config/api'

interface PropsPopupEsqueciSenha {
  estaAberto: boolean
  aoFechar: () => void
  aoVoltarParaLogin?: () => void
}

type Etapa = 'email' | 'codigo' | 'novaSenha'

const PopupEsqueciSenha = ({ estaAberto, aoFechar, aoVoltarParaLogin }: PropsPopupEsqueciSenha) => {
  const [etapaAtual, setEtapaAtual] = useState<Etapa>('email')
  const [mostrarSenha, setMostrarSenha] = useState(false)
  const [estaCarregando, setEstaCarregando] = useState(false)
  const [erro, setErro] = useState<string | null>(null)
  const [sucesso, setSucesso] = useState<string | null>(null)
  const [email, setEmail] = useState('')
  const [codigo, setCodigo] = useState('')
  const [novaSenha, setNovaSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [senhaValida, setSenhaValida] = useState<boolean | null>(null)

  const limparFormulario = () => {
    setEmail('')
    setCodigo('')
    setNovaSenha('')
    setConfirmarSenha('')
    setMostrarSenha(false)
    setErro(null)
    setSucesso(null)
    setEstaCarregando(false)
    setEtapaAtual('email')
    setSenhaValida(null)
  }

  const aoFecharPopup = () => {
    limparFormulario()
    aoFechar()
  }

  const validarSenha = (senha: string): boolean => {
    const tamanhoMinimo = senha.length >= 8
    const temMaiuscula = /[A-Z]/.test(senha)
    const temNumero = /\d/.test(senha)
    const temCaractereEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(senha)
    
    return tamanhoMinimo && temMaiuscula && temNumero && temCaractereEspecial
  }

  const aoEnviarEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    setEstaCarregando(true)
    setErro(null)

    try {
      const resposta = await enviarCodigoRecuperacao(email)

      if (resposta && resposta.status === true) {
        setSucesso('Código enviado para seu email!')
        setTimeout(() => {
          setSucesso(null)
          setEtapaAtual('codigo')
        }, 1500)
      } else {
        setErro(resposta?.message || 'Erro ao enviar código. Verifique o email.')
      }
    } catch (erro) {
      console.error('Erro ao enviar email:', erro)
      setErro('Erro ao enviar código. Tente novamente.')
    } finally {
      setEstaCarregando(false)
    }
  }

  const aoValidarCodigo = async (e: React.FormEvent) => {
    e.preventDefault()
    setEstaCarregando(true)
    setErro(null)

    try {
      const resposta = await validarCodigoRecuperacao(email, codigo)

      if (resposta && (resposta.status === true || resposta.isValid === true)) {
        setSucesso('Código válido!')
        setTimeout(() => {
          setSucesso(null)
          setEtapaAtual('novaSenha')
        }, 1500)
      } else {
        setErro('Código inválido. Verifique o código enviado ao seu email.')
      }
    } catch (erro) {
      console.error('Erro ao validar código:', erro)
      setErro('Código inválido. Tente novamente.')
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

    if (!validarSenha(novaSenha)) {
      setErro('A senha não atende aos requisitos mínimos.')
      setEstaCarregando(false)
      return
    }

    try {
      const resposta = await alterarSenha(email, novaSenha, codigo)

      if (resposta && resposta.status === true) {
        if (resposta.message && resposta.message.toLowerCase().includes('mesma senha')) {
          setErro('A nova senha não pode ser igual à senha anterior.')
        } else {
          setSucesso('Senha alterada com sucesso!')
          setTimeout(() => {
            aoFecharPopup()
          }, 2000)
        }
      } else {
        if (resposta?.message && resposta.message.toLowerCase().includes('mesma senha')) {
          setErro('A nova senha não pode ser igual à senha anterior.')
        } else {
          setErro(resposta?.message || 'Erro ao alterar senha. Tente novamente.')
        }
      }
    } catch (erro) {
      console.error('Erro ao alterar senha:', erro)
      setErro('Erro ao alterar senha. Tente novamente.')
    } finally {
      setEstaCarregando(false)
    }
  }

  const aoMudarSenha = (valor: string) => {
    setNovaSenha(valor)
    if (valor === '') {
      setSenhaValida(null)
    } else {
      setSenhaValida(validarSenha(valor))
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
              Enviamos um código para <strong>{email}</strong>
            </DescricaoEtapa>

            <GrupoCampo>
              <Campo
                type="text"
                placeholder="Código de 6 dígitos"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
                maxLength={6}
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
              {estaCarregando ? 'Validando...' : 'Validar Código'}
            </BotaoEnviar>

            <LinkVoltar
              onClick={() => {
                setEtapaAtual('email')
                setCodigo('')
                setErro(null)
              }}
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
              Crie uma senha forte para sua conta
            </DescricaoEtapa>

            <GrupoCampo>
              <Campo
                type={mostrarSenha ? 'text' : 'password'}
                placeholder="Nova senha"
                value={novaSenha}
                onChange={(e) => aoMudarSenha(e.target.value)}
                $isValid={senhaValida}
                required
              />
              {senhaValida !== null && (
                <IconeValidacao $isValid={senhaValida}>
                  {senhaValida ? <FiCheck /> : <FiX />}
                </IconeValidacao>
              )}
              <BotaoMostrarSenha
                type="button"
                onClick={() => setMostrarSenha(!mostrarSenha)}
              >
                {mostrarSenha ? <FiEyeOff /> : <FiEye />}
              </BotaoMostrarSenha>
            </GrupoCampo>

            <RequisitosSenha>
              <RequisitoItem $atendido={novaSenha.length >= 8}>
                • Mínimo 8 caracteres
              </RequisitoItem>
              <RequisitoItem $atendido={/[A-Z]/.test(novaSenha)}>
                • 1 letra maiúscula
              </RequisitoItem>
              <RequisitoItem $atendido={/\d/.test(novaSenha)}>
                • 1 número
              </RequisitoItem>
              <RequisitoItem $atendido={/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(novaSenha)}>
                • 1 caractere especial
              </RequisitoItem>
            </RequisitosSenha>

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
              {estaCarregando ? 'Alterando...' : 'Alterar Senha'}
            </BotaoEnviar>
          </FormularioEtapa>
        )
    }
  }

  return (
    <AnimatePresence>
      {estaAberto && (
        <>
          <FundoEscuro
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={aoFecharPopup}
          />
          <ContainerPopup
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <ConteudoPopup>
              {etapaAtual === 'email' && aoVoltarParaLogin && (
                <BotaoVoltar onClick={aoVoltarParaLogin}>
                  <FiArrowLeft />
                </BotaoVoltar>
              )}

              <SecaoLogo>
                <img src="/gym-buddy-logo.png" alt="GYM BUDDY" className="logo-imagem" />
                <div className="divisor" />
              </SecaoLogo>

              <AnimatePresence mode="wait">
                {renderizarEtapa()}
              </AnimatePresence>
            </ConteudoPopup>
          </ContainerPopup>
        </>
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
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  z-index: 9998;
`

const ContainerPopup = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  pointer-events: none;
`

const ConteudoPopup = styled.div`
  position: relative;
  background: #0A0A0A;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.6rem;
  padding: 3rem;
  width: 90%;
  max-width: 42rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  pointer-events: auto;
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
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.1);
  }
`

const SecaoLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  
  .logo-imagem {
    width: 12rem;
    height: auto;
    margin-bottom: 1.5rem;
    filter: drop-shadow(0 4px 12px rgba(227, 6, 19, 0.3));
  }
  
  .divisor {
    width: 4rem;
    height: 2px;
    background: var(--primary);
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
  color: var(--white);
  font-size: 2.4rem;
  font-weight: 800;
  text-align: center;
  letter-spacing: 0.05em;
`

const DescricaoEtapa = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.4rem;
  text-align: center;
  margin-top: -1rem;
  
  strong {
    color: var(--primary);
    font-weight: 600;
  }
`

const GrupoCampo = styled.div`
  position: relative;
`

const Campo = styled.input<{ $isValid?: boolean | null }>`
  width: 100%;
  background: transparent;
  border: 1px solid ${props => 
    props.$isValid === true ? '#10B981' : 
    props.$isValid === false ? '#EF4444' : 
    'rgba(255, 255, 255, 0.2)'
  };
  border-radius: 0.8rem;
  padding: 1.4rem 1.6rem;
  color: var(--white);
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    outline: none;
    border-color: ${props => 
      props.$isValid === true ? '#10B981' : 
      props.$isValid === false ? '#EF4444' : 
      'var(--primary)'
    };
    box-shadow: 0 0 0 2px ${props => 
      props.$isValid === true ? 'rgba(16, 185, 129, 0.2)' : 
      props.$isValid === false ? 'rgba(239, 68, 68, 0.2)' : 
      'rgba(227, 6, 19, 0.2)'
    };
  }
`

const IconeValidacao = styled.div<{ $isValid?: boolean }>`
  position: absolute;
  right: 4.5rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${props => 
    props.$isValid ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)'
  };
  color: ${props => props.$isValid ? '#10B981' : '#EF4444'};
  font-size: 1.2rem;
  font-weight: 700;
`

const BotaoMostrarSenha = styled.button`
  position: absolute;
  right: 1.6rem;
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

const RequisitosSenha = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const RequisitoItem = styled.div<{ $atendido: boolean }>`
  color: ${props => props.$atendido ? '#10B981' : 'rgba(255, 255, 255, 0.5)'};
  font-size: 1.3rem;
  transition: all 0.3s ease;
  font-weight: ${props => props.$atendido ? '600' : '400'};
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

const LinkVoltar = styled.button`
  background: transparent;
  border: none;
  color: var(--primary);
  font-size: 1.3rem;
  text-align: center;
  cursor: pointer;
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--primary-dark);
    text-decoration: underline;
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

export default PopupEsqueciSenha
