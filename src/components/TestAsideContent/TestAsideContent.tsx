import TestAsideContentHeader from '@/components/TestAsideContent/components/TestAsideContentHeader/TestAsideContentHeader.tsx';
import { Test } from '@/types/Test.ts';
import AboutTest from '@/components/AboutTest/AboutTest.tsx';
import styles from '@styles/components/TestsPageStyles/TestAsideContent.module.scss';

interface TestAsideContentProps {
  test: Test;
  onClose?: () => void;
}

export default function TestAsideContent({
  test,
  onClose,
}: TestAsideContentProps) {
  return (
    <div className={styles.container}>
      <TestAsideContentHeader testName={test.name} onCloseIconClick={onClose} />
      <AboutTest test={test} />
    </div>
  );
}
