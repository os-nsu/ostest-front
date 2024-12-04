import { TestResult } from '@/types/Attempt';
import styles from '@styles/components/SessionPageStyles/TestsStatusBlock.module.scss';

interface TestsStatusBlockProps {
  testResults: TestResult[];
}

export default function TestsStatusBlock({
  testResults,
}: TestsStatusBlockProps) {
  const testGroups = [];
  for (let i = 0; i < testResults.length; i += 5) {
    testGroups.push(testResults.slice(i, i + 5));
  }

  return (
    <div className={styles.testsStatusBlock}>
      {testGroups.map((group, index) => (
        <div key={index} className={styles.testsStatusLine}>
          {group.map((test, index) => (
            <div
              key={index}
              className={`${styles.testsStatus} ${
                test.isPassed ? styles.success : styles.failure
              }`}></div>
          ))}
        </div>
      ))}
    </div>
  );
}
