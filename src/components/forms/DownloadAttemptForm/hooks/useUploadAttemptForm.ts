import { useAppDispatch } from '@/store/hooks';
import { addAttempt } from '@/store/sessions/sessionsThunks';
import { useEffect, useState } from 'react';

interface FormData {
  repositoryUrl: string;
  branch: string;
}

export const useUploadAttemptForm = (id: string) => {
  const [formData, setFormData] = useState<FormData>({
    repositoryUrl: '',
    branch: '',
  });
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setButtonDisabled(!formData.repositoryUrl || !formData.branch);
  }, [formData]);

  const onFieldChange = (fieldType: keyof FormData, value: string) =>
    setFormData({ ...formData, [fieldType]: value });

  const onSubmit = () => {
    if (!formData) return;

    dispatch(
      addAttempt({
        sessionId: +id,
        attempt: { laboratoryId: +id, ...formData },
      }),
    );
  };

  return {
    isButtonDisabled,
    onFieldChange,
    onSubmit,
  };
};
