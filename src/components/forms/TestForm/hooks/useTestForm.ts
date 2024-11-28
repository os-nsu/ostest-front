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

const createDataBlob = (data: unknown) =>
  new Blob([JSON.stringify(data)], {
    type: 'application/json',
  });

export const useTestForm = (
  test?: Test,
  isEditing?: boolean,
  onResponded?: () => void,
) => {
  const [formData, setFormData] = useState<TestFormData>({
    name: '',
    code: '',
    description: '',
    category: TestCategory.DEFAULT,
    active: false,
  });
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    if (!test) {
      return;
    }

    const { name, code, description, category } = test;
    setFormData({
      name,
      code,
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

    if (isEditing) {
      requestData.append('data', createDataBlob({ id: test?.id, ...formData }));
    } else {
      requestData.append('data', createDataBlob(formData));
    }
    requestData.append('file', new Blob(), 'empty.txt');

    if (isEditing) {
      updateTest(requestData);
      return;
    }

    createTest(requestData);
  };

  const createTest = (requestData: FormData) => {
    useTestProvider()
      .createTest(requestData)
      .then(() => {
        if (!onResponded) {
          return;
        }

        onResponded();
      });
  };

  const updateTest = (requestData: FormData) => {
    useTestProvider()
      .updateTest(requestData)
      .then(() => {
        if (!onResponded) {
          return;
        }

        onResponded();
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
