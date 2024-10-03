import { createContext, ReactNode, useContext, useState } from 'react';

interface AuthContextProviderProps {
  children: ReactNode;
}

interface AuthContextValue {
  isAuthenticated?: boolean;
  logout?: () => void;
  login?: () => void;
}

const AuthContext = createContext<AuthContextValue>({});

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
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
