import { useSessionProvider } from '@/providers/SessionProvider/useSessionProvider';
import { useEffect, useState } from 'react';

interface FormData {
  repositoryUrl: string;
  branch: string;
}

export const useDownloadSolutionForm = (id: string) => {
  const [formData, setFormData] = useState<FormData>({
    repositoryUrl: '',
    branch: '',
  });
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    setButtonDisabled(!formData.repositoryUrl || !formData.branch);
  }, [formData]);

  const onFieldChange = (fieldType: keyof FormData, value: string) =>
    setFormData({ ...formData, [fieldType]: value });

  const onSubmit = () => {
    if (!formData) return;

    useSessionProvider()
      .addSolution(id, { laboratoryId: +id, ...formData })
      .then(({ status }) => {
        if (status !== 200) {
          return;
        }
      })
      .catch(({ response }) => {
        console.error(response);
      });
  };

  return {
    isButtonDisabled,
    onFieldChange,
    onSubmit,
  };
};
