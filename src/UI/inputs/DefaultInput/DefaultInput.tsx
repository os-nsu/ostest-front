import { InputText } from 'primereact/inputtext';
import { useInput } from './hooks/useInput.ts';
import styles from '@styles/components/DefaultInput.module.scss';

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
      {label ? (
        <label className={styles.title}>
          {label}{' '}
          {required ? <span style={{ color: '#EC4256' }}> * </span> : null}
        </label>
      ) : null}
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
