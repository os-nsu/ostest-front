import { SelectItem } from 'primereact/selectitem';

export const useSessionsFilter = (onFilterChange: (filter: string) => void) => {
  const handleFilterSelect = (value?: string) => {
    if (value) {
      onFilterChange(value);
    }
  };

  const options: SelectItem[] = [
    { value: 'none', label: 'Без фильтрации' },
    { value: 'number', label: 'По номеру группы' },
    { value: 'laboratoryName', label: 'По названию лабораторной' },
    { value: 'studentName', label: 'По ФИО студента' },
  ];

  return {
    options,
    handleFilterSelect,
  };
};
