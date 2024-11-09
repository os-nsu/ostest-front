import { Dialog } from 'primereact/dialog';
import styles from '@styles/components/ModalCreateGroup.module.scss';
import IconClose from '@/UI/icons/IconClose/IconClose';
import IconButton from '@/UI/buttons/IconButton/IconButton';
import CreateGroupForm from '@/components/forms/CreateGroupForm/CreateGroupForm';

interface ModalCreateGroupProps {
  displayed?: boolean;
  onPrevent: () => void;
  onCreate: () => void;
}

export default function ModalCreateGroup({
  displayed,
  onPrevent,
  onCreate,
}: ModalCreateGroupProps) {
  return (
    <Dialog
      visible={displayed}
      onHide={onPrevent}
      className={styles.wrapper}
      content={() => (
        <div className={styles.container}>
          <div className={styles.buttonContainer}>
            <span className={styles.title}>Создание группы</span>
            <IconButton
              icon={IconClose({ color: 'black' })}
              onClick={onPrevent}
              type="no_bg"
            />
          </div>
          <CreateGroupForm onUpdate={onCreate} />
        </div>
      )}
    />
  );
}
