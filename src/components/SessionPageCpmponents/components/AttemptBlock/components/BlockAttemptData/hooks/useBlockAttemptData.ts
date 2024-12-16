import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getAttempt } from '@/store/sessions/sessionsThunks';
import { AttemptStatus } from '@/types/Attempt';
import { useEffect } from 'react';

export const useBlockAttemptData = (id: string) => {
  const attempt = useAppSelector(state => state.sessions.attemptDetails[id]);
  const testResults = attempt?.attemptResult?.testResults || [];

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAttempt(id));
  }, [id]);

  const defaultTextVariants: Record<AttemptStatus, string> = {
    [AttemptStatus.SUCCESS]: 'Принято',
    [AttemptStatus.ERROR]: 'Внутренняя ошибка',
    [AttemptStatus.FAILURE]: 'Не принято',
    [AttemptStatus.IN_QUEUE]: 'В очереди',
    [AttemptStatus.IN_PROGRESS]: 'В процессе',
  };

  return {
    testResults,
    defaultTextVariants,
  };
};
