import styles from '@styles/components/SessionPageStyles/BlockAttemptData.module.scss';
import TestsStatusBlock from '../TestsStatusBlock/TestsStatusBlock';
import { AttemptStatus } from '@/types/Attempt';

interface BlockAttemptDataProps {
  number: number;
  status: AttemptStatus;
}

export default function BlockAttemptData({
  number,
  status,
}: BlockAttemptDataProps) {
  const statusClass =
    status === AttemptStatus.SUCCESS ? styles.accepted : styles.error;

  return (
    <div className={styles.blockData}>
      <div className={styles.data}>
        <div className={styles.number}>#{number}</div>
        <div className={styles.tests}>
          <div className={styles.info}>Пройдено тестов 3/10</div>
          <TestsStatusBlock />
        </div>
      </div>
      <div className={`${styles.status} ${statusClass}`}>{status}</div>
    </div>
  );
}
