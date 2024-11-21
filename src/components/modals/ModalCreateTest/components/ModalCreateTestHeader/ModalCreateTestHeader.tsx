import styles from '@styles/components/TestsPageStyles/ModalCreateTestHeader.module.scss';
import IconButton from '@UI/buttons/IconButton/IconButton.tsx';
import IconClose from '@public/close.svg';

interface ModalCreateTestHeaderProps {
  title?: string;
  onClose?: () => void;
}

export default function ModalCreateTestHeader({
  title,
  onClose,
}: ModalCreateTestHeaderProps) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title || ''}</span>
      <IconButton type="no_bg" icon={IconClose} onClick={onClose} />
    </div>
  );
}
