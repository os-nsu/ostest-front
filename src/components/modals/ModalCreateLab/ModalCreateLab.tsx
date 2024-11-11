import LabForm from '@/components/forms/LabForm/LabForm.tsx';
import { Dialog } from 'primereact/dialog';
import styles from '@styles/components/ModalCreateLab.module.scss';
import IconClose from '@/UI/icons/IconClose/IconClose';
import IconButton from '@UI/buttons/IconButton/IconButton.tsx';

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
          <div className={styles.titleContainer}>
            <span className={styles.title}>Добавить лаб. работу</span>
            <IconButton
              onClick={onPrevent}
              icon={IconClose({ color: '#6B7280' })}
              type="no_bg"
              className="closeButton"
            />
          </div>
          <LabForm isEditing={false} onUpdate={handleUpdate} />
        </div>
      )}
    />
  );
}
