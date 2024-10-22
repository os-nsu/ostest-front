import { Dialog } from 'primereact/dialog';
import styles from '@styles/components/ModalEditLab.module.scss';
import { Button } from 'primereact/button';
import IconClose from '@public/close.svg';
import EditLabForm from '@/components/forms/EditLabForm/EditLabForm';
import { Laboratory } from '@/types/Laboratory';

interface ModalEditLabProps {
  laboratory: Laboratory;
  displayed?: boolean;
  id?: string;
  onClose: () => void;
}

export default function ModalEditLab({
  laboratory,
  displayed,
  onClose,
}: ModalEditLabProps) {
  return (
    <Dialog
      visible={displayed}
      onHide={() => {}}
      className={styles.wrapper}
      content={() => (
        <div className={styles.container}>
          <div className={styles.buttonContainer}>
            <span className={styles.title}>Редактирование лаб. работы</span>
            <Button
              className={styles.close}
              icon={<img src={IconClose} alt="" />}
              rounded
              onClick={onClose}
            />
          </div>
          <EditLabForm laboratory={laboratory} />
        </div>
      )}
    />
  );
}
