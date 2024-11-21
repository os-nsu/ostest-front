import { useAppDispatch } from '@/store/hooks';
import { addAtempt } from '@/store/sessions/sessionsSlice';
import { useEffect, useState } from 'react';

interface FormData {
  repositoryUrl: string;
  branch: string;
}

export const useDownloadAttemptForm = (id: string) => {
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
      addAtempt({
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
