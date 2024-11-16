import { SelectItem } from 'primereact/selectitem';
import { useEffect, useState } from 'react';
import { Test, TestCategory } from '@/types/Test.ts';
import { useTestProvider } from '@/providers/TestProvider/useTestProvider.ts';

type TestFormFieldValues = boolean | string | TestCategory;

interface TestFormData extends Omit<Test, 'id'> {
  active?: boolean;
}

const testOptions: SelectItem[] = [
  { value: TestCategory.DEFAULT, label: 'Обычный тест' },
];

export const useTestForm = (test?: Test) => {
  const [formData, setFormData] = useState<TestFormData>({
    name: '',
    description: '',
    category: TestCategory.DEFAULT,
    active: false,
  });
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    if (!test) {
      return;
    }

    const { name, description, category } = test;
    setFormData({
      name,
      description,
      category,
      active: false,
    });
  }, [test]);

  useEffect(
    () => setButtonDisabled(!formData?.category || !formData?.name),
    [formData],
  );

  const onFieldChange = (
    fieldType: keyof TestFormData,
    value: TestFormFieldValues,
  ) => setFormData({ ...formData, [fieldType]: value });

  const onSubmit = () => {
    const requestData = new FormData();
    requestData.append(
      'data',
      new Blob([JSON.stringify(formData)], {
        type: 'application/json',
      }),
    );
    requestData.append('file', new Blob(), 'empty.txt');

    useTestProvider()
      .createTest(requestData)
      .then(({ data, status }) => {
        console.log(status, data);
      });
  };

  return {
    formData,
    isButtonDisabled,
    testOptions,
    onFieldChange,
    onSubmit,
  };
};
