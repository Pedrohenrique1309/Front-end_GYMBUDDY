import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiClock, FiSearch, FiX, FiChevronDown, FiSave, FiTrash2, FiArrowLeft } from 'react-icons/fi';
import { FaDumbbell } from 'react-icons/fa';
import { useUser } from '../../Contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import * as treinoService from '../../Services/treinoService'
//import * as serieService from '../../Services/serieService'
//import * as exTreinoSerieService from '../../Services/exercicioTreinoSerieService'
import * as exercicioService from '../../Services/exercicioService'
//import ExerciseManager from '../../Componentes/ExerciseManager'
//import SeriesManager from '../../Componentes/SeriesManager'

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

// Componente para GIF de exercício com tratamento de erro
interface ExerciseGifWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  width?: string;
  height?: string;
}

const ExerciseGifWithFallback: React.FC<ExerciseGifWithFallbackProps> = ({ src, alt, className, width = '240px', height = '240px' }) => {
  const [hasError, setHasError] = useState(false);
  
  const handleError = () => {
    console.log(`❌ Erro ao carregar GIF: ${src}`);
    setHasError(true);
  };
  
  const fallbackUrl = `https://via.placeholder.com/${width.replace('px', '')}x${height.replace('px', '')}/E30613/FFFFFF?text=${encodeURIComponent(alt)}`;
  
  return (
    <img
      src={hasError ? fallbackUrl : src}
      alt={alt}
      className={className}
      onError={handleError}
      style={{
        width,
        height,
        borderRadius: '16px',
        objectFit: 'cover',
        background: 'rgba(255, 255, 255, 0.05)'
      }}
    />
  );
};

