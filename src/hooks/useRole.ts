import { getRoleFromToken } from '@/contexts/AuthContext/hooks/getRoleFromToken';
import { RoleTypes } from '@/types/Role';

export const useRole = () => {
  const roles = getRoleFromToken();

  return (
    roles?.find(
      (role: string) =>
        role === RoleTypes.STUDENT ||
        role === RoleTypes.TEACHER ||
        role === RoleTypes.ADMIN,
    ) || null
  );
};
