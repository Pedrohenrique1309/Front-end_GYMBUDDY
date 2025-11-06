import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiClock, FiSearch, FiX, FiChevronDown, FiSave, FiTrash2, FiArrowLeft } from 'react-icons/fi';
import { FaDumbbell } from 'react-icons/fa';
import { useUser } from '../../Contexts/UserContext';
import { useNavigate } from 'react-router-dom';

// Interfaces
interface Exercise {
  id: string;
  name: string;
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  target: string;
  muscles: string[]; // Músculos treinados - preparado para API futura
}

interface WorkoutSet {
  id: string;
  reps: number;
  weight: number;
}

interface ExerciseInWorkout {
  id: string;
  exercise: Exercise;
  sets: WorkoutSet[];
  restTime: number;
}

interface Workout {
  id?: string;
  title: string;
  notes: string;
  exercises: ExerciseInWorkout[];
}

const Treinos: React.FC = () => {
  const { user, isLoggedIn, isLoading } = useUser();
  const navigate = useNavigate();

  const [currentWorkout, setCurrentWorkout] = useState<Workout>({
    title: '',
    notes: '',
    exercises: []
  });

  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [filteredExercises, setFilteredExercises] = useState<Exercise[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBodyPart, setSelectedBodyPart] = useState('');
  const [selectedEquipment, setSelectedEquipment] = useState('');
  const [loadingExercises, setLoadingExercises] = useState(false);
  const [selectedExerciseForWorkout, setSelectedExerciseForWorkout] = useState<ExerciseInWorkout | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const bodyParts = ['costas', 'cardio', 'peito', 'antebraços', 'panturrilha', 'pescoço', 'ombros', 'bíceps/tríceps', 'pernas', 'abdômen'];
  const equipmentOptions = ['barra', 'halteres', 'cabo', 'peso corporal', 'kettlebell', 'máquina', 'elástico'];

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      navigate('/');
      return;
    }
  }, [isLoading, isLoggedIn, navigate]);

  useEffect(() => {
    const fetchExercises = async () => {
      setLoadingExercises(true);
      const mockExercises: Exercise[] = [
        { id: '1', name: 'Supino Reto (Barra)', bodyPart: 'peito', equipment: 'barra', gifUrl: 'https://v2.exercisedb.io/image/lEVlWOUhFXBwKb', target: 'peitorais', muscles: ['Peitoral Maior', 'Tríceps', 'Deltoide Anterior'] },
        { id: '2', name: 'Supino Reto (Halteres)', bodyPart: 'peito', equipment: 'halteres', gifUrl: 'https://v2.exercisedb.io/image/7pKN4ktbR6SMvN', target: 'peitorais', muscles: ['Peitoral Maior', 'Tríceps', 'Deltoide Anterior', 'Core'] },
        { id: '3', name: 'Remada Curvada (Barra)', bodyPart: 'costas', equipment: 'barra', gifUrl: 'https://v2.exercisedb.io/image/nE8c2B0bZN4oJ5', target: 'costas superior', muscles: ['Grande Dorsal', 'Trapézio', 'Romboides', 'Bíceps'] },
        { id: '4', name: 'Rosca Direta (Halteres)', bodyPart: 'bíceps/tríceps', equipment: 'halteres', gifUrl: 'https://v2.exercisedb.io/image/1TZs38TwMmC3Yr', target: 'bíceps', muscles: ['Bíceps Braquial', 'Braquial', 'Braquiorradial'] },
        { id: '5', name: 'Crucifixo no Cross (Cabo)', bodyPart: 'peito', equipment: 'cabo', gifUrl: 'https://v2.exercisedb.io/image/H8P2aqkuRsFSH5', target: 'peitorais', muscles: ['Peitoral Maior', 'Deltoide Anterior'] },
        { id: '6', name: 'Levantamento Terra (Barra)', bodyPart: 'costas', equipment: 'barra', gifUrl: 'https://v2.exercisedb.io/image/hM3zPYvtBPnOVl', target: 'lombar', muscles: ['Eretores da Espinha', 'Glúteos', 'Isquiotibiais', 'Grande Dorsal', 'Trapézio'] },
        { id: '7', name: 'Puxada Facial (Cabo)', bodyPart: 'ombros', equipment: 'cabo', gifUrl: 'https://v2.exercisedb.io/image/XpJqV2nJaD8xDe', target: 'deltoides', muscles: ['Deltoide Posterior', 'Trapézio Médio', 'Romboides'] },
        { id: '8', name: 'Rosca Martelo (Halteres)', bodyPart: 'bíceps/tríceps', equipment: 'halteres', gifUrl: 'https://v2.exercisedb.io/image/yO0vUMWYrfBaNO', target: 'bíceps', muscles: ['Braquiorradial', 'Bíceps Braquial', 'Braquial'] },
        { id: '9', name: 'Supino Inclinado (Barra)', bodyPart: 'peito', equipment: 'barra', gifUrl: 'https://v2.exercisedb.io/image/oqR7GnH3SbBvuz', target: 'peitorais', muscles: ['Peitoral Superior', 'Deltoide Anterior', 'Tríceps'] },
        { id: '10', name: 'Cadeira Extensora (Máquina)', bodyPart: 'pernas', equipment: 'máquina', gifUrl: 'https://v2.exercisedb.io/image/KPwXm05u1Wskl6', target: 'quadríceps', muscles: ['Quadríceps', 'Reto Femoral', 'Vasto Lateral', 'Vasto Medial'] },
        { id: '11', name: 'Leg Press (Máquina)', bodyPart: 'pernas', equipment: 'máquina', gifUrl: 'https://v2.exercisedb.io/image/vvgThKSl5T1Jfn', target: 'glúteos', muscles: ['Quadríceps', 'Glúteos', 'Isquiotibiais', 'Panturrilha'] },
        { id: '12', name: 'Elevação Lateral (Halteres)', bodyPart: 'ombros', equipment: 'halteres', gifUrl: 'https://v2.exercisedb.io/image/1hHK1jW3xtQF0y', target: 'deltoides', muscles: ['Deltoide Lateral', 'Trapézio Superior'] },
        { id: '13', name: 'Agachamento Livre (Barra)', bodyPart: 'pernas', equipment: 'barra', gifUrl: 'https://v2.exercisedb.io/image/f1pU7B1pVLbdcO', target: 'glúteos', muscles: ['Quadríceps', 'Glúteos', 'Isquiotibiais', 'Core', 'Eretores'] },
        { id: '14', name: 'Barra Fixa', bodyPart: 'costas', equipment: 'peso corporal', gifUrl: 'https://v2.exercisedb.io/image/OLvQpghP8fB4Nn', target: 'dorsais', muscles: ['Grande Dorsal', 'Bíceps', 'Trapézio', 'Romboides', 'Core'] },
        { id: '15', name: 'Desenvolvimento com Halteres', bodyPart: 'ombros', equipment: 'halteres', gifUrl: 'https://v2.exercisedb.io/image/xDrDhXkxR0twxl', target: 'deltoides', muscles: ['Deltoide Anterior', 'Deltoide Lateral', 'Tríceps', 'Trapézio'] },
      ];
      setExercises(mockExercises);
      setFilteredExercises(mockExercises);
      setLoadingExercises(false);
    };

    if (isLoggedIn) {
      fetchExercises();
    }
  }, [isLoggedIn]);

  useEffect(() => {
    let filtered = [...exercises];

    if (searchTerm) {
      filtered = filtered.filter(ex =>
        ex.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ex.target.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedBodyPart) {
      filtered = filtered.filter(ex => ex.bodyPart === selectedBodyPart);
    }

    if (selectedEquipment) {
      filtered = filtered.filter(ex => ex.equipment === selectedEquipment);
    }

    setFilteredExercises(filtered);
  }, [searchTerm, selectedBodyPart, selectedEquipment, exercises]);

  const handleAddExerciseToWorkout = (exercise: Exercise) => {
    const newExercise: ExerciseInWorkout = {
      id: Date.now().toString(),
      exercise,
      sets: [{ id: Date.now().toString(), reps: 10, weight: 0 }],
      restTime: 60
    };
    setCurrentWorkout(prev => ({ ...prev, exercises: [...prev.exercises, newExercise] }));
    setSelectedExerciseForWorkout(newExercise);
  };

  const handleAddSet = (exerciseId: string) => {
    setCurrentWorkout(prev => ({
      ...prev,
      exercises: prev.exercises.map(ex =>
        ex.id === exerciseId ? { ...ex, sets: [...ex.sets, { id: Date.now().toString(), reps: 10, weight: 0 }] } : ex
      )
    }));
  };

  const handleUpdateSet = (exerciseId: string, setId: string, field: 'reps' | 'weight', value: number) => {
    setCurrentWorkout(prev => ({
      ...prev,
      exercises: prev.exercises.map(ex =>
        ex.id === exerciseId
          ? { ...ex, sets: ex.sets.map(set => set.id === setId ? { ...set, [field]: value } : set) }
          : ex
      )
    }));
  };

  const handleRemoveSet = (exerciseId: string, setId: string) => {
    setCurrentWorkout(prev => ({
      ...prev,
      exercises: prev.exercises.map(ex =>
        ex.id === exerciseId ? { ...ex, sets: ex.sets.filter(set => set.id !== setId) } : ex
      )
    }));
  };

  const handleRemoveExercise = (exerciseId: string) => {
    setCurrentWorkout(prev => ({ ...prev, exercises: prev.exercises.filter(ex => ex.id !== exerciseId) }));
    if (selectedExerciseForWorkout?.id === exerciseId) {
      setSelectedExerciseForWorkout(null);
    }
  };

  const handleUpdateRestTime = (exerciseId: string, restTime: number) => {
    setCurrentWorkout(prev => ({
      ...prev,
      exercises: prev.exercises.map(ex => ex.id === exerciseId ? { ...ex, restTime } : ex)
    }));
  };

  const handleSaveWorkout = async () => {
    if (!currentWorkout.title.trim()) {
      alert('Por favor, adicione um título ao treino');
      return;
    }
    if (currentWorkout.exercises.length === 0) {
      alert('Adicione pelo menos um exercício ao treino');
      return;
    }
    console.log('💾 Salvando treino:', currentWorkout);
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
      setCurrentWorkout({ title: '', notes: '', exercises: [] });
      setSelectedExerciseForWorkout(null);
    }, 2000);
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
      <PageWrapper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Coluna Esquerda - Criar Treino */}
        <LeftColumn>
          <SectionHeader>
            <HeaderIcon onClick={() => navigate(-1)}>
              <FiArrowLeft />
            </HeaderIcon>
            <HeaderTitle>Criar Treino</HeaderTitle>
          </SectionHeader>

          <InputGroup>
            <InputLabel>Título do Treino</InputLabel>
            <StyledInput
              type="text"
              placeholder="Ex: Treino de Peito e Tríceps"
              value={currentWorkout.title}
              onChange={(e) => setCurrentWorkout(prev => ({ ...prev, title: e.target.value }))}
            />
          </InputGroup>

          <ExercisesList>
            <AnimatePresence mode="popLayout">
              {currentWorkout.exercises.map((exerciseItem, index) => (
                <ExerciseCard
                  key={exerciseItem.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  isSelected={selectedExerciseForWorkout?.id === exerciseItem.id}
                  onClick={() => setSelectedExerciseForWorkout(exerciseItem)}
                >
                  <ExerciseCardHeader>
                    <ExerciseGif src={exerciseItem.exercise.gifUrl} alt={exerciseItem.exercise.name} />
                    <ExerciseInfo>
                      <ExerciseName>{exerciseItem.exercise.name}</ExerciseName>
                      <MusclesContainer>
                        {exerciseItem.exercise.muscles.map((muscle, idx) => (
                          <MuscleTag key={idx}>{muscle}</MuscleTag>
                        ))}
                      </MusclesContainer>
                    </ExerciseInfo>
                    <RemoveButton
                      onClick={(e) => { e.stopPropagation(); handleRemoveExercise(exerciseItem.id); }}
                    >
                      <FiX />
                    </RemoveButton>
                  </ExerciseCardHeader>

                  {selectedExerciseForWorkout?.id === exerciseItem.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ExerciseDetails>
                        <InputGroup>
                          <InputLabel>Observações</InputLabel>
                          <StyledTextArea placeholder="Adicione observações sobre este exercício..." rows={2} />
                        </InputGroup>

                        <RestTimeGroup>
                          <InputLabel>Tempo de Descanso</InputLabel>
                          <RestTimeInput>
                            <FiClock />
                            <input
                              type="number"
                              value={exerciseItem.restTime}
                              onChange={(e) => handleUpdateRestTime(exerciseItem.id, parseInt(e.target.value) || 0)}
                              min="0"
                            />
                            <span>segundos</span>
                          </RestTimeInput>
                        </RestTimeGroup>

                        <SetsTable>
                          <thead>
                            <tr>
                              <th>SET</th>
                              <th>KG</th>
                              <th>REPS</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {exerciseItem.sets.map((set, setIndex) => (
                              <motion.tr
                                key={set.id}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: setIndex * 0.05 }}
                              >
                                <td>{setIndex + 1}</td>
                                <td>
                                  <SetInput
                                    type="number"
                                    value={set.weight}
                                    onChange={(e) => handleUpdateSet(exerciseItem.id, set.id, 'weight', parseFloat(e.target.value) || 0)}
                                    min="0"
                                    step="0.5"
                                  />
                                </td>
                                <td>
                                  <SetInput
                                    type="number"
                                    value={set.reps}
                                    onChange={(e) => handleUpdateSet(exerciseItem.id, set.id, 'reps', parseInt(e.target.value) || 0)}
                                    min="0"
                                  />
                                </td>
                                <td>
                                  {exerciseItem.sets.length > 1 && (
                                    <DeleteSetButton
                                      onClick={() => handleRemoveSet(exerciseItem.id, set.id)}
                                      whileHover={{ scale: 1.1 }}
                                      whileTap={{ scale: 0.9 }}
                                    >
                                      <FiTrash2 />
                                    </DeleteSetButton>
                                  )}
                                </td>
                              </motion.tr>
                            ))}
                          </tbody>
                        </SetsTable>

                        <AddSetButton
                          onClick={() => handleAddSet(exerciseItem.id)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <FiPlus />
                          <span>Adicionar Série</span>
                        </AddSetButton>
                      </ExerciseDetails>
                    </motion.div>
                  )}
                </ExerciseCard>
              ))}
            </AnimatePresence>
          </ExercisesList>

          <SaveButton onClick={handleSaveWorkout} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <FiSave />
            <span>Salvar Treino</span>
          </SaveButton>

          <InputGroup>
            <InputLabel>Notas do Treino</InputLabel>
            <StyledTextArea
              placeholder="Adicione observações gerais sobre este treino..."
              rows={4}
              value={currentWorkout.notes}
              onChange={(e) => setCurrentWorkout(prev => ({ ...prev, notes: e.target.value }))}
            />
          </InputGroup>
        </LeftColumn>

        {/* Coluna Direita - Biblioteca de Exercícios */}
        <RightColumn>
          <LibraryHeader>
            <LibraryTitle>Biblioteca de Exercícios</LibraryTitle>
          </LibraryHeader>

          <FiltersSection>
            <FilterDropdown>
              <select value={selectedEquipment} onChange={(e) => setSelectedEquipment(e.target.value)}>
                {equipmentOptions.map(eq => <option key={eq} value={eq}>{eq}</option>)}
              </select>
              <FiChevronDown />
            </FilterDropdown>

            <FilterDropdown>
              <select value={selectedBodyPart} onChange={(e) => setSelectedBodyPart(e.target.value)}>
                {bodyParts.map(bp => <option key={bp} value={bp}>{bp}</option>)}
              </select>
              <FiChevronDown />
            </FilterDropdown>
          </FiltersSection>

          <SearchBox>
            <FiSearch />
            <input
              type="text"
              placeholder="Buscar exercícios..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <ClearButton onClick={() => setSearchTerm('')}>
                <FiX />
              </ClearButton>
            )}
          </SearchBox>

          <ExercisesLibrary>
            <LibrarySubtitle>Exercícios Populares</LibrarySubtitle>
            {loadingExercises ? (
              <LoadingState>
                <LoadingSpinner />
                <span>Carregando exercícios...</span>
              </LoadingState>
            ) : (
              <ExercisesGrid>
                <AnimatePresence mode="popLayout">
                  {filteredExercises.map((exercise, index) => (
                    <ExerciseLibraryItem
                      key={exercise.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                      onClick={() => handleAddExerciseToWorkout(exercise)}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExerciseLibraryGif src={exercise.gifUrl} alt={exercise.name} />
                      <ExerciseLibraryInfo>
                        <ExerciseLibraryName>{exercise.name}</ExerciseLibraryName>
                        <ExerciseLibraryTarget>{exercise.target}</ExerciseLibraryTarget>
                      </ExerciseLibraryInfo>
                      <AddIcon>
                        <FiPlus />
                      </AddIcon>
                    </ExerciseLibraryItem>
                  ))}
                </AnimatePresence>

                {filteredExercises.length === 0 && (
                  <EmptyState>
                    <FaDumbbell size={48} />
                    <p>Nenhum exercício encontrado</p>
                  </EmptyState>
                )}
              </ExercisesGrid>
            )}
          </ExercisesLibrary>
        </RightColumn>
      </PageWrapper>

      <AnimatePresence>
        {showSuccessMessage && (
          <SuccessMessage
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <FiSave />
            <span>Treino salvo com sucesso!</span>
          </SuccessMessage>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Treinos;

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  padding: 1rem 2rem 2rem 2rem;
  padding-top: 9rem;

  @media (max-width: 1024px) {
    padding: 1rem;
    padding-top: 9rem;
  }
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

const PageWrapper = styled(motion.div)`
  max-width: 95%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 600px;
  gap: 4rem;

  @media (max-width: 1400px) {
    grid-template-columns: 1fr 500px;
    gap: 3rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    max-width: 100%;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const RightColumn = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  height: fit-content;
  max-height: calc(100vh - 12rem);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 11rem;

  @media (max-width: 1024px) {
    position: relative;
    top: 0;
    max-height: none;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const HeaderIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(227, 6, 19, 0.1);
    border-color: rgba(227, 6, 19, 0.3);
    color: #E30613;
    transform: scale(1.05);
  }
`;

const HeaderTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  flex: 1;
`;

const SaveButton = styled(motion.button)`
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

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const InputLabel = styled.label`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.5rem;
  font-weight: 600;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(227, 6, 19, 0.5);
    background: rgba(255, 255, 255, 0.08);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 1.4rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: white;
  font-size: 1.5rem;
  font-family: inherit;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(227, 6, 19, 0.5);
    background: rgba(255, 255, 255, 0.08);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

const ExercisesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ExerciseCard = styled(motion.div)<{ isSelected: boolean }>`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 2px solid ${props => props.isSelected ? 'rgba(227, 6, 19, 0.5)' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 18px;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(227, 6, 19, 0.3);
  }
`;

const ExerciseCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const ExerciseGif = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 16px;
  object-fit: cover;
  background: rgba(255, 255, 255, 0.05);
`;

const ExerciseInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ExerciseName = styled.h3`
  font-size: 3rem;
  font-weight: 600;
  color: white;
  margin: 0;
`;

const ExerciseMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);

  span:nth-child(2) {
    color: rgba(255, 255, 255, 0.3);
  }
`;

const MusclesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const MuscleTag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.75rem;
  background: linear-gradient(135deg, rgba(227, 6, 19, 0.15), rgba(185, 28, 28, 0.1));
  border: 1px solid rgba(227, 6, 19, 0.3);
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
`;

const RemoveButton = styled(motion.button)`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #ef4444;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(239, 68, 68, 0.2);
    border-color: rgba(239, 68, 68, 0.5);
  }
`;

const ExerciseDetails = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const RestTimeGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const RestTimeInput = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: rgba(255, 255, 255, 0.6);

  svg {
    font-size: 1.2rem;
    color: #E30613;
  }

  input {
    flex: 1;
    background: transparent;
    border: none;
    color: white;
    font-size: 1.6rem;
    width: 120px;

    &:focus {
      outline: none;
    }
  }

  span {
    color: rgba(255, 255, 255, 0.6);
    font-size: 1.4rem;
  }
`;

const SetsTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    tr {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);

      th {
        padding: 1rem;
        text-align: left;
        color: rgba(255, 255, 255, 0.6);
        font-size: 1.4rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
    }
  }

  tbody {
    tr {
      transition: all 0.3s ease;

      &:hover {
        background: rgba(255, 255, 255, 0.03);
      }

      td {
        padding: 1rem;
        color: white;
        font-size: 1.6rem;

        &:first-child {
          color: rgba(255, 255, 255, 0.6);
          font-weight: 600;
          font-size: 1.7rem;
        }
      }
    }
  }
`;

const SetInput = styled.input`
  width: 100%;
  max-width: 160px;
  padding: 1rem 1.4rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: white;
  font-size: 1.7rem;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(227, 6, 19, 0.5);
    background: rgba(255, 255, 255, 0.08);
  }
`;

const DeleteSetButton = styled(motion.button)`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background: transparent;
  border: none;
  color: rgba(239, 68, 68, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
  }
`;

const AddSetButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.2rem 2rem;
  position: relative;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05)
  );
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 20px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.3rem;
  font-weight: 500;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 
    0 8px 32px 0 rgba(0, 0, 0, 0.2),
    inset 0 1px 0 0 rgba(255, 255, 255, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  /* Efeito de reflexo/highlight */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.15),
      transparent
    );
    transition: left 0.5s ease;
  }

  svg {
    font-size: 1.5rem;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  }

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0.08)
    );
    border-color: rgba(255, 255, 255, 0.25);
    color: white;
    box-shadow: 
      0 12px 40px 0 rgba(0, 0, 0, 0.3),
      inset 0 1px 0 0 rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
    box-shadow: 
      0 4px 16px 0 rgba(0, 0, 0, 0.2),
      inset 0 1px 0 0 rgba(255, 255, 255, 0.2);
  }
