import styles from '@styles/components/Lab.module.scss';
import { Laboratory } from '../../types/laboratory';

interface LabProps {
  laboratory: Laboratory;
}

export default function Lab({ laboratory }: LabProps) {
  return (
    <div>
      <div className={styles.lab__info}>
        <p className={styles.lab__name}>{laboratory.name}</p>
        <p className={styles.lab__deadline}>
          Дэдлайн:{' '}
          <span className={styles.lab__date}>
            {new Date(laboratory.deadline).toLocaleDateString('ru-RU')}
          </span>
        </p>
      </div>
      <p className={styles.lab__description}>{laboratory.description}</p>
    </div>
  );
}
