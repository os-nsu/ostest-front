import DefaultInput from '@UI/inputs/DefaultInput/DefaultInput.tsx';
import styles from '@styles/components/DownloadAttemptForm.module.scss';
import DefaultButton from '@/UI/buttons/DefaultButton/DefaultButton';
import { useDownloadAttemptForm } from './hooks/useDownloadAttemptForm';

interface DownloadAttemptFormProps {
  id: string;
  onDownload: () => void;
}

export default function DownloadAttemptForm({
  id,
  onDownload,
}: DownloadAttemptFormProps) {
  const { isButtonDisabled, onFieldChange, onSubmit } =
    useDownloadAttemptForm(id);

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
            onDownload();
          }}
        />
      </div>
    </>
  );
}
