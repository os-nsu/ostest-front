import styles from '@styles/components/SessionPageStyles/ExecutionHistory.module.scss';
import ExecutionHistoryList from '../ExecutionHistoryList/ExecutionHistoryList';
import { MinimizedAttempt } from '@/types/Attempt';

interface ExecutionHistoryProps {
  attempts: MinimizedAttempt[];
}

export default function ExecutionHistory({ attempts }: ExecutionHistoryProps) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>История выполнения</span>
      {attempts.length === 0 ? (
        <span className={styles.empty}>
          История выполнения пуста. Загрузите свое первое решение
        </span>
      ) : (
        <ExecutionHistoryList attempts={attempts} />
      )}
    </div>
  );
}
