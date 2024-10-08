import { useCallback, useEffect, useState } from 'react';
import { useAuthProvider } from '@/providers/AuthProvider/useAuthProvider.ts';

export const useAuthContextProvider = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

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

  const onLogin = useCallback((accessToken: string, refreshToken: string) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    setIsAuthenticated(true);
  }, []);

  const onLogout = useCallback(() => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setIsAuthenticated(false);
  }, []);

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
  };
};
