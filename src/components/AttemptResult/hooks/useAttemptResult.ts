import { useSessionProvider } from '@/providers/SessionProvider/useSessionProvider';
import { Attempt } from '@/types/Attempt';
import { useEffect, useState } from 'react';

export const useAttemptResult = (id: string) => {
  const [attempt, setAttempt] = useState<Attempt | null>(null);

  useEffect(() => {
    useSessionProvider()
      .getAttempt(id)
      .then(({ status, data }) => {
        if (status !== 200 || !data) {
          return;
        }
        setAttempt(data);
      })
      .catch(({ response }) => {
        console.error(response);
      });
  }, [id]);

  return {
    attempt,
  };
};
