import { Test } from '@/types/Test.ts';
import AboutTestDataBlock from '@/components/AboutTest/components/AboutTestDataBlock/AboutTestDataBlock.tsx';
import { useTestCategoryName } from '@/hooks/useTestCategoryName.ts';
import styles from '@styles/components/TestsPageStyles/AboutTest.module.scss';

interface AboutTestProps {
  test: Test;
}

export default function AboutTest({ test }: AboutTestProps) {
  const { category, description } = test;

  const blocks = [
    { title: 'Статус', text: 'Активен' },
    { title: 'Описание', text: description },
    { title: 'Категория', text: useTestCategoryName(category) },
    { title: 'Загруженный файл', text: 'test.bin' },
  ];

  return (
    <div className={styles.container}>
      {blocks.map(({ title, text }, index) => (
        <AboutTestDataBlock title={title} text={text} key={index} />
      ))}
    </div>
  );
}
