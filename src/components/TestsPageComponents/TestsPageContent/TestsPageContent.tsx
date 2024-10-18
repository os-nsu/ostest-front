import TestsPageTitle from '@/components/TestsPageComponents/TestsPageContent/components/TestsPageTitle/TestsPageTitle.tsx';
import styles from '@styles/components/TestsPageStyles/TestsPageContent.module.scss';
import { useTestsPageContent } from '@/components/TestsPageComponents/TestsPageContent/hooks/useTestsPageContent.ts';
import TestsList from '@/components/TestsPageComponents/TestsPageContent/components/TestsList/TestsList.tsx';
import DefaultAside from '@/components/asides/DefaultAside/DefaultAside.tsx';
import AboutTest from '@/components/AboutTest/AboutTest.tsx';

export default function TestsPageContent() {
  const { tests, mock, isAsideDisplayed, setAsideDisplayed } =
    useTestsPageContent();

  return (
    <div className={styles.container}>
      <TestsPageTitle />
      {!tests.length ? (
        <span className={styles.placeholder}>Создайте первое тестирование</span>
      ) : (
        <TestsList
          tests={tests}
          onSelectTest={test => setAsideDisplayed(true)}
        />
      )}
      <AboutTest test={mock[0]} />
      <DefaultAside
        visible={isAsideDisplayed}
        onHide={() => setAsideDisplayed(false)}
      />
    </div>
  );
}
