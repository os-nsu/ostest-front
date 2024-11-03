import { useEffect, useState } from 'react';
import { Group, GroupFilters, GroupStatus } from '@/types/Group';

const mock: Group[] = [
  {
    id: 1,
    name: 'Group 1',
    status: GroupStatus.ACTIVE,
    studentsCount: 10,
    teacher: 'Teacher 1',
  },
  {
    id: 2,
    name: 'Group 2',
    status: GroupStatus.ACTIVE,
    studentsCount: 14,
    teacher:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quasi obcaecati numquam placeat, nostrum saepe nobis quia, sed sint quam cupiditate modi in voluptates veniam iusto explicabo? Commodi, dicta ad.',
  },
  {
    id: 3,
    name: 'Group 3',
    status: GroupStatus.INACTIVE,
    studentsCount: 1,
    teacher: 'Teacher 3',
  },
];

export const useGroupsPageContent = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [isAsideDisplayed, setAsideDisplayed] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [filter, setFilter] = useState(GroupFilters.ACTIVE);

  const filteredGroups = () => {
    if (filter === GroupFilters.ACTIVE) {
      return mock.filter(group => group.status === GroupStatus.ACTIVE);
    }
    if (filter === GroupFilters.INACTIVE) {
      return mock.filter(group => group.status === GroupStatus.INACTIVE);
    }
    return mock;
  };

  const requestGroups = () => {
    console.log('There will be a request for groups here');
  };

  useEffect(() => requestGroups(), []);

  return {
    groups,
    mock,
    isAsideDisplayed,
    setAsideDisplayed,
    isModalVisible,
    setModalVisible,
    setFilter,
    filteredGroups,
  };
};
