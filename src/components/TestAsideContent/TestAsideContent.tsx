import TestAsideContentHeader from '@/components/TestAsideContent/components/TestAsideContentHeader/TestAsideContentHeader.tsx';
import { Test } from '@/types/Test.ts';
import AboutTest from '@/components/AboutTest/AboutTest.tsx';
import styles from '@styles/components/TestsPageStyles/TestAsideContent.module.scss';

interface TestAsideContentProps {
  test: Test;
}

export default function TestAsideContent({ test }: TestAsideContentProps) {
  return (
    <div className={styles.container}>
      <TestAsideContentHeader testName={test.name} />
      <AboutTest test={test} />
    </div>
  );
}
