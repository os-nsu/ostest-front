import DefaultInput from '@UI/inputs/DefaultInput/DefaultInput.tsx';
import { Button } from 'primereact/button';
import styles from '@styles/components/LoginForm.module.scss';
import { useLoginForm } from '@/components/forms/LoginForm/hooks/useLoginForm.ts';

export default function LoginForm() {
  const { isLoading, isError, onSubmit, onFieldChange } = useLoginForm();

  return (
    <div className={styles.container}>
      <span className={styles.title}>Вход в систему</span>
      <DefaultInput
        label="Логин"
        placeholder="Введите логин"
        onChange={(value: string) => onFieldChange('username', value)}
        invalid={isError}
      />
      <DefaultInput
        label="Пароль"
        placeholder="Введите пароль"
        onChange={(value: string) => onFieldChange('password', value)}
        invalid={isError}
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
