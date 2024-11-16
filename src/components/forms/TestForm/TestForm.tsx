import DefaultInput from '@UI/inputs/DefaultInput/DefaultInput.tsx';
import DefaultTextArea from '@UI/textAreas/DefaultTextArea/DefaultTextArea.tsx';
import DefaultDropdown from '@UI/inputs/DefaultDropdown/DefaultDropdown.tsx';
import { useTestForm } from '@/components/forms/TestForm/hooks/useTestForm.ts';
import styles from '@styles/components/TestForm.module.scss';
import { Test } from '@/types/Test.ts';
import DefaultButton from '@UI/buttons/DefaultButton/DefaultButton.tsx';

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
        <DefaultTextArea
          label="Описание"
          placeholder="Опишите создаваемый тест"
          value={formData?.description}
          onChange={value => onFieldChange('description', value || '')}
        />
        <DefaultDropdown
          options={testOptions}
          label="Категория тестирования"
          placeholder="Выберите тип тестирования"
          value={formData?.type}
          required
          onSelect={value => onFieldChange('type', value || '')}
        />
      </div>

      <DefaultButton
        buttonClass={styles.submitButton}
        disabled={isButtonDisabled}
        label={buttonLabel ? buttonLabel : 'Создать'}
        onClick={onSubmit}
      />
    </div>
  );
}
