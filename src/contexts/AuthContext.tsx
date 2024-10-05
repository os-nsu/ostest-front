import { createContext, ReactNode, useContext, useState } from 'react';

interface AuthContextProviderProps {
  children: ReactNode;
}

interface AuthContextValue {
  isAuthenticated: boolean;
  logout: () => void;
  login: () => void;
  getAccessToken: () => string | null;
  getRefreshToken: () => string | null;
}

const AuthContext = createContext<AuthContextValue>({
  isAuthenticated: false,
  logout: () => {},
  login: () => {},
  getAccessToken: () => null,
  getRefreshToken: () => null,
});

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  let sessionUpdateId: NodeJS.Timeout | null = null;
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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

  const getAccessToken = () => localStorage.getItem('accessToken');
  const getRefreshToken = () => localStorage.getItem('refreshToken');

  // const sevenMinute = 420000;

  const setSessionUpdate = () => {
    sessionUpdateId = setInterval(() => console.log('update session'), 5000);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        getAccessToken,
        getRefreshToken,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      'useAuthContext must be used within an AuthContextProvider',
    );
  }

  return context;
};
