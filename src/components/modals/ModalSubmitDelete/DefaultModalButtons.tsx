import { Button } from 'primereact/button';
import styles from '@styles/components/DefaultModalButtons.module.scss';

interface DefaultModalButtonsProps {
  onPrevent: () => void;
  onSubmit: () => void;
}

export default function DefaultModalButtons({
  onPrevent,
  onSubmit,
}: DefaultModalButtonsProps) {
  return (
    <div className={styles.container}>
      <Button
        className={styles.cancelButton}
        label="Отмена"
        onClick={onPrevent}
      />
      <Button
        className={styles.deleteButton}
        label="Удалить"
        onClick={onSubmit}
      />
    </div>
  );
}
