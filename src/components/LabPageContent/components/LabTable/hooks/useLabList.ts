import { Laboratory } from '@/types/Laboratory.ts';

export const useLabList = () => {
  const columns = [
    { field: 'name', header: 'Название' },
    { field: 'description', header: 'Описание' },
    { field: 'deadline', header: 'Срок сдачи' },
  ];

  const getTableValues = (laboratories: Laboratory[]) => {
    const getValue = (value?: string) => value || '-';

    return laboratories.map(({ id, name, description, deadline }) => {
      return {
        id,
        name: getValue(name),
        description: getValue(description),
        deadline: deadline ? new Date(deadline).toLocaleString() : '-',
      };
    });
  };

  return { columns, getTableValues };
};
