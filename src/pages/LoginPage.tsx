import LoginForm from '@/components/forms/LoginForm/LoginForm.tsx';
import styles from '@styles/components/LoginPage.module.scss';

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
}
