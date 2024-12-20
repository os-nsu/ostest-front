import { getRoleFromToken } from '@/contexts/AuthContext/hooks/getRoleFromToken';

export const useRole = () => {
  const roles = getRoleFromToken();

  return (
    roles?.find((role: string) => role === 'STUDENT' || role === 'TEACHER') ||
    null
  );
};
