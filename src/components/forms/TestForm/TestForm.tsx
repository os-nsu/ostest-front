import DefaultInput from '@UI/inputs/DefaultInput/DefaultInput.tsx';
import DefaultTextArea from '@UI/textAreas/DefaultTextArea/DefaultTextArea.tsx';
import DefaultFileUploader from '@UI/inputs/DefaultFileUploader/DefaultFileUploader.tsx';
import DefaultDropdown from '@UI/inputs/DefaultDropdown/DefaultDropdown.tsx';
import { useTestForm } from '@/components/forms/TestForm/hooks/useTestForm.ts';
import { Button } from 'primereact/button';
import styles from '@styles/components/TestForm.module.scss';
import { Test } from '@/types/Test.ts';

interface TestFormProps {
  test?: Test;
  containerClass?: string;
  buttonLabel?: string;
}

export default function TestForm({
  test,
  containerClass,
  buttonLabel,
}: TestFormProps) {
  const { formData, isButtonDisabled, testOptions, onFieldChange, onSubmit } =
    useTestForm(test);

  console.log('formData', formData?.name);
  return (
    <div className={[styles.container, containerClass].join(' ')}>
      <div className={styles.fieldContainer}>
        <DefaultInput
          label="Название"
          placeholder="Введите название"
          value={formData?.name}
          required
          onChange={value => onFieldChange('name', value)}
        />
        <DefaultDropdown
          options={testOptions}
          label="Тип теста"
          placeholder="Выберите тип тестирования"
          value={formData?.type}
          required
          onSelect={value => onFieldChange('type', value || '')}
        />
        <DefaultTextArea
          label="Описание"
          placeholder="Опишите создаваемый тест"
          value={formData?.description}
          onChange={value => onFieldChange('description', value || '')}
        />
        <DefaultFileUploader
          label="Файл теста"
          placeholder="Загрузить"
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
