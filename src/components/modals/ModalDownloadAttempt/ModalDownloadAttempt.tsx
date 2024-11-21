import { Dialog } from 'primereact/dialog';
import styles from '@styles/components/ModalDownloadAttempt.module.scss';
import IconButton from '@/UI/buttons/IconButton/IconButton';
import IconClose from '@/UI/icons/IconClose/IconClose';
import DownloadAttemptForm from '@/components/forms/DownloadAttemptForm/DownloadAttemptForm';

interface ModalDownloadAttemptProps {
  id: string;
  displayed?: boolean;
  onPrevent: () => void;
  onDownload: () => void;
}

export default function ModalDownloadAttempt({
  id,
  displayed,
  onPrevent,
  onDownload,
}: ModalDownloadAttemptProps) {
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
          <DownloadAttemptForm id={id} onDownload={onDownload} />
        </div>
      )}
    />
  );
}
