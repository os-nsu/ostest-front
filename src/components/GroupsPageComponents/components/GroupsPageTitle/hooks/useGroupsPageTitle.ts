import { useState } from 'react';
import { SelectItem } from 'primereact/selectitem';

export const GroupFilterOptions: SelectItem[] = [
  { value: 'active', label: 'Только активные' },
  { value: 'inactive', label: 'Только скрытые' },
  { value: 'all', label: 'Все' },
];

export const useGroupsPageTitle = () => {
  const [selectedOption, setSelectedOption] = useState<string>('active');
  const [options] = useState<SelectItem[]>(GroupFilterOptions);

  const handleOptionChange = (value?: string) => {
    if (value) {
      setSelectedOption(value);
    }
  };

  return {
    options,
    selectedOption,
    handleOptionChange,
  };
};
