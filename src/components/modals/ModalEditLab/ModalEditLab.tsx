import { Dialog } from 'primereact/dialog';
import styles from '@styles/components/ModalEditLab.module.scss';
import { Button } from 'primereact/button';
import IconClose from '@public/close.svg';
import { Laboratory } from '@/types/Laboratory';
import LabForm from '@/components/forms/LabForm/LabForm';

interface ModalEditLabProps {
  laboratory: Laboratory;
  displayed?: boolean;
  id?: string;
  onPrevent: () => void;
}

export default function ModalEditLab({
  laboratory,
  displayed,
  onPrevent,
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
              onClick={onPrevent}
            />
          </div>
          <LabForm isEditing={true} {...laboratory} />
        </div>
      )}
    />
  );
}
