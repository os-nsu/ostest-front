import styles from '@styles/components/GroupsPageStyles/GroupsPageContent.module.scss';
import GroupsPageTitle from './components/GroupsPageTitle/GroupsPageTitle';
import { useGroupsPageContent } from './hooks/useGroupsPageContent';
import GroupsList from './components/GroupsList/GroupsList';
import { GroupStatus } from '@/types/Group';
import { useState } from 'react';

export default function GroupsPageContent() {
  const { groups, mock } = useGroupsPageContent();
  const [filter, setFilter] = useState<string>('all');

  const filteredGroups = () => {
    if (filter === 'active') {
      return mock.filter(group => group.status === GroupStatus.ACTIVE);
    }
    if (filter === 'inactive') {
      return mock.filter(group => group.status === GroupStatus.INACTIVE);
    }
    return mock;
  };

  return (
    <div className={styles.container}>
      <GroupsPageTitle setFilter={setFilter} />
      {!mock.length ? (
        <span className={styles.placeholder}>Создайте первую группу</span>
      ) : (
        <GroupsList groups={filteredGroups()} />
      )}
    </div>
  );
}