// Componente para GIF da biblioteca com tratamento de erro
const ExerciseLibraryGifWithFallback: React.FC<ExerciseGifWithFallbackProps> = ({ src, alt, className }) => {
  const [hasError, setHasError] = useState(false);
  
  const handleError = () => {
    console.log(`❌ Erro ao carregar GIF da biblioteca: ${src}`);
    setHasError(true);
  };
  
  const fallbackUrl = `https://via.placeholder.com/100x100/E30613/FFFFFF?text=${encodeURIComponent(alt.slice(0, 8))}`;
  
  return (
    <img
      src={hasError ? fallbackUrl : src}
      alt={alt}
      className={className}
      onError={handleError}
      style={{
        width: '100px',
        height: '100px',
        borderRadius: '10px',
        objectFit: 'cover',
        background: 'rgba(255, 255, 255, 0.05)'
      }}
    />
  );
};

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
  const [loadingExercises, setLoadingExercises] = useState(false);
  const [selectedExerciseForWorkout, setSelectedExerciseForWorkout] = useState<ExerciseInWorkout | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [savedWorkouts, setSavedWorkouts] = useState<any[]>([])
  const [realExercises, setRealExercises] = useState<any[]>([])

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      navigate('/');
      return;
    }
  }, [isLoading, isLoggedIn, navigate]);

  useEffect(() => {
    const fetchExercises = async () => {
      setLoadingExercises(true);
      
      // Buscar exercícios reais do backend primeiro
      try {
        console.log('🔍 Buscando exercícios do backend...');
        const response = await exercicioService.listarExercicios()
        const realEx = response.exercicios || response.exercicio || []
        console.log('📊 Exercícios recebidos do backend:', realEx);
        setRealExercises(realEx)
        
        // Função para validar e obter GIF do exercício
        const getExerciseGif = (ex: any): string => {
          // Buscar GIF em diferentes possíveis campos do backend
          const possibleGifFields = [
            ex.gif, ex.imagem, ex.url_gif, ex.gif_url, ex.gifUrl,
            ex.image, ex.gif_image, ex.animation, ex.demo_url
          ];
          
          // Encontrar o primeiro campo válido (não vazio e não null)
          const foundGif = possibleGifFields.find(field => 
            field && field.trim() !== '' && field !== 'null'
          );
          
          // Fallback para placeholder se nenhum GIF válido for encontrado
          return foundGif || `https://via.placeholder.com/400x300/E30613/FFFFFF?text=${encodeURIComponent(ex.nome || 'Exercício')}`;
        };
        
        // Converter para formato da UI se houver exercícios reais
        if (realEx.length > 0) {
          const convertedExercises = realEx.map((ex: any) => {
            const gifUrl = getExerciseGif(ex);
            
            console.log(`🎬 Exercício "${ex.nome}":`); 
            console.log(`   - ID: ${ex.id}`);
            console.log(`   - GIF: ${gifUrl}`);
            console.log(`   - Dados completos:`, ex);
            
            return {
              id: ex.id?.toString() || Math.random().toString(),
              name: ex.nome || 'Exercício sem nome',
              bodyPart: ex.grupo_muscular || 'geral',
              equipment: ex.equipamento || 'livre',
              gifUrl: gifUrl,
              target: ex.grupo_muscular || 'músculos',
              muscles: [ex.grupo_muscular || 'Geral']
            };
          })
          setExercises(convertedExercises)
          setFilteredExercises(convertedExercises)
          setLoadingExercises(false)
          return
        }
      } catch (error) {
        console.log('📝 Usando exercícios mock - backend indisponível')
      }
      
      // Fallback para exercícios mock
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
    const fetchSaved = async () => {
      try {
        const res = await treinoService.listarTreinos()
        // usar treinos da interface definida
        const data = res.treinos ?? res.treino ?? []
        setSavedWorkouts(Array.isArray(data) ? data : [])
      } catch (err) {
        // não bloqueante
        console.warn('Não foi possível carregar treinos salvos', err)
      }
    }

    if (isLoggedIn) fetchSaved()
  }, [isLoggedIn])

  useEffect(() => {
    let filtered = [...exercises];

    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(ex =>
        // Busca no nome do exercício
        ex.name.toLowerCase().includes(searchLower) ||
        // Busca no target/músculo alvo
        ex.target.toLowerCase().includes(searchLower) ||
        // Busca na parte do corpo
        ex.bodyPart.toLowerCase().includes(searchLower) ||
        // Busca no equipamento
        ex.equipment.toLowerCase().includes(searchLower) ||
        // Busca nos grupos musculares
        ex.muscles.some(muscle => muscle.toLowerCase().includes(searchLower))
      );
    }

    setFilteredExercises(filtered);
  }, [searchTerm, exercises]);

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

  const handleExerciseAdded = () => {
    // Atualizar lista de exercícios quando um novo for criado
    console.log('🔄 Exercício adicionado - atualizando lista...');
    // Pode adicionar lógica para recarregar exercícios disponíveis se necessário
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
    
    console.log('🔍 Estado atual do treino antes de salvar:', currentWorkout);
    
    try {
      // Validar dados dos exercícios
      const invalidExercises = currentWorkout.exercises.filter(ex => 
        !ex.exercise.id || ex.sets.length === 0
      );
      
      if (invalidExercises.length > 0) {
        console.error('❌ Exercícios inválidos encontrados:', invalidExercises);
        alert('Alguns exercícios estão sem ID ou sem séries configuradas');
        return;
      }

      // 📝 Obter ID do usuário do contexto autenticado
      if (!user || !user.id) {
        alert('Usuário não autenticado. Faça login para salvar treinos.');
        return;
      }
      
      // montar payload EXATAMENTE como o backend espera
      const payload = {
        nome: currentWorkout.title,        // ✅ Backend espera "nome", não "titulo"
        id_user: parseInt(String(user.id)),  // ✅ Campo obrigatório obtido do contexto autenticado!
        exercicio: currentWorkout.exercises.map(ex => ({ // ✅ "exercicio" singular, não "exercicios"
          id_exercicio: parseInt(ex.exercise.id) || ex.exercise.id,
          descanso: ex.restTime || 60,
          series: ex.sets.map(s => ({ 
            repeticoes: s.reps || 0, 
            carga: s.weight || 0 
          }))
        }))
      };
      
      console.log('✅ Payload corrigido para corresponder ao backend:', {
        camposEsperados: ['nome', 'id_user', 'exercicio'],
        camposEnviados: Object.keys(payload),
        payloadCompleto: payload
      });
      
      console.log('📤 Payload que será enviado:', JSON.stringify(payload, null, 2));

      let res
      if (currentWorkout.id) {
        res = await treinoService.atualizarTreino(currentWorkout.id, payload)
      } else {
        res = await treinoService.inserirTreino(payload)
      }

      // backend pode retornar o treino criado em diferentes formatos
      const created = res.treino ?? res.treinos ?? res
      // se retornar id, atribuir ao estado
      if (res.status) {
        setCurrentWorkout({ title: '', notes: '', exercises: [] })
        setShowSuccessMessage(true)
        setTimeout(() => setShowSuccessMessage(false), 2000)
        // recarregar lista de treinos salvos
        try {
          const listRes = await treinoService.listarTreinos()
          const listData = listRes.treinos ?? listRes.treino ?? []
          setSavedWorkouts(Array.isArray(listData) ? listData : [])
        } catch (err) {
          console.warn('Erro ao recarregar treinos', err)
        }
      } else {
        // caso o backend retorne mensagem simples
        setShowSuccessMessage(true)
        setTimeout(() => setShowSuccessMessage(false), 2000)
        setCurrentWorkout({ title: '', notes: '', exercises: [] })
      }
    } catch (error: any) {
      console.error('❌ Erro ao salvar treino - Detalhes completos:', {
        message: error?.message,
        response: error?.response,
        data: error?.response?.data,
        status: error?.response?.status,
        statusText: error?.response?.statusText,
        config: error?.config,
        fullError: error
      });
      
      // Mostrar mensagem mais informativa
      const errorMessage = error?.response?.data?.message || 
                          error?.response?.data?.error ||
                          error?.message || 
                          'Erro desconhecido ao salvar treino';
      
      const statusCode = error?.response?.status;
      
      if (statusCode === 400) {
        alert(`Erro de validação (400): ${errorMessage}\n\nVerifique se todos os campos estão preenchidos corretamente.`);
      } else if (statusCode === 401) {
        alert('Erro de autenticação (401): Você precisa fazer login novamente.');
      } else if (statusCode === 500) {
        alert('Erro interno do servidor (500): Tente novamente em alguns minutos.');
      } else {
        alert(`Erro ao salvar treino: ${errorMessage}`);
      }
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
                >
                  <ExerciseCardHeader
                    onClick={() => setSelectedExerciseForWorkout(
                      selectedExerciseForWorkout?.id === exerciseItem.id ? null : exerciseItem
                    )}
                  >
                    <ExerciseGifWithFallback src={exerciseItem.exercise.gifUrl} alt={exerciseItem.exercise.name} />
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

                  <AnimatePresence>
                    {selectedExerciseForWorkout?.id === exerciseItem.id && (
                      <motion.div
                        key={`details-${exerciseItem.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          ease: [0.4, 0, 0.2, 1],
                          height: { duration: 0.4 },
                          opacity: { duration: 0.3 }
                        }}
                      >
                      <ExerciseDetails onClick={(e) => e.stopPropagation()}>
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
                  </AnimatePresence>
                </ExerciseCard>
              ))}
            </AnimatePresence>
          </ExercisesList>

          <SaveButtonContainer>
            <SaveButton 
              onClick={handleSaveWorkout} 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <span>Salvar Treino</span>
            </SaveButton>
          </SaveButtonContainer>

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

          <SearchBox>
            <FiSearch />
            <input
              type="text"
              placeholder="Buscar exercícios ou grupos musculares..."
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
                      <ExerciseLibraryGifWithFallback src={exercise.gifUrl} alt={exercise.name} />
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

  [data-theme="light"] & {
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  }

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

  [data-theme="light"] & {
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  }
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

  [data-theme="light"] & {
    color: #1e293b;
  }
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

  [data-theme="light"] & {
    background: linear-gradient(135deg,
      rgba(255, 255, 255, 0.98) 0%,
      rgba(255, 255, 255, 0.95) 50%,
      rgba(255, 255, 255, 0.9) 100%
    );
    border-color: rgba(0, 0, 0, 0.06);
    box-shadow:
      0 8px 24px rgba(0, 0, 0, 0.15),
      0 0 0 1px rgba(227, 6, 19, 0.2);
  }

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

  [data-theme="light"] & {
    background: rgba(227, 6, 19, 0.08);
    border-color: rgba(227, 6, 19, 0.15);
    color: #E30613;
  }

  [data-theme="light"] &:hover {
    background: rgba(227, 6, 19, 0.12);
    border-color: rgba(227, 6, 19, 0.25);
    color: #C41810;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  flex: 1;

  [data-theme="light"] & {
    color: #1e293b;
  }
`;

const SaveButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 2rem 1rem;
  position: relative;
  background: linear-gradient(
    135deg,
    rgba(227, 6, 19, 0.15) 0%,
    rgba(185, 28, 28, 0.12) 50%,
    rgba(227, 6, 19, 0.08) 100%
  );
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(227, 6, 19, 0.3);
  border-radius: 10px;
  color: white;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 
    0 4px 16px 0 rgba(227, 6, 19, 0.25),
    inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  /* Red gradient overlay for hover */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(227, 6, 19, 0.2) 0%,
      rgba(185, 28, 28, 0.15) 50%,
      rgba(227, 6, 19, 0.1) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  /* Subtle shine effect */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transition: left 0.6s ease;
  }

  svg {
    font-size: 0.9rem;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
  }

  span {
    font-weight: 500;
    letter-spacing: 0.25px;
  }

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(227, 6, 19, 0.25) 0%,
      rgba(185, 28, 28, 0.2) 50%,
      rgba(227, 6, 19, 0.15) 100%
    );
    border-color: rgba(227, 6, 19, 0.5);
    color: white;
    box-shadow: 
      0 8px 24px 0 rgba(227, 6, 19, 0.4),
      inset 0 1px 0 0 rgba(255, 255, 255, 0.15);
    transform: translateY(-1px);

    &::before {
      opacity: 1;
    }

    &::after {
      left: 100%;
    }
  }

  [data-theme="light"] & {
    background: linear-gradient(
      135deg,
      rgba(227, 6, 19, 0.12) 0%,
      rgba(185, 28, 28, 0.08) 50%,
      rgba(227, 6, 19, 0.06) 100%
    );
    border-color: rgba(227, 6, 19, 0.2);
    color: #E30613;
    box-shadow: 
      0 4px 12px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 0 rgba(227, 6, 19, 0.1);
  }

  [data-theme="light"] &:hover {
    background: linear-gradient(
      135deg,
      rgba(227, 6, 19, 0.18) 0%,
      rgba(185, 28, 28, 0.12) 50%,
      rgba(227, 6, 19, 0.1) 100%
    );
    border-color: rgba(227, 6, 19, 0.3);
    color: #C41810;
    box-shadow: 
      0 8px 24px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 0 rgba(227, 6, 19, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 
      0 2px 8px 0 rgba(227, 6, 19, 0.3),
      inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
  }
`;

const SaveButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputLabel = styled.label`
  color: rgba(255, 255, 255, 0.8);
  font-size: 2rem;
  font-weight: 600;

  [data-theme="light"] & {
    color: #1e293b;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1.5rem 2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(227, 6, 19, 0.5);
    background: rgba(255, 255, 255, 0.08);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  [data-theme="light"] & {
    background: rgba(255, 255, 255, 0.95);
    border-color: rgba(0, 0, 0, 0.08);
    color: #1e293b;
  }

  [data-theme="light"] &:focus {
    border-color: rgba(227, 6, 19, 0.3);
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 0 0 3px rgba(227, 6, 19, 0.1);
  }

  [data-theme="light"] &::placeholder {
    color: rgba(0, 0, 0, 0.4);
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

  [data-theme="light"] & {
    background: rgba(255, 255, 255, 0.95);
    border-color: rgba(0, 0, 0, 0.08);
    color: #1e293b;
  }

  [data-theme="light"] &:focus {
    border-color: rgba(227, 6, 19, 0.3);
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 0 0 3px rgba(227, 6, 19, 0.1);
  }

  [data-theme="light"] &::placeholder {
    color: rgba(0, 0, 0, 0.4);
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
  padding: 2.5rem;
  transition: all 0.3s ease;
  min-width: 400px;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(227, 6, 19, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(227, 6, 19, 0.15);
  }

  [data-theme="light"] & {
    background: linear-gradient(135deg,
      rgba(255, 255, 255, 0.98) 0%,
      rgba(255, 255, 255, 0.95) 50%,
      rgba(255, 255, 255, 0.9) 100%
    );
    border-color: ${props => props.isSelected ? 'rgba(227, 6, 19, 0.3)' : 'rgba(0, 0, 0, 0.06)'};
    box-shadow: ${props => props.isSelected ? '0 8px 24px rgba(227, 6, 19, 0.15)' : '0 2px 8px rgba(0, 0, 0, 0.08)'};
  }

  [data-theme="light"] &:hover {
    background: linear-gradient(135deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.97) 50%,
      rgba(255, 255, 255, 0.94) 100%
    );
    border-color: rgba(227, 6, 19, 0.25);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
  }
`;

const ExerciseCardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  cursor: pointer;
  flex-wrap: wrap;
  min-height: 340px; // Reduzido drasticamente de 380px para 340px
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    min-height: auto;
  }
`;

const ExerciseInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem; // Aumentado de 0.5rem para 0.75rem
  justify-content: flex-end; // Empurrar conteúdo para baixo
  padding-bottom: 0.1rem; // Praticamente eliminado
  margin-top: 5rem; // Reduzido drasticamente de 6.5rem para 5rem
`;

const ExerciseName = styled.h3`
  font-size: 3.5rem; // Aumentado de 3rem para 3.5rem
  font-weight: 600;
  color: white;
  margin: 0;
  margin-bottom: 0.75rem; // Adicionado espaço abaixo do título

  [data-theme="light"] & {
    color: #E30613;
  }
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

  [data-theme="light"] & {
    color: rgba(0, 0, 0, 0.6);
  }

  [data-theme="light"] & span:nth-child(2) {
    color: rgba(0, 0, 0, 0.3);
  }
`;

const MusclesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem; // Aumentado de 0.5rem para 0.75rem
  margin-top: 1rem; // Aumentado de 0.5rem para 1rem (mais para baixo)
`;

const MuscleTag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem; // Aumentado padding para 0.5rem 1rem
  background: linear-gradient(135deg, rgba(227, 6, 19, 0.15), rgba(185, 28, 28, 0.1));
  border: 1px solid rgba(227, 6, 19, 0.3);
  border-radius: 10px; // Aumentado de 8px para 10px
  font-size: 1.1rem; // Aumentado de 0.85rem para 1.1rem
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9); // Aumentado opacidade de 0.85 para 0.9
  white-space: nowrap;
  pointer-events: none;
  user-select: none;

  [data-theme="light"] & {
    background: linear-gradient(135deg, rgba(227, 6, 19, 0.1), rgba(185, 28, 28, 0.08));
    border-color: rgba(227, 6, 19, 0.2);
    color: #C41810;
  }
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

  [data-theme="light"] & {
    background: rgba(227, 6, 19, 0.08);
    border-color: rgba(227, 6, 19, 0.15);
    color: rgba(0, 0, 0, 0.6);
  }

  [data-theme="light"] & input {
    color: #1e293b;
  }

  [data-theme="light"] & span {
    color: rgba(0, 0, 0, 0.6);
  }
`;

const SetsTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    tr {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);

      [data-theme="light"] & {
        border-bottom-color: rgba(0, 0, 0, 0.08);
      }

      th {
        padding: 1rem;
        text-align: left;
        color: rgba(255, 255, 255, 0.6);
        font-size: 1.4rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      [data-theme="light"] & th {
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }

  tbody {
    tr {
      transition: all 0.3s ease;

      &:hover {
        background: rgba(255, 255, 255, 0.03);
      }

      [data-theme="light"] & {
        &:hover {
          background: rgba(227, 6, 19, 0.04);
        }
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

      [data-theme="light"] & td {
        color: #1e293b;
      }

      [data-theme="light"] & td:first-child {
        color: rgba(0, 0, 0, 0.6);
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

  [data-theme="light"] & {
    background: rgba(255, 255, 255, 0.95);
    border-color: rgba(0, 0, 0, 0.08);
    color: #1e293b;
  }

  [data-theme="light"] &:focus {
    border-color: rgba(227, 6, 19, 0.3);
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 0 0 3px rgba(227, 6, 19, 0.1);
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

  [data-theme="light"] & {
    background: linear-gradient(
      135deg,
      rgba(227, 6, 19, 0.1) 0%,
      rgba(227, 6, 19, 0.06) 100%
    );
    border-color: rgba(227, 6, 19, 0.15);
    color: #E30613;
    box-shadow: 
      0 4px 12px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 0 rgba(227, 6, 19, 0.1);
  }

  [data-theme="light"] &:hover {
    background: linear-gradient(
      135deg,
      rgba(227, 6, 19, 0.15) 0%,
      rgba(227, 6, 19, 0.1) 100%
    );
    border-color: rgba(227, 6, 19, 0.25);
    color: #C41810;
    box-shadow: 
      0 8px 24px rgba(0, 0, 0, 0.12),
      inset 0 1px 0 0 rgba(227, 6, 19, 0.15);
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

  [data-theme="light"] & {
    color: #1e293b;
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

  [data-theme="light"] & {
    background: rgba(255, 255, 255, 0.95);
    border-color: rgba(0, 0, 0, 0.08);
  }

  [data-theme="light"] &:focus-within {
    border-color: rgba(227, 6, 19, 0.3);
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 0 0 3px rgba(227, 6, 19, 0.1);
  }

  [data-theme="light"] & svg:first-child {
    color: rgba(0, 0, 0, 0.6);
  }

  [data-theme="light"] & input {
    color: #1e293b;
  }

  [data-theme="light"] & input::placeholder {
    color: rgba(0, 0, 0, 0.4);
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

  [data-theme="light"] & {
    color: rgba(0, 0, 0, 0.6);
  }
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

  [data-theme="light"] & {
    background: linear-gradient(135deg,
      rgba(255, 255, 255, 0.98) 0%,
      rgba(255, 255, 255, 0.95) 50%,
      rgba(255, 255, 255, 0.9) 100%
    );
    border-color: rgba(0, 0, 0, 0.06);
  }

  [data-theme="light"] &:hover {
    background: linear-gradient(135deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.97) 50%,
      rgba(255, 255, 255, 0.94) 100%
    );
    border-color: rgba(227, 6, 19, 0.2);
  }
`;

const ExerciseLibraryInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem; // Aumentado de 0.25rem para 0.5rem
  justify-content: flex-end; // Empurrar conteúdo para baixo
  padding-bottom: 0.05rem; // Quase zero
  margin-top: 2.2rem; // Reduzido drasticamente - proporcional
`;

const ExerciseLibraryName = styled.h4`
  font-size: 1.5rem; // Aumentado de 1.3rem para 1.5rem
  font-weight: 600;
  color: white;
  margin: 0;
  margin-bottom: 0.5rem; // Adicionado espaçamento abaixo

  [data-theme="light"] & {
    color: #E30613;
  }
`;

const ExerciseLibraryTarget = styled.span`
  font-size: 1.05rem; // Aumentado de 0.95rem para 1.05rem
  color: rgba(255, 255, 255, 0.7); // Aumentado opacidade de 0.5 para 0.7
  text-transform: capitalize;
  font-weight: 500; // Adicionado peso na fonte

  [data-theme="light"] & {
    color: rgba(0, 0, 0, 0.7);
  }
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

  [data-theme="light"] & {
    color: rgba(0, 0, 0, 0.3);
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

  [data-theme="light"] & span {
    color: rgba(0, 0, 0, 0.6);
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
