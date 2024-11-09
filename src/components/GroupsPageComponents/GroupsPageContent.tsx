import styles from '@styles/components/GroupsPageStyles/GroupsPageContent.module.scss';
import GroupsPageTitle from './components/GroupsPageTitle/GroupsPageTitle';
import { useGroupsPageContent } from './hooks/useGroupsPageContent';
import GroupsList from './components/GroupsList/GroupsList';
import DefaultAside from '../asides/DefaultAside/DefaultAside';
import GroupAsideContent from '../GroupAsideContent/GroupAsideContent';
import ModalCreateGroup from '../modals/ModalCreateGroup/ModalCreateGroup';
import DefaultButton from '@/UI/buttons/DefaultButton/DefaultButton';

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
    isLoading,
    isFirstPage,
    isLastPage,
    onEditGroup,
    selectedGroup,
    setSelectedGroup,
    onUpdate,
    onDelete,
  } = useGroupsPageContent();

  return (
    <div className={styles.container}>
      <GroupsPageTitle
        setFilter={setFilter}
        onCreate={() => setModalVisible(true)}
      />
      {!groups.length ? (
        <span className={styles.placeholder}>Создайте первую группу</span>
      ) : (
        <>
          <GroupsList
            groups={filteredGroups()}
            onSelectGroup={group => {
              setSelectedGroup(group);
              setAsideDisplayed(true);
            }}
          />
          <div className={styles.buttonContainer}>
            <DefaultButton
              label="Назад"
              onClick={handlePrevPage}
              disabled={isFirstPage || isLoading}
            />
            <DefaultButton
              label="Вперед"
              onClick={handleNextPage}
              disabled={isLastPage || isLoading}
            />
          </div>
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
