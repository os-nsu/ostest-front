import TestAsideContentHeader from '@/components/TestAsideContent/components/TestAsideContentHeader/TestAsideContentHeader.tsx';
import { Test } from '@/types/Test.ts';
import AboutTest from '@/components/AboutTest/AboutTest.tsx';
import styles from '@styles/components/TestsPageStyles/TestAsideContent.module.scss';
import { useTestAsideContent } from '@/components/TestAsideContent/hooks/useTestAsideContent.ts';
import TestForm from '@/components/forms/TestForm/TestForm.tsx';
import TestAsideEditForm from '@/components/TestAsideContent/components/TestAsideEditForm/TestAsideEditForm.tsx';

interface TestAsideContentProps {
  test: Test;
  onClose?: () => void;
}

export default function TestAsideContent({
  test,
  onClose,
}: TestAsideContentProps) {
  const { isEditing, setIsEditing } = useTestAsideContent();

  return (
    <div className={styles.container}>
      <TestAsideContentHeader
        testName={test.name}
        onCloseIconClick={onClose}
        onEditIconClick={() => setIsEditing(true)}
      />
      {isEditing ? (
        <TestAsideEditForm test={test} />
      ) : (
        <AboutTest test={test} />
      )}
    </div>
  );
}
