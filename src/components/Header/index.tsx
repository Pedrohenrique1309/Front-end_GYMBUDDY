import { useState, useEffect, useRef } from 'react'
import { FaDumbbell } from 'react-icons/fa'
import { FiSun, FiMoon, FiLogOut, FiUser, FiUsers, FiActivity, FiShare2 } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { BRAND } from '../../config/branding'
import PopupLogin from '../LoginPopup'
import SignupPopup from '../CadastroPopUp'
import PopupEsqueciSenha from '../PopUpEsqueciMinhaSenha'
import { useUser } from '../../contexts/UserContext'
import { usePopup } from '../../contexts/PopupContext'
import DefaultAvatar from '../../assets/avatarpadrao'

interface HeaderProps {
  isVisible?: boolean
}

const Header = ({ isVisible = true }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showProfileCard, setShowProfileCard] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  
  const { user, isLoggedIn, logout } = useUser();
  const { 
    showLoginPopup, 
    showSignupPopup, 
    showForgotPasswordPopup,
    openLogin,
    openSignup,
    closeLogin,
    closeSignup,
    closeForgotPassword,
    switchToSignup,
    switchToLogin,
    switchToForgotPassword,
    returnToLoginFromForgotPassword
  } = usePopup();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    // Aplicar o tema ao documento
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    console.log('Usuário deslogado');
  };
  
  const handleMouseEnterProfile = () => {
    if (!showUserMenu) {
      hoverTimeoutRef.current = setTimeout(() => {
        setShowProfileCard(true);
      }, 2500);
    }
  };
  
  const handleMouseLeaveProfile = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setShowProfileCard(false);
  };
  
  // Fechar card quando menu abrir
  useEffect(() => {
    if (showUserMenu) {
      setShowProfileCard(false);
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    }
  }, [showUserMenu]);

  // Hook para fechar menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false)
      }
    }

    if (showUserMenu) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showUserMenu])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sobre nós', path: '/sobre' },
    { name: 'Recursos', path: '/recursos' },
    { name: 'Aplicativo', path: '/app' },
  ];

  return (
    <HeaderContainer $scrolled={scrolled} $isVisible={isVisible}>
      <div className="container">
        <Logo>
          <LogoImage src={BRAND.logoSrc} alt={BRAND.name} />
        </Logo>
        
        <Nav>
          <NavList>
            {navLinks.map((link) => (
              <NavItem key={link.path}>
                <NavLink 
                  to={link.path} 
                  className={location.pathname === link.path ? 'active' : ''}
                >
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {link.name}
                  </motion.span>
                  {location.pathname === link.path && (
                    <motion.span 
                      className="underline"
                      layoutId="underline"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      exit={{ scaleX: 0, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                        duration: 0.6
                      }}
                    />
                  )}
                  <motion.div
                    className="nav-glow"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: location.pathname === link.path ? 1 : 0,
                      scale: location.pathname === link.path ? 1 : 0.8
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </NavLink>
              </NavItem>
            ))}
          </NavList>
        </Nav>
        
        {isLoggedIn ? (
          <UserSection 
            ref={userMenuRef}
            onMouseEnter={handleMouseEnterProfile}
            onMouseLeave={handleMouseLeaveProfile}
          >
            <UserProfile
              onClick={() => setShowUserMenu(!showUserMenu)}
              whileHover={{ 
                scale: 1.03,
                y: -3,
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ 
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              <UserAvatarContainer>
                {user?.foto ? (
                  <UserAvatar src={user.foto} alt={user.nome || 'Usuário'} />
                ) : (
                  <DefaultAvatar size={40} />
                )}
                <UserAvatarGlow />
              </UserAvatarContainer>
              <UserInfo>
                <UserName>{user?.nome || user?.username || 'Usuário'}</UserName>
              </UserInfo>
            </UserProfile>
            
            <AnimatePresence>
              {showProfileCard && !showUserMenu && (
                <ProfileHoverCard
                  initial={{ 
                    opacity: 0,
                    y: 20,
                    scale: 0.9,
                    filter: 'blur(10px)'
                  }}
                  animate={{ 
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: 'blur(0px)'
                  }}
                  exit={{ 
                    opacity: 0,
                    y: 10,
                    scale: 0.95,
                    filter: 'blur(8px)'
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.34, 1.56, 0.64, 1]
                  }}
                >
                  <ProfileCardImageContainer>
                    {user?.foto ? (
                      <ProfileCardImage 
                        src={user.foto} 
                        alt={user.nome || user.username || 'Usuário'}
                        loading="lazy"
                      />
                    ) : (
                      <ProfileCardImagePlaceholder>
                        <DefaultAvatar size={120} />
                      </ProfileCardImagePlaceholder>
                    )}
                    <ProfileCardImageOverlay />
                    
                    <ProfileCardInfo>
                      <ProfileCardName>
                        {user?.nome || user?.username || 'Usuário'}
                      </ProfileCardName>
                      <ProfileCardBio>
                        {user?.email || 'Membro ativo do GYM BUDDY focado em resultados.'}
                      </ProfileCardBio>
                      
                      <ProfileCardStatsInline>
                        <StatInlineItem>
                          <FiShare2 style={{ fontSize: '1.6rem' }} />
                          <span>24 publicações</span>
                        </StatInlineItem>
                      </ProfileCardStatsInline>
                    </ProfileCardInfo>
                  </ProfileCardImageContainer>
                  
                  <ProfileCardFooter>
                    <ProfileCardButton
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setShowProfileCard(false);
                        // Navegar para perfil
                      }}
                    >
                      Seguir <span style={{ marginLeft: '0.4rem' }}>+</span>
                    </ProfileCardButton>
                  </ProfileCardFooter>
                </ProfileHoverCard>
              )}
            </AnimatePresence>
            
            <AnimatePresence>
              {showUserMenu && (
                <>
                  <MenuOverlay
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setShowUserMenu(false)}
                  />
                  <UserMenu
                    initial={{ 
                      opacity: 0, 
                      y: -20, 
                      scale: 0.9,
                      rotateX: -15,
                      filter: 'blur(10px)'
                    }}
                    animate={{ 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      rotateX: 0,
                      filter: 'blur(0px)'
                    }}
                    exit={{ 
                      opacity: 0, 
                      y: -15, 
                      scale: 0.95,
                      rotateX: -10,
                      filter: 'blur(8px)'
                    }}
                    transition={{ 
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      filter: { duration: 0.3 }
                    }}
                  >
                    <MenuShine />
                    <MenuHeader>
                      <UserGreeting>
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          Olá, {user?.nome || user?.username || 'Usuário'}!
                        </motion.span>
                      </UserGreeting>
                    </MenuHeader>
                    <MenuDivider />
                    <MenuContent>
                      <ProfileButton
                        as={Link}
                        to="/perfil"
                        whileHover={{ 
                          backgroundColor: 'rgba(227, 6, 19, 0.15)',
                          x: 5,
                          scale: 1.02
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setShowUserMenu(false)}
                      >
                        <motion.div
                          whileHover={{ rotate: 15 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FiUser />
                        </motion.div>
                        <span>Ver perfil</span>
                        <ProfileArrow>→</ProfileArrow>
                      </ProfileButton>
                      

                      <LogoutButton
                        onClick={handleLogout}
                        whileHover={{ 
                          backgroundColor: 'rgba(220, 38, 38, 0.15)',
                          x: 5,
                          scale: 1.02
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          whileHover={{ rotate: 15 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FiLogOut />
                        </motion.div>
                        <span>Sair</span>
                        <LogoutArrow>→</LogoutArrow>
                      </LogoutButton>
                    </MenuContent>
                  </UserMenu>
                </>
              )}
            </AnimatePresence>
          </UserSection>
        ) : (
          <AuthButtons>
            <LoginButton onClick={openLogin}>Login</LoginButton>
            <SignUpButton onClick={openSignup}>Cadastro</SignUpButton>
          </AuthButtons>
        )}
        
        <ThemeToggle 
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          $isDarkMode={isDarkMode}
        >
          <div className="icon-container">
            <AnimatePresence mode="wait">
              <motion.div
                className="icon-wrapper"
                key={isDarkMode ? 'moon' : 'sun'}
                initial={{ 
                  opacity: 0, 
                  scale: 0.3, 
                  y: 10,
                  filter: "blur(4px)"
                }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  filter: "blur(0px)"
                }}
                exit={{ 
                  opacity: 0, 
                  scale: 0.3, 
                  y: -10,
                  filter: "blur(4px)"
                }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.5, ease: "backOut" },
                  filter: { duration: 0.3 }
                }}
              >
                {isDarkMode ? (
                  <FiMoon className="theme-icon moon" />
                ) : (
                  <FiSun className="theme-icon sun" />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </ThemeToggle>
      </div>
      
      <PopupLogin 
        estaAberto={showLoginPopup && !showForgotPasswordPopup} 
        aoFechar={closeLogin}
        aoTrocarParaCadastro={switchToSignup}
      />
      
      <SignupPopup 
        isOpen={showSignupPopup} 
        onClose={closeSignup}
        onSwitchToLogin={switchToLogin}
      />
      
      <PopupEsqueciSenha
        estaAberto={showForgotPasswordPopup}
        aoFechar={closeForgotPassword}
        aoVoltarParaLogin={returnToLoginFromForgotPassword}
      />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header<{ $scrolled: boolean; $isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  height: ${({ $scrolled }) => ($scrolled ? '6.4rem' : '8rem')};
  transition: all 0.5s ease;
  background: ${({ $scrolled }) =>
    $scrolled
      ? 'rgba(10, 10, 10, 0.7)'
      : 'linear-gradient(180deg, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0) 100%)'};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'saturate(120%) blur(6px)' : 'none')};
  border-bottom: ${({ $scrolled }) => ($scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent')};
  box-shadow: ${({ $scrolled }) => ($scrolled ? '0 4px 20px rgba(0,0,0,0.25)' : 'none')};
  
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(-100%)')};
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding-left: 0;
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--white);
  margin-left: 0;
  
  .icon {
    color: var(--primary);
    font-size: 2.8rem;
  }
`

const LogoImage = styled.img`
  height: 11rem;
  width: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
  margin-top: 1.3rem;
  
  &:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    height: 9rem;
  }
`

const Nav = styled.nav`
  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 3.2rem;
`;

const NavItem = styled.li``;

const NavLink = styled(Link)`
  position: relative;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--white);
  transition: all 0.3s ease;
  padding: 1rem 1.5rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  border-radius: 1rem;
  overflow: hidden;
  
  &:hover {
    color: var(--primary);
    background: rgba(227, 6, 19, 0.1);
    transform: translateY(-2px);
  }
  
  &.active {
    color: var(--primary);
    background: rgba(227, 6, 19, 0.15);
  }
  
  .underline {
    position: absolute;
    bottom: -6px;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--primary), #ff4757);
    border-radius: 2px;
    transform-origin: left;
    box-shadow: 0 0 10px rgba(227, 6, 19, 0.5);
  }
  
  .nav-glow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at center,
      rgba(227, 6, 19, 0.2) 0%,
      transparent 70%
    );
    border-radius: inherit;
    pointer-events: none;
  }
