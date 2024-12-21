import IconButton from '@UI/buttons/IconButton/IconButton.tsx';
import IconTrash from '@public/trash.svg';
import IconPencil from '@public/pencil_line.svg';
import IconClose from '@public/close.svg';
import styles from '@styles/components/TestsPageStyles/TestAsideContentHeader.module.scss';
import { RoleTypes } from '@/types/Role';
import { useAppSelector } from '@/store/hooks';
import { selectRole } from '@/store/role/roleSelectors';

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
  const role = useAppSelector(selectRole);

  return (
    <div className={styles.container}>
      <span className={styles.title}>{groupName}</span>
      <div className={styles.buttonContainer}>
        {role === RoleTypes.ADMIN ? (
          <div className={styles.menuContainer}>
            <IconButton icon={IconPencil} onClick={onEditIconClick} />
            <IconButton icon={IconTrash} onClick={onDeleteIconClick} />
          </div>
        ) : undefined}
        <IconButton icon={IconClose} type="no_bg" onClick={onCloseIconClick} />
      </div>
    </div>
  );
}
