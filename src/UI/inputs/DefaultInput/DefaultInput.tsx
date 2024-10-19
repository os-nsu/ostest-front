import { InputText } from 'primereact/inputtext';
import { useInput } from './hooks/useInput.ts';
import styles from '@styles/components/DefaultInput.module.scss';
import DefaultFieldLabel from '@UI/label/DefaultFieldLabel/DefaultFieldLabel.tsx';

interface DefaultInputProps {
  label?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  invalid?: boolean;
  errorLabel?: string;

  onChange?: (value: string) => void;
}

export default function DefaultInput({
  value,
  label,
  placeholder,
  disabled,
  required,
  invalid,
  errorLabel,
  onChange,
}: DefaultInputProps) {
  const { defaultValue, onInput } = useInput(value, onChange);

  return (
    <div className={styles.container}>
      {label ? <DefaultFieldLabel label={label} isRequired={required} /> : null}
      <div className={styles.inputContainer}>
        <InputText
          className={styles.input}
          placeholder={placeholder}
          value={defaultValue}
          onChange={e => onInput(e.target.value)}
          disabled={disabled}
          invalid={invalid}
        />
        {invalid && errorLabel ? (
          <span className={styles.errorLabel}>{errorLabel}</span>
        ) : null}
      </div>
    </div>
  );
}
