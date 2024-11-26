import { useSessionProvider } from '@/providers/SessionProvider/useSessionProvider';
import { useAppDispatch } from '@/store/hooks';
import { getCurrentUser } from '@/store/user/userThunks';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './useUser';

export const useLaboratoryPageTitle = (id: number) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const sessionProvider = useSessionProvider();
  const user = useUser();

  const handleSession = useCallback(async () => {
    if (!user) {
      console.error('User is not loaded');
      return;
    }

    sessionProvider
      .getExistingSession({ studentId: user?.id, laboratoryId: id })
      .then(({ status, data }) => {
        if (status === 200 && data.id) {
          navigate(`/lab/attempts/${data.id}`);
        } else {
          sessionProvider
            .startSession({ studentId: user?.id, laboratoryId: id })
            .then(({ status, data }) => {
              if (status === 201 && data) {
                navigate(`/lab/attempts/${data.id}`);
              }
            });
        }
      })
      .catch(err => console.error(err));
  }, [id, navigate, sessionProvider, user]);

  const onClick = () => {
    if (!user) {
      dispatch(getCurrentUser()).then(() => handleSession());
    } else {
      handleSession();
    }
  };

  return {
    onClick,
  };
};
