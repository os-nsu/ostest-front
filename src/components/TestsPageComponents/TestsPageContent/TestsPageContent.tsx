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
    isAsideDisplayed,
    setAsideDisplayed,
    isCreateModalDisplayed,
    setCreateModalDisplayed,
  } = useTestsPageContent();

  console.log(isCreateModalDisplayed);
  return (
    <div className={styles.container}>
      <TestsPageTitle onCreateTest={() => setCreateModalDisplayed(true)} />
      {!tests.length ? (
        <span className={styles.placeholder}>Создайте первое тестирование</span>
      ) : (
        <TestsList
          tests={tests}
          onSelectTest={test => setAsideDisplayed(true)}
        />
      )}
      <DefaultAside
        visible={isAsideDisplayed}
        onHide={() => setAsideDisplayed(false)}
        style={{ width: '500px' }}
        children={
          <TestAsideContent
            test={tests[2]}
            onClose={() => setAsideDisplayed(false)}
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
