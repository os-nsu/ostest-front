import TestsPageTitle from '@/components/TestsPageComponents/TestsPageContent/components/TestsPageTitle/TestsPageTitle.tsx';
import styles from '@styles/components/TestsPageStyles/TestsPageContent.module.scss';
import { useTestsPageContent } from '@/components/TestsPageComponents/TestsPageContent/hooks/useTestsPageContent.ts';

export default function TestsPageContent() {
  const { tests } = useTestsPageContent();
  return (
    <div className={styles.container}>
      <TestsPageTitle />
    </div>
  );
}
