import { useLaboratoryProvider } from '@/providers/LaboratoryProvider/useLaboratoryProvider';
import { useNavigate } from 'react-router-dom';

export const useLaboratoryPageContent = (id: string | undefined) => {
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
  };
};
