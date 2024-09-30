import { Button } from 'primereact/button';
import styles from '@styles/components/AuthForm.module.scss';
import DefaultInput from '@/UI/inputs/DefaultInput/DefaultInput';
import { useAuthForm } from './useAuthForm';

function AuthForm() {
  const { onFieldChange, handleLogin } = useAuthForm();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Вход</h1>
        <div className={styles.form}>
          <DefaultInput
            label="Login"
            placeholder="Your e-mail"
            onChange={value => onFieldChange('email', value)}
          />
          <DefaultInput
            label="Password"
            placeholder="your password"
            onChange={value => onFieldChange('password', value)}
          />
          <Button label="Войти" onClick={handleLogin} />
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
