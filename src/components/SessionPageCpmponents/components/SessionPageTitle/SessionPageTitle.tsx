import styles from '@styles/components/SessionPageStyles/SessionPageTitle.module.scss';
import IconLink from '@public/link.svg';
import WorkStatus from '../WorkStatus/WorkStatus';
import { useNavigate } from 'react-router-dom';
import IconButton from '@/UI/buttons/IconButton/IconButton';
import DefaultButton from '@/UI/buttons/DefaultButton/DefaultButton';
import IconLeft from '@/UI/icons/IconLeft/IconLeft';

interface SessionPageTitleProps {
  id: string;
  status: string;
  name?: string;
  onDownload: () => void;
}

export default function SessionPageTitle({
  name,
  status,
  id,
  onDownload,
}: SessionPageTitleProps) {
  const navigate = useNavigate();

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
          <WorkStatus status={status} />
        </div>
        <DefaultButton label="Загрузить решение" onClick={onDownload} />
      </div>
    </div>
  );
}
