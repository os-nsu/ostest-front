import { SelectItem } from 'primereact/selectitem';
import { useEffect, useState } from 'react';

interface UserFormData {
  username?: string;
  firstName?: string;
  secondName?: string;
  groupNumber?: string;
  role?: string;
}

const roleOptions: SelectItem[] = [
  { value: 'teacher', label: 'Преподаватель' },
  { value: 'student', label: 'Студент' },
];

export const useRegisterForm = () => {
  const [formData, setFormData] = useState<UserFormData>();
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  useEffect(
    () =>
      setButtonDisabled(
        !formData?.username ||
          !formData.firstName ||
          !formData.secondName ||
          !formData.groupNumber ||
          !formData.role,
      ),
    [formData],
  );

  const onFieldChange = (fieldType: keyof UserFormData, value: string) =>
    setFormData({ ...formData, [fieldType]: value });

  //Пока просто выводим данные в консоль, так как еще не настроена интеграция с бэком
  const onSubmit = () => console.log(formData);

  return {
    isButtonDisabled,
    roleOptions,
    onFieldChange,
    onSubmit,
  };
};
