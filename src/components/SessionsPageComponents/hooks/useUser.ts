import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getCurrentUser } from '@/store/user/userThunks';
import { useEffect, useState } from 'react';

export const useUser = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      dispatch(getCurrentUser())
        .unwrap()
        .then(() => setLoading(false))
        .catch(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [dispatch, user]);

  return { user, loading };
};
