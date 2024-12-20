import { createContext, ReactNode, useContext } from 'react';
import { useAuthContextProvider } from '@/contexts/AuthContext/hooks/useAuthContextProvider.ts';

interface AuthContextProviderProps {
  children: ReactNode;
}

interface AuthContextValue {
  isAuthenticated: boolean;
  onLogin: (accessToken: string, refreshToken: string) => void;
  onLogout: () => void;
}

const AuthContext = createContext<AuthContextValue>({
  isAuthenticated: false,
  onLogin: () => {},
  onLogout: () => {},
});

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const { isAuthenticated, onLogin, onLogout } = useAuthContextProvider();

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        onLogin,
        onLogout,
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
