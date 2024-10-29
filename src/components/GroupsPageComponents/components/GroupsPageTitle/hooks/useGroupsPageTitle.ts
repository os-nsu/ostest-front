import { useState } from 'react';
import { SelectItem } from 'primereact/selectitem';
import { GroupStatus } from '@/types/Group';

export const GroupFilterOptions: SelectItem[] = [
  { value: GroupStatus.ACTIVE, label: 'Только активные' },
  { value: GroupStatus.INACTIVE, label: 'Только скрытые' },
  { value: 'all', label: 'Все' },
];

export const useGroupsPageTitle = () => {
  const [selectedOption, setSelectedOption] = useState<GroupStatus | 'all'>(
    GroupStatus.ACTIVE,
  );
  const [options] = useState<SelectItem[]>(GroupFilterOptions);

  const handleOptionChange = (value?: string) => {
    if (value) {
      setSelectedOption(value as GroupStatus | 'all');
    }
  };

  return {
    options,
    selectedOption,
    handleOptionChange,
  };
};
