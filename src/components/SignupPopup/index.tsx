import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiEye, FiEyeOff, FiX, FiCheck } from 'react-icons/fi';
import { FaDumbbell } from 'react-icons/fa';
import styled from 'styled-components';

interface SignupPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

const SignupPopup = ({ isOpen, onClose, onSwitchToLogin }: SignupPopupProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: ''
  });
  const [isPasswordValid, setIsPasswordValid] = useState<boolean | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);

  // Função para resetar o formulário
  const resetForm = () => {
    setFormData({
      username: '',
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: ''
    });
    setShowPassword(false);
    setShowConfirmPassword(false);
    setIsPasswordValid(null);
  };

  // Função personalizada para fechar o popup
  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup attempt:', formData);
  };

  // Função para validar senha
  const validatePassword = (password: string): boolean => {
    const minLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    
    return minLength && hasUpperCase && hasNumber && hasSpecialChar;
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
                  />
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

                <SubmitButton
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Cadastrar
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

const Input = styled.input<{ $isValid?: boolean | null }>`
  width: 100%;
  background: transparent;
  border: 1px solid ${props => 
    props.$isValid === true ? '#10B981' : 
    props.$isValid === false ? '#EF4444' : 
    'rgba(255, 255, 255, 0.2)'
  };
  border-radius: 0.8rem;
  padding: 1.4rem ${props => props.name === 'password' ? '8rem' : '1.6rem'} 1.4rem 1.6rem;
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
  right: 2.5rem;
  top: 90%;
  bottom: 32px;
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
  position: relative;

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
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.6rem;
  cursor: pointer;
  transition: color 0.2s ease;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
  
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

const SubmitButton = styled(motion.button)`
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
  
  &:hover {
    background: var(--primary-dark);
    box-shadow: 0 8px 24px rgba(227, 6, 19, 0.4);
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
