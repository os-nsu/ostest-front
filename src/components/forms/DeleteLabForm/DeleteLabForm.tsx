import { useDeleteLabForm } from '@/components/forms/DeleteLabForm/hooks/useDeleteLabForm.ts';
import { Button } from 'primereact/button';
import styles from '@styles/components/DeleteLabForm.module.scss';

interface DeleteLabFormProps {
  onClose: () => void;
  id?: string;
}

export default function DeleteLabForm({ onClose, id }: DeleteLabFormProps) {
  const { onDelete } = useDeleteLabForm(id);

  return (
    <div className={styles.container}>
      <Button
        className={styles.cancelButton}
        label="Отмена"
        onClick={onClose}
      />
      <Button
        className={styles.deleteButton}
        label="Удалить"
        onClick={onDelete}
      />
    </div>
  );
}
