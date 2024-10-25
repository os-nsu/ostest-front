import { useLaboratoryProvider } from '@/providers/LaboratoryProvider/useLaboratoryProvider';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useLaboratoryPageContent = (id?: string) => {
  const [isModalVisible, setModalVisible] = useState(false);
  type ModalType = 'edit' | 'delete' | null;
  const [modalType, setModalType] = useState<ModalType>(null);

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
    modalType,
    setModalType,
  };
};
