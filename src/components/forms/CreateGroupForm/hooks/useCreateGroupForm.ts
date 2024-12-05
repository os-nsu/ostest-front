import { useGroupProvider } from '@/providers/GroupProvider/useGroupProvider';
import { useEffect, useState } from 'react';

interface FormData {
  name: string;
}

export const useCreateGroupForm = (onUpdate: () => void) => {
  const [formData, setFormData] = useState<FormData>({ name: '' });
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [isNameError, setNameError] = useState('');

  useEffect(() => {
    setButtonDisabled(!formData.name);
  }, [formData]);

  const onFieldChange = (fieldType: keyof FormData, value: string) =>
    setFormData({ ...formData, [fieldType]: value });

  const onSubmit = () => {
    if (!formData) return;
    useGroupProvider()
      .addGroup({ groupName: formData.name, isArchived: false })
      .then(({ status }) => {
        if (status !== 200) {
          return;
        }
        onUpdate();
      })
      .catch(({ response }) => {
        if (response.status === 400) {
          setNameError(response.data.message);
          return;
        }
        console.error(response);
      });
  };

  return {
    isButtonDisabled,
    onFieldChange,
    onSubmit,
    isNameError,
  };
};
