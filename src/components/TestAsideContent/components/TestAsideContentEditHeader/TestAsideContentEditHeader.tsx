import IconButton from '@UI/buttons/IconButton/IconButton.tsx';
import IconClose from '@public/close.svg';
import IconReturn from '@public/chevron-left.svg';
import styles from '@styles/components/TestsPageStyles/TestAsideContentEditHeader.module.scss';

interface TestAsideContentEditHeaderProps {
  onCloseIconClick?: () => void;
  onReturnIconClick?: () => void;
}

export default function TestAsideContentEditHeader({
  onCloseIconClick,
  onReturnIconClick,
}: TestAsideContentEditHeaderProps) {
  return (
    <div className={styles.container}>
      <IconButton icon={IconReturn} onClick={onReturnIconClick} />
      <IconButton icon={IconClose} type="no_bg" onClick={onCloseIconClick} />
    </div>
  );
}
