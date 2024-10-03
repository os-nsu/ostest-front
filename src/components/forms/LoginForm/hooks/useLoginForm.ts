import { useState } from 'react';
import { useAuthProvider } from '@/providers/AuthProvider/useAuthProvider.ts';

interface LoginFormData {
  username: string;
  password: string;
}

export const useLoginForm = () => {
  const [isLoading, setLoading] = useState(false);
  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: '',
  });

  const onFieldChange = (fieldType: keyof LoginFormData, value: string) =>
    setFormData({ ...formData, [fieldType]: value });

  const onSubmit = () => {
    const { username, password } = formData;
    setLoading(true);
    useAuthProvider()
      .login({ username, password })
      .then(({ data, status }) => {
        if (status !== 200) {
          return;
        }

        const { accessToken, refreshToken } = data;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        console.log('accessToken', localStorage.getItem('accessToken'));
        console.log('refreshToken', localStorage.getItem('refreshToken'));
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  };

  return {
    isLoading,
    onFieldChange,
    onSubmit,
  };
};
