import DefaultInput from '@UI/inputs/DefaultInput/DefaultInput.tsx';
import styles from '@styles/components/UploadAttemptForm.module.scss';
import DefaultButton from '@/UI/buttons/DefaultButton/DefaultButton';
import { useUploadAttemptForm } from './hooks/useUploadAttemptForm';

interface UploadAttemptFormProps {
  id: string;
  onUpload: () => void;
}

export default function UploadAttemptForm({
  id,
  onUpload,
}: UploadAttemptFormProps) {
  const { isButtonDisabled, onFieldChange, onSubmit } =
    useUploadAttemptForm(id);

  return (
    <>
      <div className={styles.container}>
        <DefaultInput
          label="Ссылка на репозиторий"
          placeholder="Укажите репозиторий"
          onChange={value => onFieldChange('repositoryUrl', value || '')}
        />
        <DefaultInput
          label="Название ветки"
          placeholder="Укажите ветку с решением"
          onChange={value => onFieldChange('branch', value || '')}
        />
      </div>
      <div className={styles.container}>
        <DefaultButton
          disabled={isButtonDisabled}
          label="Загрузить"
          onClick={() => {
            onSubmit();
            onUpload();
          }}
        />
      </div>
    </>
  );
}
