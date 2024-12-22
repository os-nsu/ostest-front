import { useState } from 'react';
import { useAuthProvider } from '@/providers/AuthProvider/useAuthProvider.ts';
import { useAuthContext } from '@/contexts/AuthContext/AuthContext.tsx';
import { useNavigate } from 'react-router-dom';

interface LoginFormData {
  username: string;
  password: string;
}

export const useLoginForm = () => {
  const { onLogin } = useAuthContext();
  const navigate = useNavigate();

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
        onLogin(accessToken, refreshToken);
        navigate('/');
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

        if (response.status === 400) {
          setUserError(response.data.message);
          return;
        }
      })
      .finally(() => setLoading(false));
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onSubmit();
    }
  };

  return {
    isLoading,
    isUserError,
    isPasswordError,
    onFieldChange,
    onSubmit,
    handleKeyDown,
  };
};
