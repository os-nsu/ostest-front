// import { useLaboratoryProvider } from '@/providers/LaboratoryProvider/useLaboratoryProvider';
import { Test } from '@/types/Test';
import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

interface EditLabFormData {
  name?: string;
  description?: string;
  deadline?: string;
  tests?: Test[];
}

export const useEditLabForm = () => {
  const [formData, setFormData] = useState<EditLabFormData>();
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => setButtonDisabled(!formData?.name), [formData]);

  // const laboratoryProvider = useLaboratoryProvider();
  // const navigate = useNavigate();
  const onEdit = () => {
    // if (id) {
    // laboratoryProvider
    //     .deleteLaboratory(id)
    //     .then(({ status }) => {
    //         if (status !== 200) {
    return;
    //     }

    //     navigate('/');
    // })
    // .catch(({ response }) => {
    //     if (response?.status === 404) {
    //         return;
    //     }

    //     console.error(response);
    // });
    // }
  };

  const onFieldChange = (fieldType: keyof EditLabFormData, value: string) =>
    setFormData({ ...formData, [fieldType]: value });

  return {
    isButtonDisabled,
    onEdit,
    onFieldChange,
  };
};
