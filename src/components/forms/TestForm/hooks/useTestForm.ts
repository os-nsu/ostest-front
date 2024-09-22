import { SelectItem } from 'primereact/selectitem';

const testOptions: SelectItem[] = [
  { value: 'default', label: 'Обычный тест' },
  { value: 'stress_test', label: 'Нагрузочный тест' },
];

export const useTestForm = () => {
  return {
    testOptions,
  };
};
