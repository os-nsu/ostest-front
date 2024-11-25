import { TestStatus } from '@/types/Attempt';
import styles from '@styles/components/TestResult.module.scss';

interface TestResultProps {
  testNumber: number;
  status: TestStatus;
  time: string;
  memory: string;
  description?: string;
}

export default function TestResult({
  testNumber,
  status,
  time,
  description,
  memory,
}: TestResultProps) {
  const statusClass =
    status === TestStatus.SUCCESS ? styles.accepted : styles.error;

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>Тест {testNumber}</span>
        <div className={`${styles.status} ${statusClass}`}>{status}</div>
      </div>
      <div className={styles.descriptionContainer}>
        <div className={styles.description}>
          <span className={styles.title}>Время выполнения</span>
          <span className={styles.text}>{time}ms</span>
        </div>
        <div className={styles.description}>
          <span className={styles.title}>Использовано памяти</span>
          <span className={styles.text}>{memory}MB</span>
        </div>
        <div className={`${styles.description} ${styles.column}`}>
          <span className={styles.title}>Описание</span>
          <span className={styles.text}>{description}</span>
        </div>
      </div>
    </div>
  );
}
