import TestForm from '@/components/forms/TestForm/TestForm.tsx';
import { Test } from '@/types/Test.ts';
import styles from '@styles/components/TestsPageStyles/TestAsideEditForm.module.scss';

interface TestAsideEditFormProps {
  test: Test;
}

export default function TestAsideEditForm({ test }: TestAsideEditFormProps) {
  return <TestForm containerClass={styles.form} buttonLabel="Сохранить" />;
}
