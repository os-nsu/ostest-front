import { useEditLabForm } from '@/components/forms/EditLabForm/hooks/useEditLabForm.ts';
import { Button } from 'primereact/button';
import styles from '@styles/components/EditLabForm.module.scss';
import DefaultDropdown from '@/UI/inputs/DefaultDropdown/DefaultDropdown';
import DefaultInput from '@/UI/inputs/DefaultInput/DefaultInput';
import { Laboratory } from '@/types/Laboratory';

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
  } = useEditLabForm({
    name: laboratory.name,
    description: laboratory.description || '',
    deadline: laboratory.deadline
      ? laboratory.deadline.toLocaleDateString('ru-RU')
      : '',
    tests: laboratory.tests || [],
  });

  return (
    <div className={styles.container}>
      <DefaultInput
        label="Название"
        value={formData.name}
        placeholder="Выберите роль"
        onChange={value => onFieldChange('name', value || '')}
      />
      <DefaultInput
        label="Описание"
        placeholder="Введите email"
        value={formData.description}
        onChange={value => onFieldChange('description', value || '')}
      />
      <DefaultInput
        label="Срок сдачи"
        placeholder="Введите срок сдачи"
        value={formData.deadline}
        onChange={value => onFieldChange('deadline', value || '')}
      />
      <DefaultDropdown
        options={availableTests}
        label="Прикрепить тесты"
        placeholder="Выберите тесты для работы"
        onSelect={value => onFieldChange('tests', value || '')}
      />
      <div className={styles.attachedTests}>
        <h4>Прикреплённые тесты:</h4>
        {selectedTests.map(test => (
          <div key={test.id}>{test.name}</div>
        ))}
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
