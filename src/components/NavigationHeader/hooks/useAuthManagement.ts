import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthProvider } from '@/providers/AuthProvider/useAuthProvider';
import { useAuthContext } from '@/contexts/AuthContext/AuthContext';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getCurrentUser } from '@/store/user/userThunks';
import { selectUser, selectUserLoading } from '@/store/user/userSelectors';

export function useAuthManagement() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const isLoading = useAppSelector(selectUserLoading);

  const { onLogout } = useAuthContext();
  const authProvider = useAuthProvider();

  const accessToken = localStorage.getItem('accessToken') || 'accessToken';
  const refreshToken = localStorage.getItem('refreshToken') || 'refreshToken';

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const handleLogout = async () => {
    try {
      const { status } = await authProvider.logout({
        accessToken,
        refreshToken,
      });
      if (status === 200) {
        onLogout();
        navigate('/login');
      }
    } catch (error) {
      console.error('Ошибка выхода:', error);
    }
  };

  return { user, isLoading, handleLogout };
}
