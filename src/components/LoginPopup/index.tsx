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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Função para resetar o formulário
  const resetForm = () => {
    setFormData({
      email: '',
      password: ''
    });
    setShowPassword(false);
    setError(null);
    setIsLoading(false);
  };

  // Função personalizada para fechar o popup
  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Endpoint da nova API
      const url = `/api/v1/gymbuddy/usuario/login?email=${encodeURIComponent(formData.email)}&senha=${encodeURIComponent(formData.password)}`;
      
      console.log('Fazendo login na nova API:', url);
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Verificar se a resposta é JSON antes de tentar fazer parse
      const contentType = response.headers.get('content-type');
      let data;
      
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
        console.log('Response data:', data);
      } else {
        // Se não for JSON, pegar como texto para debug
        const textResponse = await response.text();
        console.log('Response text (não JSON):', textResponse);
        throw new Error(`Erro na API. Status: ${response.status}. Verifique se a nova API está funcionando.`);
      }

      // Verificar se o login foi bem-sucedido baseado no campo 'status' da resposta
      if (data && data.status === true) {
        // Login bem-sucedido
        console.log('Login successful:', data);
        
        // Salvar token no localStorage se fornecido
        if (data.token) {
          localStorage.setItem('authToken', data.token);
        }
        
        // Salvar dados do usuário se fornecidos
        if (data.user || data.data) {
          localStorage.setItem('userData', JSON.stringify(data.user || data.data));
        }

        // Fechar popup e resetar formulário
        handleClose();
        
        // Aqui você pode adicionar redirecionamento ou atualização de estado global
        alert('Login realizado com sucesso!');
        
      } else {
        // Erro de login - usar a mensagem da API
        let errorMessage = data?.message || 'Erro ao fazer login. Verifique suas credenciais.';
        
        // Melhorar mensagens de erro específicas
        if (errorMessage.includes('campos com preenchimento obrigatórios')) {
          errorMessage = 'Email ou senha incorretos. Verifique suas credenciais e tente novamente.';
        }
        
        console.log('Login error from API:', errorMessage);
        setError(errorMessage);
      }
    } catch (error) {
      console.error('Login error:', error);
      
      // Verificar se é erro de CORS
      if (error instanceof TypeError && error.message.includes('fetch')) {
        setError('Erro de CORS: O servidor precisa permitir requisições do frontend. Entre em contato com o administrador.');
      } else {
        setError('Erro de conexão. Verifique sua internet e tente novamente.');
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
              <InputGroup>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email ou Usuário"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
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
                />
                <PasswordToggle
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </PasswordToggle>
              </InputGroup>

              <ForgotPassword href="#" onClick={(e) => e.preventDefault()}>
                Esqueci minha senha
              </ForgotPassword>

              {error && (
                <ErrorMessage
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {error}
                </ErrorMessage>
              )}

              <SubmitButton
                type="submit"
                disabled={isLoading}
                whileHover={!isLoading ? { scale: 1.02 } : {}}
                whileTap={!isLoading ? { scale: 0.98 } : {}}
              >
                {isLoading ? 'Entrando...' : 'Fazer Login'}
              </SubmitButton>
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

const ErrorMessage = styled(motion.div)`
  background: rgba(220, 38, 38, 0.1);
  border: 1px solid rgba(220, 38, 38, 0.3);
  border-radius: 0.8rem;
  padding: 1rem 1.5rem;
  color: #ef4444;
  font-size: 1.4rem;
  text-align: center;
  margin: 1rem 0;
`;

const SubmitButton = styled(motion.button)<{ disabled?: boolean }>`
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
