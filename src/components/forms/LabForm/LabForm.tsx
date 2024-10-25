import { Button } from 'primereact/button';
import styles from '@styles/components/LabForm.module.scss';
import DefaultDropdown from '@/UI/inputs/DefaultDropdown/DefaultDropdown';
import DefaultInput from '@/UI/inputs/DefaultInput/DefaultInput';
import { Laboratory } from '@/types/Laboratory';
import DefaultTextArea from '@/UI/textAreas/DefaultTextArea/DefaultTextArea';
import SelectedTests from '@/components/SelectedTests/SelectedTests';
import DefaultInputDate from '@/UI/inputs/DefaultInputDate/DefaultInputDate';
import { useLabForm } from './hooks/useLabForm';

interface LabFormProps extends Laboratory {
  isEditing: boolean;
}

export default function LabForm({ isEditing, ...laboratory }: LabFormProps) {
  const deadline = laboratory.deadline
    ? new Date(laboratory.deadline).toISOString().split('.')[0] + 'Z'
    : new Date().toISOString().split('.')[0] + 'Z';
  const {
    formData,
    onEditOrCreate,
    onFieldChange,
    isButtonDisabled,
    availableTests,
    selectedTests,
    handleSelectTest,
    handleDeselectTest,
    isNameError,
  } = useLabForm({
    ...laboratory,
    deadline,
    isEditing,
  });

  return (
    <div className={styles.container}>
      <DefaultInput
        label="Название"
        value={formData.name}
        placeholder="Введите название"
        onChange={value => onFieldChange('name', value || '')}
        invalid={isNameError.length > 0}
        errorLabel={isNameError}
      />
      <DefaultTextArea
        label="Описание"
        placeholder="Введите описание"
        textAreaMinHeight={200}
        value={formData.description}
        onChange={value => onFieldChange('description', value || '')}
      />
      <DefaultInputDate
        label="Срок сдачи"
        placeholder="Выберите дату"
        dateFormat="dd-mm-yy"
        value={new Date(formData.deadline)}
        onChange={value =>
          onFieldChange('deadline', value.toISOString().split('.')[0] + 'Z')
        }
      />
      <DefaultDropdown
        options={availableTests}
        label="Прикрепить тесты"
        placeholder="Выберите тесты для работы"
        onSelect={value => handleSelectTest(value as string)}
      />
      <SelectedTests onDeselect={handleDeselectTest} tests={selectedTests} />
      <Button
        className={styles.submitButton}
        disabled={isButtonDisabled}
        label={isEditing ? 'Сохранить' : 'Создать'}
        onClick={onEditOrCreate}
      />
    </div>
  );
}
