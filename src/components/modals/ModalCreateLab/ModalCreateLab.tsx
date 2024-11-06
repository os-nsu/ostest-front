import LabForm from '@/components/forms/LabForm/LabForm.tsx';
import { Dialog } from 'primereact/dialog';
import styles from '@styles/components/ModalCreateLab.module.scss';
import { Button } from 'primereact/button';
import IconClose from '@public/close.svg';
import { useState } from 'react';

interface ModalCreateLabProps {
  displayed?: boolean;
  onPrevent: () => void;
  onUpdate: () => void;
}

export default function ModalCreateLab({
  displayed,
  onUpdate,
  onPrevent,
}: ModalCreateLabProps) {
  const handleUpdate = () => {
    onUpdate();
    onPrevent();
  };

  return (
    <Dialog
      visible={displayed}
      onHide={onPrevent}
      className={styles.wrapper}
      content={() => (
        <div className={styles.container}>
          <span className={styles.title}>Добавить лаб. работу</span>
          <LabForm isEditing={false} onUpdate={handleUpdate} />
          <Button
            className={styles.close}
            icon={<img src={IconClose} alt="" />}
            rounded
            onClick={onPrevent}
          />
        </div>
      )}
    />
  );
}
