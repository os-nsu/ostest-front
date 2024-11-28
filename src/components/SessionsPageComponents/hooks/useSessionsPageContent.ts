import { usePagination } from '@/components/GroupsPageComponents/hooks/usePagination';
import { SessionsContent } from '@/DTO/SessionDTO';
import { useSessionProvider } from '@/providers/SessionProvider/useSessionProvider';
import { useCallback, useEffect, useState } from 'react';
import { useToken } from './useRole';
import { useUser } from './useUser';

export const useSessionsPageContent = () => {
  const [attempts, setAttempts] = useState<Omit<SessionsContent, 'user'>[]>([]);
  const [filter, setFilter] = useState('');
  const [isFilter, setIsFilter] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [role, setRole] = useState('');

  const { user, loading } = useUser();

  const filteredAttempts = () => {
    return [...attempts].sort((a, b) => {
      if (filter === 'number') {
        return a.student.group.groupName.localeCompare(
          b.student.group.groupName,
        );
      } else if (filter === 'laboratoryName') {
        return a.laboratoryName.localeCompare(b.laboratoryName);
      } else if (filter === 'studentName') {
        return a.student.secondName.localeCompare(b.student.secondName);
      } else {
        return 0;
      }
    });
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
    [pageSize, setPages, user],
  );

  useEffect(() => {
    setRole(useToken());

    if (role === 'STUDENT') {
      setTitle('Мои сессии сдачи');
      setIsFilter(false);
    } else {
      setTitle('Информация о выполняемых работах');
      setIsFilter(true);
    }

    if (!loading) {
      if (user) {
        loadAttempts(0);
      } else {
        console.error('User not found');
      }
    }
  }, [loading, user]);

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
