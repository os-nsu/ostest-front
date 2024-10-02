import { useState } from 'react';

interface LoginFormData {
  username: string;
  password: string;
}

export const useLoginForm = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: '',
  });

  const onFieldChange = (fieldType: keyof LoginFormData, value: string) =>
    setFormData({ ...formData, [fieldType]: value });

  const onSubmit = () => {
    console.log(formData);
  };

  return {
    onFieldChange,
    onSubmit,
  };
};
