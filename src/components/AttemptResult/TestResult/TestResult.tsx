import styles from '@styles/components/TestResult.module.scss';

interface TestResultProps {
  testName: string;
  isPassed: boolean;
  time: string;
  memory: string;
  description?: string;
}

export default function TestResult({
  testName,
  isPassed,
  time,
  description,
  memory,
}: TestResultProps) {
  const statusClass = isPassed ? styles.accepted : styles.error;
  const status = isPassed ? 'Пройден' : 'Не пройден';
  const splitDescription = description ? description.split(/\sE\s/) : [];

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <span className={[styles.title, styles.name].join(' ')}>
          Тест {testName}
        </span>
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
          {splitDescription.map((el, index) => (
            <span key={index} className={styles.text}>
              {el}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
