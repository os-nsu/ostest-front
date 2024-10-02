import DefaultInput from '@UI/inputs/DefaultInput/DefaultInput.tsx';
import { Button } from 'primereact/button';
import styles from '@styles/components/LoginForm.module.scss';

export default function LoginForm() {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Вход в систему</span>
      <DefaultInput label="Email" placeholder="Введите почту" />
      <DefaultInput label="Пароль" placeholder="Введите пароль" />
      <Button className={styles.button}>Войти</Button>
    </div>
  );
}
