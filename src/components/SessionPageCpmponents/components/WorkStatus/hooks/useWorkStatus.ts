import { ProcessStatus } from '@/types/ProcessStatus.ts';
import { SessionStatus } from '@/types/Session';

export const useWorkStatus = () => {
  const defaultTextVariants: Record<ProcessStatus | SessionStatus, string> = {
    [ProcessStatus.SUCCESS]: 'Выполнено',
    [ProcessStatus.ERROR]: 'Не принято',
    [ProcessStatus.INPROGRESS]: 'В процессе',
    [ProcessStatus.TODO]: 'К выполнению',
    [SessionStatus.DONE]: 'Выполнено',
    [SessionStatus.FAILURE]: 'Ошибка',
    [SessionStatus.NEW]: 'К выполнению',
    [SessionStatus.INACTIVE]: 'Неактивна',
    [SessionStatus.IN_PROGRESS]: 'В процессе',
  };

  return { defaultTextVariants };
};
