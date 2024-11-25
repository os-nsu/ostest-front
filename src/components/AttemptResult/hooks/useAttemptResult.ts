import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getAttempt } from '@/store/sessions/sessionsThunks';
import { useEffect } from 'react';

export const useAttemptResult = (id: string) => {
  const attempt = useAppSelector(state => state.sessions.attemptDetails[id]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAttempt(id));
  }, [id]);

  return {
    attempt,
  };
};
