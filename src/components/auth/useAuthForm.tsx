import { useState } from 'react';
import { AuthProvider } from '@/providers/AuthProvider/AuthProvider';
import { LoginRequestData, LoginResponseData } from '@/DTO/AuthDTO';

interface AuthFormData {
  email?: string;
  password?: string;
}

export const useAuthForm = () => {
  const [formData, setFormData] = useState<AuthFormData>({
    email: '',
    password: '',
  });

  const authProvider = new AuthProvider();

  const onFieldChange = (fieldType: keyof AuthFormData, value: string) =>
    setFormData({ ...formData, [fieldType]: value });

  const handleLogin = async () => {
    if (!formData.email || !formData.password) {
      console.error('Логин и пароль обязательны!');
      return;
    }

    try {
      const loginData: LoginRequestData = {
        email: formData.email,
        password: formData.password,
      };

      const response = await authProvider.login(loginData);

      const responseData: LoginResponseData = response.data;
      if (responseData.accessToken) {
        // Сохраняем accessToken в localStorage
        localStorage.setItem('accessToken', responseData.accessToken);
        console.log(
          'Access token сохранен в localStorage:',
          responseData.accessToken,
        );
      }

      console.log('Login successful', response);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return {
    onFieldChange,
    handleLogin,
  };
};
