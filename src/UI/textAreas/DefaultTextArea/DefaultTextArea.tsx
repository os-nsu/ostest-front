import { InputTextarea } from 'primereact/inputtextarea';
import { useDefaultTextArea } from '@UI/textAreas/DefaultTextArea/hooks/useDefaultTextArea.ts';
import styles from '@styles/components/DefaultTextArea.module.scss';

interface DefaultTextAreaProps {
  value?: string;
  placeholder?: string;
  label?: string;
  autoresize?: boolean;
  required?: boolean;
  style?: React.CSSProperties;

  onChange?: (value: string) => void;
}

export default function DefaultTextArea({
  value,
  label,
  placeholder,
  autoresize,
  required,
  style,
  onChange,
}: DefaultTextAreaProps) {
  const { fieldValue, onInput } = useDefaultTextArea(value, onChange);

  return (
    <div className={styles.container}>
      {label ? (
        <label>
          {label}{' '}
          {required ? <span style={{ color: '#EC4256' }}> * </span> : null}
        </label>
      ) : null}
      <InputTextarea
        className={styles.textarea}
        value={fieldValue}
        placeholder={placeholder}
        autoResize={autoresize}
        style={style}
        onChange={e => onInput(e.target.value)}
      />
    </div>
  );
}
