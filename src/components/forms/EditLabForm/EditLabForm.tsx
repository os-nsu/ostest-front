import { useEditLabForm } from '@/components/forms/EditLabForm/hooks/useEditLabForm.ts';
import { Button } from 'primereact/button';
import styles from '@styles/components/EditLabForm.module.scss';
import DefaultDropdown from '@/UI/inputs/DefaultDropdown/DefaultDropdown';
import DefaultInput from '@/UI/inputs/DefaultInput/DefaultInput';
import { Laboratory } from '@/types/Laboratory';
import DefaultTextArea from '@/UI/textAreas/DefaultTextArea/DefaultTextArea';
import SelectedTests from '@/components/SelectedTests/SelectedTests';
import DefaultInputDate from '@/UI/inputs/DefaultInputDate/DefaultInputDate';

export default function EditLabForm(laboratory: Laboratory) {
  const deadline = laboratory.deadline
    ? new Date(laboratory.deadline).toLocaleDateString('ru-RU')
    : '';
  const {
    formData,
    onEdit,
    onFieldChange,
    isButtonDisabled,
    availableTests,
    selectedTests,
    parseDateFromString,
    handleSelectTest,
    handleDeselectTest,
  } = useEditLabForm({
    ...laboratory,
    deadline,
  });

  return (
    <div className={styles.container}>
      <DefaultInput
        label="Название"
        value={formData.name}
        placeholder="Введите название"
        onChange={value => onFieldChange('name', value || '')}
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
        value={
          formData.deadline
            ? parseDateFromString(formData.deadline)
            : new Date()
        }
        onChange={value =>
          onFieldChange(
            'deadline',
            value ? value.toISOString().split('.')[0] + 'Z' : '',
          )
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
        label="Сохранить"
        onClick={onEdit}
      />
    </div>
  );
}
