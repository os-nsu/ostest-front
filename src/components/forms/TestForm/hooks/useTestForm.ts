import { SelectItem } from 'primereact/selectitem';
import { useEffect, useState } from 'react';
import { Test } from '@/types/Test.ts';
import { useTestCategoryName } from '@/hooks/useTestCategoryName.ts';

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

export const useTestForm = (test?: Test) => {
  const [formData, setFormData] = useState<TestFormData>();
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    if (!test) {
      return;
    }

    console.log(test);

    const { name, description, category } = test;
    setFormData({
      name,
      description,
      type: useTestCategoryName(category),
    });
  }, [test]);

  useEffect(
    () =>
      setButtonDisabled(!formData?.files || !formData.type || !formData.name),
    [formData],
  );

  const onFieldChange = (
    fieldType: keyof TestFormData,
    value: string | File[],
  ) => setFormData({ ...formData, [fieldType]: value });

  const onSubmit = () => console.log(formData);

  return {
    formData,
    isButtonDisabled,
    testOptions,
    onFieldChange,
    onSubmit,
  };
};
