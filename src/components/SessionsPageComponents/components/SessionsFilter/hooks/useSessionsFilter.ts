import { FilterType } from '@/components/SessionsPageComponents/hooks/useSessionsPageContent';
import { SelectItem } from 'primereact/selectitem';

export const useSessionsFilter = (
  onFilterChange: (filter: FilterType) => void,
) => {
  const handleFilterSelect = (value?: string) => {
    if (value) {
      onFilterChange(value as FilterType);
    }
  };
  const options: SelectItem[] = [
    { value: 'none', label: 'Без фильтрации' },
    { value: 'number', label: 'По номеру группы' },
    { value: 'lab_name', label: 'По названию лабораторной' },
    { value: 'student_name', label: 'По ФИО студента' },
  ];

  return {
    options,
    handleFilterSelect,
  };
};
