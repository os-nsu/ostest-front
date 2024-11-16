import { MinimizedAttempt } from '@/types/Attempt';
import styles from '@styles/components/SessionPageStyles/ExecutionHistoryList.module.scss';
import AttemptBlock from '../AttemptBlock/AttemptBlock';

interface ExecutionHistoryListProps {
  attempts: MinimizedAttempt[];
}

export default function ExecutionHistoryList({
  attempts,
}: ExecutionHistoryListProps) {
  return (
    <div className={styles.container}>
      {attempts
        .slice()
        .reverse()
        .map((attempt, index) => (
          <AttemptBlock
            key={index}
            number={attempt.sequenceOrder}
            status={attempt.status}
          />
        ))}
    </div>
  );
}
