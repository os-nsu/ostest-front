import LabForm from '@/components/forms/LabForm/LabForm.tsx';
import { Dialog } from 'primereact/dialog';
import styles from '@styles/components/ModalCreateLab.module.scss';
import { Button } from 'primereact/button';
import IconClose from '@public/close.svg';
import { useState } from 'react';

interface ModalCreateLabProps {
  displayed?: boolean;
}

export default function ModalCreateLab({ displayed }: ModalCreateLabProps) {
  const [isDisplayed, setDisplayed] = useState(displayed);

  return (
    <Dialog
      visible={isDisplayed}
      onHide={() => {}}
      className={styles.wrapper}
      content={() => (
        <div className={styles.container}>
          <span className={styles.title}>Добавить лаб. работу</span>
          <LabForm />
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
