import { useState, useEffect } from 'react';
import { SelectItem } from 'primereact/selectitem';
import { laboratories } from '../../../../mocks/laboratories';

interface LabFormData {
  name?: string;
  description?: string;
  selectedTests?: number[];
}

export const useLabForm = () => {
  const [formData, setFormData] = useState<LabFormData>();
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [availableTests, setAvailableTests] = useState<SelectItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setButtonDisabled(!formData?.name || !formData.selectedTests?.length);
  }, [formData]);

  useEffect(() => {
    const testOptions = laboratories.map(lab => ({
      value: lab.id,
      label: lab.name,
    }));
    setAvailableTests(testOptions);
  }, []);

  const onFieldChange = (
    fieldType: keyof LabFormData,
    value: string | number[],
  ) => setFormData({ ...formData, [fieldType]: value });

  const addTest = (testId: number) => {
    setFormData({
      ...formData,
      selectedTests: [...(formData?.selectedTests || []), testId],
    });
  };

  const removeTest = (testId: number) => {
    setFormData({
      ...formData,
      selectedTests: formData?.selectedTests?.filter(id => id !== testId),
    });
  };

  const onSubmit = async () => {
    try {
      setError(null);
      const response = await fetch('/api/lab/create', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Лабораторная успешно создана:', formData);
      } else if (response.status === 409) {
        setError('Название лабораторной занято. Попробуйте другое.');
      } else {
        setError('Произошла ошибка при создании лабораторной.');
      }
    } catch (err) {
      setError('Ошибка сети. Попробуйте снова.');
    }
  };

  return {
    formData,
    isButtonDisabled,
    availableTests,
    error,
    onFieldChange,
    addTest,
    removeTest,
    onSubmit,
  };
};
