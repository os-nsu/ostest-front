import { Test } from '@/types/Test';
import styles from '@styles/components/LaboratoryPageStyles/LaboratoryAttachedTests.module.scss';

interface LaboratoryAttachedTestsProps {
  tests: Test[];
}

export default function LaboratoryAttachedTests({
  tests,
}: LaboratoryAttachedTestsProps) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Прикрепленные тесты</div>
      {tests.map((test, index) => (
        <div className={styles.testContainer} key={index}>
          <div className={styles.circle}></div>
          <div className={styles.test}>{test.name}</div>
        </div>
      ))}
    </div>
  );
}
