import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiLock, FiEye, FiEyeOff, FiCheck, FiX, FiAlertCircle } from 'react-icons/fi'
import styled from 'styled-components'
import { buscarUsuarioPorToken, alterarSenhaComId } from '../../Config/api'

const ResetarSenha = () => {
  const { token } = useParams<{ token: string }>()
  const navigate = useNavigate()
  
  const [etapa, setEtapa] = useState<'validando' | 'formulario' | 'erro' | 'sucesso'>('validando')
  const [userId, setUserId] = useState<number | null>(null)
  const [novaSenha, setNovaSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [mostrarSenha, setMostrarSenha] = useState(false)
  const [senhaValida, setSenhaValida] = useState<boolean | null>(null)
  const [estaCarregando, setEstaCarregando] = useState(false)
  const [erro, setErro] = useState<string | null>(null)

  useEffect(() => {
    if (token) {
      validarToken()
    } else {
      setEtapa('erro')
      setErro('Token inválido ou não fornecido')
    }
  }, [token])

  const validarToken = async () => {
    try {
      const resposta = await buscarUsuarioPorToken(token!)
      
      if (resposta && resposta.id_user) {
        setUserId(resposta.id_user)
        setEtapa('formulario')
      } else {
        setEtapa('erro')
        setErro('Token inválido ou expirado')
      }
    } catch (error) {
      console.error('Erro ao validar token:', error)
      setEtapa('erro')
      setErro('Token inválido ou expirado')
    }
  }

  const validarSenha = (senha: string): boolean => {
    const tamanhoMinimo = senha.length >= 8
    const temMaiuscula = /[A-Z]/.test(senha)
    const temNumero = /\d/.test(senha)
    const temCaractereEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(senha)
    
    return tamanhoMinimo && temMaiuscula && temNumero && temCaractereEspecial
  }

  const aoMudarSenha = (valor: string) => {
    setNovaSenha(valor)
    if (valor === '') {
      setSenhaValida(null)
    } else {
      setSenhaValida(validarSenha(valor))
    }
  }

  const aoAlterarSenha = async (e: React.FormEvent) => {
    e.preventDefault()
    setEstaCarregando(true)
    setErro(null)

    if (novaSenha !== confirmarSenha) {
      setErro('As senhas não coincidem')
      setEstaCarregando(false)
      return
    }

    if (!validarSenha(novaSenha)) {
      setErro('A senha não atende aos requisitos mínimos')
      setEstaCarregando(false)
      return
    }

    try {
      const resposta = await alterarSenhaComId(userId!, novaSenha)

      if (resposta && resposta.status === true) {
        setEtapa('sucesso')
        setTimeout(() => {
          navigate('/')
        }, 3000)
      } else {
        setErro(resposta?.message || 'Erro ao alterar senha')
      }
    } catch (error) {
      console.error('Erro ao alterar senha:', error)
      setErro('Erro ao alterar senha. Tente novamente.')
    } finally {
      setEstaCarregando(false)
    }
  }

  const renderizarConteudo = () => {
    switch (etapa) {
      case 'validando':
        return (
          <Card
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <IconeGrande>
              <FiLock />
            </IconeGrande>
            <Titulo>Validando Token</Titulo>
            <Descricao>Aguarde enquanto validamos seu token de recuperação...</Descricao>
            <LoadingSpinner />
          </Card>
        )

      case 'erro':
        return (
          <Card
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <IconeGrande style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', borderColor: '#EF4444' }}>
              <FiAlertCircle style={{ color: '#EF4444' }} />
            </IconeGrande>
            <Titulo>Erro</Titulo>
            <Descricao>{erro}</Descricao>
            <BotaoPrimario
              onClick={() => navigate('/')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Voltar ao Início
            </BotaoPrimario>
          </Card>
        )

      case 'formulario':
        return (
          <Card
            as="form"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onSubmit={aoAlterarSenha}
          >
            <IconeGrande>
              <FiLock />
            </IconeGrande>
            <Titulo>Nova Senha</Titulo>
            <Descricao>Crie uma senha forte para sua conta</Descricao>

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
              >
                {erro}
              </MensagemErro>
            )}

            <BotaoPrimario
              type="submit"
              disabled={estaCarregando}
              whileHover={!estaCarregando ? { scale: 1.02 } : {}}
              whileTap={!estaCarregando ? { scale: 0.98 } : {}}
            >
              {estaCarregando ? 'Alterando...' : 'Alterar Senha'}
            </BotaoPrimario>
          </Card>
        )

      case 'sucesso':
        return (
          <Card
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <IconeGrande style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', borderColor: '#10B981' }}>
              <FiCheck style={{ color: '#10B981' }} />
            </IconeGrande>
            <Titulo>Senha Alterada!</Titulo>
            <Descricao>
              Sua senha foi alterada com sucesso. Você será redirecionado para a página inicial...
            </Descricao>
            <LoadingSpinner />
          </Card>
        )
    }
  }

  return (
    <Container>
      <Background />
      <Content>
        <Logo>
          <img src="/gym-buddy-logo.png" alt="GYM BUDDY" />
        </Logo>
        <AnimatePresence mode="wait">
          {renderizarConteudo()}
        </AnimatePresence>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #0A0A0A 0%, #1A0507 50%, #0A0A0A 100%);
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(227, 6, 19, 0.1) 0%, transparent 70%);
    animation: rotate 30s linear infinite;
  }
  
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`

const Content = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 480px;
  padding: 2rem;
`

const Logo = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  img {
    width: 150px;
    height: auto;
    filter: drop-shadow(0 4px 12px rgba(227, 6, 19, 0.3));
  }
`

const Card = styled(motion.div)`
  background: rgba(20, 20, 20, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 2rem;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`

const IconeGrande = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(227, 6, 19, 0.1);
  border: 2px solid var(--primary);
  border-radius: 50%;
  color: var(--primary);
  font-size: 3rem;
`

const Titulo = styled.h1`
  color: var(--white);
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
`

const Descricao = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.4rem;
  text-align: center;
  margin-bottom: 2rem;
`

const GrupoCampo = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`

const Campo = styled.input<{ $isValid?: boolean | null }>`
  width: 100%;
  background: transparent;
  border: 1px solid ${props => 
    props.$isValid === true ? '#10B981' : 
    props.$isValid === false ? '#EF4444' : 
    'rgba(255, 255, 255, 0.2)'
  };
  border-radius: 1rem;
  padding: 1.5rem;
  padding-right: ${props => props.$isValid !== null ? '8rem' : '4rem'};
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
  right: 5rem;
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

const RequisitosSenha = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
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
  margin-bottom: 1.5rem;
`

const BotaoPrimario = styled(motion.button)<{ disabled?: boolean }>`
  width: 100%;
  background: ${props => props.disabled ? 'rgba(227, 6, 19, 0.5)' : 'var(--primary)'};
  color: var(--white);
  border: none;
  border-radius: 2rem;
  padding: 1.5rem;
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

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  margin: 2rem auto 0;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top-color: var(--primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`

export default ResetarSenha
