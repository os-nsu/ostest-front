import { Dialog } from 'primereact/dialog';
import styles from '@styles/components/ModalDownloadSolution.module.scss';
import IconButton from '@/UI/buttons/IconButton/IconButton';
import IconClose from '@/UI/icons/IconClose/IconClose';
import DownloadSolutionForm from '@/components/forms/DownloadSolutionForm/DownloadSolutionForm';

interface ModalDownloadSolutionProps {
  id: string;
  displayed?: boolean;
  onPrevent: () => void;
  onDownload: () => void;
}

export default function ModalDownloadSolution({
  id,
  displayed,
  onPrevent,
  onDownload,
}: ModalDownloadSolutionProps) {
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
          <DownloadSolutionForm id={id} onDownload={onDownload} />
        </div>
      )}
    />
  );
}
