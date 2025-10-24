import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSearch, FiHeart, FiMessageCircle, FiChevronRight, FiSend, FiPlus, FiX } from 'react-icons/fi'
import { useUser } from '../../Contexts/UserContext'
import { useHeader } from '../../Contexts/HeaderContext'
import { useNavigate } from 'react-router-dom'
import DefaultAvatar from '../../Recursos/avatarpadrao'
import CreatePostPopup from '../../Componentes/PopUpCriarPost'
import CommentsModal from '../../Componentes/CommentsModal'
import { curtidaService, comentarioCountService, type LikeUser } from '../../Services/socialService'
import agentService from '../../Services/agentService'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Environment } from '@react-three/drei'
import HalterModel from '../../Componentes/HalterModel/HalterModelWithErrorHandling'

const API_BASE_URL = '/api/v1/gymbuddy'

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  background: #1a1a1a;
  color: white;
  position: relative;
`

// AI Chat Sidebar Components
const ChatSidebar = styled(motion.div)<{ isOpen?: boolean }>`
  position: fixed;
  left: ${props => props.isOpen ? '0' : '-380px'};
  top: 0;
  bottom: 0;
  width: 600px;
  
  /* Glassmorphism Effect */
  background: linear-gradient(135deg, 
    rgba(26, 26, 26, 0.15) 0%,
    rgba(18, 18, 18, 0.25) 30%,
    rgba(22, 22, 22, 0.20) 70%,
    rgba(26, 26, 26, 0.15) 100%
  );
  backdrop-filter: blur(25px) saturate(180%);
  -webkit-backdrop-filter: blur(25px) saturate(180%);
  
  /* Glass Border */
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-right: 2px solid rgba(229, 57, 53, 0.3);
  
  /* Enhanced Shadow */
  box-shadow: ${props => props.isOpen ? 
    `20px 0 60px rgba(0, 0, 0, 0.3),
     8px 0 32px rgba(229, 57, 53, 0.1),
     inset 0 0 60px rgba(255, 255, 255, 0.05)` : 'none'};
  
  z-index: 9999;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: translateZ(0);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(229, 57, 53, 0.08) 0%,
      transparent 30%,
      transparent 70%,
      rgba(255, 87, 34, 0.05) 100%
    );
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(to bottom, 
      rgba(229, 57, 53, 0.8) 0%,
      rgba(255, 87, 34, 0.6) 50%,
      rgba(229, 57, 53, 0.8) 100%
    );
    box-shadow: 0 0 20px rgba(229, 57, 53, 0.4);
  }
`

const ChatToggleButton = styled(motion.div)<{ isOpen?: boolean }>`
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 64px;
  height: 64px;
  
  /* Liquid Glass Base */
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 50%,
    rgba(255, 255, 255, 0.02) 100%
  );
  
  /* Glass Morphism */
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10000;
  
  /* Red Glow Enhancement */
  box-shadow: 
    0 8px 32px rgba(227, 6, 19, 0.15),
    0 4px 16px rgba(227, 6, 19, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
    
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  /* Subtle Red Inner Glow */
  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: radial-gradient(
      circle at center,
      rgba(227, 6, 19, 0.1) 0%,
      rgba(227, 6, 19, 0.05) 40%,
      transparent 70%
    );
    border-radius: 50%;
    z-index: -1;
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }
  
  /* Outer Red Glow Ring */
  &::after {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    background: conic-gradient(
      from 0deg,
      rgba(227, 6, 19, 0.3),
      rgba(185, 28, 28, 0.2),
      rgba(227, 6, 19, 0.3)
    );
    border-radius: 50%;
    z-index: -2;
    opacity: 0;
    filter: blur(2px);
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-50%) scale(1.05);
    
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.15) 0%,
      rgba(255, 255, 255, 0.08) 50%,
      rgba(255, 255, 255, 0.03) 100%
    );
    
    border-color: rgba(255, 255, 255, 0.3);
    
    box-shadow: 
      0 12px 48px rgba(227, 6, 19, 0.25),
      0 6px 24px rgba(227, 6, 19, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.4),
      inset 0 -1px 0 rgba(0, 0, 0, 0.1);
      
    &::before {
      opacity: 1;
    }
    
    &::after {
      opacity: 0.6;
    }
  }
  
  &:active {
    transform: translateY(-50%) scale(0.98);
  }
  
  svg {
    font-size: 24px;
    color: rgba(255, 255, 255, 0.9);
    filter: drop-shadow(0 2px 8px rgba(227, 6, 19, 0.3));
    transition: all 0.3s ease;
    transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`

const ChatCloseButton = styled(motion.div)<{ isOpen?: boolean }>`
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 64px;
  height: 64px;
  
  /* Liquid Glass Base */
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 50%,
    rgba(255, 255, 255, 0.02) 100%
  );
  
  /* Glass Morphism */
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10001;
  
  /* Red Glow Enhancement */
  box-shadow: 
    0 8px 32px rgba(227, 6, 19, 0.15),
    0 4px 16px rgba(227, 6, 19, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
    
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  &:hover {
    transform: translateY(-50%) scale(1.05);
    
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.15) 0%,
      rgba(255, 255, 255, 0.08) 50%,
      rgba(255, 255, 255, 0.03) 100%
    );
    
    border-color: rgba(255, 255, 255, 0.3);
    
    box-shadow: 
      0 12px 48px rgba(227, 6, 19, 0.25),
      0 6px 24px rgba(227, 6, 19, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.4),
      inset 0 -1px 0 rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    transform: translateY(-50%) scale(0.98);
  }
  
  svg {
    font-size: 24px;
    color: rgba(255, 255, 255, 0.9);
    filter: drop-shadow(0 2px 8px rgba(227, 6, 19, 0.3));
    transition: all 0.3s ease;
  }
`

const Header = styled(motion.header)<{ $visible?: boolean }>`
  position: fixed;
  top: 0;
  left: 50px;
  right: 0;
  height: 70px;
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  z-index: 1;
  
  /* Transição suave de visibilidade */
  opacity: ${props => props.$visible ? 1 : 0};
  transform: translateY(${props => props.$visible ? '0' : '-100%'});
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  pointer-events: ${props => props.$visible ? 'auto' : 'none'};
`

const Logo = styled.div`
  img {
    height: 40px;
  }
`



const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 2rem;
  padding: 100px 2rem 2rem 80px;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 100px 2rem 2rem 70px;
  }
`

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const MainTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin: 2rem 0;
`

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem 2rem;
  transition: all 0.3s ease;
  
  &:focus-within {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.2);
  }
  
  svg {
    color: rgba(255, 255, 255, 0.5);
    font-size: 20px;
  }
  
  input {
    flex: 1;
    background: transparent;
    border: none;
    color: white;
    font-size: 1.5rem;
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }
    
    &:focus {
      outline: none;
    }
  }
`

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
`

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

const PostCard = styled.div`
  background: #2a2a2a;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
    border-color: rgba(229, 57, 53, 0.2);
  }
`

const PostImage = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const PostFooter = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const PostUser = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Username = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: #E53935;
  }
`

const PostDescription = styled.p`
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  margin: 0.8rem 0;
`

const PostHashtags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  
  span {
    color: #E53935;
    font-size: 1.2rem;
    cursor: pointer;
    transition: color 0.3s ease;
    
    &:hover {
      color: #FF5722;
    }
  }
`

const PostStats = styled.div`
  display: flex;
  gap: 1.5rem;
