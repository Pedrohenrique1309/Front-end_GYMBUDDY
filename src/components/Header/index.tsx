import { useState, useEffect } from 'react';
import { FaDumbbell } from 'react-icons/fa';
import { FiSun, FiMoon, FiLogOut } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { BRAND } from '../../config/branding';
import PopupLogin from '../LoginPopup';
import SignupPopup from '../SignupPopup';
import { useUser } from '../../contexts/UserContext';
import DefaultAvatar from '../../assets/default-avatar';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showSignupPopup, setShowSignupPopup] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const location = useLocation();
  
  const { user, isLoggedIn, logout } = useUser();

  const handleSwitchToSignup = () => {
    setShowLoginPopup(false);
    setShowSignupPopup(true);
  };

  const handleSwitchToLogin = () => {
    setShowSignupPopup(false);
    setShowLoginPopup(true);
  };

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

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sobre nós', path: '/sobre' },
    { name: 'Recursos', path: '/recursos' },
    { name: 'Aplicativo', path: '/app' },
  ];

  return (
    <HeaderContainer $scrolled={scrolled}>
      <div className="container">
        <Logo>
          <FaDumbbell className="icon" />
          <span>{BRAND.name}</span>
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
          <UserSection>
            <UserProfile
              onClick={() => setShowUserMenu(!showUserMenu)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {user?.foto ? (
                <UserAvatar src={user.foto} alt={user.nome || 'Usuário'} />
              ) : (
                <DefaultAvatar size={40} />
              )}
              <UserInfo>
                <UserName>{user?.nome || user?.username || 'Usuário'}</UserName>
              </UserInfo>
            </UserProfile>
            
            <AnimatePresence>
              {showUserMenu && (
                <UserMenu
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <MenuHeader>
                    <span>Olá, {user?.nome || user?.username || 'Usuário'}!</span>
                  </MenuHeader>
                  <MenuDivider />
                  <LogoutButton
                    onClick={handleLogout}
                    whileHover={{ backgroundColor: 'rgba(220, 38, 38, 0.1)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiLogOut />
                    <span>Sair</span>
                  </LogoutButton>
                </UserMenu>
              )}
            </AnimatePresence>
          </UserSection>
        ) : (
          <AuthButtons>
            <LoginButton onClick={() => setShowLoginPopup(true)}>Login</LoginButton>
            <SignUpButton onClick={() => setShowSignupPopup(true)}>Cadastro</SignUpButton>
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
        estaAberto={showLoginPopup} 
        aoFechar={() => setShowLoginPopup(false)}
        aoTrocarParaCadastro={handleSwitchToSignup}
      />
      
      <SignupPopup 
        isOpen={showSignupPopup} 
        onClose={() => setShowSignupPopup(false)}
        onSwitchToLogin={handleSwitchToLogin}
      />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  height: ${({ $scrolled }) => ($scrolled ? '6.4rem' : '8rem')};
  transition: height 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
  background: ${({ $scrolled }) =>
    $scrolled
      ? 'rgba(10, 10, 10, 0.7)'
      : 'linear-gradient(180deg, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0) 100%)'};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'saturate(120%) blur(6px)' : 'none')};
  border-bottom: ${({ $scrolled }) => ($scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent')};
  box-shadow: ${({ $scrolled }) => ($scrolled ? '0 4px 20px rgba(0,0,0,0.25)' : 'none')};
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding-left: 0; /* flush left for header only */
  }
`;

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

`;

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
  gap: 1.2rem;
  padding: 0.8rem 1.6rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 2.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-1px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
`;

const UserAvatar = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.2);
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const UserName = styled.span`
  color: var(--white);
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.2;
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
  
  &:hover {
    background: rgba(220, 38, 38, 0.1);
  }
  
  svg {
    font-size: 1.6rem;
  }
`;

export default Header;