`;

const ThemeToggle = styled(motion.button)<{ $isDarkMode: boolean }>`
  background: ${({ $isDarkMode }) => 
    $isDarkMode 
      ? 'linear-gradient(135deg, rgba(30, 30, 50, 0.8), rgba(50, 50, 80, 0.6))' 
      : 'transparent'
  };
  border: ${({ $isDarkMode }) => 
    $isDarkMode 
      ? '1px solid rgba(255, 255, 255, 0.2)' 
      : '1px solid transparent'
  };
  cursor: pointer;
  padding: 1rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
  margin-left: 1.5rem;
  position: relative;
  overflow: hidden;
  width: 4.8rem;
  height: 4.8rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ $isDarkMode }) => 
      $isDarkMode 
        ? 'radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%)' 
        : 'radial-gradient(circle at center, rgba(255, 165, 0, 0.1) 0%, transparent 70%)'
    };
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: inherit;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  .icon-container {
    position: relative;
    width: 2.4rem;
    height: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .icon-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .theme-icon {
    width: 2.4rem;
    height: 2.4rem;
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
  }
  
  .sun {
    color: #FFA500;
    filter: drop-shadow(0 0 8px rgba(255, 165, 0, 0.4));
    
    &:hover {
      filter: drop-shadow(0 0 12px rgba(255, 165, 0, 0.6));
    }
  }
  
  .moon {
    color: #FFFFFF;
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.4));
    animation: moon-glow 3s ease-in-out infinite alternate;
    
    &:hover {
      filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.6));
      transform: scale(1.1);
    }
  }
  
  &:hover {
    background: ${({ $isDarkMode }) => 
      $isDarkMode 
        ? 'linear-gradient(135deg, rgba(40, 40, 70, 0.9), rgba(60, 60, 100, 0.7))' 
        : 'rgba(255, 165, 0, 0.1)'
    };
    transform: translateY(-2px);
    box-shadow: ${({ $isDarkMode }) => 
      $isDarkMode 
        ? '0 8px 25px rgba(255, 255, 255, 0.15)' 
        : '0 8px 25px rgba(255, 165, 0, 0.25)'
    };
  }
  
  @keyframes moon-glow {
    0% { 
      filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.4));
    }
    100% { 
      filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.6));
    }
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.button`
  height: 5rem;
  padding: 0 3rem;
  border-radius: 2.5rem;
  font-size: 1.6rem;
  font-weight: 700;
  transition: all 0.2s ease;
`;

