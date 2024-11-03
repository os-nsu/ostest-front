import styles from '@styles/components/GroupsPageStyles/AboutGroupDataBlock.module.scss';

interface AboutGroupDataBlockProps {
  title: string;
  text: string | { name: string }[];
}

export default function AboutGroupDataBlock({
  title,
  text,
}: AboutGroupDataBlockProps) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
      <div>
        {Array.isArray(text) ? (
          text.map((item, index) => (
            <div className={styles.item} key={index}>
              {item.name}
            </div>
          ))
        ) : (
          <span>{text}</span>
        )}
      </div>
    </div>
  );
}
