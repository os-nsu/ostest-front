import TestForm from '@/components/forms/TestForm/TestForm.tsx';
import { Dialog } from 'primereact/dialog';
import styles from '@styles/components/ModalCreateTest.module.scss';

export default function ModalCreateTest() {
  return (
    <Dialog
      visible={true}
      onHide={() => {}}
      className={styles.wrapper}
      content={() => (
        <div className={styles.container}>
          <span className={styles.title}>Создать тест</span>
          <TestForm />
        </div>
      )}
    />
  );
}
