import DefaultInput from '@UI/inputs/DefaultInput/DefaultInput.tsx';
import DefaultButton from '@/UI/buttons/DefaultButton/DefaultButton';
import styles from '@styles/components/ChangePasswordForm.module.scss';
import { useChangePasswordForm } from './hooks/useChangePasswordForm';

interface ChangePasswordFormProps {
  onChange: () => void;
}

export default function ChangePasswordForm({
  onChange,
}: ChangePasswordFormProps) {
  const { isButtonDisabled, onFieldChange, onSubmit, confirmPasswordError } =
    useChangePasswordForm(onChange);
  return (
    <div className={styles.container}>
      <div className={styles.fieldContainer}>
        <DefaultInput
          label="Старый пароль"
          placeholder="Введите старый пароль"
          onChange={value => onFieldChange('oldPassword', value || '')}
        />
        <DefaultInput
          label="Новый пароль"
          placeholder="Введите новый пароль"
          onChange={value => onFieldChange('newPassword', value || '')}
        />
        <DefaultInput
          label="Повторите новый пароль"
          placeholder="Повторите новый пароль"
          onChange={value => onFieldChange('confirmNewPassword', value || '')}
          invalid={confirmPasswordError.length > 0}
          errorLabel={confirmPasswordError}
        />
      </div>
      <DefaultButton
        buttonClass={styles.submitButton}
        label="Сохранить"
        disabled={isButtonDisabled}
        onClick={() => onSubmit()}
      />
    </div>
  );
}
