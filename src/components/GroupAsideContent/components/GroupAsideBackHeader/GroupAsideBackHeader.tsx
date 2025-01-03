import IconLeft from '@/UI/icons/IconLeft/IconLeft';
import IconButton from '@UI/buttons/IconButton/IconButton.tsx';
import IconClose from '@public/close.svg';
import styles from '@styles/components/TestsPageStyles/TestAsideContentHeader.module.scss';

interface GroupAsideBackHeaderProps {
  groupName: string;
  onCloseIconClick?: () => void;
  onBackIconClick?: () => void;
}

export default function GroupAsideBackHeader({
  groupName,
  onCloseIconClick,
  onBackIconClick,
}: GroupAsideBackHeaderProps) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{groupName}</span>
      <div className={styles.buttonContainer}>
        <div className={styles.menuContainer}>
          <IconButton
            icon={IconLeft({ color: 'white' })}
            onClick={onBackIconClick}
          />
        </div>
        <IconButton icon={IconClose} type="no_bg" onClick={onCloseIconClick} />
      </div>
    </div>
  );
}
