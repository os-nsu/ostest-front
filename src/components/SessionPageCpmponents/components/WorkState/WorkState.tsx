import styles from '@styles/components/SessionPageStyles/WorkState.module.scss';
import { useWorkStatus } from './hooks/useWorkState';

interface WorkStatusProps {
  status: string;
}

export default function WorkStatus({ status }: WorkStatusProps) {
  const { statusClass } = useWorkStatus(status);

  return <div className={`${styles.status} ${statusClass}`}>{status}</div>;
}
