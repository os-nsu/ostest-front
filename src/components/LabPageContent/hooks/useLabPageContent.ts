import { useEffect, useState, useCallback } from 'react';
import { useLaboratoryProvider } from '@/providers/LaboratoryProvider/useLaboratoryProvider.ts';
import { LaboratorySearchRequestData } from '@/DTO/LaboratoryDTO.ts';
import { MinimizedLaboratory } from '@/types/Laboratory.ts';

export const useLabPageContent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [labs, setLabs] = useState<MinimizedLaboratory[]>([]);

  const fetchLabs = useCallback(() => {
    const requestData: LaboratorySearchRequestData = {
      isHidden: null,
      semesterNumber: null,
    };

    setIsLoading(true);
    useLaboratoryProvider()
      .searchLaboratories(requestData)
      .then(({ status, data }) => {
        if (status === 200 && data) {
          setLabs(data);
        }
      })
      .catch(err => console.error(err))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    fetchLabs();
  }, [fetchLabs]);

  return { isLoading, labs, fetchLabs };
};
