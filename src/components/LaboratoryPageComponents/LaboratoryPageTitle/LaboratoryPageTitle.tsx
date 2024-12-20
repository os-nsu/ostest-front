import styles from '@styles/components/LaboratoryPageStyles/LaboratoryPageTitle.module.scss';
import IconButton from '@/UI/buttons/IconButton/IconButton.tsx';
import IconPebcil from '@public/pencil_line.svg';
import IconTrash from '@public/trash.svg';
import { useNavigate } from 'react-router-dom';
import IconLeft from '@/UI/icons/IconLeft/IconLeft';
import DefaultButton from '@/UI/buttons/DefaultButton/DefaultButton';
import { useLaboratoryPageTitle } from './hooks/useLaboratoryPageTitle';
import { RoleTypes } from '@/types/Role';
import { useUserRole } from '@/hooks/useUserRole';

interface LaboratoryPageTitleProps {
  name: string;
  id: string;
  onDelete: () => void;
  onEdit: () => void;
}

export default function LaboratoryPageTitle({
  name,
  id,
  onDelete,
  onEdit,
}: LaboratoryPageTitleProps) {
  const navigate = useNavigate();
  const { onClick } = useLaboratoryPageTitle(+id);
  const { role } = useUserRole();

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
        {role === RoleTypes.STUDENT ? (
          <DefaultButton
            label="Начать выполнять"
            onClick={onClick}
            buttonClass={styles.buttonNavigate}
          />
        ) : undefined}
        {role === RoleTypes.ADMIN ? (
          <>
            <IconButton icon={IconPebcil} onClick={onEdit} />
            <IconButton icon={IconTrash} onClick={onDelete} />
          </>
        ) : undefined}
      </div>
    </div>
  );
}
