import styles from '@styles/components/TestsPageStyles/AboutTestDataBlock.module.scss';

interface AboutTestDataBlockProps {
  title: string;
  text: string;
}

export default function AboutTestDataBlock({
  title,
  text,
}: AboutTestDataBlockProps) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
      <span>{text}</span>
    </div>
  );
}
