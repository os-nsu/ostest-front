import { useState, useEffect, useCallback } from 'react';
import { useLaboratoryProvider } from '@/providers/LaboratoryProvider/useLaboratoryProvider';
import { Laboratory } from '@/types/Laboratory';

interface LaboratoryPageData {
  laboratory: Laboratory | null;
  isLoading: boolean;
  isError: string;
  onEditLab: () => void;
}

export function useLaboratoryPage(id?: string): LaboratoryPageData {
  const [laboratory, setLaboratory] = useState<Laboratory | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState('');

  const laboratoryProvider = useLaboratoryProvider();

  const requestLaboratoryData = useCallback(() => {
    if (!id) {
      setIsError('Id лабораторной не найден');
      return;
    }

    setIsLoading(true);
    laboratoryProvider
      .getLaboratory(id)
      .then(({ status, data }) => {
        if (status !== 200 || !data) {
          setIsError('Лабораторная работа не найдена');
          return;
        }
        setLaboratory(data);
      })
      .catch(({ response }) => {
        if (response?.status === 404) {
          setIsError(response.data.message);
          return;
        }

        console.error(response);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id, laboratoryProvider]);

  useEffect(() => {
    requestLaboratoryData();
  }, [requestLaboratoryData]);

  const onEditLab = () => {
    requestLaboratoryData();
  };

  return { laboratory, isLoading, isError, onEditLab };
}
