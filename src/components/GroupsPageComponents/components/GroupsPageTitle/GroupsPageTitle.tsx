import DefaultDropdown from '@/UI/inputs/DefaultDropdown/DefaultDropdown';
import IconPlus from '@public/plus.svg';
import styles from '@styles/components/GroupsPageStyles/GroupPageTitle.module.scss';
import DefaultButton from '@UI/buttons/DefaultButton/DefaultButton.tsx';

export default function GroupsPageTitle() {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Группы</span>
      <DefaultButton icon={IconPlus} label="Создать" />
      <DefaultDropdown options={[]} />
    </div>
  );
}
