import { SelectItem } from 'primereact/selectitem';
import { useEffect, useState } from 'react';

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
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  useEffect(
    () =>
      setButtonDisabled(!formData?.files || !formData.type || !formData.name),
    [formData],
  );

  const onFieldChange = (
    fieldType: keyof TestFormData,
    value: string | File[],
  ) => setFormData({ ...formData, [fieldType]: value });

  //Пока просто выводим данные в консоль, так как еще не настроена интеграция с бэком
  const onSubmit = () => console.log(formData);

  return {
    isButtonDisabled,
    testOptions,
    onFieldChange,
    onSubmit,
  };
};
