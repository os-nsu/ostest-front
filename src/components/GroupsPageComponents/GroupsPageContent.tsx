import styles from '@styles/components/GroupsPageStyles/GroupsPageContent.module.scss';
import GroupsPageTitle from './components/GroupsPageTitle/GroupsPageTitle';
import { useGroupsPageContent } from './hooks/useGroupsPageContent';
import GroupsList from './components/GroupsList/GroupsList';
import DefaultAside from '../asides/DefaultAside/DefaultAside';
import GroupAsideContent from '../GroupAsideContent/GroupAsideContent';
import ModalCreateGroup from '../modals/ModalCreateGroup/ModalCreateGroup';
import PaginationButtons from '../PaginationButtons/PaginationButtons';
import { useUserRole } from '@/hooks/useUserRole';
import { RoleTypes } from '@/types/Role';

export default function GroupsPageContent() {
  const {
    groups,
    isAsideDisplayed,
    setAsideDisplayed,
    setFilter,
    filteredGroups,
    isModalVisible,
    setModalVisible,
    handleNextPage,
    handlePrevPage,
    loadGroups,
    isLoading,
    isFirstPage,
    isLastPage,
    onEditGroup,
    selectedGroup,
    setSelectedGroup,
    onUpdate,
    onDelete,
  } = useGroupsPageContent();
  const { role } = useUserRole();
  const placeholder =
    role === RoleTypes.ADMIN
      ? 'Создайте первую группу'
      : 'На данный момент нет групп';

  return (
    <div className={styles.container}>
      <GroupsPageTitle
        setFilter={setFilter}
        onCreate={() => setModalVisible(true)}
      />
      {!groups.length ? (
        <span className={styles.placeholder}>{placeholder}</span>
      ) : (
        <>
          <GroupsList
            groups={filteredGroups()}
            onSelectGroup={group => {
              setSelectedGroup(group);
              setAsideDisplayed(true);
            }}
          />
          <PaginationButtons
            isLoading={isLoading}
            isFirstPage={isFirstPage}
            isLastPage={isLastPage}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            loadPage={loadGroups}
          />
        </>
      )}
      <DefaultAside
        visible={isAsideDisplayed}
        onHide={() => setAsideDisplayed(false)}
        style={{ width: '500px' }}
        children={
          selectedGroup && (
            <GroupAsideContent
              group={selectedGroup}
              onClose={() => setAsideDisplayed(false)}
              onEditGroup={onEditGroup}
              onDeleteGroup={onDelete}
            />
          )
        }
      />
      <ModalCreateGroup
        displayed={isModalVisible}
        onPrevent={() => setModalVisible(false)}
        onCreate={() => {
          setModalVisible(false);
          onUpdate();
        }}
      />
    </div>
  );
}
