import { Dialog } from 'primereact/dialog';
import styles from '@styles/components/ModalLab.module.scss';
import IconClose from '@/UI/icons/IconClose/IconClose';
import { Laboratory } from '@/types/Laboratory';
import LabForm from '@/components/forms/LabForm/LabForm';
import IconButton from '@/UI/buttons/IconButton/IconButton';

interface ModalEditLabProps {
  laboratory: Laboratory;
  displayed?: boolean;
  id?: string;
  onPrevent: () => void;
  onUpdate: () => void;
}

export default function ModalEditLab({
  laboratory,
  displayed,
  onPrevent,
  onUpdate,
}: ModalEditLabProps) {
  return (
    <Dialog
      visible={displayed}
      onHide={onPrevent}
      className={styles.wrapper}
      content={() => (
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <span className={styles.title}>Редактирование лаб. работы</span>
            <IconButton
              icon={IconClose({ color: '#6B7280' })}
              onClick={onPrevent}
              type="no_bg"
              className="closeButton"
            />
          </div>
          <div className={styles.formContainer}>
            <LabForm
              isEditing={true}
              laboratory={laboratory}
              onUpdate={onUpdate}
            />
          </div>
        </div>
      )}
    />
  );
}
