import styles from '@styles/components/Lab.module.scss';
import { Laboratory } from '../../../types/Laboratory.ts';

interface LaboratoryPageContentProps {
  laboratory: Laboratory;
}

export default function LaboratoryPageContent({
  laboratory,
}: LaboratoryPageContentProps) {
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
