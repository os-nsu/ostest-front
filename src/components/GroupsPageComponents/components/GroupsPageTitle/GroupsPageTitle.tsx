import DefaultDropdown from '@/UI/inputs/DefaultDropdown/DefaultDropdown';
import IconPlus from '@public/plus.svg';
import styles from '@styles/components/GroupsPageStyles/GroupsPageTitle.module.scss';
import DefaultButton from '@UI/buttons/DefaultButton/DefaultButton.tsx';
import { useGroupsPageTitle } from './hooks/useGroupsPageTitle';
import { GroupStatus } from '@/types/Group';

interface GroupsPageTitleProps {
  setFilter: (filter: GroupStatus | 'all') => void;
}

export default function GroupsPageTitle({ setFilter }: GroupsPageTitleProps) {
  const { options, selectedOption, handleOptionChange } = useGroupsPageTitle();

  return (
    <div className={styles.container}>
      <span className={styles.title}>Группы</span>
      <DefaultButton icon={IconPlus} label="Создать" />
      <DefaultDropdown
        options={options}
        value={selectedOption}
        placeholder="Выберите фильтр"
        onSelect={(v?: string) => {
          handleOptionChange(v);
          if (v === GroupStatus.ACTIVE || v === GroupStatus.INACTIVE) {
            setFilter(v as GroupStatus);
          } else {
            setFilter('all');
          }
        }}
      />
    </div>
  );
}
