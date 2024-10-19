import { SelectItem } from 'primereact/selectitem';
import { useEffect, useState } from 'react';
import { Test, TestCategory } from '@/types/Test.ts';

interface TestFormData {
  name?: string;
  type?: string;
  description?: string;
  files?: File[];
}

const testOptions: SelectItem[] = [
  { value: TestCategory.DEFAULT, label: 'Обычный тест' },
];

export const useTestForm = (test?: Test) => {
  const [formData, setFormData] = useState<TestFormData>();
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    if (!test) {
      return;
    }

    const { name, description, category } = test;
    setFormData({
      name,
      description,
      type: category,
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
