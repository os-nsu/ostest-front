import TestsPageTitle from '@/components/TestsPageComponents/TestsPageContent/components/TestsPageTitle/TestsPageTitle.tsx';
import styles from '@styles/components/TestsPageStyles/TestsPageContent.module.scss';
import { useTestsPageContent } from '@/components/TestsPageComponents/TestsPageContent/hooks/useTestsPageContent.ts';
import TestsList from '@/components/TestsPageComponents/TestsPageContent/components/TestsList/TestsList.tsx';
import DefaultAside from '@/components/asides/DefaultAside/DefaultAside.tsx';
import TestAsideContent from '@/components/TestAsideContent/TestAsideContent.tsx';
import ModalCreateTest from '@/components/modals/ModalCreateTest/ModalCreateTest.tsx';

export default function TestsPageContent() {
  const {
    tests,
    selectedTest,
    isAsideDisplayed,
    isCreateModalDisplayed,
    setAsideDisplayed,
    setCreateModalDisplayed,
    requestSelectedTest,
    onCloseAside,
  } = useTestsPageContent();

  return (
    <div className={styles.container}>
      <TestsPageTitle onCreateTest={() => setCreateModalDisplayed(true)} />
      {!tests.length ? (
        <span className={styles.placeholder}>Создайте первое тестирование</span>
      ) : (
        <TestsList tests={tests} onSelectTest={requestSelectedTest} />
      )}
      <DefaultAside
        visible={isAsideDisplayed}
        onHide={() => setAsideDisplayed(false)}
        style={{ width: '500px' }}
        children={
          <TestAsideContent test={selectedTest} onClose={onCloseAside} />
        }
      />

      <ModalCreateTest
        displayed={isCreateModalDisplayed}
        onClose={() => setCreateModalDisplayed(false)}
      />
    </div>
  );
}
