import { useEffect, useState } from 'react';
import { useAuthProvider } from '@/providers/AuthProvider/useAuthProvider.ts';

export const useAuthContextProvider = () => {
  let sessionUpdateId: NodeJS.Timeout | null = null;
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const getAccessToken = () => localStorage.getItem('accessToken');
  const getRefreshToken = () => localStorage.getItem('refreshToken');

  const login = () => {
    setIsAuthenticated(true);
    setSessionUpdate();
  };

  const logout = () => {
    setIsAuthenticated(false);

    if (!sessionUpdateId) {
      return;
    }

    clearTimeout(sessionUpdateId);
    sessionUpdateId = null;
  };

  const setSessionUpdate = () => {
    const token = getRefreshToken();

    if (!token) {
      logout();
      return;
    }

    sessionUpdateId = setInterval(() => updateAccessToken(token), 420000);
  };

  const updateAccessToken = (refreshToken: string) => {
    useAuthProvider()
      .updateAccessToken(refreshToken)
      .then(({ data }) => {
        localStorage.setItem('accessToken', data.accessToken);
        login();
      })
      .catch(() => logout());
  };

  useEffect(() => {
    const refreshToken = getRefreshToken();
    if (!refreshToken) {
      return;
    }

    updateAccessToken(refreshToken);
  }, [updateAccessToken]);

  return {
    isAuthenticated,
    login,
    getAccessToken,
  };
};
