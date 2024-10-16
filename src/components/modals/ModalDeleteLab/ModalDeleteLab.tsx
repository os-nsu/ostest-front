import { Dialog } from 'primereact/dialog';
import styles from '@styles/components/ModalDeleteLab.module.scss';
import { Button } from 'primereact/button';
import IconClose from '@public/close.svg';
// import { useState } from 'react';
import DeleteLabForm from '@/components/forms/DeleteLabForm/DeleteLabForm';

interface ModalDeleteLabProps {
  displayed?: boolean;
  labName?: string;
  id: string;
  onClose: () => void;
}

export default function ModalDeleteLab({
  displayed,
  labName,
  id,
  onClose,
}: ModalDeleteLabProps) {
  return (
    <Dialog
      visible={displayed}
      onHide={() => {}}
      className={styles.wrapper}
      content={() => (
        <div className={styles.container}>
          <div className={styles.buttonContainer}>
            <Button
              className={styles.close}
              icon={<img src={IconClose} alt="" />}
              rounded
              onClick={onClose}
            />
          </div>
          <span className={styles.title}>
            Вы уверены, что хотите удалить {labName}?
          </span>
          <DeleteLabForm onClose={onClose} id={id} />
        </div>
      )}
    />
  );
}
