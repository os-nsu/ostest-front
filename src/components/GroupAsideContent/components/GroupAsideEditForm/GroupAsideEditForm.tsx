import GroupForm from '@/components/forms/GroupForm/GroupForm';
import { Group } from '@/types/Group';
import styles from '@styles/components/TestsPageStyles/TestAsideEditForm.module.scss';

interface GroupAsideEditFormProps {
  group: Group;
  onUpdate: () => void;
}

export default function GroupAsideEditForm({
  group,
  onUpdate,
}: GroupAsideEditFormProps) {
  return (
    <GroupForm
      group={group}
      isEditing={true}
      containerClass={styles.form}
      buttonLabel="Сохранить"
      onUpdate={onUpdate}
    />
  );
}
