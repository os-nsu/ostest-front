import styles from '@styles/components/LaboratoryPageContent.module.scss';

interface LaboratoryDescriptionProps {
  description: string;
}

export default function LaboratoryDescription({
  description,
}: LaboratoryDescriptionProps) {
  const lines = description.split('\n');

  return (
    <div className={styles.container}>
      <div className={styles.title}>Описание</div>
      <div className={styles.content}>
        {lines.map((line, index) => (
          <div key={index}>{line || <br />}</div>
        ))}
      </div>
    </div>
  );
}