const LoginButton = styled(Button)`
  background: transparent;
  color: var(--white);
  border: 1px solid var(--primary);
  
  &:hover {
    background: rgba(255, 0, 0, 0.12);
  }
`;

const SignUpButton = styled(Button)`
  background: var(--primary);
  color: var(--white);
  border: 1px solid var(--primary);
  box-shadow: 0 8px 24px rgba(255,0,0,0.25);
  
  &:hover {
    background: var(--primary-dark);
    border-color: var(--primary-dark);
    box-shadow: 0 10px 28px rgba(255,0,0,0.32);
    transform: translateY(-1px);
  }
`;

// Estilos do perfil do usuário
const UserSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const UserProfile = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  padding: 0.6rem 2rem 0.6rem 0.6rem;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  
  /* Glassmorphism elegante */
  background: linear-gradient(135deg, 
    rgba(30, 30, 35, 0.8) 0%,
    rgba(20, 20, 25, 0.6) 100%
  );
  backdrop-filter: blur(16px) saturate(150%);
  -webkit-backdrop-filter: blur(16px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10rem;
  
  /* Sombras em camadas */
  box-shadow: 
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 8px 24px rgba(0, 0, 0, 0.2),
    0 4px 12px rgba(0, 0, 0, 0.15);
  
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Shine effect sutil */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(255, 255, 255, 0.1), 
      transparent
    );
    transition: left 0.5s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, 
      rgba(35, 35, 40, 0.85) 0%,
      rgba(25, 25, 30, 0.7) 100%
    );
    border-color: rgba(227, 6, 19, 0.35);
    box-shadow: 
      inset 0 1px 0 rgba(255, 255, 255, 0.15),
      0 12px 32px rgba(0, 0, 0, 0.3),
      0 6px 16px rgba(227, 6, 19, 0.15),
      0 0 0 1px rgba(227, 6, 19, 0.2);
    
    &::before {
      left: 100%;
    }
  }
