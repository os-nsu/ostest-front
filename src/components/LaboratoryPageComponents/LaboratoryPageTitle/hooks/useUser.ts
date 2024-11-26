import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getCurrentUser } from '@/store/user/userThunks';
import { useEffect } from 'react';

export const useUser = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user.user);

  useEffect(() => {
    if (!user) dispatch(getCurrentUser());
  }, [dispatch, user]);

  return user;
};
