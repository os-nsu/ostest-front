import styles from '@styles/components/LaboratoryPageTitle.module.scss';
import IconButton from '@/UI/buttons/IconButton/IconButton.tsx';
import IconPebcil from '@public/pencil_line.svg';
import IconTrash from '@public/trash.svg';
import { useNavigate } from 'react-router-dom';
import IconLeft from '@/UI/icons/IconLeft/IconLeft';

interface LaboratoryPageTitleProps {
  name: string;
  onDelete: () => void;
  onEdit: () => void;
}

export default function LaboratoryPageTitle({
  name,
  onDelete,
  onEdit,
}: LaboratoryPageTitleProps) {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <div className={styles.nameContainer}>
        <IconButton
          icon={IconLeft({ color: 'white' })}
          onClick={() => navigate(-1)}
        />
        <div>{name}</div>
      </div>
      <div className={styles.buttons}>
        <IconButton icon={IconPebcil} onClick={onEdit} />
        <IconButton icon={IconTrash} onClick={onDelete} />
      </div>
    </div>
  );
}
