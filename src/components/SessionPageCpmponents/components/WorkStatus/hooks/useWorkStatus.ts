import { ProcessStatus } from '@/types/ProcessStatus.ts';

export const useWorkStatus = () => {
  const defaultTextVariants: Record<ProcessStatus, string> = {
    [ProcessStatus.SUCCESS]: 'Выполнено',
    [ProcessStatus.ERROR]: 'Не принято',
    [ProcessStatus.INPROGRESS]: 'В процессе',
    [ProcessStatus.TODO]: 'К выполнению',
  };

  return { defaultTextVariants };
};
