import { Button } from 'primereact/button';
import styles from '@styles/components/DefaultModalButtons.module.scss';
import DefaultButton from '@/UI/buttons/DefaultButton/DefaultButton';

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
      <DefaultButton label="Удалить" onClick={onSubmit} />
    </div>
  );
}
