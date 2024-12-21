import { useCallback, useEffect, useState } from 'react';
import { useAuthProvider } from '@/providers/AuthProvider/useAuthProvider.ts';
import { useDispatch } from 'react-redux';
import { removeUser } from '@/store/user/userSlise';
import { removeRole, setRole } from '@/store/role/roleSlice';

export const useAuthContextProvider = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const dispatch = useDispatch();

  const getTokens = () => {
    return {
      accessToken: localStorage.getItem('accessToken'),
      refreshToken: localStorage.getItem('refreshToken'),
    };
  };

  const onUpdate = useCallback((accessToken: string) => {
    localStorage.setItem('accessToken', accessToken);
    setIsAuthenticated(true);
  }, []);

  const onLogin = useCallback(
    (accessToken: string, refreshToken: string) => {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      setIsAuthenticated(true);

      const roles = JSON.parse(atob(accessToken.split('.')[1])).roles;
      dispatch(setRole(roles[0] ?? null));
    },
    [dispatch],
  );

  const onLogout = useCallback(() => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setIsAuthenticated(false);
    dispatch(removeUser());
    dispatch(removeRole());
  }, [dispatch]);

  const updateAccessToken = useCallback(
    (refreshToken: string) => {
      useAuthProvider()
        .updateAccessToken(refreshToken)
        .then(({ data }) => {
          const { accessToken } = data;
          onUpdate(accessToken);
        })
        .catch(() => onLogout());
    },
    [onUpdate, onLogout],
  );

  useEffect(() => {
    const { refreshToken } = getTokens();
    if (!refreshToken) {
      setIsAuthenticated(false);
      return;
    }

    updateAccessToken(refreshToken);
  }, [updateAccessToken]);

  return {
    isAuthenticated,
    onLogin,
    onLogout,
  };
};
