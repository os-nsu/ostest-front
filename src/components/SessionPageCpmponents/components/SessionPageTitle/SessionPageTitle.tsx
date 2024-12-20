import styles from '@styles/components/SessionPageStyles/SessionPageTitle.module.scss';
import IconLink from '@public/link.svg';
import WorkStatus from '../WorkStatus/WorkStatus';
import { useNavigate } from 'react-router-dom';
import IconButton from '@/UI/buttons/IconButton/IconButton';
import DefaultButton from '@/UI/buttons/DefaultButton/DefaultButton';
import IconLeft from '@/UI/icons/IconLeft/IconLeft';
import { ProcessStatus } from '@/types/ProcessStatus';
import { useUserRole } from '@/hooks/useUserRole';
import { RoleTypes } from '@/types/Role';

interface SessionPageTitleProps {
  id: string;
  status: string;
  name?: string;
  onUpload: () => void;
}

export default function SessionPageTitle({
  name,
  status,
  id,
  onUpload,
}: SessionPageTitleProps) {
  const navigate = useNavigate();
  const { role } = useUserRole();

  return (
    <div className={styles.container}>
      <IconButton
        icon={IconLeft({ color: 'black' })}
        type="no_bg"
        onClick={() => navigate(-1)}
      />
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          <span>Выполнение: {name}</span>
          <IconButton
            icon={IconLink}
            type="no_bg"
            onClick={() => navigate(`/lab/${id}`)}
          />
          <WorkStatus text={status} status={ProcessStatus.INPROGRESS} />
        </div>
        {role !== RoleTypes.STUDENT ? undefined : (
          <DefaultButton label="Загрузить решение" onClick={onUpload} />
        )}
      </div>
    </div>
  );
}
