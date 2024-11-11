import { useEffect, useState } from 'react';
import { Group, GroupFilters, GroupStatus } from '@/types/Group';
import { useGroupProvider } from '@/providers/GroupProvider/useGroupProvider';
import { usePagination } from './usePagination';

export const useGroupsPageContent = () => {
  const [isAsideDisplayed, setAsideDisplayed] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);
  const [filter, setFilter] = useState(GroupFilters.ACTIVE);
  const [isLoading, setIsLoading] = useState(false);
  const [groups, setGroups] = useState<Group[]>([]);

  const filteredGroups = () => {
    if (filter === GroupFilters.ACTIVE) {
      return groups.filter(group => group.status === GroupStatus.ACTIVE);
    }
    if (filter === GroupFilters.INACTIVE) {
      return groups.filter(group => group.status === GroupStatus.INACTIVE);
    }
    return groups;
  };

  const {
    pageSize,
    currentPage,
    isFirstPage,
    isLastPage,
    setPages,
    setCurrentPage,
    handleNextPage,
    handlePrevPage,
  } = usePagination();

  useEffect(() => {
    loadGroups(0);
  }, []);

  const validateAndFormatGroup = (group: Partial<Group>): Group => {
    return {
      name: group.name ?? '',
      users: group.users ?? [],
      ...group,
    } as Group;
  };

  const loadGroups = (page: number) => {
    setIsLoading(true);

    const requestData = {
      page,
      size: pageSize,
      sort: 'name',
    };

    useGroupProvider()
      .searchGroups(requestData)
      .then(({ status, data }) => {
        if (status === 200 && data) {
          setPages(data.last, data.first, data.totalPages);

          Promise.all(
            data.content.map(async group => {
              return useGroupProvider()
                .getGroup(`${group.id}`)
                .then(details => {
                  return validateAndFormatGroup({
                    ...details.data,
                    status: GroupStatus.ACTIVE,
                  });
                });
            }),
          ).then(detailedGroups => {
            setGroups(detailedGroups);
            setCurrentPage(page);
          });
        }
      })
      .catch(err => console.error(err))
      .finally(() => setIsLoading(false));
  };

  const onEditGroup = () => {
    useGroupProvider()
      .getGroup(`${selectedGroup?.id}`)
      .then(({ status, data }) => {
        if (status === 200 && data) {
          setSelectedGroup(data);
          loadGroups(currentPage);
        }
      })
      .catch(err => console.error(err))
      .finally(() => setIsLoading(false));
  };

  const onDelete = () => {
    setAsideDisplayed(false);
    setSelectedGroup(null);
    loadGroups(currentPage);
  };

  const onUpdate = () => {
    loadGroups(currentPage);
  };

  return {
    groups,
    isAsideDisplayed,
    setAsideDisplayed,
    isModalVisible,
    setModalVisible,
    setFilter,
    filteredGroups,
    handleNextPage,
    handlePrevPage,
    loadGroups,
    isLoading,
    isFirstPage,
    isLastPage,
    selectedGroup,
    setSelectedGroup,
    onEditGroup,
    onDelete,
    onUpdate,
  };
};
