import styles from '@styles/components/LaboratoryPageTitle.module.scss';
import IconButton from '@/UI/buttons/IconButton/IconButton.tsx';
import IconPebcil from '@public/pencil_line.svg';
import IconTrash from '@public/trash.svg';
import IconLeft from '@public/chevron-left.svg';
// import { useNavigate } from 'react-router-dom';

interface LaboratoryPageTitleProps {
  name: string;
}

// const navigate = useNavigate();

export default function LaboratoryPageTitle({
  name,
}: LaboratoryPageTitleProps) {
  return (
    <div className={styles.header}>
      <div className={styles.nameContainer}>
        {/* <IconButton icon={IconLeft} onClick={() => navigate(-1)} /> */}
        <IconButton icon={IconLeft} onClick={() => window.history.back()} />
        <div>{name}</div>
      </div>
      <div className={styles.buttons}>
        <IconButton icon={IconPebcil} />
        <IconButton icon={IconTrash} />
      </div>
    </div>
  );
}
