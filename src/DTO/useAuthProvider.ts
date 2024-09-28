import { AuthProvider } from '@/providers/AuthProvider/AuthProvider.ts';

const provider = new AuthProvider();

export const useAuthProvider = () => provider;
