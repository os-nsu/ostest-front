import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { loadSession } from '@/store/sessions/sessionsThunks';

export const useSessionPageContent = (id?: string) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const dispatch = useAppDispatch();

  const session = useAppSelector(state =>
    id ? state.sessions.list[+id] : undefined,
  );
  const isLoading = useAppSelector(state =>
    id ? state.sessions.loading[+id] : false,
  );
  const error = useAppSelector(state =>
    id ? state.sessions.error[+id] : undefined,
  );

  useEffect(() => {
    if (id && !session) dispatch(loadSession(+id));
  }, [dispatch, id, session]);

  return {
    session,
    isLoading,
    isError: !!error,
    error,
    isModalVisible,
    setModalVisible,
  };
};
