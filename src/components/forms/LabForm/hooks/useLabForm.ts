import { useEffect, useState } from 'react';

interface LabFormData {
  name?: string;
  description?: string;
  deadline?: Date;
}

export const useLabForm = () => {
  const [formData, setFormData] = useState<LabFormData>({});
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    setButtonDisabled(
      !formData?.name || !formData?.description || !formData?.deadline,
    );
  }, [formData]);

  const onFieldChange = (
    fieldType: keyof LabFormData,
    value: string | Date | undefined,
  ) => setFormData({ ...formData, [fieldType]: value });

  // Пока просто выводим данные в консоль, так как еще не настроена интеграция с бэком
  const onSubmit = () => console.log(formData);

  return {
    isButtonDisabled,
    onFieldChange,
    onSubmit,
  };
};
