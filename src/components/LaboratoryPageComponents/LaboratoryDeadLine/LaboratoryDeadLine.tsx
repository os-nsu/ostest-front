import styles from '@styles/components/LaboratoryPageContent.module.scss';

interface LaboratoryDeadLineProps {
  deadline: Date;
}

export default function LaboratoryDeadLine({
  deadline,
}: LaboratoryDeadLineProps) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Срок выполнения</div>
      <div className={styles.content}>
        до {new Date(deadline).toLocaleDateString('ru-RU')}
      </div>
    </div>
  );
}
