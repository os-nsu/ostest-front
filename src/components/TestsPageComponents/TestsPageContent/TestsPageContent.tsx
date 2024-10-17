import TestsPageTitle from '@/components/TestsPageComponents/TestsPageContent/components/TestsPageTitle/TestsPageTitle.tsx';
import styles from '@styles/components/TestsPageStyles/TestsPageContent.module.scss';
import { useTestsPageContent } from '@/components/TestsPageComponents/TestsPageContent/hooks/useTestsPageContent.ts';
import TestsList from '@/components/TestsPageComponents/TestsPageContent/components/TestsList/TestsList.tsx';

export default function TestsPageContent() {
  const { tests } = useTestsPageContent();
  return (
    <div className={styles.container}>
      <TestsPageTitle />
      {!tests.length ? (
        <span className={styles.placeholder}>Создайте первое тестирование</span>
      ) : (
        <TestsList tests={tests} />
      )}
    </div>
  );
}
