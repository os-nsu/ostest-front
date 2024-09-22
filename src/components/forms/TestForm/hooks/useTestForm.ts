import { SelectItem } from 'primereact/selectitem';
import { useState } from 'react';

interface TestFormData {
  name?: string;
  type?: string;
  description?: string;
  files?: File[];
}

const testOptions: SelectItem[] = [
  { value: 'default', label: 'Обычный тест' },
  { value: 'stress_test', label: 'Нагрузочный тест' },
];

export const useTestForm = () => {
  const [formData, setFormData] = useState<TestFormData>();

  const onFieldChange = (
    fieldType: keyof TestFormData,
    value: string | File[],
  ) => {
    setFormData({ ...formData, [fieldType]: value });
    console.log(formData);
  };

  return {
    testOptions,
    onFieldChange,
  };
};
