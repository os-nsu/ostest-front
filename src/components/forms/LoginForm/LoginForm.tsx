import DefaultInput from '@UI/inputs/DefaultInput/DefaultInput.tsx';
import { Button } from 'primereact/button';
import styles from '@styles/components/LoginForm.module.scss';
import { useLoginForm } from '@/components/forms/LoginForm/hooks/useLoginForm.ts';

export default function LoginForm() {
  const {
    isLoading,
    isUserError,
    isPasswordError,
    onSubmit,
    onFieldChange,
    handleKeyDown,
  } = useLoginForm();

  return (
    <div className={styles.container} onKeyDown={handleKeyDown}>
      <span className={styles.title}>Вход в систему</span>
      <DefaultInput
        label="Логин"
        placeholder="Введите логин"
        onChange={(value: string) => onFieldChange('username', value)}
        invalid={isUserError.length > 0}
        errorLabel={isUserError}
      />
      <DefaultInput
        label="Пароль"
        placeholder="Введите пароль"
        onChange={(value: string) => onFieldChange('password', value)}
        invalid={isPasswordError.length > 0}
        errorLabel={isPasswordError}
      />
      <Button
        className={styles.button}
        onClick={onSubmit}
        label="Войти"
        loading={isLoading}
      />
    </div>
  );
}
