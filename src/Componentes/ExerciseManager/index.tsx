import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FiPlus, FiEdit3, FiTrash2, FiSave, FiX, FiSearch, FiFilter } from 'react-icons/fi';
import { FaDumbbell } from 'react-icons/fa';
import * as exercicioService from '../../Services/exercicioService';
import { ExercicioPayload } from '../../Services/exercicioService';

// Interfaces
interface ExerciseManagerProps {
  isOpen: boolean;
  onClose: () => void;
  onExerciseAdded?: () => void;
}

interface ExerciseFormData {
  nome: string;
  descricao: string;
  grupo_muscular: string;
  tipo: string;
  equipamento: string;
  nivel_dificuldade: string;
  instrucoes: string;
  observacoes: string;
}

const ExerciseManager: React.FC<ExerciseManagerProps> = ({ isOpen, onClose, onExerciseAdded }) => {
  const [exercises, setExercises] = useState<ExercicioPayload[]>([]);
  const [filteredExercises, setFilteredExercises] = useState<ExercicioPayload[]>([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingExercise, setEditingExercise] = useState<ExercicioPayload | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGroup, setFilterGroup] = useState('');
  
  const [formData, setFormData] = useState<ExerciseFormData>({
    nome: '',
    descricao: '',
    grupo_muscular: '',
    tipo: '',
    equipamento: '',
    nivel_dificuldade: '',
    instrucoes: '',
    observacoes: ''
  });

  const muscleGroups = [
    'Peito', 'Costas', 'Ombros', 'Bíceps', 'Tríceps', 
    'Antebraço', 'Quadríceps', 'Isquiotibiais', 'Glúteos', 
    'Panturrilha', 'Abdômen', 'Lombar'
  ];

  const equipmentTypes = [
    'Barra', 'Halteres', 'Máquina', 'Cabo', 'Peso Corporal',
    'Kettlebell', 'Elástico', 'TRX', 'Medicine Ball'
  ];

  const difficultyLevels = ['Iniciante', 'Intermediário', 'Avançado'];
  const exerciseTypes = ['Força', 'Cardio', 'Flexibilidade', 'Funcional'];

  // Carregar exercícios
  const loadExercises = async () => {
    try {
      setLoading(true);
      const response = await exercicioService.listarExercicios();
      const exerciseList = response.exercicios || response.exercicio || [];
      setExercises(exerciseList);
      setFilteredExercises(exerciseList);
    } catch (error) {
      console.error('Erro ao carregar exercícios:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadExercises();
  }, []);

  // Filtrar exercícios
  useEffect(() => {
    let filtered = [...exercises];

    if (searchTerm) {
      filtered = filtered.filter(exercise =>
        exercise.nome?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exercise.descricao?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exercise.grupo_muscular?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterGroup) {
      filtered = filtered.filter(exercise =>
        exercise.grupo_muscular?.toLowerCase() === filterGroup.toLowerCase()
      );
    }

    setFilteredExercises(filtered);
  }, [searchTerm, filterGroup, exercises]);

  // Resetar formulário
  const resetForm = () => {
    setFormData({
      nome: '',
      descricao: '',
      grupo_muscular: '',
      tipo: '',
      equipamento: '',
      nivel_dificuldade: '',
      instrucoes: '',
      observacoes: ''
    });
    setEditingExercise(null);
    setShowForm(false);
  };

  // Abrir formulário para edição
  const handleEdit = (exercise: ExercicioPayload) => {
    setFormData({
      nome: exercise.nome || '',
      descricao: exercise.descricao || '',
      grupo_muscular: exercise.grupo_muscular || '',
      tipo: exercise.tipo || '',
      equipamento: exercise.equipamento || '',
      nivel_dificuldade: exercise.nivel_dificuldade || '',
      instrucoes: exercise.instrucoes || '',
      observacoes: exercise.observacoes || ''
    });
    setEditingExercise(exercise);
    setShowForm(true);
  };

  // Salvar exercício
  const handleSave = async () => {
    try {
      setLoading(true);
      
      if (editingExercise) {
        await exercicioService.atualizarExercicio(editingExercise.id!, formData);
      } else {
        await exercicioService.inserirExercicio(formData);
      }
      
      await loadExercises();
      resetForm();
    } catch (error: any) {
      console.error('Erro ao salvar exercício:', error);
      alert(error?.message || 'Erro ao salvar exercício');
    } finally {
      setLoading(false);
    }
  };

  // Excluir exercício
  const handleDelete = async (exerciseId: string | number) => {
    if (!window.confirm('Deseja excluir este exercício?')) return;

    try {
      setLoading(true);
      await exercicioService.excluirExercicio(exerciseId);
      await loadExercises();
    } catch (error: any) {
      console.error('Erro ao excluir exercício:', error);
      alert(error?.message || 'Erro ao excluir exercício');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Container
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Header>
            <HeaderTitle>
              <FaDumbbell />
              Gerenciar Exercícios
            </HeaderTitle>
            <HeaderActions>
          <SearchInput
            type="text"
            placeholder="Buscar exercícios..."
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
          />
          <FilterSelect
            value={filterGroup}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFilterGroup(e.target.value)}
          >
            <option value="">Todos os grupos</option>
            {muscleGroups.map(group => (
              <option key={group} value={group}>{group}</option>
            ))}
          </FilterSelect>
          <AddButton onClick={() => setShowForm(true)}>
            <FiPlus />
            Novo Exercício
          </AddButton>
        </HeaderActions>
      </Header>

      <ExerciseGrid>
        <AnimatePresence>
          {filteredExercises.map((exercise) => (
            <ExerciseCard
              key={exercise.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.02 }}
            >
              <CardHeader>
                <ExerciseName>{exercise.nome}</ExerciseName>
                <CardActions>
                  <ActionButton onClick={() => handleEdit(exercise)}>
                    <FiEdit3 />
                  </ActionButton>
                  <ActionButton 
                    $danger 
                    onClick={() => handleDelete(exercise.id!)}
                  >
                    <FiTrash2 />
                  </ActionButton>
                </CardActions>
              </CardHeader>
              
              <ExerciseInfo>
                <InfoRow>
                  <InfoLabel>Grupo:</InfoLabel>
                  <InfoValue>{exercise.grupo_muscular}</InfoValue>
                </InfoRow>
                <InfoRow>
                  <InfoLabel>Equipamento:</InfoLabel>
                  <InfoValue>{exercise.equipamento}</InfoValue>
                </InfoRow>
                <InfoRow>
                  <InfoLabel>Nível:</InfoLabel>
                  <InfoValue>{exercise.nivel_dificuldade}</InfoValue>
                </InfoRow>
                {exercise.descricao && (
                  <Description>{exercise.descricao}</Description>
                )}
              </ExerciseInfo>
            </ExerciseCard>
          ))}
        </AnimatePresence>
      </ExerciseGrid>

      {/* Formulário Modal */}
      <AnimatePresence>
        {showForm && (
          <FormModal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.target === e.currentTarget && resetForm()}
          >
            <FormContainer
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <FormHeader>
                <FormTitle>
                  {editingExercise ? 'Editar Exercício' : 'Novo Exercício'}
                </FormTitle>
                <CloseButton onClick={resetForm}>
                  <FiX />
                </CloseButton>
              </FormHeader>

              <FormContent>
                <FormRow>
                  <FormGroup>
                    <FormLabel>Nome do Exercício</FormLabel>
                    <FormInput
                      type="text"
                      value={formData.nome}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, nome: e.target.value })}
                      placeholder="Ex: Supino Reto"
                    />
                  </FormGroup>
                </FormRow>

                <FormRow>
                  <FormGroup>
                    <FormLabel>Grupo Muscular</FormLabel>
                    <FormSelect
                      value={formData.grupo_muscular}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData({ ...formData, grupo_muscular: e.target.value })}
                    >
                      <option value="">Selecione o grupo</option>
                      {muscleGroups.map(group => (
                        <option key={group} value={group}>{group}</option>
                      ))}
                    </FormSelect>
                  </FormGroup>

                  <FormGroup>
                    <FormLabel>Equipamento</FormLabel>
                    <FormSelect
                      value={formData.equipamento}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData({ ...formData, equipamento: e.target.value })}
                    >
                      <option value="">Selecione o equipamento</option>
                      {equipmentTypes.map(equipment => (
                        <option key={equipment} value={equipment}>{equipment}</option>
                      ))}
                    </FormSelect>
                  </FormGroup>
                </FormRow>

                <FormRow>
                  <FormGroup>
                    <FormLabel>Tipo</FormLabel>
                    <FormSelect
                      value={formData.tipo}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData({ ...formData, tipo: e.target.value })}
                    >
                      <option value="">Selecione o tipo</option>
                      {exerciseTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </FormSelect>
                  </FormGroup>

                  <FormGroup>
                    <FormLabel>Nível de Dificuldade</FormLabel>
                    <FormSelect
                      value={formData.nivel_dificuldade}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData({ ...formData, nivel_dificuldade: e.target.value })}
                    >
                      <option value="">Selecione o nível</option>
                      {difficultyLevels.map(level => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </FormSelect>
                  </FormGroup>
                </FormRow>

                <FormRow>
                  <FormGroup>
                    <FormLabel>Descrição</FormLabel>
                    <FormTextarea
                      value={formData.descricao}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, descricao: e.target.value })}
                      placeholder="Breve descrição do exercício..."
                    />
                  </FormGroup>
                </FormRow>

                <FormRow>
                  <FormGroup>
                    <FormLabel>Instruções</FormLabel>
                    <FormTextarea
                      value={formData.instrucoes}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, instrucoes: e.target.value })}
                      placeholder="Como executar o exercício..."
                    />
                  </FormGroup>
                </FormRow>

                <FormRow>
                  <FormGroup>
                    <FormLabel>Observações</FormLabel>
                    <FormTextarea
                      value={formData.observacoes}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, observacoes: e.target.value })}
                      placeholder="Dicas extras, cuidados especiais..."
                    />
                  </FormGroup>
                </FormRow>
              </FormContent>

              <FormFooter>
                <SecondaryButton onClick={resetForm}>
                  Cancelar
                </SecondaryButton>
                <PrimaryButton onClick={handleSave} disabled={loading}>
                  <FiSave />
                  {loading ? 'Salvando...' : 'Salvar'}
                </PrimaryButton>
              </FormFooter>
            </FormContainer>
          </FormModal>
        )}
      </AnimatePresence>

      {loading && (
        <LoadingOverlay>
          <LoadingSpinner />
        </LoadingOverlay>
      )}
    </Container>
      )}
    </AnimatePresence>
  );
};

