import styles from '@styles/components/TestsPageStyles/TestsPageContent.module.scss';
import TestsList from '@/components/TestsPageComponents/TestsPageContent/components/TestsList/TestsList.tsx';
import { MinimizedTest } from '@/types/Test.ts';
import DefaultLoader from '@UI/loaders/DefaultLoader/DefaultLoader.tsx';

interface TestListBlockProps {
  loading?: boolean;
  tests: MinimizedTest[];
  onSelectTest: (id?: number) => void;
}

export default function TestListBlock({
  loading,
  tests,
  onSelectTest,
}: TestListBlockProps) {
  if (loading) {
    return <DefaultLoader width="40px" height="40px" />;
  }

  if (!tests.length) {
    return (
      <span className={styles.placeholder}>Создайте первое тестирование</span>
    );
  }

  return <TestsList tests={tests} onSelectTest={onSelectTest} />;
}
