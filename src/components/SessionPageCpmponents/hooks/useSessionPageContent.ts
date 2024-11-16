import { useSessionProvider } from '@/providers/SessionProvider/useSessionProvider';
import { AttemptStatus } from '@/types/Attempt';
import { Session } from '@/types/Session';
import { useEffect, useState } from 'react';

export const useSessionPageContent = (id?: string) => {
  const [session, setSession] = useState<Session | null>(null);
  const [isError, setIsError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    loadSession();
  }, []);

  const loadSession = () => {
    if (!id) {
      setIsError('Id сессии сдачи не найден');
      return;
    }

    setIsLoading(true);

    useSessionProvider()
      .getSession(id)
      .then(({ status, data }) => {
        if (status !== 200 || !data) {
          return;
        }
        setSession(data);
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
  };

  const mock: Session = {
    labarotory: {
      name: 'string',
    },
    attempts: [
      {
        id: '1',
        sequenceOrder: 1,
        status: AttemptStatus.FAILURE,
      },
      {
        id: '2',
        sequenceOrder: 2,
        status: AttemptStatus.ERROR,
      },
      {
        id: '3',
        sequenceOrder: 3,
        status: AttemptStatus.SUCCESS,
      },
    ],
  };

  return {
    session,
    isLoading,
    isError,
    isModalVisible,
    setModalVisible,
    mock,
  };
};
