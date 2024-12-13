import { MinimizedAttempt } from '@/types/Attempt';
import styles from '@styles/components/SessionPageStyles/ExecutionHistoryList.module.scss';
import AttemptBlock from '../AttemptBlock/AttemptBlock';
import AttemptResult from '@/components/AttemptResult/AttemptResult';
import { useExecutionHistoryList } from './hooks/useExecutionHistoryList';

interface ExecutionHistoryListProps {
  attempts: MinimizedAttempt[];
}

export default function ExecutionHistoryList({
  attempts,
}: ExecutionHistoryListProps) {
  const {
    selectedAttemptId,
    selectedAttemptSequenceOrder,
    handleAttemptClick,
    handleClose,
  } = useExecutionHistoryList();

  return (
    <div className={styles.container}>
      <div className={styles.attemptBlock}>
        {attempts
          .slice()
          .reverse()
          .map(attempt => (
            <AttemptBlock
              number={attempt.sequenceOrder}
              status={attempt.status}
              attemptId={attempt.id}
              key={attempt.sequenceOrder}
              onClick={() =>
                handleAttemptClick(attempt.id, attempt.sequenceOrder)
              }
            />
          ))}
      </div>
      {selectedAttemptId !== null && (
        <AttemptResult
          attemptId={selectedAttemptId}
          number={selectedAttemptSequenceOrder}
          onClose={handleClose}
        />
      )}
    </div>
  );
}
