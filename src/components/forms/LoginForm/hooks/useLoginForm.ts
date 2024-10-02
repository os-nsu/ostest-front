import { useState } from 'react';
import { useAuthProvider } from '@/providers/AuthProvider/useAuthProvider.ts';

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
    const { username, password } = formData;
    useAuthProvider()
      .login({ username, password })
      .then(({ data }) => console.log(data))
      .catch(err => console.error(err));
  };

  return {
    onFieldChange,
    onSubmit,
  };
};
