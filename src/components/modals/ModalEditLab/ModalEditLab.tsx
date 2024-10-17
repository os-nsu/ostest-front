import { Dialog } from 'primereact/dialog';
import styles from '@styles/components/ModalEditLab.module.scss';
import { Button } from 'primereact/button';
import IconClose from '@public/close.svg';
import EditLabForm from '@/components/forms/EditLabForm/EditLabForm';

interface ModalEditLabProps {
  displayed?: boolean;
  onClose: () => void;
}

export default function ModalEditLab({
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
          <EditLabForm />
        </div>
      )}
    />
  );
}
