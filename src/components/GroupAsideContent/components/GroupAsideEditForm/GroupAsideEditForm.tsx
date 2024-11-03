import GroupForm from '@/components/forms/GroupForm/GroupForm';
import { Group } from '@/types/Group';
import styles from '@styles/components/TestsPageStyles/TestAsideEditForm.module.scss';

interface GroupAsideEditFormProps {
  group: Group;
}

export default function GroupAsideEditForm({ group }: GroupAsideEditFormProps) {
  return (
    <GroupForm
      group={group}
      containerClass={styles.form}
      buttonLabel="Сохранить"
    />
  );
}
