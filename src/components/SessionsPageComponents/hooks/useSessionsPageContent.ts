import { usePagination } from '@/components/GroupsPageComponents/hooks/usePagination';
import { SessionsContent } from '@/DTO/SessionDTO';
import { useSessionProvider } from '@/providers/SessionProvider/useSessionProvider';
import { useCallback, useEffect, useState } from 'react';
import { useRole } from './useRole';
import { useUser } from './useUser';
import { RoleTypes } from '@/types/Role';

type SessionAttempt = Omit<SessionsContent, 'user'>;
type FilterFunction = (a: SessionAttempt, b: SessionAttempt) => number;
export type FilterType = 'number' | 'lab_name' | 'student_name' | 'none';

export const useSessionsPageContent = () => {
  const [attempts, setAttempts] = useState<SessionAttempt[]>([]);
  const [filter, setFilter] = useState<FilterType>('none');
  const [isFilter, setIsFilter] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [role, setRole] = useState<RoleTypes | null>(null);

  const { user, loading } = useUser();

  const filterVariants: Record<FilterType, FilterFunction> = {
    number: (a, b) =>
      a.student.group.groupName.localeCompare(b.student.group.groupName),
    lab_name: (a, b) => a.laboratoryName.localeCompare(b.laboratoryName),
    student_name: (a, b) =>
      a.student.secondName.localeCompare(b.student.secondName),
    none: () => 0,
  };

  const filteredAttempts = () => {
    const FilterFunction = filterVariants[filter];
    return [...attempts].sort(FilterFunction);
  };

  const {
    pageSize,
    isFirstPage,
    isLastPage,
    setPages,
    setCurrentPage,
    handleNextPage,
    handlePrevPage,
  } = usePagination();

  const loadAttempts = useCallback(
    async (page: number) => {
      if (!user) {
        console.error('User is not loaded');
        return;
      }

      setIsLoading(true);

      const requestData = {
        page,
        size: pageSize,
        sort: 'laboratoryName',
      };

      useSessionProvider()
        .getAttempts(user.id, requestData)
        .then(({ status, data }) => {
          if (status === 200 && data) {
            setPages(data.last, data.first, data.totalPages);
            setAttempts(data.content);
            setCurrentPage(page);
          }
        })
        .catch(err => console.error(err))
        .finally(() => setIsLoading(false));
    },
    [pageSize, user, setCurrentPage, setPages],
  );

  useEffect(() => {
    setRole(useRole());

    if (role === RoleTypes.STUDENT) {
      setTitle('Мои сессии сдачи');
      setIsFilter(false);
    } else {
      setTitle('Информация о выполняемых работах');
      setIsFilter(true);
    }

    if (loading) {
      return;
    }
    if (!user) {
      console.error('User not found');
    }
    loadAttempts(0);
  }, [loading, user, role]);

  return {
    attempts,
    role,
    title,
    filter,
    isFilter,
    isLoading,
    isFirstPage,
    isLastPage,
    filteredAttempts,
    handleNextPage,
    handlePrevPage,
    loadAttempts,
    setFilter,
  };
};
