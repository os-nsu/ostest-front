import { Dialog } from 'primereact/dialog';
import styles from '@styles/components/ModalDownloadAttempt.module.scss';
import IconButton from '@/UI/buttons/IconButton/IconButton';
import IconClose from '@/UI/icons/IconClose/IconClose';
import UploadAttemptForm from '@/components/forms/DownloadAttemptForm/UploadAttemptForm';

interface ModalUploadAttemptProps {
  id: string;
  displayed?: boolean;
  onPrevent: () => void;
  onUpload: () => void;
}

export default function ModalUploadAttempt({
  id,
  displayed,
  onPrevent,
  onUpload,
}: ModalUploadAttemptProps) {
  return (
    <Dialog
      visible={displayed}
      onHide={onPrevent}
      className={styles.wrapper}
      content={() => (
        <div className={styles.container}>
          <div className={styles.buttonContainer}>
            <span className={styles.title}>Сдать работу</span>
            <IconButton
              icon={IconClose({ color: 'black' })}
              onClick={onPrevent}
              type="no_bg"
            />
          </div>
          <UploadAttemptForm id={id} onUpload={onUpload} />
        </div>
      )}
    />
  );
}