`

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  
  svg {
    font-size: 18px;
  }
  
  span {
    font-size: 1.3rem;
  }
`

// Novos styled components para curtidas e comentários
const LikeButton = styled.button<{ $isLiked?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: ${props => props.$isLiked ? '#E30613' : 'rgba(255, 255, 255, 0.6)'};
  cursor: pointer;
  padding: 0.75rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  font-size: 1.4rem;
  font-weight: 500;
  
  svg {
    transition: all 0.3s ease;
    fill: ${props => props.$isLiked ? '#E30613' : 'transparent'};
    stroke: ${props => props.$isLiked ? '#E30613' : 'rgba(255, 255, 255, 0.6)'};
  }
  
  &:hover:not(:disabled) {
    background: rgba(227, 6, 19, 0.1);
    color: #E30613;
    transform: translateY(-2px);
    
    svg {
      stroke: #E30613;
      transform: scale(1.1);
    }
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &:active:not(:disabled) {
    transform: translateY(0) scale(0.95);
  }
`

const CommentButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  padding: 0.75rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  font-size: 1.4rem;
  font-weight: 500;
  
  svg {
    transition: all 0.3s ease;
    stroke: rgba(255, 255, 255, 0.6);
  }
  
  &:hover {
    background: rgba(74, 144, 226, 0.1);
    color: #4A90E2;
    transform: translateY(-2px);
    
    svg {
      stroke: #4A90E2;
      transform: scale(1.1);
    }
  }
  
  &:active {
    transform: translateY(0) scale(0.95);
  }
`

const LikesCount = styled.span`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(227, 6, 19, 0.1);
    color: #E30613;
    transform: scale(1.05);
  }
`

const CommentsCount = styled.span`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.3rem;
  font-weight: 600;
`

// Styled components para Modal de Likes
const LikesModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`

const LikesModalContent = styled(motion.div)`
  background: linear-gradient(135deg,
    rgba(26, 26, 26, 0.98) 0%,
    rgba(18, 18, 18, 0.98) 100%
  );
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  width: 100%;
  max-width: 400px;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(227, 6, 19, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
`

const LikesModalHeader = styled.div`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg,
    rgba(227, 6, 19, 0.1) 0%,
    transparent 50%,
    rgba(227, 6, 19, 0.05) 100%
  );
  
  h3 {
    color: white;
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
  }
  
  button {
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 6px;
    transition: all 0.2s ease;
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      color: white;
      transform: rotate(90deg);
    }
  }
`

const LikesUsersList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0.5rem 0;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(227, 6, 19, 0.3);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(227, 6, 19, 0.5);
  }
`

const LikesUserItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1.5rem;
  transition: background-color 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`

const LikesUserAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border: 2px solid rgba(227, 6, 19, 0.2);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`

const UserName = styled.span`
  color: white;
  font-weight: 600;
  font-size: 0.95rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const UserUsername = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const FriendsSidebar = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  height: fit-content;
  position: sticky;
  top: 100px;
`

const FriendsSearch = styled.div`
  input {
    width: 100%;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    padding: 1rem 1.5rem;
    color: white;
    font-size: 1.4rem;
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }
    
    &:focus {
      outline: none;
      border-color: rgba(255, 255, 255, 0.2);
      background: rgba(255, 255, 255, 0.12);
    }
  }
`

const FriendsTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  margin: 2rem 0 1.5rem;
`

const FriendsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const FriendItem = styled.div`
  display: flex;
  gap: 1.2rem;
  cursor: pointer;
  padding: 1.2rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  min-height: 70px;
  align-items: flex-start;
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-2px);
  }
`

const FriendAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const FriendInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 0;
`

const FriendName = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
`

const FriendStatus = styled.div`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.4;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-top: 0.2rem;
`

const PostsCount = styled.div`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 0.4rem;
  font-weight: 500;
`

// Advanced AI Chat Components
const ChatOverlay = styled(motion.div)`
position: fixed;
top: 0;
left: 600px;
right: 0;
bottom: 0;
background: rgba(0, 0, 0, 0.4);
backdrop-filter: blur(8px);
z-index: 999;
cursor: pointer;
`

const ChatHeader = styled.div`
  padding: 2.5rem 2rem 2rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 2rem;
    right: 2rem;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent 0%,
      rgba(229, 57, 53, 0.5) 30%,
      rgba(255, 87, 34, 0.5) 70%,
      transparent 100%
    );
  }
`

const ChatTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  background: linear-gradient(135deg, #E53935 0%, #FF5722 50%, #FF8A65 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
`

const ChatSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  margin: 0;
  font-weight: 300;
`

const Chat3DContainer = styled.div`
  width: 100%;
  height: 300px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 1rem 0;
`

const Chat3DPlaceholder = styled.div`
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.9rem;
  text-align: center;
  z-index: 1;
`

const ChatContent = styled.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

const ChatMessages = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`

const MessageBubble = styled.div<{ isUser?: boolean }>`
  max-width: 80%;
  padding: 1rem 1.5rem;
  border-radius: 20px;
  font-size: 0.95rem;
  line-height: 1.5;
  align-self: ${props => props.isUser ? 'flex-end' : 'flex-start'};
  background: ${props => props.isUser 
    ? 'linear-gradient(135deg, #E53935 0%, #FF5722 100%)'
    : 'rgba(255, 255, 255, 0.05)'
  };
  color: white;
  border: ${props => props.isUser 
    ? 'none' 
    : '1px solid rgba(255, 255, 255, 0.1)'
  };
  box-shadow: ${props => props.isUser 
    ? '0 4px 20px rgba(229, 57, 53, 0.3)'
    : '0 4px 20px rgba(0, 0, 0, 0.2)'
  };

  /* Indicador de digitação animado */
  .typing-indicator {
    display: flex;
    align-items: center;
    gap: 4px;
    
    span {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: rgba(229, 57, 53, 0.6);
      animation: typing 1.4s infinite ease-in-out;
      
      &:nth-child(1) {
        animation-delay: -0.32s;
      }
      
      &:nth-child(2) {
        animation-delay: -0.16s;
      }
    }
  }
  
  @keyframes typing {
    0%, 80%, 100% {
      transform: scale(0.8);
      opacity: 0.5;
    }
    40% {
      transform: scale(1);
      opacity: 1;
    }
  }
`

const ChatInputContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`

const ChatInput = styled.input`
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  padding: 1rem 1.5rem;
  color: white;
  font-size: 0.95rem;
  outline: none;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
  
  &:focus {
    border-color: rgba(229, 57, 53, 0.5);
    background: rgba(255, 255, 255, 0.08);
  }
`

const ChatSendButton = styled(motion.button)`
  background: linear-gradient(135deg, #E53935 0%, #FF5722 100%);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  box-shadow: 0 4px 20px rgba(229, 57, 53, 0.4);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 30px rgba(229, 57, 53, 0.6);
  }
  
  svg {
    font-size: 1.2rem;
  }
`

const CloseButton = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 2.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  
  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.1);
  }
`

const AiContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

const AiMessage = styled.div`
  font-size: 1.8rem;
  line-height: 1.6;
  color: white;
  font-weight: 500;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const SuggestionTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`

const SuggestionTag = styled.div`
  background: rgba(255, 255, 255, 0.15);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 25px;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
  }
`

const AiInputContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: auto;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`

const AiInput = styled.input`
  flex: 1;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 25px;
  padding: 1.5rem 2rem;
  font-size: 1.4rem;
  color: #333;
  
  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
  
  &:focus {
    outline: none;
    background: white;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }
`

const SendButton = styled(motion.button)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(229, 57, 53, 0.8);
  border: 1px solid rgba(229, 57, 53, 0.5);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(229, 57, 53, 1);
    box-shadow: 0 0 20px rgba(229, 57, 53, 0.4);
  }
  
  svg {
    font-size: 1.8rem;
  }
`

// Interfaces
export interface User {
  id: number
  nome: string
  nickname: string
  foto?: string
  descricao?: string
  publicacoes?: number
}

interface Post {
  id: number
  id_user?: number // ID do usuário que criou o post
  user: {
    avatar?: string
    username: string
  }
  image: string
  description?: string
  hashtags: string[]
  likes: number
  comments: number
}

// Component
const Social = () => {
  const { user } = useUser()
  const { setAiChatOpen } = useHeader()
  const navigate = useNavigate()
  const [users, setUsers] = useState<User[]>([])
  const [randomUsers, setRandomUsers] = useState<User[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [posts, setPosts] = useState<Post[]>([])
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([])
  const [showAiChat, setShowAiChat] = useState(false)
  const [chatMessage, setChatMessage] = useState('')
  const [chatMessages, setChatMessages] = useState<{id: number, text: string, isUser: boolean}[]>([
    { id: 1, text: 'Olá! Sou seu assistente pessoal do GymBuddy. Como posso ajudar com seus treinos hoje? 💪', isUser: false },
  ])
  const [isChatLoading, setIsChatLoading] = useState(false)
  const [showCreatePostPopup, setShowCreatePostPopup] = useState(false)
  
  // Estados para comentários e curtidas
  const [showCommentsModal, setShowCommentsModal] = useState(false)
  const [selectedPostForComments, setSelectedPostForComments] = useState<Post | null>(null)
  const [postLikes, setPostLikes] = useState<{ [postId: number]: { count: number, liked: boolean } }>({})
  const [hoveredLikes, setHoveredLikes] = useState<{ [postId: number]: LikeUser[] }>({})
  const [showLikesModal, setShowLikesModal] = useState<{ postId: number, users: LikeUser[] } | null>(null)
  const [likingPosts, setLikingPosts] = useState<{ [postId: number]: boolean }>({})

  useEffect(() => {
    loadUsers()
    loadPosts()
  }, [])

  // Sincronizar estado do chat IA com contexto global do header
  useEffect(() => {
    setAiChatOpen(showAiChat)
  }, [showAiChat, setAiChatOpen])

  // Estado para prevenir múltiplas chamadas simultâneas
  const [isLoadingLikes, setIsLoadingLikes] = useState(false)

  // Função melhorada para carregar curtidas com logs detalhados
  const loadLikesAndCounts = async () => {
    if (!user?.id || posts.length === 0) {
      console.log('⚠️ Não é possível carregar curtidas - usuário ou posts ausentes')
      return
    }

    if (isLoadingLikes) {
      console.log('⚠️ Carregamento de curtidas já em andamento - pulando')
      return
    }

    setIsLoadingLikes(true)
    try {
      console.log('🔄 Carregando curtidas para', posts.length, 'posts...')
      
      const likesPromises = posts.map(async (post) => {
        try {
          const [likesCount, userLiked] = await Promise.all([
            curtidaService.contarCurtidasPost(post.id),
            curtidaService.verificarCurtidaPost(Number(user.id), post.id)
          ])
          
          console.log(`📊 Post ${post.id}: ${likesCount} curtidas (backend tinha: ${post.likes}), usuário curtiu: ${userLiked}`)
          
          return {
            postId: post.id,
            count: likesCount,
            liked: userLiked
          }
        } catch (error) {
          console.error(`💥 Erro ao carregar dados do post ${post.id}:`, error)
          return {
            postId: post.id,
            count: post.likes || 0, // Fallback para valor atual
            liked: false
          }
        }
      })

      const likesData = await Promise.all(likesPromises)
      
      // Atualizar estado das curtidas
      const likesState: { [postId: number]: { count: number, liked: boolean } } = {}
      likesData.forEach(({ postId, count, liked }) => {
        likesState[postId] = { count, liked }
      })
      
      setPostLikes(likesState)
      
      // CRUCIAL: Atualizar também os posts com os contadores corretos
      setPosts(prev => prev.map(post => {
        const likeData = likesState[post.id]
        if (likeData) {
          return { ...post, likes: likeData.count }
        }
        return post
      }))
      
      setFilteredPosts(prev => prev.map(post => {
        const likeData = likesState[post.id]
        if (likeData) {
          return { ...post, likes: likeData.count }
        }
        return post
      }))
      
      console.log('✅ Curtidas carregadas e posts atualizados:')
      likesData.forEach(({ postId, count }) => {
        console.log(`  - Post ${postId}: ${count} curtidas`)
      })
      
    } catch (error) {
      console.error('💥 Erro geral ao carregar curtidas:', error)
    } finally {
      setIsLoadingLikes(false)
    }
  }

  // Função para sincronizar contador de curtidas de uma publicação específica
  const syncPostLikeCount = async (postId: number) => {
    try {
      console.log(`🔄 Sincronizando contador de curtidas para post ${postId}...`)
      
      // Buscar contagem real de curtidas
      const realCount = await curtidaService.contarCurtidasPost(postId)
      console.log(`📊 Contagem real de curtidas para post ${postId}:`, realCount)
      
      // Atualizar posts com a contagem correta
      setPosts(prev => prev.map(post => 
        post.id === postId 
          ? { ...post, likes: realCount }
          : post
      ))
      
      setFilteredPosts(prev => prev.map(post => 
        post.id === postId 
          ? { ...post, likes: realCount }
          : post
      ))
      
      // Atualizar estado de curtidas também
      if (user?.id) {
        const userLiked = await curtidaService.verificarCurtidaPost(user.id, postId)
        setPostLikes(prev => ({
          ...prev,
          [postId]: {
            count: realCount,
            liked: userLiked
          }
        }))
      }
      
      console.log(`✅ Post ${postId} sincronizado - curtidas: ${realCount}`)
    } catch (error) {
      console.error('💥 Erro ao sincronizar contador:', error)
    }
  }

  // Função para forçar reload das curtidas em caso de inconsistência
  const forceReloadLikes = async () => {
    console.log('🔄 Forçando reload das curtidas devido a inconsistência...')
    if (user?.id && posts.length > 0) {
      await loadLikesAndCounts()
    }
  }

  // Carregar estados de curtidas e contadores - apenas quando posts mudam de tamanho ou usuário muda
  useEffect(() => {
    if (user?.id && posts.length > 0) {
      loadLikesAndCounts()
    }
  }, [user?.id, posts.length]) // Usar apenas user.id e posts.length para evitar loop

  useEffect(() => {
    filterPosts()
  }, [searchQuery, posts])

  useEffect(() => {
    if (users.length > 0) {
      generateRandomUsers()
    }
  }, [users])

  // Enriquecer posts com dados completos dos usuários
  const enriquecerPostsComUsuarios = async (posts: any[]): Promise<Post[]> => {
    console.log('🔄 Iniciando enriquecimento de posts com dados dos usuários...')
    console.log('📋 Posts para enriquecer:', posts.length, 'posts')
    console.log('📄 Detalhes dos posts:', posts.map(p => ({
      id: p.id, 
      id_user: p.id_user, 
      username_atual: p.user?.username,
      avatar_atual: p.user?.avatar ? 'tem' : 'não tem'
    })))
    
    // Primeiro, buscar TODOS os usuários da API de uma vez
    let todosUsuarios: any[] = []
    try {
      console.log('📥 Buscando todos os usuários da API...')
      const usersResponse = await fetch(`${API_BASE_URL}/usuario`)
      if (usersResponse.ok) {
        const usersData = await usersResponse.json()
        todosUsuarios = usersData.usuarios || usersData || []
        console.log('✅ Usuários carregados da API:', todosUsuarios.length)
        console.log('👥 Primeiros 5 usuários:', todosUsuarios.slice(0, 5).map(u => ({
          id: u.id,
          nome: u.nome,
          nickname: u.nickname,
          foto: u.foto ? 'tem foto' : 'sem foto'
        })))
      }
    } catch (error) {
      console.error('❌ Erro ao buscar lista de usuários:', error)
    }
    
    return await Promise.all(
      posts.map(async (post) => {
        try {
          // Extrair ID do usuário do post
          let userId = post.id_user
          
          if (!userId) {
            // Tentar extrair do username se estiver no formato @userXX
            const userIdMatch = post.user?.username?.match(/@user(\d+)/)
            if (userIdMatch) {
              userId = parseInt(userIdMatch[1])
            }
          }
          
          console.log(`🔍 Post ${post.id}: buscando dados do usuário ID ${userId}`)
          console.log(`📄 Post ${post.id} dados atuais:`, {
            user_atual: post.user,
            id_user: post.id_user
          })
          
          if (!userId) {
            console.warn(`⚠️ Post ${post.id}: ID do usuário não encontrado, mantendo dados originais`)
            console.warn(`📄 Dados originais do post ${post.id}:`, {
              id: post.id,
              user: post.user,
              id_user_original: post.id_user
            })
            // Se não tem ID do usuário, manter os dados originais
            return {
              ...post,
              user: {
                username: post.user?.username || 'Usuário Anônimo',
                avatar: post.user?.avatar || ''
              }
            }
          }
          
          // Primeiro tentar encontrar na lista de todos os usuários
          let userData = todosUsuarios.find(u => u.id === userId || u.id === Number(userId))
          
          // Se não encontrou na lista, tentar buscar individualmente
          if (!userData) {
            console.log(`🔎 Usuário ${userId} não encontrado na lista, buscando individualmente...`)
            try {
              const userResponse = await fetch(`${API_BASE_URL}/usuario/${userId}`)
              if (userResponse.ok) {
                const responseData = await userResponse.json()
                userData = responseData.usuario || responseData
                console.log(`✅ Usuário ${userId} encontrado individualmente`)
              }
            } catch (apiError) {
              console.warn(`⚠️ Erro ao buscar usuário ${userId} individualmente:`, apiError)
            }
          }
          
          if (userData) {
            console.log(`📝 Dados do usuário ${userId} encontrados:`, {
              id: userData.id,
              nome: userData.nome,
              nickname: userData.nickname,
              foto: userData.foto ? 'tem foto' : 'sem foto'
            })
            
            // CORREÇÃO: Garantir que userData.usuario seja considerado também
            const dadosUsuario = userData.usuario || userData
            
            // Priorizar nome completo sobre nickname
            const nomeExibir = dadosUsuario.nome || dadosUsuario.nickname || `Usuário ${userId}`
            const foto = dadosUsuario.foto || ''
            
            const postAtualizado = {
              ...post,
              user: {
                username: nomeExibir,
                avatar: foto
              }
            }
            
            console.log(`✅ Post ${post.id} atualizado:`, {
              nome_exibir: nomeExibir,
              foto: foto ? 'sim' : 'não',
              username_final: postAtualizado.user.username,
              avatar_final: postAtualizado.user.avatar ? 'tem' : 'não tem'
            })
            
            return postAtualizado
          }
          
          // Fallback se não encontrar o usuário
          console.log(`⚠️ Post ${post.id}: usuário ${userId} não encontrado, usando fallback`)
          return {
            ...post,
            user: {
              username: post.user?.username || `Usuário ${userId}`,
              avatar: post.user?.avatar || ''
            }
          }
        } catch (error) {
          console.error(`💥 Erro ao processar post ${post.id}:`, error)
          return post
        }
      })
    )
  }

  const loadPosts = async () => {
    console.log('🚀 ======= INICIANDO CARREGAMENTO DE POSTS =======')
    console.log('🌐 API Base URL:', API_BASE_URL)
    console.log('🕐 Timestamp:', new Date().toLocaleTimeString())
    
    try {
      console.log('🔄 Tentativa 1: Endpoint /api/v1/gymbuddy/publicacao')
      
      // Primeiro tenta endpoint das publicações
      const response = await fetch('/api/v1/gymbuddy/publicacao', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      
      console.log('📡 Status da resposta:', response.status)
      console.log('📡 Headers da resposta:', Object.fromEntries(response.headers.entries()))
      
      if (response.ok) {
        const data = await response.json()
        console.log('📄 Resposta completa do /publicacao:', data)
        console.log('🔍 Estrutura da resposta:', {
          isArray: Array.isArray(data),
          hasPublicacao: !!data?.publicacao,
          isPublicacaoArray: Array.isArray(data?.publicacao),
          publicacaoLength: data?.publicacao?.length || 0,
          dataKeys: Object.keys(data || {}),
          firstElement: data?.publicacao?.[0] || data?.[0]
        })
        
        // Verifica múltiplas estruturas possíveis
        let postsArray = null
        
        // Estrutura 1: { publicacao: [...] }
        if (data?.publicacao && Array.isArray(data.publicacao) && data.publicacao.length > 0) {
          postsArray = data.publicacao
          console.log('✅ Estrutura encontrada: data.publicacao')
        }
        // Estrutura 2: Array direto [...]
        else if (Array.isArray(data) && data.length > 0) {
          postsArray = data
          console.log('✅ Estrutura encontrada: Array direto')
        }
        // Estrutura 3: { publicacoes: [...] } (plural)
        else if (data?.publicacoes && Array.isArray(data.publicacoes) && data.publicacoes.length > 0) {
          postsArray = data.publicacoes
          console.log('✅ Estrutura encontrada: data.publicacoes')
        }
        // Estrutura 4: { data: [...] }
        else if (data?.data && Array.isArray(data.data) && data.data.length > 0) {
          postsArray = data.data
          console.log('✅ Estrutura encontrada: data.data')
        }
        
        if (postsArray) {
          console.log('✅ Posts carregados da API:', postsArray.length, 'posts')
          console.log('🔍 ESTRUTURA COMPLETA DO PRIMEIRO POST DA API:', JSON.stringify(postsArray[0], null, 2))
          console.log('📊 Campos disponíveis no primeiro post:', Object.keys(postsArray[0] || {}))
          
          // Mapear dados das publicações
          const apiPosts = postsArray.map((pub: any, index: number) => {
            // Extrair hashtags da descrição
            const hashtagMatches = pub.descricao?.match(/#\w+/g) || []
            const uniqueHashtags = [...new Set(hashtagMatches)] as string[]
            
            // Extrair ID do usuário de várias possíveis estruturas
            // CORREÇÃO: Priorizar id_user do post sobre usuario?.id
            const userId = pub.id_user || pub.id_usuario || pub.user_id || pub.idUser || pub.userID || pub.usuario?.id
            
            console.log(`📝 Post ${index + 1} (ID: ${pub.id}):`, {
              estrutura_pub: Object.keys(pub),
              id_user_original: pub.id_user,
              id_usuario: pub.id_usuario,
              usuario_objeto: pub.usuario,
              userId_extraído: userId,
              usuario_nome: pub.usuario?.nickname || pub.usuario?.nome,
              imagem: pub.imagem ? '✅ Tem' : '❌ Sem',
              descricao: pub.descricao?.substring(0, 50) + '...',
              hashtags: uniqueHashtags.length
            })
            
            return {
              id: pub.id,
              id_user: userId, // ID do usuário extraído de várias possíveis estruturas
              user: {
                // SEMPRE usar fallback genérico para ser substituído pelo enriquecimento
                username: pub.usuario?.nome || pub.usuario?.nickname || (userId ? `Usuário ${userId}` : 'Usuário Desconhecido'),
                avatar: pub.usuario?.foto || ''
              },
              image: pub.imagem || '', 
              description: pub.descricao || '', 
              hashtags: uniqueHashtags,
              likes: pub.curtidas_count || pub.curtidas || 0,
              comments: pub.comentarios_count || pub.comentarios || 0,
              location: pub.localizacao || '',
              date: pub.data || pub.data_publicacao || ''
            }
          })
          
          console.log('🔄 Posts mapeados da API:', apiPosts)
          
          // Enriquecer posts com dados dos usuários
          console.log('🚀 Iniciando enriquecimento dos posts...')
          const postsEnriquecidos = await enriquecerPostsComUsuarios(apiPosts)
          console.log('✅ Posts enriquecidos (Resultado Final):', postsEnriquecidos.map(p => ({
            id: p.id, 
            username: p.user.username,
            avatar: p.user.avatar ? 'tem avatar' : 'sem avatar'
          })))
          console.log('🎯 Verificação de userundefined:', postsEnriquecidos.filter(p => 
            !p.user?.username || p.user.username.includes('undefined')
          ).map(p => `Post ${p.id}: ${p.user?.username || 'UNDEFINED'}`))
          setPosts(postsEnriquecidos)
          
          // Forçar carregamento das curtidas após carregar posts
          console.log('✅ Posts carregados - curtidas serão carregadas via useEffect')
          
          return
        } else {
          console.log('❌ Nenhuma estrutura de posts válida encontrada na resposta da API')
        }
      }
      
      // Se primeiro endpoint falhar, tenta o endpoint view/feed
      console.log('🔄 Tentando endpoint alternativo: /api/v1/gymbuddy/view/feed')
      const feedResponse = await fetch('/api/v1/gymbuddy/view/feed')
      
      if (feedResponse.ok) {
        const feedData = await feedResponse.json()
        console.log('📄 Resposta completa do /view/feed:', feedData)
        
        if (feedData?.view && Array.isArray(feedData.view)) {
          console.log('✅ Posts carregados do feed:', feedData.view.length, 'posts')
          console.log('🔍 ESTRUTURA COMPLETA DO PRIMEIRO POST DO FEED:', JSON.stringify(feedData.view[0], null, 2))
          console.log('📊 Campos disponíveis no primeiro post do feed:', Object.keys(feedData.view[0] || {}))
          
          const apiPosts = feedData.view.map((pub: any, index: number) => {
            const hashtagMatches = pub.descricao?.match(/#\w+/g) || []
            const uniqueHashtags = [...new Set(hashtagMatches)] as string[]
            
            // Extrair ID do usuário de várias possíveis estruturas
            // CORREÇÃO: Priorizar id_user do post sobre usuario?.id
            const userId = pub.id_user || pub.id_usuario || pub.user_id || pub.idUser || pub.userID || pub.usuario?.id
            
            console.log(`📝 Post do Feed ${index + 1} (ID: ${pub.id_publicacao}):`, {
              estrutura_pub: Object.keys(pub),
              id_user_original: pub.id_user,
              id_usuario: pub.id_usuario,
              usuario_objeto: pub.usuario,
              userId_extraído: userId,
              usuario_nome: pub.usuario?.nickname || pub.usuario?.nome
            })
            
            return {
              id: pub.id_publicacao,
              id_user: userId, // ID do usuário extraído de várias possíveis estruturas
              user: {
                // SEMPRE usar fallback genérico para ser substituído pelo enriquecimento
                username: pub.usuario?.nome || pub.usuario?.nickname || (userId ? `Usuário ${userId}` : 'Usuário Desconhecido'),
                avatar: pub.usuario?.foto || ''
              },
              image: pub.imagem || '', 
              description: pub.descricao || '', 
              hashtags: uniqueHashtags,
              likes: 0, // Será atualizado pela função loadLikesAndCounts()
              comments: pub.comentarios_count || 0,
              location: pub.localizacao || '',
              date: pub.data_publicacao || ''
            }
          })
          
          console.log('🔄 Posts mapeados do feed:', apiPosts)
          
          // Enriquecer posts com dados dos usuários
          const postsEnriquecidos = await enriquecerPostsComUsuarios(apiPosts)
          console.log('✅ Posts enriquecidos do feed (Resultado Final):', postsEnriquecidos.map(p => ({
            id: p.id, 
            username: p.user.username,
            avatar: p.user.avatar ? 'tem avatar' : 'sem avatar'
          })))
          console.log('🎯 Verificação de userundefined no feed:', postsEnriquecidos.filter(p => 
            !p.user?.username || p.user.username.includes('undefined')
          ).map(p => `Post ${p.id}: ${p.user?.username || 'UNDEFINED'}`))
          setPosts(postsEnriquecidos)
          
          // Forçar carregamento das curtidas após carregar posts do feed
          console.log('✅ Posts do feed carregados - curtidas serão carregadas via useEffect')
          
          return
        }
      }
      
      console.log('❌ Nenhum endpoint da API retornou publicações válidas.')
      throw new Error('Nenhum endpoint retornou dados válidos de publicações')
      
    } catch (error) {
      console.error('❌ Erro ao carregar posts da API:', error)
      console.log('⚠️ Não foi possível carregar publicações da API. Aguardando dados reais dos usuários.')
      
      // Não usar dados mock - deixar vazio para mostrar apenas publicações reais
      setPosts([])
    }
  }
  
  const filterPosts = () => {
    if (!searchQuery.trim()) {
      setFilteredPosts(posts)
      return
    }

    const query = searchQuery.toLowerCase()
    const filtered = posts.filter(post => {
      // Busca por usuário que postou
      const userMatch = post.user.username.toLowerCase().includes(query)
      
      // Busca por hashtags
      const hashtagMatch = post.hashtags.some(tag => 
        tag.toLowerCase().includes(query)
      )
      
      // Busca por descrição
      const descriptionMatch = post.description?.toLowerCase().includes(query) || false
      
      return userMatch || hashtagMatch || descriptionMatch
    })
    
    setFilteredPosts(filtered)
  }

  const generateRandomUsers = () => {
    // Filtrar usuário logado e embaralhar
    const filteredUsers = users.filter(u => u.id !== user?.id)
    const shuffled = [...filteredUsers].sort(() => Math.random() - 0.5)
    // Mostrar apenas 6 usuários aleatórios
    setRandomUsers(shuffled.slice(0, 6))
  }

  const loadUsers = async () => {
    try {
      console.log('🌐 Carregando usuários da API...')
      const response = await fetch(`${API_BASE_URL}/usuario`)
      
      if (response.ok) {
        const data = await response.json()
        if (data?.usuarios) {
          console.log('✅ Usuários carregados da API:', data.usuarios.length, 'usuários')
          console.log('📋 Primeiros usuários:', data.usuarios.slice(0, 3).map((u: any) => `ID:${u.id} - ${u.nome} (${u.nickname})`))
          setUsers(data.usuarios)
          return // IMPORTANTE: sair aqui se API funcionou
        }
      }
      
      throw new Error('API não retornou dados válidos')
      
    } catch (error) {
      console.error('❌ Erro ao carregar usuários da API:', error)
      console.log('⚠️ API de usuários indisponível - usando fallback apenas para sidebar')
      // Fallback apenas para sidebar (não afeta publicações)
      setUsers([
        {
          id: 2,
          nome: 'João Silva',
          nickname: '@joaosilva',
          foto: '',
          descricao: 'Foco no treino! 💪 Perdeu 10kg em 6 meses',
          publicacoes: 45
        },
        {
          id: 3,
          nome: 'Inimigo',
          nickname: 'Tetano Pé',
          foto: 'https://gymbuddystorage.blob.core.windows.net/fotos/1760027693377-download.png',
          descricao: 'fortin',
          publicacoes: 12
        },
        {
          id: 4,
          nome: 'Pedro Costa',
          nickname: '@pedrocosta',
          foto: '',
          descricao: 'Crossfit lover 🏋️ Competidor há 3 anos',
          publicacoes: 34
        },
        {
          id: 1004,
          nome: 'Ana Julia',
          nickname: '@anajulia',
          foto: '',
          descricao: 'Yoga e pilates 🧘 Instrutora certificada',
          publicacoes: 67
        },
        {
          id: 1005,
          nome: 'Carlos Mendes',
          nickname: '@carlosfit',
          foto: '',
          descricao: 'Bodybuilder natural. Preparação para campeonatos',
          publicacoes: 123
        },
        {
          id: 1006,
          nome: 'Lucia Fernanda',
          nickname: '@luciafernanda',
          foto: '',
          descricao: 'Nutricionista esportiva 🥗 Consultoria online',
          publicacoes: 78
        },
        {
          id: 1007,
          nome: 'Rafael Almeida',
          nickname: '@rafaelstrong',
          foto: '',
          descricao: 'Powerlifter profissional. Records pessoais toda semana',
          publicacoes: 156
        },
        {
          id: 1008,
          nome: 'Camila Oliveira',
          nickname: '@camilafit',
          foto: '',
          descricao: 'Transformação corporal é minha especialidade 🔥',
          publicacoes: 92
        },
        {
          id: 1009,
          nome: 'Bruno Cardoso',
          nickname: '@brunocardio',
          foto: '',
          descricao: 'Corredor de maratôna. Vida ativa sempre! 🏃‍♂️',
          publicacoes: 201
        },
        {
          id: 1010,
          nome: 'Isabella Costa',
          nickname: '@isabellacoach',
          foto: '',
          descricao: 'Life Coach e Personal Trainer. Mente e corpo em equilíbrio',
          publicacoes: 134
        }
      ])
    }
  }
  

  const handleChatSubmit = async () => {
    if (!chatMessage.trim() || isChatLoading) return

    const userMessage = chatMessage.trim()
    
    // Adicionar mensagem do usuário
    const newMessage = {
      id: chatMessages.length + 1,
      text: userMessage,
      isUser: true
    }

    setChatMessages(prev => [...prev, newMessage])
    setChatMessage('')
    setIsChatLoading(true)

    try {
      // Obter resposta do AgentPyLing
      const response = await agentService.sendMessage(userMessage)
      
      // Adicionar resposta da IA
      const aiResponse = {
        id: chatMessages.length + 2,
        text: response.response,
        isUser: false
      }
      
      setChatMessages(prev => [...prev, aiResponse])
      
      // Log de métricas se disponível
      if (response.metadata) {
        console.log('🤖 AgentPyLing Response:', {
          model: response.metadata.model,
          tokens: response.metadata.tokens,
          time: response.metadata.processing_time,
          confidence: response.confidence
        })
      }
    } catch (error) {
      console.error('❌ Erro no chat:', error)
      
      // Mensagem de erro amigável
      const errorResponse = {
        id: chatMessages.length + 2,
        text: '😅 Ops! Tive um problema técnico. Pode repetir sua pergunta?',
        isUser: false
      }
      setChatMessages(prev => [...prev, errorResponse])
    } finally {
      setIsChatLoading(false)
    }
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowAiChat(false)
    }
  }

  const toggleAiChat = () => {
    setShowAiChat(!showAiChat)
  }

  const handleCreatePost = () => {
    setShowCreatePostPopup(true)
  }

  const handleCloseCreatePost = () => {
    setShowCreatePostPopup(false)
  }

  const handleOpenCreatePost = () => {
    setShowCreatePostPopup(true)
  }

  // Funções para comentários
  const handleOpenComments = (post: Post) => {
    setSelectedPostForComments(post)
    setShowCommentsModal(true)
  }

  const handleCloseComments = () => {
    setShowCommentsModal(false)
    setSelectedPostForComments(null)
  }

  // Funções para curtidas
  const handleLikePost = async (postId: number) => {
    if (!user?.id) {
      alert('Você precisa estar logado para curtir!')
      return
    }

    // Prevenir múltiplos cliques
    if (likingPosts[postId]) {
      return
    }

    setLikingPosts(prev => ({ ...prev, [postId]: true }))

    try {
      const result = await curtidaService.toggleCurtidaPost({
        id_user: Number(user.id),
        id_publicacao: postId
      })

      // Obter o contador atual para calcular diferença
      const currentCount = postLikes[postId]?.count || posts.find(p => p.id === postId)?.likes || 0
      const newCount = result.total
      
      console.log(`🔢 ATUALIZAÇÃO CONTADOR - Post ${postId}:`, {
        antes: currentCount,
        depois: newCount,
        curtiu: result.curtiu,
        mudou: currentCount !== newCount
      })
      
      // Atualizar estado local
      setPostLikes(prev => ({
        ...prev,
        [postId]: {
          count: newCount,
          liked: result.curtiu
        }
      }))

      // Atualizar posts com nova contagem
      setPosts(prev => prev.map(post => 
        post.id === postId 
          ? { ...post, likes: newCount }
          : post
      ))
      
      setFilteredPosts(prev => prev.map(post => 
        post.id === postId 
          ? { ...post, likes: newCount }
          : post
      ))

    } catch (error: any) {
      console.error('Erro ao curtir post:', error)
      
      // Mostrar mensagem específica baseada no tipo de erro
      let mensagemErro = 'Erro ao curtir post. Tente novamente.'
      
      if (error?.message?.includes('temporário no servidor')) {
        mensagemErro = 'Problema temporário no servidor. Aguarde alguns segundos e tente novamente.'
      } else if (error?.message?.includes('Failed to fetch')) {
        mensagemErro = 'Problema de conexão. Verifique sua internet e tente novamente.'
      } else if (error?.message?.includes('não foi possível processar')) {
        mensagemErro = 'Servidor indisponível no momento. Tente novamente em instantes.'
      } else if (error?.message?.includes('já cadastrado')) {
        // Este caso já deve ter sido tratado no service, não deveria chegar aqui
        console.log('⚠️ Erro "já cadastrado" chegou até a interface - verificando sincronização')
        mensagemErro = 'Sincronizando estado das curtidas... Tente novamente em alguns segundos.'
      }
      
      alert(mensagemErro)
    } finally {
      // Sempre limpar o estado de loading
      setLikingPosts(prev => ({ ...prev, [postId]: false }))
    }
  }

  const handleShowLikesUsers = async (postId: number) => {
    try {
      const users = await curtidaService.buscarUsuariosCurtiramPost(postId)
      setShowLikesModal({ postId, users })
    } catch (error) {
      console.error('Erro ao buscar usuários:', error)
    }
  }

  const handleLikesHover = async (postId: number, isEntering: boolean) => {
    if (isEntering && !hoveredLikes[postId]) {
      try {
        const users = await curtidaService.buscarUsuariosCurtiramPost(postId)
        setHoveredLikes(prev => ({ ...prev, [postId]: users }))
        
        // Auto-show modal após 1.5s
        setTimeout(() => {
          const post = posts.find(p => p.id === postId)
          if (post && (post.likes || 0) > 0) {
            setShowLikesModal({ postId, users })
          }
        }, 1500)
      } catch (error) {
        console.error('Erro ao carregar usuários:', error)
      }
    }
  }

return (
  <Container>
    {/* Chat IA Moderno */}
    <AnimatePresence>
      {showAiChat && (
        <ChatOverlay 
          onClick={handleOverlayClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </AnimatePresence>
    
    <ChatSidebar
      isOpen={showAiChat}
      initial={false}
      animate={{
        x: showAiChat ? 0 : -420,
        opacity: showAiChat ? 1 : 0
      }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <Chat3DContainer>
        <Canvas 
          camera={{ position: [0, 0, 4], fov: 45 }}
          dpr={[1, 2]}
          performance={{ min: 0.5 }}
          onCreated={(state) => {
            console.log('Canvas criado na página Social:', state)
          }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />
          
          <HalterModel 
            position={[0, 0, 0]} 
            scale={3.0} 
            autoRotate={true}
          />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate 
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            makeDefault
          />
          
          <Environment preset="sunset" />
        </Canvas>
      </Chat3DContainer>
      
      <ChatContent>
        <ChatMessages>
          {chatMessages.map((message) => (
            <MessageBubble key={message.id} isUser={message.isUser}>
              {message.text}
            </MessageBubble>
          ))}
          {isChatLoading && (
            <MessageBubble isUser={false}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                A IA está pensando...
              </span>
            </MessageBubble>
          )}
        </ChatMessages>
        
        <ChatInputContainer>
          <ChatInput
            type="text"
            placeholder={isChatLoading ? "Aguarde a resposta..." : "Digite sua pergunta..."}
            value={chatMessage}
            onChange={(e) => setChatMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && !isChatLoading && handleChatSubmit()}
            disabled={isChatLoading}
            style={{ opacity: isChatLoading ? 0.6 : 1 }}
          />
          <ChatSendButton 
            onClick={handleChatSubmit}
            whileHover={{ scale: isChatLoading ? 1 : 1.05 }}
            whileTap={{ scale: isChatLoading ? 1 : 0.95 }}
            style={{ 
              opacity: isChatLoading ? 0.5 : 1,
              cursor: isChatLoading ? 'not-allowed' : 'pointer'
            }}
            disabled={isChatLoading}
          >
            <FiSend />
          </ChatSendButton>
        </ChatInputContainer>
      </ChatContent>
    </ChatSidebar>
    
    {/* Botão de Abrir o Chat (esquerda) */}
    <ChatToggleButton
      isOpen={showAiChat}
      onClick={toggleAiChat}
      initial={false}
      animate={{ 
        opacity: showAiChat ? 0 : 1,
        scale: showAiChat ? 0.8 : 1
      }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      whileHover={{ scale: showAiChat ? 0.8 : 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{ pointerEvents: showAiChat ? 'none' : 'auto' }}
    >
      <FiChevronRight />
    </ChatToggleButton>
    
    {/* Botão de Fechar o Chat (direita) */}
    <ChatCloseButton
      isOpen={showAiChat}
      onClick={toggleAiChat}
      initial={false}
      animate={{ 
        opacity: showAiChat ? 1 : 0,
        scale: showAiChat ? 1 : 0.8,
        x: showAiChat ? 0 : -50
      }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{ pointerEvents: showAiChat ? 'auto' : 'none' }}
    >
      <FiChevronRight style={{ transform: 'rotate(180deg)' }} />
    </ChatCloseButton>
    
    {/* Cabeçalho */}
    <Header $visible={!showAiChat}>
    </Header>
    
    {/* Conteúdo Principal */}
    <MainContent>
      <ContentArea>
        <MainTitle>
          Como seus amigos estão<br/>treinando hoje?
        </MainTitle>
        
        <SearchBar>
          <FiSearch />
          <input 
            type="text" 
            placeholder="Buscar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchBar>
        
        <SectionTitle>Posts recentes</SectionTitle>
          
          {filteredPosts.length === 0 ? (
            <EmptyState
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <EmptyIcon>📱</EmptyIcon>
              <EmptyTitle>Nenhuma publicação encontrada</EmptyTitle>
              <EmptyDescription>
                {searchQuery.trim() ? 
                  `Nenhuma publicação encontrada para "${searchQuery}"` :
                  'Seja o primeiro a compartilhar algo incrível!'
                }
              </EmptyDescription>
              <CreateFirstPostButton
                onClick={() => setShowCreatePostPopup(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Criar primeiro post
              </CreateFirstPostButton>
            </EmptyState>
          ) : (
          <PostsGrid>
            {filteredPosts.map((post) => (
              <PostCard key={post.id}>
                
                {post.image && (
                  <PostImage>
                    <img 
                      src={post.image} 
                      alt="Post" 
                      onError={(e) => {
                        console.log('❌ Erro ao carregar imagem:', post.image?.substring(0, 50) + '...')
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                      onLoad={() => {
                        console.log('✅ Imagem carregada com sucesso para post', post.id)
                      }}
                    />
                  </PostImage>
                )}
                <PostFooter>
                  <PostUser>
                    <UserAvatar>
                      {post.user.avatar ? (
                        <img src={post.user.avatar} alt={post.user.username} />
                      ) : (
                        <DefaultAvatar size={32} />
                      )}
                    </UserAvatar>
                    <Username onClick={() => {
                      // Navegar para perfil do usuário que postou
                      console.log('🖱️ Clique no username:', post.user.username)
                      const foundUser = users.find(u => u.nickname === post.user.username)
                      console.log('🔍 Usuário encontrado:', foundUser)
                      
                      if (foundUser) {
                        console.log('✅ Navegando para perfil ID:', foundUser.id)
                        navigate(`/profile/${foundUser.id}`)
                      } else {
                        console.log('❌ Usuário não encontrado para username:', post.user.username)
                        console.log('📋 Usuários disponíveis:', users.map(u => `${u.id}: ${u.nome} (${u.nickname})`))
                      }
                    }}>{(() => {
                      const username = post.user?.username || '@usuário'
                      if (!post.user?.username || username === 'undefined' || username.includes('undefined')) {
                        console.log('⚠️ Post com username problemático:', {
                          postId: post.id,
                          username: username,
                          user_object: post.user,
                          id_user: post.id_user
                        })
                      }
                      return username
                    })()}</Username>
                  </PostUser>
                  {post.description && (
                    <PostDescription>{post.description}</PostDescription>
                  )}
                  <PostHashtags>
                    {post.hashtags.map((tag, index) => (
                      <span 
                        key={index} 
                        onClick={() => setSearchQuery(tag)}
                        style={{cursor: 'pointer'}}
                      >{tag}</span>
                    ))}
                  </PostHashtags>
                  <PostStats>
                    <LikeButton 
                      onClick={() => handleLikePost(post.id)}
                      $isLiked={postLikes[post.id]?.liked || false}
                      disabled={!user || likingPosts[post.id]}
                      title={likingPosts[post.id] ? 'Processando...' : 'Curtir post'}
                    >
                      <FiHeart size={22} />
                      <LikesCount
                        onMouseEnter={() => handleLikesHover(post.id, true)}
                        onClick={(e: React.MouseEvent) => {
                          e.stopPropagation()
                          handleShowLikesUsers(post.id)
                        }}
                      >
                        {postLikes[post.id]?.count !== undefined ? postLikes[post.id].count : (post.likes || 0)}
                      </LikesCount>
                    </LikeButton>
                    
                    <CommentButton onClick={() => handleOpenComments(post)}>
                      <FiMessageCircle size={22} />
                      <CommentsCount>{post.comments || 0}</CommentsCount>
                    </CommentButton>
                  </PostStats>
                </PostFooter>
              </PostCard>
            ))}
          </PostsGrid>
          )}
        </ContentArea>
      
        
        {/* Sidebar Amigos */}
        <FriendsSidebar>
          <FriendsSearch>
            <input type="text" placeholder="Buscar" />
          </FriendsSearch>
          
          <FriendsTitle>Amigos</FriendsTitle>
          
          <FriendsList>
            {randomUsers.map((user) => (
              <FriendItem 
                key={user.id}
                onClick={() => {
                  console.log('🖱️ Clique no usuário da sidebar:', user.nome, `(${user.nickname})`)
                  console.log('✅ Navegando para perfil ID:', user.id)
                  navigate(`/profile/${user.id}`)
                }}
              >
                <FriendAvatar>
                  {user.foto ? (
                    <img src={user.foto} alt={user.nome} />
                  ) : (
                    <DefaultAvatar size={48} />
                  )}
                </FriendAvatar>
                <FriendInfo>
                  <FriendName>{user.nickname}</FriendName>
                  <FriendStatus>{user.descricao}</FriendStatus>
                  <PostsCount>{user.publicacoes} posts</PostsCount>
                </FriendInfo>
              </FriendItem>
            ))}
          </FriendsList>
        </FriendsSidebar>
      </MainContent>
      
      {/* Botão Flutuante de Criar Post */}
      <CreatePostButton
        onClick={handleOpenCreatePost}
        initial={{ 
          opacity: 0, 
          scale: 0.3, 
          rotate: -180 // Apenas girando, sem movimento vertical
        }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          rotate: 0 // Para de girar
        }}
        transition={{ 
          duration: 1.2, 
          delay: 0.5,
          type: "spring",
          stiffness: 120,
          damping: 12,
          // Efeito de "quique" ao chegar
          bounce: 0.6
        }}
        whileHover={{ 
          scale: 1.1, 
          rotate: 15,
          transition: { duration: 0.2 }
        }}
        whileTap={{ 
          scale: 0.95,
          transition: { duration: 0.1 }
        }}
        style={{ opacity: showCreatePostPopup ? 0 : 1, pointerEvents: showCreatePostPopup ? 'none' : 'auto' }}
      >
        <FiPlus />
      </CreatePostButton>
      
      {/* Popup de Criar Post */}
      <CreatePostPopup
        isOpen={showCreatePostPopup}
        onClose={handleCloseCreatePost}
        onPostCreated={() => {
          console.log('📱 Post criado, recarregando posts...')
          loadPosts() // Recarregar posts após criação
        }}
      />
      
      {/* Modal de Comentários */}
      {selectedPostForComments && (
        <CommentsModal
          isOpen={showCommentsModal}
          onClose={handleCloseComments}
          postId={selectedPostForComments.id}
          postAuthor={selectedPostForComments.user.username}
        />
      )}
      
      {/* Modal de Usuários que Curtiram */}
      {showLikesModal && (
        <LikesModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowLikesModal(null)}
        >
          <LikesModalContent
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <LikesModalHeader>
              <h3>Curtidas</h3>
              <button onClick={() => setShowLikesModal(null)}>
                <FiX size={20} />
              </button>
            </LikesModalHeader>
            
            <LikesUsersList>
              {showLikesModal.users.map((likeUser) => (
                <LikesUserItem key={likeUser.id}>
                  <LikesUserAvatar>
                    {likeUser.foto ? (
                      <img src={likeUser.foto} alt={likeUser.nome} />
                    ) : (
                      <DefaultAvatar size={32} />
                    )}
                  </LikesUserAvatar>
                  <UserInfo>
                    <UserName>{likeUser.nome}</UserName>
                    <UserUsername>@{likeUser.username}</UserUsername>
                  </UserInfo>
                </LikesUserItem>
              ))}
            </LikesUsersList>
          </LikesModalContent>
        </LikesModalOverlay>
      )}
    </Container>
  )
}

// Botão Flutuante de Criar Post
// Styled components para estado vazio
const EmptyState = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 40rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 2rem;
  padding: 4rem 2rem;
  margin: 3rem 0;
  
  backdrop-filter: blur(10px);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
`

const EmptyIcon = styled.div`
  font-size: 6rem;
  margin-bottom: 2rem;
  opacity: 0.6;
`

const EmptyTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1rem;
`

const EmptyDescription = styled.p`
  font-size: 1.6rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
  max-width: 40rem;
  margin-bottom: 3rem;
`

const CreateFirstPostButton = styled(motion.button)`
  background: linear-gradient(135deg, #E53935, #FF5722);
  border: none;
  border-radius: 1.5rem;
  padding: 1.5rem 3rem;
  color: white;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(229, 57, 53, 0.3);
  
  &:hover {
    box-shadow: 0 12px 35px rgba(229, 57, 53, 0.4);
  }
`

const CreatePostButton = styled(motion.button)`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 6.5rem;
  height: 6.5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #E30613, #B91C1C);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 998;
  
  box-shadow: 
    0 15px 35px rgba(227, 6, 19, 0.4),
    0 5px 15px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, #E30613, #B91C1C, #E30613);
    border-radius: 50%;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  svg {
    font-size: 2.8rem;
    color: white;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  }
  
  &:hover {
    box-shadow: 
      0 20px 45px rgba(229, 57, 53, 0.5),
      0 8px 20px rgba(0, 0, 0, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0) scale(0.95);
    box-shadow: 
      0 10px 25px rgba(229, 57, 53, 0.3),
      0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  /* Animação de pulsação sutil */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(229, 57, 53, 0.3) 0%, transparent 70%);
    animation: pulse 2s infinite;
    z-index: -1;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(0.95);
      opacity: 0.7;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.3;
    }
    100% {
      transform: scale(0.95);
      opacity: 0.7;
    }
  }
  
  /* Responsivo */
  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
    width: 5.5rem;
    height: 5.5rem;
    
    svg {
      font-size: 2.4rem;
    }
  }
`;

export default Social
