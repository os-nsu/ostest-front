import { useEffect, useState } from 'react';
import { Laboratory } from '@/types/Laboratory.ts';
import { useLaboratoryProvider } from '@/providers/LaboratoryProvider/useLaboratoryProvider.ts';
import { LaboratorySearchRequestData } from '@/DTO/LaboratoryDTO.ts';

export const useLabPageContent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [labs, setLabs] = useState<Laboratory[]>([]);

  useEffect(() => {
    const requestData: LaboratorySearchRequestData = {
      isHidden: true,
      semesterNumber: 0,
    };

    setIsLoading(true);
    useLaboratoryProvider()
      .searchLaboratories(requestData)
      .then(({ status, data }) => {
        if (status !== 200 || !data) {
          return;
        }

        setLabs(data);
      })
      .catch(err => console.error(err))
      .finally(() => setIsLoading(false));
  }, []);

  return { isLoading, labs };
};
