import styles from '@styles/components/SessionPageStyles/TimeLine.module.scss';

export default function TimeLine() {
  return (
    <div className={styles.timeLine}>
      <div className={styles.circle}></div>
      <div className={styles.line}></div>
    </div>
  );
}
