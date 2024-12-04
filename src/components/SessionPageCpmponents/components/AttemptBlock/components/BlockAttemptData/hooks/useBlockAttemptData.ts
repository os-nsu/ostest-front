import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getAttempt } from '@/store/sessions/sessionsThunks';
import { useEffect } from 'react';

export const useBlockAttemptData = (id: string) => {
  const attempt = useAppSelector(state => state.sessions.attemptDetails[id]);
  const testResults = attempt?.attemptResult?.testResults || [];

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAttempt(id));
  }, [id]);

  return {
    testResults,
  };
};
