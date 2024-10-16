import { useLaboratoryProvider } from '@/providers/LaboratoryProvider/useLaboratoryProvider';
import { useNavigate } from 'react-router-dom';

export const useDeleteLabForm = (id: string) => {
  const laboratoryProvider = useLaboratoryProvider();
  const navigate = useNavigate();
  const onDelete = () => {
    laboratoryProvider
      .deleteLaboratory(id)
      .then(({ status }) => {
        if (status !== 200) {
          return;
        }

        navigate('/');
      })
      .catch(({ response }) => {
        if (response?.status === 404) {
          return;
        }

        console.error(response);
      });
  };

  return {
    onDelete,
  };
};