`;

const LibraryHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const LibraryTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin: 0 0 1rem 0;
`;

const TabsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 0.5rem;
  border-radius: 10px;
`;

const Tab = styled.button<{ active: boolean }>`
  flex: 1;
  padding: 0.75rem;
  background: ${props => props.active ? 'linear-gradient(135deg, #E30613, #B91C1C)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.6)'};
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.active ? 'linear-gradient(135deg, #E30613, #B91C1C)' : 'rgba(255, 255, 255, 0.05)'};
    color: white;
  }
`;

const FiltersSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

const FilterDropdown = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  select {
    width: 100%;
    padding: 0.75rem 1.25rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    color: white;
    font-size: 0.95rem;
    cursor: pointer;
    appearance: none;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: rgba(227, 6, 19, 0.5);
      background: rgba(255, 255, 255, 0.08);
    }

    option {
      background: #1a1a1a;
      color: white;
    }
  }

  svg {
    position: absolute;
    right: 1rem;
    color: rgba(255, 255, 255, 0.6);
    pointer-events: none;
  }
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.25rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  &:focus-within {
    border-color: rgba(227, 6, 19, 0.5);
    background: rgba(255, 255, 255, 0.08);
  }

  svg:first-child {
    color: rgba(255, 255, 255, 0.6);
    font-size: 1.1rem;
  }

  input {
    flex: 1;
    background: transparent;
    border: none;
    color: white;
    font-size: 0.95rem;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.3);
    }
  }
`;

