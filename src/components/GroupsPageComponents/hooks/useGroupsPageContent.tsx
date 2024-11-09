import { useEffect, useState } from 'react';
import { Group, GroupFilters, GroupStatus } from '@/types/Group';
import { useGroupProvider } from '@/providers/GroupProvider/useGroupProvider';

export const useGroupsPageContent = () => {
  const [isAsideDisplayed, setAsideDisplayed] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);
  const [filter, setFilter] = useState(GroupFilters.ACTIVE);

  const [groups, setGroups] = useState<Group[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  const [isLastPage, setIsLastPage] = useState(false);
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [totalPages, setTotalPages] = useState(0);

  const filteredGroups = () => {
    if (filter === GroupFilters.ACTIVE) {
      return groups.filter(group => group.status === GroupStatus.ACTIVE);
    }
    if (filter === GroupFilters.INACTIVE) {
      return groups.filter(group => group.status === GroupStatus.INACTIVE);
    }
    return groups;
  };

  useEffect(() => {
    loadGroups(0);
  }, []);

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
          setIsLastPage(data.last);
          setIsFirstPage(data.first);
          setTotalPages(data.totalPages);

          Promise.all(
            data.content.map(async group => {
              return useGroupProvider()
                .getGroup(`${group.id}`)
                .then(details => {
                  return { ...details.data, status: GroupStatus.ACTIVE };
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

  const handleNextPage = () => {
    if (!isLastPage) {
      loadGroups(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (!isFirstPage) {
      loadGroups(currentPage - 1);
    }
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
