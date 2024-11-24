import { useSessionProvider } from '@/providers/SessionProvider/useSessionProvider';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getCurrentUser } from '@/store/user/userThunks';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useLaboratoryPageTitle = (id: number) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const user = useAppSelector(state => state.user.user);

  useEffect(() => {
    if (!user) dispatch(getCurrentUser());
  }, [dispatch, user]);

  const sessionProvider = useSessionProvider();
  const onClick = () => {
    if (!user) {
      dispatch(getCurrentUser());
    } else {
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
    }
  };

  return {
    onClick,
  };
};
