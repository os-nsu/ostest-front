import styles from '@styles/components/GroupsPageStyles/GroupsPageContent.module.scss';
import GroupsPageTitle from './components/GroupsPageTitle/GroupsPageTitle';

export default function GroupsPageContent() {
  // const { groups, isAsideDisplayed, setAsideDisplayed } =
  //   useGroupsPageContent();

  return (
    <div className={styles.container}>
      <GroupsPageTitle />
      {/* {!groups.length ? (
        <span className={styles.placeholder}>Создайте первое тестирование</span>
      ) : (
        <GroupsList
          groups={groups}
          onSelectGroup={group => setAsideDisplayed(true)}
        />
      )} */}
      {/* <DefaultAside
        visible={isAsideDisplayed}
        onHide={() => setAsideDisplayed(false)}
        style={{ width: '500px' }}
        children={
          <TestAsideContent
            test={mock[2]}
            onClose={() => setAsideDisplayed(false)}
          />
        }
      /> */}
    </div>
  );
}
