import DefaultDropdown from '@/UI/inputs/DefaultDropdown/DefaultDropdown';
import IconPlus from '@public/plus.svg';
import styles from '@styles/components/GroupsPageStyles/GroupsPageTitle.module.scss';
import DefaultButton from '@UI/buttons/DefaultButton/DefaultButton.tsx';
import { useGroupsPageTitle } from './hooks/useGroupsPageTitle';
import { GroupFilters } from '@/types/Group';
import { RoleTypes } from '@/types/Role';
import { useAppSelector } from '@/store/hooks';
import { selectRole } from '@/store/role/roleSelectors';

interface GroupsPageTitleProps {
  setFilter: (filter: GroupFilters) => void;
  onCreate: () => void;
}

export default function GroupsPageTitle({
  setFilter,
  onCreate,
}: GroupsPageTitleProps) {
  const { options, selectedOption, handleOptionSelect } =
    useGroupsPageTitle(setFilter);
  const role = useAppSelector(selectRole);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Группы</span>
      {role === RoleTypes.ADMIN ? (
        <DefaultButton icon={IconPlus} label="Создать" onClick={onCreate} />
      ) : undefined}
      <DefaultDropdown
        options={options}
        value={selectedOption}
        placeholder="Выберите фильтр"
        onSelect={handleOptionSelect}
      />
    </div>
  );
}