`;

const UserAvatarContainer = styled.div`
  position: relative;
  width: 4.4rem;
  height: 4.4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Borda gradiente animada */
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    padding: 2px;
    background: linear-gradient(135deg, 
      rgba(227, 6, 19, 0.5) 0%, 
      rgba(255, 100, 100, 0.3) 50%,
      rgba(255, 255, 255, 0.2) 100%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: all 0.3s ease;
  }
  
  ${UserProfile}:hover &::before {
    opacity: 1;
    animation: rotate-border 3s linear infinite;
  }
  
  @keyframes rotate-border {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const UserAvatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
  border: 2px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;
  
  ${UserProfile}:hover & {
    border-color: rgba(227, 6, 19, 0.4);
    transform: scale(1.05);
  }
`;

const UserAvatarGlow = styled.div`
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(227, 6, 19, 0.4) 0%, transparent 70%);
  opacity: 0;
  filter: blur(16px);
  transition: all 0.4s ease;
  z-index: -1;
  
  ${UserProfile}:hover & {
    opacity: 0.8;
    animation: glow-pulse 2s ease-in-out infinite;
  }
  
  @keyframes glow-pulse {
    0%, 100% {
      opacity: 0.6;
      filter: blur(16px);
    }
    50% {
      opacity: 1;
      filter: blur(20px);
    }
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const UserName = styled.span`
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.01em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  ${UserProfile}:hover & {
    color: rgba(255, 255, 255, 1);
    text-shadow: 0 2px 12px rgba(227, 6, 19, 0.3);
    transform: translateX(2px);
  }
`;

const UserMenu = styled(motion.div)`
  position: absolute;
  top: calc(100% + 1rem);
  right: 0;
  background: #0A0A0A;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.2rem;
  padding: 1rem 0;
  min-width: 20rem;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  z-index: 1000;
`;

const MenuHeader = styled.div`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 0.5rem;
  
  span {
    color: var(--white);
    font-size: 1.4rem;
    font-weight: 600;
  }
`;

const MenuDivider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 0.5rem 0;
  
  @keyframes pulse {
    0% { transform: scale(0.95); opacity: 0.2; }
    100% { transform: scale(1); opacity: 0.4; }
  }
`;

const MenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(2px);
  z-index: 999;
`;

const MenuShine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(227, 6, 19, 0.6) 20%, 
    rgba(255, 70, 85, 0.8) 50%, 
    rgba(227, 6, 19, 0.6) 80%, 
    transparent 100%
  );
  animation: shine 3s ease-in-out infinite;
  
  @keyframes shine {
    0%, 100% { opacity: 0.5; transform: translateX(-100%); }
    50% { opacity: 1; transform: translateX(100%); }
  }
