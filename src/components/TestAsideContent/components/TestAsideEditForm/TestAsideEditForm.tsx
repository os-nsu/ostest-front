import TestForm from '@/components/forms/TestForm/TestForm.tsx';
import { Test } from '@/types/Test.ts';
import { Button } from 'primereact/button';
import styles from '@styles/components/TestsPageStyles/TestAsideEditForm.module.scss';

interface TestAsideEditFormProps {
  test: Test;
}

export default function TestAsideEditForm({ test }: TestAsideEditFormProps) {
  return (
    <div className={styles.container}>
      <TestForm />
      <Button label="Сохранить" />
    </div>
  );
}
