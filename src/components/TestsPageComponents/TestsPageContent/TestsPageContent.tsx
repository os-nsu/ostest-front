import TestsPageTitle from '@/components/TestsPageComponents/TestsPageContent/components/TestsPageTitle/TestsPageTitle.tsx';
import styles from '@styles/components/TestsPageStyles/TestsPageContent.module.scss';

export default function TestsPageContent() {
  return (
    <div className={styles.container}>
      <TestsPageTitle />
    </div>
  );
}
