import IconButton from '@UI/buttons/IconButton/IconButton.tsx';
import IconTrash from '@public/trash.svg';
import IconPencil from '@public/pencil_line.svg';
import IconClose from '@public/close.svg';
import styles from '@styles/components/TestsPageStyles/TestAsideContentHeader.module.scss';

interface GroupAsideContentHeaderProps {
  groupName: string;
  onCloseIconClick?: () => void;
  onEditIconClick?: () => void;
  onDeleteIconClick?: () => void;
}

export default function GroupAsideContentHeader({
  groupName,
  onCloseIconClick,
  onEditIconClick,
  onDeleteIconClick,
}: GroupAsideContentHeaderProps) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{groupName}</span>
      <div className={styles.buttonContainer}>
        <div className={styles.menuContainer}>
          <IconButton icon={IconPencil} onClick={onEditIconClick} />
          <IconButton icon={IconTrash} onClick={onDeleteIconClick} />
        </div>
        <IconButton icon={IconClose} type="no_bg" onClick={onCloseIconClick} />
      </div>
    </div>
  );
}
