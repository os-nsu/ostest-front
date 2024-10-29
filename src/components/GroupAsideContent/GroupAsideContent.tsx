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

  return (
    <div className={styles.container}>
      {isEditing ? (
        <GroupAsideBackHeader
          groupName={group.name}
          onCloseIconClick={onClose}
          onBackIconClick={() => setIsEditing(false)}
        />
      ) : (
        <GroupAsideContentHeader
          groupName={group.name}
          onCloseIconClick={onClose}
          onEditIconClick={() => setIsEditing(true)}
          onDeleteIconClick={() => setIsDeleting(true)}
        />
      )}
      {isEditing ? (
        <GroupAsideEditForm group={group} />
      ) : (
        <AboutGroup group={group} />
      )}
      <ModalSubmitDelete
        displayed={isDeleting}
        name={group.name}
        id={group.id.toString()}
        onPrevent={() => setIsDeleting(false)}
        onSubmit={() => {}}
      />
    </div>
  );
}
