import { useEditLabForm } from '@/components/forms/EditLabForm/hooks/useEditLabForm.ts';
import { Button } from 'primereact/button';
import styles from '@styles/components/EditLabForm.module.scss';
import DefaultDropdown from '@/UI/inputs/DefaultDropdown/DefaultDropdown';
import DefaultInput from '@/UI/inputs/DefaultInput/DefaultInput';

export default function EditLabForm() {
  const { onEdit } = useEditLabForm();

  const { onFieldChange, isButtonDisabled } = useEditLabForm();

  return (
    <div className={styles.container}>
      <DefaultInput
        label="Название"
        placeholder="Выберите роль" //вставить имя лабы
        onChange={value => onFieldChange('name', value || '')}
      />
      <DefaultInput
        label="Описание"
        placeholder="Введите email" //вставить описание лабы
        onChange={value => onFieldChange('description', value || '')}
      />
      <DefaultInput
        label="Срок сдачи"
        placeholder="Введите фамилию" //вставить из лабы
        onChange={value => onFieldChange('deadline', value || '')}
      />
      <DefaultDropdown
        options={[]}
        label="Прикрепить тесты"
        placeholder="Выберите тесты для работы"
        onSelect={value => onFieldChange('tests', value || '')}
      />
      <div>Прикреплённые тесты</div>
      <Button
        className={styles.submitButton}
        disabled={isButtonDisabled}
        label="Зарегистрировать"
        onClick={onEdit}
      />
    </div>
  );
}
