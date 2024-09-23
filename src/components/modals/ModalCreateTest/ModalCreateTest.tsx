import TestForm from '@/components/forms/TestForm/TestForm.tsx';
import { Dialog } from 'primereact/dialog';
import styles from '@styles/components/ModalCreateTest.module.scss';
import { Button } from 'primereact/button';
import IconClose from '@public/close.svg';

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
          <Button
            className={styles.close}
            icon={<img src={IconClose} alt="" />}
            severity="secondary"
            raised={false}
            rounded
          />
        </div>
      )}
    />
  );
}
