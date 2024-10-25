import { Test } from '@/types/Test';
import IconButton from '@/UI/buttons/IconButton/IconButton.tsx';
import IconClose from '@/UI/icons/IconClose/IconClose';
import styles from '@styles/components/SelectedTests.module.scss';

interface SelectedTestsProps {
  tests: Test[];
  onDeselect: (test: Test) => void;
}

export default function SelectedTests({
  tests,
  onDeselect,
}: SelectedTestsProps) {
  return (
    <div className={styles.testsWrapper}>
      Прикреплённые тесты
      <div className={styles.attachedTests}>
        {tests.map(test => (
          <div key={test.id} className={styles.selectedTest}>
            {test.name}
            <IconButton
              icon={IconClose({ color: 'white' })}
              onClick={() => onDeselect(test)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
