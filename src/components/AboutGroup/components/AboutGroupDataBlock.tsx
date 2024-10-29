import styles from '@styles/components/TestsPageStyles/AboutTestDataBlock.module.scss';

interface AboutGroupDataBlockProps {
  title: string;
  text: string;
}

export default function AboutGroupDataBlock({
  title,
  text,
}: AboutGroupDataBlockProps) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
      <span>{text}</span>
    </div>
  );
}
