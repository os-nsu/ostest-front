import DefaultInput from '@UI/inputs/DefaultInput/DefaultInput.tsx';
import DefaultDropdown from '@UI/inputs/DefaultDropdown/DefaultDropdown.tsx';
import { useUserForm } from '@/components/forms/UserForm/hooks/useUserForm.tsx';
import { Button } from 'primereact/button';
import styles from '@styles/components/UserForm.module.scss';

export default function UserForm() {
  const { isButtonDisabled, roleOptions, onFieldChange, onSubmit } =
    useUserForm();

  return (
    <div className={styles.container}>
      <DefaultDropdown
        options={roleOptions}
        label="Роль"
        placeholder="Выберите роль"
        onSelect={value => onFieldChange('role', value || '')}
      />
      <DefaultInput
        label="Email"
        placeholder="Введите email"
        onChange={value => onFieldChange('username', value || '')}
      />
      <DefaultInput
        label="Фамилия"
        placeholder="Введите фамилию"
        onChange={value => onFieldChange('firstName', value || '')}
      />
      <DefaultInput
        label="Имя"
        placeholder="Введите имя"
        onChange={value => onFieldChange('secondName', value || '')}
      />
      <DefaultInput
        label="Номер группы"
        placeholder="Введите номер группы"
        onChange={value => onFieldChange('groupNumber', value || '')}
      />
      <Button
        className={styles.submitButton}
        disabled={isButtonDisabled}
        label="Зарегистрировать"
        onClick={onSubmit}
      />
    </div>
  );
}
