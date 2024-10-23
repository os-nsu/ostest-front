import { useEditLabForm } from '@/components/forms/EditLabForm/hooks/useEditLabForm.ts';
import { Button } from 'primereact/button';
import styles from '@styles/components/EditLabForm.module.scss';
import DefaultDropdown from '@/UI/inputs/DefaultDropdown/DefaultDropdown';
import DefaultInput from '@/UI/inputs/DefaultInput/DefaultInput';
import { Laboratory } from '@/types/Laboratory';
import DefaultTextArea from '@/UI/textAreas/DefaultTextArea/DefaultTextArea';
import IconButton from '@/UI/buttons/IconButton/IconButton.tsx';
import IconDelete from '@public/x.svg';
import { InputText } from 'primereact/inputtext';

interface EditLabFormProps {
  laboratory: Laboratory;
}

export default function EditLabForm({ laboratory }: EditLabFormProps) {
  const {
    formData,
    onEdit,
    onFieldChange,
    isButtonDisabled,
    availableTests,
    selectedTests,
    handleSelectTest,
    handleDeselectTest,
  } = useEditLabForm({
    semesterNumber: laboratory.semesterNumber,
    isHidden: laboratory.isHidden,
    name: laboratory.name,
    description: laboratory.description || '',
    id: laboratory.id,
    deadline: laboratory.deadline
      ? new Date(laboratory.deadline).toLocaleDateString('ru-RU')
      : '',
    tests: laboratory.tests,
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
      <InputText
        type="date"
        placeholder="date placeholder"
        value={formData.deadline ? formData.deadline.split('T')[0] : ''}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          const value = event.target?.value;
          onFieldChange(
            'deadline',
            value ? new Date(value).toISOString().split('.')[0] + 'Z' : '',
          );
        }}
      />
      <DefaultDropdown
        options={availableTests}
        label="Прикрепить тесты"
        placeholder="Выберите тесты для работы"
        onSelect={value => handleSelectTest(value as string)}
      />
      <div className={styles.testsWrapper}>
        Прикреплённые тесты
        <div className={styles.attachedTests}>
          {selectedTests.map(test => (
            <div key={test.id} className={styles.selectedTest}>
              {test.name}
              <IconButton
                icon={IconDelete}
                onClick={() => handleDeselectTest(test)}
              />
            </div>
          ))}
        </div>
      </div>
      <Button
        className={styles.submitButton}
        disabled={isButtonDisabled}
        label="Зарегистрировать"
        onClick={onEdit}
      />
    </div>
  );
}
