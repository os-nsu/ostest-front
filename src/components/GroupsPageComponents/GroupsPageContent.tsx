import styles from '@styles/components/GroupsPageStyles/GroupsPageContent.module.scss';
import GroupsPageTitle from './components/GroupsPageTitle/GroupsPageTitle';
import { useGroupsPageContent } from './hooks/useGroupsPageContent';
import GroupsList from './components/GroupsList/GroupsList';
import DefaultAside from '../asides/DefaultAside/DefaultAside';
import GroupAsideContent from '../GroupAsideContent/GroupAsideContent';
import ModalCreateGroup from '../modals/ModalCreateGroup/ModalCreateGroup';

export default function GroupsPageContent() {
  const {
    groups,
    mock,
    isAsideDisplayed,
    setAsideDisplayed,
    setFilter,
    filteredGroups,
    isModalVisible,
    setModalVisible,
  } = useGroupsPageContent();

  return (
    <div className={styles.container}>
      <GroupsPageTitle
        setFilter={setFilter}
        onCreate={() => setModalVisible(true)}
      />
      {!mock.length ? (
        <span className={styles.placeholder}>Создайте первую группу</span>
      ) : (
        <GroupsList
          groups={filteredGroups()}
          onSelectGroup={group => setAsideDisplayed(true)}
        />
      )}
      <DefaultAside
        visible={isAsideDisplayed}
        onHide={() => setAsideDisplayed(false)}
        style={{ width: '500px' }}
        children={
          <GroupAsideContent
            group={mock[0]}
            onClose={() => setAsideDisplayed(false)}
          />
        }
      />
      <ModalCreateGroup
        displayed={isModalVisible}
        onPrevent={() => setModalVisible(false)}
        onCreate={() => setModalVisible(false)}
      />
    </div>
  );
}
