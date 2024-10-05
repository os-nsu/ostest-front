import { useState } from 'react';
import { useAuthProvider } from '@/providers/AuthProvider/useAuthProvider.ts';
import { useAuthContext } from '@/contexts/AuthContext.tsx';

interface LoginFormData {
  username: string;
  password: string;
}

export const useLoginForm = () => {
  const { login } = useAuthContext();

  const [isLoading, setLoading] = useState(false);
  const [isUserError, setUserError] = useState('');
  const [isPasswordError, setPasswordError] = useState('');
  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: '',
  });

  //15 min
  const onFieldChange = (fieldType: keyof LoginFormData, value: string) =>
    setFormData({ ...formData, [fieldType]: value });

  const resetErrors = () => {
    setUserError('');
    setPasswordError('');
  };

  const onSubmit = () => {
    const { username, password } = formData;
    setLoading(true);
    resetErrors();
    useAuthProvider()
      .login({ username, password })
      .then(({ data, status }) => {
        if (status !== 200) {
          return;
        }

        const { accessToken, refreshToken } = data;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        login();
      })
      .catch(({ response }) => {
        if (response.status === 404) {
          setUserError(response.data.message);
          return;
        }

        if (response.status === 401) {
          setPasswordError(response.data.message);
          return;
        }
      })
      .finally(() => setLoading(false));
  };

  return {
    isLoading,
    isUserError,
    isPasswordError,
    onFieldChange,
    onSubmit,
  };
};
