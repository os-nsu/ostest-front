import styles from '@styles/components/LaboratoryPageContent.module.scss';

interface LaboratoryDescriptionProps {
  description: string;
}

export default function LaboratoryDescription({
  description,
}: LaboratoryDescriptionProps) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Описание</div>
      <div className={styles.content}>{description}</div>
    </div>
  );
}