const ClearButton = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(239, 68, 68, 0.2);
    color: #ef4444;
  }
`;

const ExercisesLibrary = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(227, 6, 19, 0.5);
    border-radius: 10px;

    &:hover {
      background: rgba(227, 6, 19, 0.7);
    }
  }
`;

const LibrarySubtitle = styled.h3`
  font-size: 0.9rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0;
`;

const ExercisesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ExerciseLibraryItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(227, 6, 19, 0.3);
    transform: translateX(4px);
  }
`;

const ExerciseLibraryGif = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  background: rgba(255, 255, 255, 0.05);
`;

const ExerciseLibraryInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const ExerciseLibraryName = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  margin: 0;
`;

const ExerciseLibraryTarget = styled.span`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.5);
  text-transform: capitalize;
`;

const AddIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: linear-gradient(135deg, #E30613, #B91C1C);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.4rem;
  box-shadow: 0 4px 12px rgba(227, 6, 19, 0.3);
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  color: rgba(255, 255, 255, 0.3);
  gap: 1rem;

  p {
    margin: 0;
    font-size: 1rem;
  }
`;

const LoadingState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  gap: 1rem;

  span {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.95rem;
  }
`;

const SuccessMessage = styled(motion.div)`
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 2rem;
  background: linear-gradient(135deg, #10B981, #059669);
  color: white;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  box-shadow: 0 12px 40px rgba(16, 185, 129, 0.4);
  z-index: 10000;

  svg {
    font-size: 1.5rem;
  }
`;
