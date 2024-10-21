import { Test } from '@/types/Test';
import styles from '@styles/components/LaboratoryPageTitle.module.scss';

interface LaboratoryAttachedTestsProps {
  tests: Test[];
}

export default function LaboratoryAttachedTests({
  tests,
}: LaboratoryAttachedTestsProps) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Прикрепленные тесты</div>
      <ul>
        {tests.map((test, index) => (
          <li className={styles.content} key={index}>
            {test.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
