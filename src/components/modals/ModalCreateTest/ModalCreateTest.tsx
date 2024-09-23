import TestForm from '@/components/forms/TestForm/TestForm.tsx';
import { Dialog } from 'primereact/dialog';
import styles from '@styles/components/ModalCreateTest.module.scss';
import { Button } from 'primereact/button';
import IconClose from '@public/close.svg';
import { useState } from 'react';

interface ModalCreateTestProps {
  displayed?: boolean;
}

export default function ModalCreateTest({ displayed }: ModalCreateTestProps) {
  const [isDisplayed, setDisplayed] = useState(displayed);

  return (
    <Dialog
      visible={isDisplayed}
      onHide={() => {}}
      className={styles.wrapper}
      content={() => (
        <div className={styles.container}>
          <span className={styles.title}>Создать тест</span>
          <TestForm />
          <Button
            className={styles.close}
            icon={<img src={IconClose} alt="" />}
            rounded
            onClick={() => setDisplayed(false)}
          />
        </div>
      )}
    />
  );
}
