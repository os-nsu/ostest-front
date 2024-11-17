import IconPlus from '@public/plus.svg';
import styles from '@styles/components/TestsPageStyles/TestsPageTitle.module.scss';
import DefaultButton from '@UI/buttons/DefaultButton/DefaultButton.tsx';

interface TestsPageTitleProps {
  onCreateTest?: () => void;
}

export default function TestsPageTitle({ onCreateTest }: TestsPageTitleProps) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Тестирование</span>
      <DefaultButton icon={IconPlus} label="Создать" onClick={onCreateTest} />
    </div>
  );
}
