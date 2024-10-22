import { useEditLabForm } from '@/components/forms/EditLabForm/hooks/useEditLabForm.ts';
import { Button } from 'primereact/button';
import styles from '@styles/components/EditLabForm.module.scss';
import DefaultDropdown from '@/UI/inputs/DefaultDropdown/DefaultDropdown';
import DefaultInput from '@/UI/inputs/DefaultInput/DefaultInput';
import { Laboratory } from '@/types/Laboratory';
import DefaultTextArea from '@/UI/textAreas/DefaultTextArea/DefaultTextArea';
import IconButton from '@/UI/buttons/IconButton/IconButton.tsx';
import IconDelete from '@public/x.svg';

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
      ? laboratory.deadline.toLocaleDateString('ru-RU')
      : '',
    tests: [
      {
        id: 1,
        name: 'test 1',
        description: 'descr 1',
        category: 'DEFAULT',
      },
      {
        id: 2,
        name: 'test 2',
        description: 'descr 2',
        category: 'DEFAULT',
      },
      {
        id: 3,
        name: 'test 3',
        description: 'descr 2',
        category: 'DEFAULT',
      },
      {
        id: 4,
        name: 'test 4',
        description: 'descr 2',
        category: 'DEFAULT',
      },
      {
        id: 5,
        name: 'test 5',
        description: 'descr 2',
        category: 'DEFAULT',
      },
      {
        id: 6,
        name: 'test 6',
        description: 'descr 2',
        category: 'DEFAULT',
      },
      {
        id: 7,
        name: 'test 7',
        description: 'descr 2',
        category: 'DEFAULT',
      },
      {
        id: 8,
        name: 'test 8',
        description: 'descr 2',
        category: 'DEFAULT',
      },
      {
        id: 9,
        name: 'test 9',
        description: 'descr 2',
        category: 'DEFAULT',
      },
      {
        id: 10,
        name: 'test 10',
        description: 'descr 3',
        category: 'DEFAULT',
      },
    ],
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
