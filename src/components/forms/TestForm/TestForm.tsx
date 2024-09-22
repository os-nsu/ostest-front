import DefaultInput from '@UI/inputs/DefaultInput/DefaultInput.tsx';
import DefaultTextArea from '@UI/textAreas/DefaultTextArea/DefaultTextArea.tsx';
import DefaultFileUploader from '@UI/inputs/DefaultFileUploader/DefaultFileUploader.tsx';
import DefaultDropdown from '@UI/inputs/DefaultDropdown/DefaultDropdown.tsx';
import styles from '@styles/components/TestForm.module.scss';
import { useTestForm } from '@/components/forms/TestForm/hooks/useTestForm.ts';

export default function TestForm() {
  const { testOptions, onFieldChange } = useTestForm();

  return (
    <div className={styles.container}>
      <DefaultInput
        label="Название"
        placeholder="Введите название"
        onChange={value => onFieldChange('name', value)}
      />
      <DefaultDropdown
        options={testOptions}
        label="Категория"
        placeholder="Выберите категорию теста"
        onSelect={value => onFieldChange('type', value || '')}
      />
      <DefaultTextArea
        label="Описание"
        placeholder="Опишите создаваемый тест"
        onChange={value => onFieldChange('description', value || '')}
      />
      <DefaultFileUploader
        label="Файл теста"
        placeholder="Выберите файл"
        onSelect={files => onFieldChange('files', files)}
      />
    </div>
  );
}
