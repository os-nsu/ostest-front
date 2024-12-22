import DefaultInput from '@UI/inputs/DefaultInput/DefaultInput.tsx';
import DefaultTextArea from '@UI/textAreas/DefaultTextArea/DefaultTextArea.tsx';
import DefaultDropdown from '@UI/inputs/DefaultDropdown/DefaultDropdown.tsx';
import { useTestForm } from '@/components/forms/TestForm/hooks/useTestForm.ts';
import styles from '@styles/components/TestForm.module.scss';
import { Test } from '@/types/Test.ts';
import DefaultButton from '@UI/buttons/DefaultButton/DefaultButton.tsx';
import SwitchBoxField from '@/components/formFields/SwitchBoxField/SwitchBoxField.tsx';

interface TestFormProps {
  test?: Test;
  isEditing?: boolean;
  containerClass?: string;
  buttonLabel?: string;
  onResponded?: () => void;
}

export default function TestForm({
  test,
  isEditing,
  containerClass,
  buttonLabel,
  onResponded,
}: TestFormProps) {
  const { formData, isButtonDisabled, testOptions, onFieldChange, onSubmit } =
    useTestForm(test, isEditing, onResponded);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !isButtonDisabled) {
      onSubmit();
    }
  };

  return (
    <div className={[styles.container, containerClass].join(' ')}>
      <div className={styles.fieldContainer} onKeyDown={handleKeyDown}>
        <DefaultInput
          label="Название"
          placeholder="Введите название"
          value={formData?.name}
          required
          onChange={value => onFieldChange('name', value)}
        />
        <DefaultInput
          label="Код"
          placeholder="Введите код теста"
          value={formData?.code}
          required
          onChange={value => onFieldChange('code', value)}
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
          value={formData?.category}
          required
          onSelect={value => onFieldChange('category', value || '')}
        />

        <SwitchBoxField
          label="Включить тест?"
          onCheck={checked => onFieldChange('active', checked)}
        />
      </div>

      <DefaultButton
        buttonClass={styles.submitButton}
        disabled={isButtonDisabled}
        label={buttonLabel ? buttonLabel : 'Добавить'}
        onClick={onSubmit}
      />
    </div>
  );
}
