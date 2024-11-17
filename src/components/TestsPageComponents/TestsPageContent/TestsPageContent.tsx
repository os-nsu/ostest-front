import TestsPageTitle from '@/components/TestsPageComponents/TestsPageContent/components/TestsPageTitle/TestsPageTitle.tsx';
import styles from '@styles/components/TestsPageStyles/TestsPageContent.module.scss';
import { useTestsPageContent } from '@/components/TestsPageComponents/TestsPageContent/hooks/useTestsPageContent.ts';
import DefaultAside from '@/components/asides/DefaultAside/DefaultAside.tsx';
import TestAsideContent from '@/components/TestAsideContent/TestAsideContent.tsx';
import ModalCreateTest from '@/components/modals/ModalCreateTest/ModalCreateTest.tsx';
import TestListBlock from '@/components/TestsPageComponents/TestsPageContent/components/TestListBlock/TestListBlock.tsx';

export default function TestsPageContent() {
  const {
    tests,
    selectedTest,
    isAsideDisplayed,
    isCreateModalDisplayed,
    isListLoading,
    setAsideDisplayed,
    setCreateModalDisplayed,
    requestSelectedTest,
    onCloseAside,
    onEditTest,
  } = useTestsPageContent();

  return (
    <div className={styles.container}>
      <TestsPageTitle onCreateTest={() => setCreateModalDisplayed(true)} />
      <TestListBlock
        loading={isListLoading}
        tests={tests}
        onSelectTest={requestSelectedTest}
      />
      <DefaultAside
        visible={isAsideDisplayed}
        onHide={() => setAsideDisplayed(false)}
        style={{ width: '500px' }}
        children={
          <TestAsideContent
            test={selectedTest}
            onClose={onCloseAside}
            onEditTest={onEditTest}
          />
        }
      />

      <ModalCreateTest
        displayed={isCreateModalDisplayed}
        onClose={() => setCreateModalDisplayed(false)}
      />
    </div>
  );
}
