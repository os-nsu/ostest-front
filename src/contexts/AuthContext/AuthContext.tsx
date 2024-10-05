import { createContext, ReactNode, useContext } from 'react';
import { useAuthContextProvider } from '@/contexts/AuthContext/hooks/useAuthContextProvider.ts';

interface AuthContextProviderProps {
  children: ReactNode;
}

interface AuthContextValue {
  isAuthenticated: boolean;
  login: () => void;
  getAccessToken: () => string | null;
}

const AuthContext = createContext<AuthContextValue>({
  isAuthenticated: false,
  login: () => {},
  getAccessToken: () => null,
});

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const { isAuthenticated, login, getAccessToken } = useAuthContextProvider();

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        getAccessToken,
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
