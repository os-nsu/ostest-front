import { useAuthProvider } from '@/providers/AuthProvider/useAuthProvider';

export const useRole = () => {
  const roles = useAuthProvider().getRoleFromToken();

  return (
    roles?.find((role: string) => role === 'STUDENT' || role === 'TEACHER') ||
    null
  );
};
