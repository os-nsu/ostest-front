import RegisterForm from '@/components/forms/RegisterForm/RegisterForm.tsx';
import { Dialog } from 'primereact/dialog';
import styles from '@styles/components/ModalCreateUser.module.scss';
import { Button } from 'primereact/button';
import IconClose from '@public/close.svg';
import { useState } from 'react';

interface ModalCreateUserProps {
  displayed?: boolean;
}

export default function ModalCreateUser({ displayed }: ModalCreateUserProps) {
  const [isDisplayed, setDisplayed] = useState(displayed);

  return (
    <Dialog
      visible={isDisplayed}
      onHide={() => {}}
      className={styles.wrapper}
      content={() => (
        <div className={styles.container}>
          <span className={styles.title}>Регистрация пользователя</span>
          <RegisterForm />
          <Button
            className={styles.close}
            icon={<img src={IconClose} alt="" />}
            rounded
            onClick={() => setDisplayed(false)}
          />
        </div>
      )}
    />
  );
}
