import PlusIcon from '@public/plus.svg';
import styles from '@styles/components/LabPageTitle.module.scss';
import DefaultButton from '@UI/buttons/DefaultButton/DefaultButton.tsx';

export default function LabPageTitle() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Лабораторные работы</h1>
      <DefaultButton label="Создать" icon={PlusIcon} />
    </div>
  );
}
