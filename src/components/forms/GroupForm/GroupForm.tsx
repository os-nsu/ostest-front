import DefaultInput from '@UI/inputs/DefaultInput/DefaultInput.tsx';
import DefaultDropdown from '@UI/inputs/DefaultDropdown/DefaultDropdown.tsx';
import { Button } from 'primereact/button';
import styles from '@styles/components/TestForm.module.scss';
import { Group } from '@/types/Group';
import { useGroupForm } from './hooks/useGroupForm';

interface GroupFormProps {
  group?: Group;
  containerClass?: string;
  buttonLabel?: string;
}

export default function GroupForm({
  group,
  containerClass,
  buttonLabel,
}: GroupFormProps) {
  const { formData, isButtonDisabled, groupOptions, onFieldChange, onSubmit } =
    useGroupForm(group);

  return (
    <div className={[styles.container, containerClass].join(' ')}>
      <div className={styles.fieldContainer}>
        <DefaultInput
          label="Название"
          placeholder="Введите название"
          value={formData?.name}
          required
          onChange={value => onFieldChange('name', value)}
        />
        <DefaultDropdown
          options={groupOptions}
          label="Статус группы"
          placeholder="Выберите статус группы"
          value={formData?.status}
          required
          onSelect={value => onFieldChange('status', value || '')}
        />
      </div>

      <Button
        className={styles.submitButton}
        disabled={isButtonDisabled}
        label={buttonLabel ? buttonLabel : 'Создать'}
        onClick={onSubmit}
      />
    </div>
  );
}
