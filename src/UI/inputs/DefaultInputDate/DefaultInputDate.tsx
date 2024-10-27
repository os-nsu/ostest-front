import DefaultFieldLabel from '@/UI/label/DefaultFieldLabel/DefaultFieldLabel.tsx';
import { useInputDate } from './hooks/useInputDate.ts';
import styles from '@styles/components/DefaultInputDate.module.scss';
import { Calendar } from 'primereact/calendar';

interface DefaultInputDateProps {
  label?: string;
  value?: Date;
  placeholder?: string;
  dateFormat?: string;
  required?: boolean;

  onChange?: (value: Date) => void;
}

export default function DefaultInputDate({
  value,
  label,
  placeholder,
  dateFormat,
  required,
  onChange,
}: DefaultInputDateProps) {
  const { defaultValue, onInputDate } = useInputDate(value, onChange);

  return (
    <div className={styles.container}>
      {label ? <DefaultFieldLabel label={label} isRequired={required} /> : null}
      <div className={styles.inputContainer}>
        <Calendar
          className={styles.input}
          placeholder={placeholder}
          dateFormat={dateFormat}
          value={defaultValue ? new Date(defaultValue) : null}
          onChange={e => onInputDate(e.value as Date)}
        />
      </div>
    </div>
  );
}
