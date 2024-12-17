import IconButton from '@/UI/buttons/IconButton/IconButton';
import IconClose from '@/UI/icons/IconClose/IconClose';
import styles from '@styles/components/AttemptResult.module.scss';
import TestResult from './TestResult/TestResult';
import { useAttemptResult } from './hooks/useAttemptResult';

interface AttemptResultProps {
  number?: number;
  attemptId: string;
  onClose: () => void;
}

export default function AttemptResult({
  number,
  attemptId,
  onClose,
}: AttemptResultProps) {
  const { attempt } = useAttemptResult(attemptId);

  if (!attempt || !attempt.attemptResult) {
    return <div></div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>Результат: Запуск #{number}</span>
        <IconButton
          icon={IconClose({ color: 'black' })}
          type="no_bg"
          onClick={onClose}
        />
      </div>
      <div className={styles.testsContainer}>
        {attempt.attemptResult.testResults.length !== 0 ? (
          attempt.attemptResult.testResults.map((result, index) => (
            <TestResult
              key={index}
              testName={result.name}
              memory={result.memoryUsed.toString()}
              time={result.duration.toString()}
              isPassed={result.isPassed}
              description={result.description || 'Описание отсутствует'}
            />
          ))
        ) : (
          <span>{attempt.attemptResult.errorDetails}</span>
        )}
      </div>
    </div>
  );
}
