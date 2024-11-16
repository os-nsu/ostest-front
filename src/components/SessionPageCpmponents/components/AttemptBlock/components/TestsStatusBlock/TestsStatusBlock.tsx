import styles from '@styles/components/SessionPageStyles/TestsStatusBlock.module.scss';

export default function TestsStatusBlock() {
  return (
    <div className={styles.testsStatusBlock}>
      <div className={styles.testsStatusLine}>
        <div className={styles.testsStatus}></div>
        <div className={styles.testsStatus}></div>
        <div className={styles.testsStatus}></div>
        <div className={styles.testsStatus}></div>
        <div className={styles.testsStatus}></div>
      </div>
    </div>
  );
}
