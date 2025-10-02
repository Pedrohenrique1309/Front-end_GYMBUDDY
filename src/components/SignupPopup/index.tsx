import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiEye, FiEyeOff, FiX, FiCheck } from 'react-icons/fi'
import { FaDumbbell } from 'react-icons/fa'
import styled from 'styled-components'
import { signupUser, SignupResponse, checkEmailExists, checkUsernameExists } from '../../config/api'
import { useUser } from '../../contexts/UserContext'

interface SignupPopupProps {
  isOpen: boolean
  onClose: () => void
  onSwitchToLogin: () => void
}

const SignupPopup = ({ isOpen, onClose, onSwitchToLogin }: SignupPopupProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    nickname: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: ''
  });
  const [isPasswordValid, setIsPasswordValid] = useState<boolean | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isValidatingEmail, setIsValidatingEmail] = useState(false);
  const [isValidatingUsername, setIsValidatingUsername] = useState(false);
  const [emailExists, setEmailExists] = useState<boolean | null>(null);
  const [usernameExists, setUsernameExists] = useState<boolean | null>(null);
  
  const { login } = useUser();

  // função para resetar o pop up qnd sair
  const resetForm = () => {
    setFormData({
      username: '',
      nickname: '',
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: ''
    });
    setShowPassword(false);
    setShowConfirmPassword(false);
    setIsPasswordValid(null);
    setIsLoading(false);
    setError(null);
    setShowTooltip(false);
    setIsValidatingEmail(false);
    setIsValidatingUsername(false);
    setEmailExists(null);
    setUsernameExists(null);
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
      // Validações locais
      if (!formData.username.trim()) {
        throw new Error('Nome de usuário é obrigatório.');
      }
      
      if (!formData.nickname.trim()) {
        throw new Error('Nickname é obrigatório.');
      }
      
      // Verificar se email ou username já existem
      if (emailExists === true) {
        throw new Error('Este email já está cadastrado. Use outro email.');
      }
      
      if (usernameExists === true) {
        throw new Error('Este nome de usuário já está em uso. Escolha outro.');
      }
      
      if (formData.email !== formData.confirmEmail) {
        throw new Error('Os emails não coincidem.');
      }
      
      if (formData.password !== formData.confirmPassword) {
        throw new Error('As senhas não coincidem.');
      }
      
      if (!validatePassword(formData.password)) {
        throw new Error('A senha deve ter pelo menos 8 caracteres, incluindo maiúscula, número e caractere especial.');
      }

      const response: SignupResponse = await signupUser(formData);
      
      console.log('📋 Resposta completa da API:', response);
      console.log('🔍 Status da resposta:', response?.status);
      console.log('🔍 Status Code da resposta:', response?.status_code);
      console.log('🔍 Tipo do status:', typeof response?.status);
      console.log('🔍 Tipo do status_code:', typeof response?.status_code);

      // Verificar se a resposta tem status verdadeiro
      // A API retorna status_code: 200 para sucesso
      const isSuccessStatus = response && (
        response.status === true || 
        (typeof response.status === 'string' && response.status === 'true') || 
        (typeof response.status === 'number' && response.status === 1) ||
        (response.status_code === 200) || // API retorna status_code: 200
        (response.status_code === '200')
      );
      
      if (isSuccessStatus) {
        console.log('✅ Cadastro bem-sucedido detectado!');
        console.log('🔍 Critério de sucesso usado:', {
          'response.status': response.status,
          'response.status_code': response.status_code,
          'typeof status': typeof response.status,
          'typeof status_code': typeof response.status_code
        });
        
        // Tentar extrair dados do usuário de diferentes formas
        let userData = null;
        
        if (response.usuario && Array.isArray(response.usuario) && response.usuario.length > 0) {
          userData = response.usuario[0];
          console.log('👤 Dados extraídos de response.usuario[0]:', userData);
        } else if (response.user) {
          userData = response.user;
          console.log('👤 Dados extraídos de response.user:', userData);
        } else if (response.data) {
          userData = response.data;
          console.log('👤 Dados extraídos de response.data:', userData);
        } else {
          // Fallback: usar os dados do formulário
          userData = {
            nome: formData.username,
            username: formData.username,
            email: formData.email,
            foto: null // Sem foto inicialmente
          } as any; // Usar as any temporariamente para evitar erro de tipo
          console.log('👤 Usando dados do formulário como fallback:', userData);
        }
        
        if (userData) {
          console.log('🚀 Fazendo login automático com:', userData);
          
          // Fazer login automático após cadastro
          login(userData);
          
          // Aguardar um pouco para garantir que o contexto foi atualizado
          setTimeout(() => {
            console.log('🔒 Fechando popup de cadastro');
            handleClose();
            console.log('✅ Fluxo de cadastro concluído com sucesso!');
          }, 100);
          
        } else {
          console.error('❌ Não foi possível extrair dados do usuário');
          console.error('📋 Estrutura da resposta completa:', JSON.stringify(response, null, 2));
          throw new Error('Dados do usuário não encontrados na resposta do cadastro.');
        }
      } else {
        console.error('❌ Cadastro falhou ou status inválido');
        console.error('📋 Detalhes completos da resposta:', {
          status: response?.status,
          status_code: response?.status_code,
          message: response?.message,
          usuario: response?.usuario,
          fullResponse: response
        });
        
        // Erro de cadastro - verificar se é erro de duplicação
        let errorMessage = response?.message || 'Erro ao realizar cadastro. Tente novamente.';
        
        // Tratar mensagens específicas de duplicação
        if (errorMessage.toLowerCase().includes('email') && errorMessage.toLowerCase().includes('já')) {
          errorMessage = 'Este email já está cadastrado. Use outro email.';
        } else if (errorMessage.toLowerCase().includes('usuário') && errorMessage.toLowerCase().includes('já')) {
          errorMessage = 'Este nome de usuário já está em uso. Escolha outro.';
        } else if (errorMessage.toLowerCase().includes('duplicate') || errorMessage.toLowerCase().includes('duplicado')) {
          errorMessage = 'Email ou nome de usuário já cadastrado. Verifique os dados.';
        }
        
        setError(errorMessage);
      }
    } catch (error) {
      console.error('💥 Erro no fluxo de cadastro:', error);
      console.error('📋 Detalhes do erro:', {
        message: error instanceof Error ? error.message : 'Erro desconhecido',
        stack: error instanceof Error ? error.stack : null,
        formData: { ...formData, password: '***', confirmPassword: '***' }
      });
      
      setError(error instanceof Error ? error.message : 'Erro inesperado ao realizar cadastro.');
    } finally {
      setIsLoading(false);
    }
  };

  // Função para validar senha
  const validatePassword = (password: string): boolean => {
    const minLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    
    return minLength && hasUpperCase && hasNumber && hasSpecialChar;
  };

  // Função para validar email com debounce
  const validateEmailAvailability = async (email: string) => {
    if (!email || !email.includes('@')) return;
    
    setIsValidatingEmail(true);
    setEmailExists(null);
    
    try {
      const result = await checkEmailExists(email);
      setEmailExists(result.exists);
      
      if (result.exists) {
        console.log('❌ Email já cadastrado:', email);
      } else {
        console.log('✅ Email disponível:', email);
      }
    } catch (error) {
      console.warn('⚠️ Erro na validação de email:', error);
      setEmailExists(null); // Em caso de erro, não bloqueia
    } finally {
      setIsValidatingEmail(false);
    }
  };
  
  // Função para validar username com debounce
  const validateUsernameAvailability = async (username: string) => {
    if (!username || username.length < 3) return;
    
    setIsValidatingUsername(true);
    setUsernameExists(null);
    
    try {
      const result = await checkUsernameExists(username);
      setUsernameExists(result.exists);
      
      if (result.exists) {
        console.log('❌ Username já cadastrado:', username);
      } else {
        console.log('✅ Username disponível:', username);
      }
    } catch (error) {
      console.warn('⚠️ Erro na validação de username:', error);
      setUsernameExists(null); // Em caso de erro, não bloqueia
    } finally {
      setIsValidatingUsername(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Validar senha em tempo real
    if (name === 'password') {
      if (value === '') {
        setIsPasswordValid(null);
      } else {
        setIsPasswordValid(validatePassword(value));
      }
    }
    
    // Validar email com debounce
    if (name === 'email') {
      setEmailExists(null); // Reset estado
      // Debounce de 1 segundo
      setTimeout(() => {
        if (formData.email === value) { // Só valida se ainda é o mesmo valor
          validateEmailAvailability(value);
        }
      }, 1000);
    }
    
    // Validar username com debounce  
    if (name === 'username') {
      setUsernameExists(null); // Reset estado
      // Debounce de 1 segundo
      setTimeout(() => {
        if (formData.username === value) { // Só valida se ainda é o mesmo valor
          validateUsernameAvailability(value);
        }
      }, 1000);
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
            <div>
              <CloseButton onClick={handleClose}>
                <FiX />
              </CloseButton>
              
              <LogoSection>
                <FaDumbbell className="logo-icon" />
                <h2>GYM BUDDY</h2>
                <div className="divider" />
              </LogoSection>

              <Title>CADASTRAR-SE</Title>

              <SignupForm onSubmit={handleSubmit}>
                <InputGroup>
                  <Input
                    type="text"
                    name="username"
                    placeholder="Crie um nome de usuário"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                    style={{
                      borderColor: usernameExists === true ? '#ff4444' : 
                                  usernameExists === false ? '#44ff44' : undefined
                    }}
                  />
                  {isValidatingUsername && (
                    <ValidationMessage style={{ color: '#888' }}>🔍 Verificando disponibilidade...</ValidationMessage>
                  )}
                  {usernameExists === true && (
                    <ValidationMessage style={{ color: '#ff4444' }}>❌ Nome de usuário já está em uso</ValidationMessage>
                  )}
                  {usernameExists === false && (
                    <ValidationMessage style={{ color: '#44ff44' }}>✅ Nome de usuário disponível</ValidationMessage>
                  )}
                </InputGroup>

                <InputGroup>
                  <Input
                    type="text"
                    name="nickname"
                    placeholder="Crie um nickname"
                    value={formData.nickname}
                    onChange={handleInputChange}
                    required
                  />
                </InputGroup>

                <InputGroup>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Insira seu e-mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      borderColor: emailExists === true ? '#ff4444' : 
                                  emailExists === false ? '#44ff44' : undefined
                    }}
                  />
                  {isValidatingEmail && (
                    <ValidationMessage style={{ color: '#888' }}>🔍 Verificando disponibilidade...</ValidationMessage>
                  )}
                  {emailExists === true && (
                    <ValidationMessage style={{ color: '#ff4444' }}>❌ Email já está cadastrado</ValidationMessage>
                  )}
                  {emailExists === false && (
                    <ValidationMessage style={{ color: '#44ff44' }}>✅ Email disponível</ValidationMessage>
                  )}
                </InputGroup>

                <InputGroup>
                  <Input
                    type="email"
                    name="confirmEmail"
                    placeholder="Confirme o email"
                    value={formData.confirmEmail}
                    onChange={handleInputChange}
                    required
                  />
                </InputGroup>

                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Crie uma senha"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    $isValid={isPasswordValid}
                  />
                  <PasswordValidationIcon
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: isPasswordValid !== null ? [0, 1.2, 0.9, 1.05, 1] : 0,
                      opacity: isPasswordValid !== null ? 1 : 0,
                      filter: isPasswordValid !== null 
                        ? ["blur(4px)", "blur(0px)"]
                        : "blur(4px)"
                    }}
                    exit={{ 
                      scale: 0,
                      opacity: 0,
                      filter: "blur(4px)"
                    }}
                    transition={{ 
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      duration: 0.6,
                      filter: { duration: 0.3 }
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                    $isValid={isPasswordValid}
                    onMouseEnter={() => isPasswordValid === false && setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                  >
                    <motion.div
                      key={isPasswordValid ? 'check' : 'x'}
                      initial={{ scale: 0 }}
                      animate={{ 
                        scale: 1
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                        delay: 0.1
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {isPasswordValid === true ? <FiCheck /> : <FiX />}
                    </motion.div>
                    
                    {/* Tooltip para especificações de senha */}
                    <AnimatePresence>
                      {showTooltip && isPasswordValid === false && (
                        <PasswordTooltip
                          initial={{ 
                            opacity: 0, 
                            scale: 0.7, 
                            y: 15,
                            filter: "blur(8px)",
                            rotateX: -15
                          }}
                          animate={{ 
                            opacity: 1, 
                            scale: 1, 
                            y: 0,
                            filter: "blur(0px)",
                            rotateX: 0
                          }}
                          exit={{ 
                            opacity: 0, 
                            scale: 0.85, 
                            y: 8,
                            filter: "blur(4px)",
                            rotateX: 10
                          }}
                          transition={{ 
                            duration: 0.4,
                            ease: [0.25, 0.46, 0.45, 0.94],
                            opacity: { duration: 0.3 },
                            filter: { duration: 0.3 },
                            scale: { 
                              type: "spring",
                              stiffness: 300,
                              damping: 20
                            }
                          }}
                        >
                          <div className="tooltip-header">
                            <FiX className="tooltip-icon" />
                            <span>Senha inválida</span>
                          </div>
                          <motion.div 
                            className="tooltip-content"
                            initial="hidden"
                            animate="visible"
                            variants={{
                              hidden: { opacity: 0 },
                              visible: {
                                opacity: 1,
                                transition: {
                                  staggerChildren: 0.08,
                                  delayChildren: 0.15
                                }
                              }
                            }}
                          >
                            <motion.div 
                              className="requirement"
                              variants={{
                                hidden: { opacity: 0, x: -10 },
                                visible: { 
                                  opacity: 1, 
                                  x: 0,
                                  transition: { duration: 0.3, ease: "easeOut" }
                                }
                              }}
                            >
                              <span className="bullet">•</span>
                              Mínimo 8 caracteres
                            </motion.div>
                            <motion.div 
                              className="requirement"
                              variants={{
                                hidden: { opacity: 0, x: -10 },
                                visible: { 
                                  opacity: 1, 
                                  x: 0,
                                  transition: { duration: 0.3, ease: "easeOut" }
                                }
                              }}
                            >
                              <span className="bullet">•</span>
                              1 letra maiúscula
                            </motion.div>
                            <motion.div 
                              className="requirement"
                              variants={{
                                hidden: { opacity: 0, x: -10 },
                                visible: { 
                                  opacity: 1, 
                                  x: 0,
                                  transition: { duration: 0.3, ease: "easeOut" }
                                }
                              }}
                            >
                              <span className="bullet">•</span>
                              1 número
                            </motion.div>
                            <motion.div 
                              className="requirement"
                              variants={{
                                hidden: { opacity: 0, x: -10 },
                                visible: { 
                                  opacity: 1, 
                                  x: 0,
                                  transition: { duration: 0.3, ease: "easeOut" }
                                }
                              }}
                            >
                              <span className="bullet">•</span>
                              1 caractere especial
                            </motion.div>
                          </motion.div>
                        </PasswordTooltip>
                      )}
                    </AnimatePresence>
                  </PasswordValidationIcon>
                  <PasswordToggle
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </PasswordToggle>
                </InputGroup>

                <InputGroup>
                  <Input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder="Confirme a senha"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                  <PasswordToggle
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                  </PasswordToggle>
                </InputGroup>

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
                  {isLoading ? 'Cadastrando...' : 'Cadastrar'}
                </SubmitButton>
              </SignupForm>

              <LoginPrompt>
                Já possui uma conta? <LoginLink href="#" onClick={(e) => {
                  e.preventDefault();
                  onSwitchToLogin();
                }}>Fazer Login</LoginLink>
              </LoginPrompt>
            </div>
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
  
  > div {
    background: #0A0A0A;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1.6rem;
    padding: 3rem;
    width: 90%;
    max-width: 42rem;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    pointer-events: auto;
    position: relative;
  }
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
  z-index: 10;
  
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

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

const InputGroup = styled.div`
  position: relative;
`;

const ValidationMessage = styled.div`
  font-size: 1.2rem;
  margin-top: 0.5rem;
  padding: 0.3rem 0;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Input = styled.input<{ $isValid?: boolean | null }>`
  width: 100%;
  background: transparent;
  border: 1px solid ${props => 
    props.$isValid === true ? '#10B981' : 
    props.$isValid === false ? '#EF4444' : 
    'rgba(255, 255, 255, 0.2)'
  };
  border-radius: 0.8rem;
  padding: 1.4rem ${props => (props.name === 'password' || props.name === 'confirmPassword') ? '4.5rem' : '1.6rem'} 1.4rem 1.6rem;
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
`;

const PasswordValidationIcon = styled(motion.div)<{ $isValid?: boolean | null }>`
  position: absolute;
  left: -2.6rem;
  top: 30%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${props => 
    props.$isValid === true ? 'rgba(16, 185, 129, 0.15)' : 
    props.$isValid === false ? 'rgba(239, 68, 68, 0.15)' : 
    'transparent'
  };
  color: ${props => 
    props.$isValid === true ? '#10B981' : 
    props.$isValid === false ? '#EF4444' : 
    'transparent'
  };
  font-size: 1.2rem;
  font-weight: 700;
  z-index: 2;
  cursor: pointer;
  overflow: visible;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: ${props => 
      props.$isValid === true ? '#10B981' : 
      props.$isValid === false ? '#EF4444' : 
      'transparent'
    };
    opacity: 0;
    animation: ${props => props.$isValid !== null ? 'pulse 2s infinite' : 'none'};
  }

  @keyframes pulse {
    0% {
      opacity: 0.3;
      transform: translate(-50%, -50%) scale(1);
    }
    50% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(1.5);
    }
    100% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(1.5);
    }
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
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  
  &:hover {
    color: var(--white);
  }
  
  svg {
    display: block;
  }
`;

const PasswordTooltip = styled(motion.div)`
  position: absolute;
  top: 50%;
  right: 120%;
  transform: translateY(-50%);
  background: linear-gradient(135deg, 
    rgba(227, 6, 19, 0.15) 0%, 
    rgba(139, 69, 19, 0.12) 50%,
    rgba(0, 0, 0, 0.8) 100%
  );
  backdrop-filter: blur(25px) saturate(180%);
  border: 1px solid rgba(227, 6, 19, 0.25);
  border-radius: 1.6rem;
  padding: 1.4rem 1.6rem;
  min-width: 24rem;
  box-shadow: 
    inset 0 1px 0 rgba(255, 255, 255, 0.15),
    inset 0 -1px 0 rgba(0, 0, 0, 0.2),
    0 12px 40px rgba(0, 0, 0, 0.3),
    0 6px 20px rgba(227, 6, 19, 0.15);
  z-index: 1000;
  pointer-events: none;
  overflow: hidden;

  /* Liquid glass shine effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(255, 255, 255, 0.1), 
      transparent
    );
    animation: shine 3s ease-in-out infinite;
  }

  /* Seta do tooltip */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid rgba(227, 6, 19, 0.8);
    filter: drop-shadow(2px 0 4px rgba(0, 0, 0, 0.2));
  }

  @keyframes shine {
    0% { left: -100%; }
    50% { left: 100%; }
    100% { left: 100%; }
  }

  .tooltip-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(227, 6, 19, 0.3);
    background: linear-gradient(90deg, 
      rgba(227, 6, 19, 0.1) 0%, 
      rgba(227, 6, 19, 0.05) 100%
    );
    border-radius: 0.8rem;
    padding: 0.8rem 1rem;
    margin: -0.4rem -0.6rem 1.2rem -0.6rem;

    .tooltip-icon {
      color: rgba(227, 6, 19, 0.9);
      font-size: 1.6rem;
      background: rgba(227, 6, 19, 0.15);
      padding: 0.4rem;
      border-radius: 0.6rem;
      border: 1px solid rgba(227, 6, 19, 0.3);
    }

    span {
      color: var(--white);
      font-size: 1.4rem;
      font-weight: 700;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }
  }

  .tooltip-content {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .requirement {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.3rem;
    font-weight: 500;
    padding: 0.4rem 0;
    transition: all 0.2s ease;

    &:hover {
      color: rgba(255, 255, 255, 1);
      transform: translateX(2px);
    }

    .bullet {
      color: rgba(227, 6, 19, 0.8);
      font-weight: 900;
      font-size: 1.6rem;
      line-height: 1;
      text-shadow: 0 0 4px rgba(227, 6, 19, 0.4);
    }
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

const LoginPrompt = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.4rem;
  text-align: center;
  margin-top: 2rem;
`;

const LoginLink = styled.a`
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
  
  &:hover {
    text-decoration: underline;
  }
`;

export default SignupPopup;
