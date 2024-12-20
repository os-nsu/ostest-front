import { RoleTypes } from '@/types/Role';
import { useEffect, useState } from 'react';
import { useRole } from './useRole';

export const useUserRole = () => {
  const [role, setRole] = useState<RoleTypes | null>(useRole());

  useEffect(() => {
    if (role !== null) return;
    setRole(useRole());
  }, [role]);

  return { role };
};
