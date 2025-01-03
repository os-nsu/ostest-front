import DefaultInput from '@UI/inputs/DefaultInput/DefaultInput.tsx';
import styles from '@styles/components/CreateGroupForm.module.scss';
import { useCreateGroupForm } from './hooks/useCreateGroupForm';
import DefaultButton from '@/UI/buttons/DefaultButton/DefaultButton';

interface CreateGroupFormProps {
  onUpdate: () => void;
}

export default function CreateGroupForm({ onUpdate }: CreateGroupFormProps) {
  const { isButtonDisabled, onFieldChange, onSubmit, isNameError } =
    useCreateGroupForm(onUpdate);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !isButtonDisabled) {
      onSubmit();
    }
  };

  return (
    <div className={styles.container} onKeyDown={handleKeyDown}>
      <DefaultInput
        label="Номер группы"
        placeholder="Укажите номер группы"
        onChange={value => onFieldChange('name', value || '')}
        invalid={isNameError.length > 0}
        errorLabel={isNameError}
      />
      <DefaultButton
        disabled={isButtonDisabled}
        label="Создать"
        onClick={() => {
          onSubmit();
        }}
      />
    </div>
  );
}
