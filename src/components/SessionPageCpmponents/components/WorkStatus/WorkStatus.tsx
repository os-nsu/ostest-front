import styles from '@styles/components/SessionPageStyles/WorkState.module.scss';
import { useWorkStatus } from './hooks/useWorkStatus';
import { ProcessStatus } from '@/types/ProcessStatus.ts';

interface WorkStatusProps {
  status: ProcessStatus;
  text?: string;
}

export default function WorkStatus({ status, text }: WorkStatusProps) {
  const { defaultTextVariants } = useWorkStatus();

  return (
    <div className={[styles.status, styles[status.toLowerCase()]].join(' ')}>
      {text || defaultTextVariants[status]}
    </div>
  );
}
