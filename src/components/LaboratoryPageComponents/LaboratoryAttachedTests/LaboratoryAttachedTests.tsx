import styles from '@styles/components/LaboratoryPageTitle.module.scss';

interface LaboratoryAttachedTestsProps {
  tests: string[];
}

export default function LaboratoryAttachedTests({
  tests,
}: LaboratoryAttachedTestsProps) {
  return (
    <>
      {tests.length > 0 && (
        <div className={styles.container}>
          <div className={styles.title}>Прикрепленные тесты</div>
          <ul>
            {tests.map((test, index) => (
              <li className={styles.content} key={index}>
                {test}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
