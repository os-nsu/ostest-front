import { useState, useEffect } from 'react';
import { useLaboratoryProvider } from '@/providers/LaboratoryProvider/useLaboratoryProvider';
import { Laboratory } from '@/types/Laboratory';

interface LaboratoryPageData {
  laboratory: Laboratory | null;
  isLoading: boolean;
  isError: string;
  refreshKey: number;
  handleRefresh: () => void;
}

export function useLaboratoryPage(id: string | undefined): LaboratoryPageData {
  const [laboratory, setLaboratory] = useState<Laboratory | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState('');

  const [refreshKey, setRefreshKey] = useState(0);
  const handleRefresh = () => {
    setRefreshKey((prevKey: number) => prevKey + 1);
  };

  const laboratoryProvider = useLaboratoryProvider();

  useEffect(() => {
    if (!id) {
      setIsError('Id лабораторной не найден');
      return;
    }

    setIsLoading(true);
    laboratoryProvider
      .getLaboratory(id)
      .then(({ status, data }) => {
        if (status !== 200 || !data) {
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
  }, [id, laboratoryProvider, refreshKey]);

  return { laboratory, isLoading, isError, refreshKey, handleRefresh };
}
