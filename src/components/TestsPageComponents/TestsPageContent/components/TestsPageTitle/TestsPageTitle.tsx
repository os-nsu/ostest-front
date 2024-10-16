import { Button } from 'primereact/button';
import IconPlus from '@public/plus.svg';
import styles from '@styles/components/TestsPageStyles/TestsPageTitle.module.scss';

export default function TestsPageTitle() {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Тестирование</span>
      <Button className={styles.button}>
        <span>Создать</span>
        <img src={IconPlus} alt="test-page-title-icon" />
      </Button>
    </div>
  );
}
