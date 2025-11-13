import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FiPlus, FiEdit3, FiTrash2, FiSave } from 'react-icons/fi';
import * as serieService from '../../Services/serieService';
import { SeriePayload } from '../../Services/serieService';

interface SeriesManagerProps {
  exerciseId?: string | number;
  onSeriesChange?: (series: SeriePayload[]) => void;
}

const SeriesManager: React.FC<SeriesManagerProps> = ({ exerciseId, onSeriesChange }) => {
  const [series, setSeries] = useState<SeriePayload[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingSerie, setEditingSerie] = useState<SeriePayload | null>(null);

  const loadSeries = async () => {
    if (!exerciseId) return;
    
    try {
      setLoading(true);
      const response = await serieService.buscarSeriePeloExercicio(exerciseId);
      const seriesList = response.series || response.serie || [];
      setSeries(seriesList);
      onSeriesChange?.(seriesList);
    } catch (error) {
      console.error('Erro ao carregar séries:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSeries();
  }, [exerciseId]);

  const handleSave = async (serieData: Partial<SeriePayload>) => {
    try {
      if (editingSerie?.id) {
        await serieService.atualizarSerie(editingSerie.id, serieData);
      } else {
        await serieService.inserirSerie({ ...serieData, id_exercicio: exerciseId });
      }
      
      await loadSeries();
      setEditingSerie(null);
    } catch (error: any) {
      alert(error?.message || 'Erro ao salvar série');
    }
  };

  const handleDelete = async (serieId: string | number) => {
    try {
      await serieService.excluirSerie(serieId);
      await loadSeries();
    } catch (error: any) {
      alert(error?.message || 'Erro ao excluir série');
    }
  };

  return (
    <Container>
      <Header>
        <Title>Séries do Exercício</Title>
        <AddButton onClick={() => setEditingSerie({})}>
          <FiPlus />
        </AddButton>
      </Header>

      <SeriesList>
        {series.map((serie, index) => (
          <SerieItem key={serie.id || index}>
            <SerieInfo>
              <span>{serie.repeticoes || 0} reps</span>
              <span>{serie.carga || 0} kg</span>
              <span>{serie.tempo_descanso || 60}s</span>
            </SerieInfo>
            <SerieActions>
              <ActionButton onClick={() => setEditingSerie(serie)}>
                <FiEdit3 />
              </ActionButton>
              <ActionButton onClick={() => handleDelete(serie.id!)}>
                <FiTrash2 />
              </ActionButton>
            </SerieActions>
          </SerieItem>
        ))}
      </SeriesList>

      {editingSerie && (
        <EditForm
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <FormInputs>
            <input
              type="number"
              placeholder="Repetições"
              defaultValue={editingSerie.repeticoes || ''}
              onChange={(e) => setEditingSerie(prev => ({ ...prev!, repeticoes: Number(e.target.value) }))}
            />
            <input
              type="number"
              placeholder="Carga (kg)"
              step="0.1"
              defaultValue={editingSerie.carga || ''}
              onChange={(e) => setEditingSerie(prev => ({ ...prev!, carga: Number(e.target.value) }))}
            />
            <input
              type="number"
              placeholder="Descanso (s)"
              defaultValue={editingSerie.tempo_descanso || 60}
              onChange={(e) => setEditingSerie(prev => ({ ...prev!, tempo_descanso: Number(e.target.value) }))}
            />
          </FormInputs>
          <FormActions>
            <SaveButton onClick={() => handleSave(editingSerie)}>
              <FiSave />
            </SaveButton>
            <CancelButton onClick={() => setEditingSerie(null)}>
              ✕
            </CancelButton>
          </FormActions>
        </EditForm>
      )}
    </Container>
  );
};

const Container = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1.5rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Title = styled.h4`
  color: var(--white);
  margin: 0;
  font-size: 1.6rem;
`;

const AddButton = styled.button`
  padding: 0.6rem;
  background: var(--primary);
  border: none;
  border-radius: 0.6rem;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SeriesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const SerieItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 0.8rem;
`;

const SerieInfo = styled.div`
  display: flex;
  gap: 1rem;
  
  span {
    color: var(--white);
    font-size: 1.4rem;
    padding: 0.4rem 0.8rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 0.4rem;
  }
`;

const SerieActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionButton = styled.button`
  padding: 0.6rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 0.4rem;
  color: var(--white);
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const EditForm = styled(motion.div)`
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.8rem;
`;

const FormInputs = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 1rem;
  
  input {
    flex: 1;
    padding: 0.8rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 0.6rem;
    color: var(--white);
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

const FormActions = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
`;

const SaveButton = styled.button`
  padding: 0.8rem 1.2rem;
  background: var(--primary);
  border: none;
  border-radius: 0.6rem;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CancelButton = styled.button`
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 0.6rem;
  color: var(--white);
  cursor: pointer;
`;

export default SeriesManager;
