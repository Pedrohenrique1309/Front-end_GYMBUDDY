import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiEye, FiEyeOff, FiX } from 'react-icons/fi'
import { FaDumbbell } from 'react-icons/fa'
import styled from 'styled-components'

interface PropsPopupLogin {
  estaAberto: boolean
  aoFechar: () => void
  aoTrocarParaCadastro: () => void
}

const PopupLogin = ({ estaAberto, aoFechar, aoTrocarParaCadastro }: PropsPopupLogin) => {
  const [mostrarSenha, setMostrarSenha] = useState(false)
  const [estaCarregando, setEstaCarregando] = useState(false)
  const [erro, setErro] = useState<string | null>(null)
  const [dadosFormulario, setDadosFormulario] = useState({
    email: '',
    senha: ''
  })

  // Função pra limpar o formulário
  const limparFormulario = () => {
    setDadosFormulario({
      email: '',
      senha: ''
    })
    setMostrarSenha(false)
    setErro(null)
    setEstaCarregando(false)
  }

  // Função pra fechar o popup
  const aoFecharPopup = () => {
    limparFormulario()
    aoFechar()
  }

  const aoEnviarFormulario = async (e: React.FormEvent) => {
    e.preventDefault()
    setEstaCarregando(true)
    setErro(null)

    try {
      // Usar proxy do Vite pra evitar problemas de CORS e conectividade
      const url = `/api/v1/gymbuddy/usuario/login/email/senha?email=${encodeURIComponent(dadosFormulario.email)}&senha=${encodeURIComponent(dadosFormulario.senha)}`
      
      console.log('Fazendo login via proxy:', url)
      
      const resposta = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      // Verificar se a resposta é JSON antes de tentar fazer parse
      const tipoConteudo = resposta.headers.get('content-type')
      let dados
      
      if (tipoConteudo && tipoConteudo.includes('application/json')) {
        dados = await resposta.json()
        console.log('Dados da resposta:', dados)
      } else {
        // Se não for JSON, pegar como texto pra debug
        const respostaTexto = await resposta.text()
        console.log('Resposta em texto (não JSON):', respostaTexto)
        throw new Error(`Deu ruim na API. Status: ${resposta.status}. Verifica se a API tá funcionando.`)
      }

      // Verificar se o login deu certo baseado no campo 'status' da resposta
      if (dados && dados.status === true) {
        // Login deu certo
        console.log('Login deu bom:', dados)
        
        // Salvar token no localStorage se tiver
        if (dados.token) {
          localStorage.setItem('authToken', dados.token)
        }
        
        // Salvar dados do usuário se tiver
        if (dados.user || dados.data) {
          localStorage.setItem('userData', JSON.stringify(dados.user || dados.data))
        }

        // Fechar popup e limpar formulário
        aoFecharPopup()
        
        // Aqui você pode adicionar redirecionamento ou atualização de estado global
        alert('Login feito com sucesso!')
        
      } else {
        // Erro de login - usar a mensagem da API
        let mensagemErro = dados?.message || 'Deu ruim no login. Verifica tuas credenciais.'
        
        // Melhorar mensagens de erro específicas
        if (mensagemErro.includes('campos com preenchimento obrigatórios')) {
          mensagemErro = 'Email ou senha tão errados. Verifica aí e tenta de novo.'
        }
        
        console.log('Erro de login da API:', mensagemErro)
        setErro(mensagemErro)
      }
    } catch (erro) {
      console.error('Erro no login:', erro)
      
      // Tratamento específico pra diferentes tipos de erro
      if (erro instanceof TypeError) {
        if (erro.message.includes('Failed to fetch')) {
          setErro('Erro de conectividade: Não rolou conectar no servidor. Verifica se o servidor tá rodando no IP 10.107.144.31:8080')
        } else if (erro.message.includes('NetworkError')) {
          setErro('Erro de rede: Verifica tua conexão com a internet e se o servidor tá acessível.')
        } else {
          setErro('Erro de requisição: ' + erro.message)
        }
      } else {
        setErro('Erro inesperado: ' + (erro as Error).message)
      }
    } finally {
      setEstaCarregando(false)
    }
  }

  const aoMudarCampo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDadosFormulario({
      ...dadosFormulario,
      [e.target.name]: e.target.value
    })
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
              <BotaoFechar onClick={aoFecharPopup}>
                <FiX />
              </BotaoFechar>
            
            <SecaoLogo>
              <FaDumbbell className="icone-logo" />
              <h2>GYM BUDDY</h2>
              <div className="divisor" />
            </SecaoLogo>

            <Titulo>ENTRAR NA CONTA</Titulo>

            <FormularioLogin onSubmit={aoEnviarFormulario}>
              <GrupoCampo>
                <Campo
                  type="email"
                  name="email"
                  placeholder="Email ou Usuário"
                  value={dadosFormulario.email}
                  onChange={aoMudarCampo}
                  required
                />
              </GrupoCampo>

              <GrupoCampo>
                <Campo
                  type={mostrarSenha ? 'text' : 'password'}
                  name="senha"
                  placeholder="Senha"
                  value={dadosFormulario.senha}
                  onChange={aoMudarCampo}
                  required
                />
                <BotaoMostrarSenha
                  type="button"
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                >
                  {mostrarSenha ? <FiEyeOff /> : <FiEye />}
                </BotaoMostrarSenha>
              </GrupoCampo>

              <LinkEsqueciSenha href="#" onClick={(e) => e.preventDefault()}>
                Esqueci minha senha
              </LinkEsqueciSenha>

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
                {estaCarregando ? 'Entrando...' : 'Entrar'}
              </BotaoEnviar>
            </FormularioLogin>

            <TextoCadastro>
              Não tem conta ainda? <LinkCadastro href="#" onClick={(e) => {
                e.preventDefault()
                aoTrocarParaCadastro()
              }}>Criar conta</LinkCadastro>
            </TextoCadastro>
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
  
  .icone-logo {
    color: var(--primary);
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  
  h2 {
    color: var(--white);
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    margin-bottom: 1rem;
  }
  
  .divisor {
    width: 4rem;
    height: 2px;
    background: var(--primary);
  }
`

const Titulo = styled.h1`
  color: var(--white);
  font-size: 2.4rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: 0.05em;
`

const FormularioLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const GrupoCampo = styled.div`
  position: relative;
`

const Campo = styled.input`
  width: 100%;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
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
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(227, 6, 19, 0.2);
  }
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

const LinkEsqueciSenha = styled.a`
  color: var(--primary);
  font-size: 1.3rem;
  text-align: center;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--primary-dark);
    text-decoration: underline;
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
  margin: 1rem 0;
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
  margin-top: 1rem;
  opacity: ${props => props.disabled ? 0.7 : 1};
  
  &:hover {
    background: ${props => props.disabled ? 'rgba(227, 6, 19, 0.5)' : 'var(--primary-dark)'};
    box-shadow: ${props => props.disabled ? 'none' : '0 8px 24px rgba(227, 6, 19, 0.4)'};
  }
`

const TextoCadastro = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.4rem;
  text-align: center;
  margin-top: 2rem;
`

const LinkCadastro = styled.a`
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
  
  &:hover {
    text-decoration: underline;
  }
`

export default PopupLogin
