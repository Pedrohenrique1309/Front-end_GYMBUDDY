import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiCalendar, FiClock, FiTrendingUp, FiTarget, FiActivity } from 'react-icons/fi';
import { FaDumbbell } from 'react-icons/fa';
import { useUser } from '../../Contexts/UserContext';
import { useNavigate } from 'react-router-dom';

interface Treino {
  id: number;
  nome: string;
  descricao: string;
  duracao: number; // em minutos
  exercicios: number;
  nivelDificuldade: 'Iniciante' | 'Intermediário' | 'Avançado';
  categoria: string;
  concluido?: boolean;
}

const Treinos: React.FC = () => {
  const { user, isLoggedIn, isLoading } = useUser();
  const navigate = useNavigate();
  const [treinos, setTreinos] = useState<Treino[]>([]);
  const [filtroCategoria, setFiltroCategoria] = useState<string>('Todos');

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      navigate('/');
      return;
    }
  }, [isLoading, isLoggedIn, navigate]);

  // Mock de dados - substituir com chamada de API futuramente
  useEffect(() => {
    const treinosMock: Treino[] = [
      {
        id: 1,
        nome: 'Treino Full Body',
        descricao: 'Treino completo para corpo inteiro com exercícios compostos',
        duracao: 60,
        exercicios: 8,
        nivelDificuldade: 'Intermediário',
        categoria: 'Hipertrofia',
        concluido: false
      },
      {
        id: 2,
        nome: 'Cardio HIIT',
        descricao: 'Treino intervalado de alta intensidade para queima de gordura',
        duracao: 30,
        exercicios: 6,
        nivelDificuldade: 'Avançado',
        categoria: 'Cardio',
        concluido: true
      },
      {
        id: 3,
        nome: 'Treino de Pernas',
        descricao: 'Foco total em membros inferiores e glúteos',
        duracao: 45,
        exercicios: 10,
        nivelDificuldade: 'Intermediário',
        categoria: 'Hipertrofia',
        concluido: false
      },
      {
        id: 4,
        nome: 'Upper Body Push',
        descricao: 'Treino de empurrar para peito, ombros e tríceps',
        duracao: 50,
        exercicios: 7,
        nivelDificuldade: 'Intermediário',
        categoria: 'Força',
        concluido: false
      },
      {
        id: 5,
        nome: 'Core & Abs',
        descricao: 'Treino focado em fortalecimento do core e abdômen',
        duracao: 25,
        exercicios: 8,
        nivelDificuldade: 'Iniciante',
        categoria: 'Funcional',
        concluido: true
      }
    ];
    setTreinos(treinosMock);
  }, []);

  const categorias = ['Todos', 'Hipertrofia', 'Cardio', 'Força', 'Funcional'];

  const treinosFiltrados = filtroCategoria === 'Todos' 
    ? treinos 
    : treinos.filter(t => t.categoria === filtroCategoria);

  const getNivelColor = (nivel: string) => {
    switch (nivel) {
      case 'Iniciante': return '#10B981';
      case 'Intermediário': return '#F59E0B';
      case 'Avançado': return '#EF4444';
      default: return '#6B7280';
    }
  };

  if (isLoading) {
    return (
      <LoadingContainer>
        <LoadingSpinner />
        <LoadingText>Carregando treinos...</LoadingText>
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <Header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <HeaderContent>
          <TitleSection>
            <IconWrapper>
              <FaDumbbell size={32} />
            </IconWrapper>
            <div>
              <Title>Meus Treinos</Title>
              <Subtitle>Organize e acompanhe seus treinos personalizados</Subtitle>
            </div>
          </TitleSection>
          
          <CreateButton
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiPlus size={20} />
            <span>Criar Treino</span>
          </CreateButton>
        </HeaderContent>
      </Header>

      <StatsSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <StatCard>
          <StatIcon>
            <FiTarget />
          </StatIcon>
          <StatValue>{treinos.length}</StatValue>
          <StatLabel>Treinos Criados</StatLabel>
        </StatCard>
        
        <StatCard>
          <StatIcon style={{ background: 'linear-gradient(135deg, #10B981, #059669)' }}>
            <FiTrendingUp />
          </StatIcon>
          <StatValue>{treinos.filter(t => t.concluido).length}</StatValue>
          <StatLabel>Concluídos</StatLabel>
        </StatCard>
        
        <StatCard>
          <StatIcon style={{ background: 'linear-gradient(135deg, #F59E0B, #D97706)' }}>
            <FiClock />
          </StatIcon>
          <StatValue>{treinos.reduce((acc, t) => acc + t.duracao, 0)}</StatValue>
          <StatLabel>Minutos Totais</StatLabel>
        </StatCard>
      </StatsSection>

      <FilterSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {categorias.map((categoria) => (
          <FilterButton
            key={categoria}
            active={filtroCategoria === categoria}
            onClick={() => setFiltroCategoria(categoria)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {categoria}
          </FilterButton>
        ))}
      </FilterSection>

      <TreinosGrid
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <AnimatePresence mode="popLayout">
          {treinosFiltrados.map((treino, index) => (
            <TreinoCard
              key={treino.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {treino.concluido && (
                <ConcluidoBadge
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  ✓
                </ConcluidoBadge>
              )}
              
              <TreinoHeader>
                <TreinoIcon>
                  <FiActivity size={24} />
                </TreinoIcon>
                <NivelBadge cor={getNivelColor(treino.nivelDificuldade)}>
                  {treino.nivelDificuldade}
                </NivelBadge>
              </TreinoHeader>

              <TreinoNome>{treino.nome}</TreinoNome>
              <TreinoDescricao>{treino.descricao}</TreinoDescricao>

              <TreinoInfo>
                <InfoItem>
                  <FiClock size={16} />
                  <span>{treino.duracao} min</span>
                </InfoItem>
                <InfoItem>
                  <FaDumbbell size={16} />
                  <span>{treino.exercicios} exercícios</span>
                </InfoItem>
              </TreinoInfo>

              <TreinoCategoria>{treino.categoria}</TreinoCategoria>

              <IniciarButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {treino.concluido ? 'Refazer Treino' : 'Iniciar Treino'}
              </IniciarButton>
            </TreinoCard>
          ))}
        </AnimatePresence>
      </TreinosGrid>

      {treinosFiltrados.length === 0 && (
        <EmptyState
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <EmptyIcon>
            <FaDumbbell size={64} />
          </EmptyIcon>
          <EmptyTitle>Nenhum treino encontrado</EmptyTitle>
          <EmptyText>
            {filtroCategoria === 'Todos' 
              ? 'Crie seu primeiro treino personalizado!' 
              : `Não há treinos na categoria "${filtroCategoria}"`
            }
          </EmptyText>
        </EmptyState>
      )}
    </Container>
  );
};

export default Treinos;

// Styled Components

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  padding: 2rem;
  padding-top: 10rem;

  @media (max-width: 768px) {
    padding: 1rem;
    padding-top: 8rem;
  }
`;

const Header = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto 3rem;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

const TitleSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: linear-gradient(135deg, #E30613, #B91C1C);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 8px 24px rgba(227, 6, 19, 0.3);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ffffff, #E30613);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  margin: 0.5rem 0 0 0;
`;

const CreateButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #E30613, #B91C1C);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(227, 6, 19, 0.3);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 12px 32px rgba(227, 6, 19, 0.4);
  }
`;

const StatsSection = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(227, 6, 19, 0.3);
    transform: translateY(-4px);
  }
`;

const StatIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: linear-gradient(135deg, #E30613, #B91C1C);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`;

const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
`;

const StatLabel = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
  text-align: center;
`;

const FilterSection = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const FilterButton = styled(motion.button)<{ active: boolean }>`
  padding: 0.75rem 1.5rem;
  background: ${props => props.active 
    ? 'linear-gradient(135deg, #E30613, #B91C1C)' 
    : 'rgba(255, 255, 255, 0.05)'
  };
  border: 1px solid ${props => props.active 
    ? 'rgba(227, 6, 19, 0.5)' 
    : 'rgba(255, 255, 255, 0.1)'
  };
  color: white;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.active 
      ? 'linear-gradient(135deg, #E30613, #B91C1C)' 
      : 'rgba(255, 255, 255, 0.1)'
    };
    border-color: rgba(227, 6, 19, 0.5);
  }
`;

const TreinosGrid = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TreinoCard = styled(motion.div)`
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(227, 6, 19, 0.3);
    box-shadow: 0 12px 40px rgba(227, 6, 19, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #E30613, #B91C1C, #E30613);
    background-size: 200% 100%;
    animation: shimmer 3s infinite;
  }

  @keyframes shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
`;

const ConcluidoBadge = styled(motion.div)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #10B981, #059669);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
`;

const TreinoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TreinoIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(227, 6, 19, 0.2), rgba(185, 28, 28, 0.2));
  border: 1px solid rgba(227, 6, 19, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #E30613;
`;

const NivelBadge = styled.span<{ cor: string }>`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: ${props => props.cor}20;
  color: ${props => props.cor};
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid ${props => props.cor}40;
`;

const TreinoNome = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin: 0;
`;

const TreinoDescricao = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
`;

const TreinoInfo = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 1rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;

  svg {
    color: #E30613;
  }
`;

const TreinoCategoria = styled.div`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(227, 6, 19, 0.1);
  border: 1px solid rgba(227, 6, 19, 0.3);
  border-radius: 8px;
  color: #E30613;
  font-size: 0.85rem;
  font-weight: 600;
  align-self: flex-start;
`;

const IniciarButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #E30613, #B91C1C);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: auto;
  box-shadow: 0 4px 12px rgba(227, 6, 19, 0.3);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 6px 20px rgba(227, 6, 19, 0.4);
  }
`;

const EmptyState = styled(motion.div)`
  text-align: center;
  padding: 4rem 2rem;
  max-width: 500px;
  margin: 0 auto;
`;

const EmptyIcon = styled.div`
  color: rgba(255, 255, 255, 0.2);
  margin-bottom: 2rem;
`;

const EmptyTitle = styled.h3`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1rem;
`;

const EmptyText = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.1rem;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
`;

const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid rgba(227, 6, 19, 0.2);
  border-top-color: #E30613;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const LoadingText = styled.p`
  color: white;
  font-size: 1.2rem;
  margin-top: 1rem;
`;
