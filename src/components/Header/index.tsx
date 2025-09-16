import { useState, useEffect } from 'react';
import { FaDumbbell } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { BRAND } from '../../config/branding';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.span 
                      className="underline"
                      layoutId="underline"
                      transition={{
                        type: "spring",
                        bounce: 0.25,
                        duration: 0.5
                      }}
                    />
                  )}
                </NavLink>
              </NavItem>
            ))}
          </NavList>
        </Nav>
        
        <AuthButtons>
          <LoginButton>Login</LoginButton>
          <SignUpButton>Cadastro</SignUpButton>
        </AuthButtons>
      </div>
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
  transition: color 0.2s ease;
  padding: 0.4rem 0;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  
  &:hover {
    color: var(--primary);
  }
  
  &.active {
    color: var(--primary);
  }
  
  .underline {
    position: absolute;
    bottom: -6px;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--primary);
    border-radius: 2px;
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
  height: 4.4rem;
  padding: 0 2.4rem;
  border-radius: 2.2rem;
  font-size: 1.5rem;
  font-weight: 700;
  transition: all 0.2s ease;
`;

const LoginButton = styled(Button)`
  background: transparent;
  color: var(--white);
  border: 2px solid var(--primary);
  
  &:hover {
    background: rgba(255, 0, 0, 0.12);
  }
`;

const SignUpButton = styled(Button)`
  background: var(--primary);
  color: var(--white);
  border: 2px solid var(--primary);
  box-shadow: 0 8px 24px rgba(255,0,0,0.25);
  
  &:hover {
    background: var(--primary-dark);
    border-color: var(--primary-dark);
    box-shadow: 0 10px 28px rgba(255,0,0,0.32);
    transform: translateY(-1px);
  }
`;

export default Header;
