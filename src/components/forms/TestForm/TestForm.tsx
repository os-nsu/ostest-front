import DefaultInput from '@UI/inputs/DefaultInput/DefaultInput.tsx';
import DefaultTextArea from '@UI/textAreas/DefaultTextArea/DefaultTextArea.tsx';
import DefaultFileUploader from '@UI/inputs/DefaultFileUploader/DefaultFileUploader.tsx';
import DefaultDropdown from '@UI/inputs/DefaultDropdown/DefaultDropdown.tsx';
import { useTestForm } from '@/components/forms/TestForm/hooks/useTestForm.ts';
import { Button } from 'primereact/button';
import styles from '@styles/components/TestForm.module.scss';

interface TestFormProps {
  containerClass?: string;
  buttonLabel?: string;
}

export default function TestForm({
  containerClass,
  buttonLabel,
}: TestFormProps) {
  const { isButtonDisabled, testOptions, onFieldChange, onSubmit } =
    useTestForm();

  return (
    <div className={[styles.container, containerClass].join(' ')}>
      <div>
        <DefaultInput
          label="Название"
          placeholder="Введите название"
          required
          onChange={value => onFieldChange('name', value)}
        />
        <DefaultDropdown
          options={testOptions}
          label="Тип теста"
          placeholder="Выберите тип тестирования"
          required
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
          required
          onSelect={files => onFieldChange('files', files)}
        />
      </div>

      <Button
        className={styles.submitButton}
        disabled={isButtonDisabled}
        label={buttonLabel ? buttonLabel : 'Создать'}
        onClick={onSubmit}
      />
    </div>
  );
}
