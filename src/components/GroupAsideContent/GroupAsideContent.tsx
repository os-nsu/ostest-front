import styles from '@styles/components/TestsPageStyles/TestAsideContent.module.scss';
import { Group } from '@/types/Group';
import { useGroupAsideContent } from './hooks/useGroupAsideContent';
import GroupAsideContentHeader from './components/GroupAsideContentHeader/GroupAsideContentHeader';
import GroupAsideEditForm from './components/GroupAsideEditForm/GroupAsideEditForm';
import AboutGroup from '../AboutGroup/AboutGroup';
import GroupAsideBackHeader from './components/GroupAsideBackHeader/GroupAsideBackHeader';
import ModalSubmitDelete from '../modals/ModalSubmitDelete/ModalSubmitDelete';

interface GroupAsideContentProps {
  group: Group;
  onClose?: () => void;
}

export default function GroupAsideContent({
  group,
  onClose,
}: GroupAsideContentProps) {
  const { isEditing, setIsEditing, isDeleting, setIsDeleting } =
    useGroupAsideContent();

  if (isEditing) {
    return (
      <div className={styles.container}>
        <GroupAsideBackHeader
          groupName={group.name}
          onCloseIconClick={onClose}
          onBackIconClick={() => setIsEditing(false)}
        />
        <GroupAsideEditForm group={group} />
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <GroupAsideContentHeader
        groupName={group.name}
        onCloseIconClick={onClose}
        onEditIconClick={() => setIsEditing(true)}
        onDeleteIconClick={() => setIsDeleting(true)}
      />
      <AboutGroup group={group} />
      <ModalSubmitDelete
        displayed={isDeleting}
        name={'группу ' + group.name}
        id={group.id.toString()}
        onPrevent={() => setIsDeleting(false)}
        onSubmit={() => {}}
      />
    </div>
  );
}
