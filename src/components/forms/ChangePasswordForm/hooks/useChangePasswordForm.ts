import { useEffect, useState } from 'react';
import { useUserProvider } from '@/providers/UserProvider/useUserProvider';

interface ChangePasswordFormData {
  oldPassword?: string;
  newPassword?: string;
  confirmNewPassword?: string;
}

export const useChangePasswordForm = (onChange: () => void) => {
  const [formData, setFormData] = useState<ChangePasswordFormData>();
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  useEffect(
    () =>
      setButtonDisabled(
        !formData?.oldPassword ||
          !formData.newPassword ||
          !formData.confirmNewPassword,
      ),
    [formData],
  );

  const onFieldChange = (
    fieldType: keyof ChangePasswordFormData,
    value: string,
  ) => setFormData({ ...formData, [fieldType]: value });

  const onSubmit = () => {
    if (formData?.newPassword !== formData?.confirmNewPassword) {
      setConfirmPasswordError('Пароли должны совпадать');
      return;
    } else {
      setConfirmPasswordError('');
    }
    if (!formData?.oldPassword || !formData?.newPassword) return;
    useUserProvider()
      .changePassword({
        oldPassword: formData?.oldPassword,
        newPassword: formData?.newPassword,
      })
      .then(({ status }) => {
        if (status !== 200) {
          return;
        }
        onChange();
      })
      .catch(({ response }) => {
        console.log(response);
      });
  };

  return {
    isButtonDisabled,
    onFieldChange,
    onSubmit,
    confirmPasswordError,
  };
};
