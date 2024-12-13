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

export const getRoleFromToken = () => {
  const token = localStorage.getItem('accessToken');

  if (!token) {
    console.error('Токен не найден в localStorage.');
    return null;
  }

  try {
    const base64Payload = token.split('.')[1];
    const decodedPayload = atob(base64Payload);
    const roles = JSON.parse(decodedPayload).roles;

    return roles.length > 0 ? roles : null;
  } catch (error) {
    console.error('Ошибка при декодировании токена:', error);
    return null;
  }
};
