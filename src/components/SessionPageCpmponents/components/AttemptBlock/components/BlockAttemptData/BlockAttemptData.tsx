import styles from '@styles/components/SessionPageStyles/BlockAttemptData.module.scss';
import TestsStatusBlock from '../TestsStatusBlock/TestsStatusBlock';
import { AttemptStatus } from '@/types/Attempt';
import { useBlockAttemptData } from './hooks/useBlockAttemptData';

interface BlockAttemptDataProps {
  number: number;
  status: AttemptStatus;
  attemptId: string;
}

export default function BlockAttemptData({
  number,
  status,
  attemptId,
}: BlockAttemptDataProps) {
  const { testResults, defaultTextVariants } = useBlockAttemptData(attemptId);
  const successfulTests = testResults?.filter(test => test.isPassed).length;
  const totalTests = testResults?.length;

  const statusClass =
    status === AttemptStatus.SUCCESS ? styles.accepted : styles.error;

  return (
    <div className={styles.blockData}>
      <div className={styles.data}>
        <div className={styles.number}>#{number}</div>
        <div className={styles.tests}>
          <div className={styles.info}>
            Пройдено тестов {successfulTests}/{totalTests}
          </div>
          <TestsStatusBlock testResults={testResults} />
        </div>
      </div>
      <div className={`${styles.status} ${statusClass}`}>
        {defaultTextVariants[status]}
      </div>
    </div>
  );
}