// Styled Components
const Container = styled(motion.div)`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const HeaderTitle = styled.h1`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--white);
  font-size: 2.4rem;
  font-weight: 700;
  
  svg {
    color: var(--primary);
  }
`;

const HeaderActions = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
`;

const SearchInput = styled.input`
  padding: 0.8rem 1.2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.8rem;
  color: var(--white);
  font-size: 1.4rem;
  min-width: 200px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(227, 6, 19, 0.2);
  }
`;

const FilterSelect = styled.select`
  padding: 0.8rem 1.2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.8rem;
  color: var(--white);
  font-size: 1.4rem;
  min-width: 150px;

  &:focus {
    outline: none;
    border-color: var(--primary);
  }

  option {
    background: var(--background);
    color: var(--white);
  }
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.6rem;
  background: var(--primary);
  border: none;
  border-radius: 0.8rem;
  color: var(--white);
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #B91C1C;
    transform: translateY(-2px);
  }
`;

const ExerciseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ExerciseCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.2rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;

const ExerciseName = styled.h3`
  color: var(--white);
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0;
  flex: 1;
`;

const CardActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionButton = styled.button<{ $danger?: boolean }>`
  padding: 0.8rem;
  background: ${props => props.$danger ? 'rgba(239, 68, 68, 0.1)' : 'rgba(255, 255, 255, 0.1)'};
  border: 1px solid ${props => props.$danger ? 'rgba(239, 68, 68, 0.3)' : 'rgba(255, 255, 255, 0.2)'};
  border-radius: 0.6rem;
  color: ${props => props.$danger ? '#ef4444' : 'var(--white)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.$danger ? 'rgba(239, 68, 68, 0.2)' : 'rgba(255, 255, 255, 0.2)'};
    transform: translateY(-1px);
  }
`;

const ExerciseInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InfoLabel = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.3rem;
`;

const InfoValue = styled.span`
  color: var(--white);
  font-size: 1.3rem;
  font-weight: 500;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.4rem;
  line-height: 1.5;
  margin: 1rem 0 0 0;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const FormModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const FormContainer = styled(motion.div)`
  background: var(--background);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.6rem;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const FormTitle = styled.h2`
  color: var(--white);
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
`;

const CloseButton = styled.button`
  padding: 0.8rem;
  background: transparent;
  border: none;
  color: var(--white);
  font-size: 1.8rem;
  cursor: pointer;
  border-radius: 0.6rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const FormContent = styled.div`
  padding: 2rem;
`;

const FormRow = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormGroup = styled.div`
  flex: 1;
`;

const FormLabel = styled.label`
  display: block;
  color: var(--white);
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1.2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.8rem;
  color: var(--white);
  font-size: 1.4rem;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(227, 6, 19, 0.2);
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 1.2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.8rem;
  color: var(--white);
  font-size: 1.4rem;

  &:focus {
    outline: none;
    border-color: var(--primary);
  }

  option {
    background: var(--background);
    color: var(--white);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1.2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.8rem;
  color: var(--white);
  font-size: 1.4rem;
  min-height: 100px;
  resize: vertical;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(227, 6, 19, 0.2);
  }
`;

const FormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const SecondaryButton = styled.button`
  padding: 1rem 2rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.8rem;
  color: var(--white);
  font-size: 1.4rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: var(--primary);
  border: none;
  border-radius: 0.8rem;
  color: var(--white);
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: #B91C1C;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid rgba(227, 6, 19, 0.3);
  border-top: 4px solid var(--primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export default ExerciseManager;
