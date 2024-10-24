import { useLaboratoryProvider } from '@/providers/LaboratoryProvider/useLaboratoryProvider';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useLaboratoryPageContent = (id: string | undefined) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const laboratoryProvider = useLaboratoryProvider();
  const navigate = useNavigate();

  const deleteLaboratory = () => {
    if (id) {
      laboratoryProvider
        .deleteLaboratory(id)
        .then(({ status }) => {
          if (status !== 200) {
            return;
          }

          navigate('/');
        })
        .catch(({ response }) => console.error(response));
    }
  };

  return {
    deleteLaboratory,
    isModalVisible,
    setModalVisible,
  };
};
