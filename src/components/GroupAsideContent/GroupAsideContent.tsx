import styles from '@styles/components/TestsPageStyles/TestAsideContent.module.scss';
import { Group } from '@/types/Group';
import { useGroupAsideContent } from './hooks/useGroupAsideContent';
import GroupAsideContentHeader from './components/GroupAsideContentHeader/GroupAsideContentHeader';
import GroupAsideEditForm from './components/GroupAsideEditForm/GroupAsideEditForm';
import AboutGroup from '../AboutGroup/AboutGroup';

interface GroupAsideContentProps {
  group: Group;
  onClose?: () => void;
}

export default function GroupAsideContent({
  group,
  onClose,
}: GroupAsideContentProps) {
  const { isEditing, setIsEditing } = useGroupAsideContent();

  return (
    <div className={styles.container}>
      <GroupAsideContentHeader
        groupName={group.name}
        onCloseIconClick={onClose}
        onEditIconClick={() => setIsEditing(true)}
      />
      {isEditing ? (
        <GroupAsideEditForm group={group} />
      ) : (
        <AboutGroup group={group} />
      )}
    </div>
  );
}
