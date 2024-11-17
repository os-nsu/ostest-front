import TestAsideContentHeader from '@/components/TestAsideContent/components/TestAsideContentHeader/TestAsideContentHeader.tsx';
import { Test } from '@/types/Test.ts';
import AboutTest from '@/components/AboutTest/AboutTest.tsx';
import styles from '@styles/components/TestsPageStyles/TestAsideContent.module.scss';
import { useTestAsideContent } from '@/components/TestAsideContent/hooks/useTestAsideContent.ts';
import TestForm from '@/components/forms/TestForm/TestForm.tsx';

interface TestAsideContentProps {
  test?: Test;
  onClose?: () => void;
  onEditTest?: () => void;
}

export default function TestAsideContent({
  test,
  onClose,
  onEditTest,
}: TestAsideContentProps) {
  const { isEditing, setIsEditing } = useTestAsideContent();

  if (!test) {
    return;
  }

  return (
    <div className={styles.container}>
      <TestAsideContentHeader
        testName={test.name}
        onCloseIconClick={onClose}
        onEditIconClick={() => setIsEditing(true)}
      />
      {isEditing ? (
        <TestForm
          test={test}
          containerClass={styles.form}
          buttonLabel="Сохранить"
          onResponded={onEditTest}
          isEditing
        />
      ) : (
        <AboutTest test={test} />
      )}
    </div>
  );
}
