import { Dialog } from 'primereact/dialog';
import styles from '@styles/components/ModalChangePassword.module.scss';
import IconClose from '@/UI/icons/IconClose/IconClose';
import IconButton from '@/UI/buttons/IconButton/IconButton';
import ChangePasswordForm from '@/components/forms/ChangePasswordForm/ChangePasswordForm';

interface ModalCreateGroupProps {
  displayed?: boolean;
  onPrevent: () => void;
  onChange: () => void;
}

export default function ModalChangePassword({
  displayed,
  onPrevent,
  onChange,
}: ModalCreateGroupProps) {
  return (
    <Dialog
      visible={displayed}
      onHide={onPrevent}
      className={styles.wrapper}
      content={() => (
        <div className={styles.container}>
          <div className={styles.buttonContainer}>
            <span className={styles.title}>Смена пароля</span>
            <IconButton
              icon={IconClose({ color: 'black' })}
              onClick={onPrevent}
              type="no_bg"
            />
          </div>
          <ChangePasswordForm onChange={onChange} />
        </div>
      )}
    />
  );
}
