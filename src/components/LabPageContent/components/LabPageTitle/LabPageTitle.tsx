import { Button } from 'primereact/button';
import PlusIcon from '@public/plus.svg';
import styles from '@styles/components/LabPageTitle.module.scss';

export default function LabPageTitle() {
  return (
    <div className={styles.title_container}>
      <h1 className={styles.title}>Лабораторные работы</h1>
      <Button className={styles.button}>
        Создать
        <img src={PlusIcon} />
      </Button>
    </div>
  );
}