`;

const UserGreeting = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  
  span {
    background: linear-gradient(135deg, #E30613, #FF4655);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 600;
    font-size: 1.5rem;
  }
`;

const MenuContent = styled.div`
  padding: 0.5rem 0;
`;

const LogoutArrow = styled.span`
  margin-left: auto;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.2s ease;
  font-size: 1.2rem;
`;

const ProfileArrow = styled.span`
  margin-left: auto;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.2s ease;
  font-size: 1.2rem;
`;

const ProfileButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 1rem 1.5rem;
  background: transparent;
  border: none;
  color: #E30613;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  text-decoration: none;
  
  &:hover {
    background: rgba(227, 6, 19, 0.1);
    
    ${ProfileArrow} {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  svg {
    font-size: 1.6rem;
  }
`;



const LogoutButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 1rem 1.5rem;
  background: transparent;
  border: none;
  color: #ef4444;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  
  &:hover {
    background: rgba(220, 38, 38, 0.1);
    
    ${LogoutArrow} {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  svg {
    font-size: 1.6rem;
  }
`;

// Profile Hover Card Styles
const ProfileHoverCard = styled(motion.div)`
  position: absolute;
  top: calc(100% + 1.5rem);
  right: 0;
  width: 34rem;
  border-radius: 3rem;
  overflow: hidden;
  z-index: 1001;
  
  /* Background escuro */
  background: rgba(20, 20, 25, 0.98);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 2px solid rgba(40, 40, 45, 0.8);
  
  /* Sombras profundas */
  box-shadow: 
    0 24px 64px rgba(0, 0, 0, 0.5),
    0 12px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
`;

const ProfileCardImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 42rem;
  overflow: hidden;
`;

const ProfileCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const ProfileCardImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #2a2a2f, #1a1a1f);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileCardImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70%;
  background: linear-gradient(to top, 
    rgba(0, 0, 0, 0.95) 0%,
    rgba(0, 0, 0, 0.7) 40%,
    rgba(0, 0, 0, 0.3) 70%,
    transparent 100%
  );
  pointer-events: none;
`;

const ProfileCardInfo = styled.div`
  position: absolute;
  bottom: 2.4rem;
  left: 2.4rem;
  right: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  z-index: 1;
`;

const ProfileCardName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  font-size: 2.8rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 1);
  text-shadow: 0 2px 16px rgba(0, 0, 0, 0.8);
  text-align: center;
`;

const VerifiedBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #4CAF50, #45a049);
  color: white;
  font-size: 1.4rem;
  font-weight: 900;
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.4);
  animation: badge-pop 2s ease-in-out infinite;
  
  @keyframes badge-pop {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`;

const ProfileCardBio = styled.p`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
  margin: 0;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.8);
  text-align: center;
`;

const ProfileCardStatsInline = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const StatInlineItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.6rem;
  font-weight: 600;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.8);
  
  svg {
    opacity: 0.9;
  }
`;

const ProfileCardFooter = styled.div`
  padding: 2rem 2.4rem;
  background: rgba(0, 0, 0, 0.3);
`;

const ProfileCardButton = styled(motion.button)`
  width: 100%;
  padding: 1.4rem 2rem;
  background: rgba(230, 230, 235, 0.95);
  border: none;
  border-radius: 5rem;
  color: rgba(20, 20, 25, 1);
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }
`;

export default Header;
