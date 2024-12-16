import { useState } from 'react';
import { SelectItem } from 'primereact/selectitem';
import { GroupFilters } from '@/types/Group';

export const GroupFilterOptions: SelectItem[] = [
  { value: GroupFilters.ACTIVE, label: 'Только активные' },
  { value: GroupFilters.ARCHIVED, label: 'Только скрытые' },
  { value: GroupFilters.ALL, label: 'Все' },
];

export const useGroupsPageTitle = (
  setFilter: (filter: GroupFilters) => void,
) => {
  const [selectedOption, setSelectedOption] = useState<GroupFilters>(
    GroupFilters.ACTIVE,
  );
  const [options] = useState<SelectItem[]>(GroupFilterOptions);

  const handleOptionSelect = (value?: string) => {
    const newFilter = value as GroupFilters;

    setSelectedOption(newFilter);
    setFilter(newFilter);
  };

  return {
    options,
    selectedOption,
    handleOptionSelect,
  };
};
