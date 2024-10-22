import TestAsideContentHeader from '@/components/TestAsideContent/components/TestAsideContentHeader/TestAsideContentHeader.tsx';
import { Test } from '@/types/Test.ts';
import AboutTest from '@/components/AboutTest/AboutTest.tsx';
import styles from '@styles/components/TestsPageStyles/TestAsideContent.module.scss';
import { useTestAsideContent } from '@/components/TestAsideContent/hooks/useTestAsideContent.ts';
import TestAsideContentEditHeader from '@/components/TestAsideContent/components/TestAsideContentEditHeader/TestAsideContentEditHeader.tsx';
import TestForm from '@/components/forms/TestForm/TestForm.tsx';

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
      {isEditing ? (
        <>
          <TestAsideContentEditHeader
            onCloseIconClick={onClose}
            onReturnIconClick={() => setIsEditing(false)}
          />
          <TestForm
            test={test}
            containerClass={styles.form}
            buttonLabel="Сохранить"
          />
        </>
      ) : (
        <>
          <TestAsideContentHeader
            testName={test.name}
            onCloseIconClick={onClose}
            onEditIconClick={() => setIsEditing(true)}
          />
          <AboutTest test={test} />
        </>
      )}
    </div>
  );
}
