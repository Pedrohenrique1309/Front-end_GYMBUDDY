import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiEye, FiEyeOff, FiX } from 'react-icons/fi';
import { FaDumbbell } from 'react-icons/fa';
import styled from 'styled-components';

interface LoginPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignup: () => void;
}

const LoginPopup = ({ isOpen, onClose, onSwitchToSignup }: LoginPopupProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Função para resetar o formulário
  const resetForm = () => {
    setFormData({
      email: '',
      password: ''
    });
    setShowPassword(false);
    setErrorMessage('');
  };

  // Função personalizada para fechar o popup
  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch(
        `http://10.107.140.3:8080/v1/gymbuddy/usuario/login/email/senha?email=${encodeURIComponent(formData.email)}&senha=${encodeURIComponent(formData.password)}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          mode: 'cors', // Explicitamente define CORS
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log('Login bem-sucedido:', data);
        
        // Armazena os dados do usuário no localStorage
        localStorage.setItem('userToken', data.token || '');
        localStorage.setItem('userData', JSON.stringify(data));
        
        // Fecha o popup após login bem-sucedido
        handleClose();
        
        // Opcional: Redirecionar ou atualizar o estado global
        // window.location.reload(); // ou usar React Router para redirecionar
      } else {
        // Trata erros de autenticação
        const errorData = await response.text();
        console.error('Erro da API:', response.status, errorData);
        
        if (response.status === 401) {
          setErrorMessage('Email ou senha incorretos');
        } else if (response.status === 404) {
          setErrorMessage('Usuário não encontrado');
        } else if (response.status === 500) {
          setErrorMessage('Erro interno do servidor. Tente novamente mais tarde.');
        } else {
          setErrorMessage(`Erro ${response.status}: ${errorData || 'Tente novamente.'}`);
        }
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      
      // Verifica se é erro de CORS ou rede
      if (error instanceof TypeError && error.message.includes('fetch')) {
        setErrorMessage('Erro de conexão com o servidor. Verifique se a API está rodando e acessível.');
      } else if (error instanceof TypeError && error.message.includes('CORS')) {
        setErrorMessage('Erro de CORS. Configure o servidor para permitir requisições do frontend.');
      } else {
        setErrorMessage('Erro de conexão. Verifique sua internet e tente novamente.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Função para testar a conectividade da API
  const testAPIConnection = async () => {
    setErrorMessage('Testando conexão...');
    try {
      // Primeiro tenta com CORS
      const response = await fetch('http://10.107.140.3:8080/v1/gymbuddy/usuario/login/email/senha?email=test@test.com&senha=test', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        mode: 'cors',
      });
      
      console.log('Teste de conectividade:', response.status, response.statusText);
      
      if (response.status === 0) {
        setErrorMessage('❌ CORS bloqueado. Configure o servidor para permitir requisições do frontend.');
      } else {
        setErrorMessage(`✅ API respondeu com status: ${response.status}. Conexão OK!`);
      }
    } catch (error: any) {
      console.error('Erro no teste:', error);
      
      if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
        setErrorMessage('❌ Erro de rede. Verifique se:\n1. A API está rodando em http://10.107.140.3:8080\n2. Não há firewall bloqueando\n3. O CORS está configurado no servidor');
      } else {
        setErrorMessage(`❌ Erro: ${error.message}`);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
          />
          <PopupContainer
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <PopupContent>
              <CloseButton onClick={handleClose}>
                <FiX />
              </CloseButton>
            
            <LogoSection>
              <FaDumbbell className="logo-icon" />
              <h2>GYM BUDDY</h2>
              <div className="divider" />
            </LogoSection>

            <Title>FAZER LOGIN</Title>

            <LoginForm onSubmit={handleSubmit}>
              {errorMessage && (
                <ErrorMessage>
                  {errorMessage}
                </ErrorMessage>
              )}
              
              <InputGroup>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email ou Usuário"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isLoading}
                />
              </InputGroup>

              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Senha"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  disabled={isLoading}
                />
                <PasswordToggle
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </PasswordToggle>
              </InputGroup>

              <SubmitButton type="submit" disabled={isLoading}>
                {isLoading ? 'Entrando...' : 'Fazer Login'}
              </SubmitButton>
              
              {/* Botão temporário para testar API */}
              <TestButton type="button" onClick={testAPIConnection}>
                Testar Conexão API
              </TestButton>
            </LoginForm>

            <SignupPrompt>
              Não possui uma conta? <SignupLink href="#" onClick={(e) => {
                e.preventDefault();
                onSwitchToSignup();
              }}>Criar conta</SignupLink>
            </SignupPrompt>
            </PopupContent>
          </PopupContainer>
        </>
      )}
    </AnimatePresence>
  );
};

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  z-index: 9998;
`;

const PopupContainer = styled(motion.div)`
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
`;

const PopupContent = styled.div`
  position: relative;
  background: #0A0A0A;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.6rem;
  padding: 3rem;
  width: 90%;
  max-width: 42rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  pointer-events: auto;
`;

const CloseButton = styled.button`
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
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  
  .logo-icon {
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
  
  .divider {
    width: 4rem;
    height: 2px;
    background: var(--primary);
  }
`;

const Title = styled.h1`
  color: var(--white);
  font-size: 2.4rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: 0.05em;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InputGroup = styled.div`
  position: relative;
`;

const Input = styled.input`
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
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: rgba(255, 255, 255, 0.02);
  }
`;

const PasswordToggle = styled.button`
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
`;

const ForgotPassword = styled.a`
  color: var(--primary);
  font-size: 1.3rem;
  text-align: center;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--primary-dark);
    text-decoration: underline;
  }
`;

const ErrorMessage = styled.div`
  background: rgba(227, 6, 19, 0.15);
  border: 1px solid rgba(227, 6, 19, 0.3);
  border-radius: 0.8rem;
  padding: 1.2rem 1.6rem;
  color: #ff6b6b;
  font-size: 1.4rem;
  text-align: left;
  margin-bottom: 1rem;
  white-space: pre-line; /* Permite quebras de linha */
  line-height: 1.5;
`;

const SubmitButton = styled.button`
  background: var(--primary);
  color: var(--white);
  border: none;
  border-radius: 2.5rem;
  padding: 1.4rem 2rem;
  font-size: 1.6rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  
  &:hover:not(:disabled) {
    background: var(--primary-dark);
    box-shadow: 0 8px 24px rgba(227, 6, 19, 0.4);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const TestButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  color: var(--white);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 2.5rem;
  padding: 1rem 2rem;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

const SignupPrompt = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.4rem;
  text-align: center;
  margin-top: 2rem;
`;

const SignupLink = styled.a`
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
  
  &:hover {
    text-decoration: underline;
  }
`;

export default LoginPopup;
